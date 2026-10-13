/**
 * Mulwa Clinical Exam Portal
 * Root Application Controller & Practice Engine
 *
 * Coordinates navigation, revision module pacing, answer grading,
 * mistake logging with threshold-based resolution, and session persistence.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomeDashboard from './components/HomeDashboard';
import PastPapersLibrary from './components/PastPapersLibrary';
import RevisionSetSelection from './components/RevisionSetSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import ReviewIncorrectScreen from './components/ReviewIncorrectScreen';

import {
  SessionProgress,
  InProgressSetState,
  AnswerState,
  QResult,
  IncorrectQuestionRecord
} from './types';
import {
  loadProgress,
  saveProgress,
  debouncedSaveProgress,
  resetProgress,
  makeSetKey,
  INITIAL_SESSION
} from './utils/storage';
import { getQuestionsForSet, PAST_PAPERS, findPaper, getRevisionSetsForPaper } from './data/questions';
import { getQuestionMarks, chunkQuestions } from './utils/chunking';
import { MISTAKE_THRESHOLD, RESOLVE_THRESHOLD } from './config/constants';

export default function App() {
  // Navigation Routing States
  const [activeTab, setActiveTab] = useState<'home' | 'papers' | 'review'>('home');
  const [view, setView] = useState<'tabs' | 'sets_selection' | 'active_exam' | 'results'>('tabs');

  // Active Context Identifiers
  const [selectedPaperId, setSelectedPaperId] = useState<string>(
    PAST_PAPERS[0]?.id || ''
  );
  const [selectedSetId, setSelectedSetId] = useState<string>('set1');

  // Active Examination Session States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [activeAnswers, setActiveAnswers] = useState<Record<string, AnswerState>>({});
  const [examStartTime, setExamStartTime] = useState<number>(0);
  const [examDurationSeconds, setExamDurationSeconds] = useState<number>(0);
  const [latestEarnedMarks, setLatestEarnedMarks] = useState<number>(0);
  const [latestMaxMarks, setLatestMaxMarks] = useState<number>(0);

  // Session Progress (Browser sessionStorage)
  const [progress, setProgress] = useState<SessionProgress>(INITIAL_SESSION);

  // Mount hook: load saved session progress
  useEffect(() => {
    const loaded = loadProgress();
    setProgress(loaded);
  }, []);

  const handleTabNavigation = (tab: 'home' | 'papers' | 'review') => {
    setActiveTab(tab);
    setView('tabs');
  };

  const handleSelectPaper = (paperId: string) => {
    setSelectedPaperId(paperId);
    setView('sets_selection');
  };

  const handleSelectSet = (paperId: string, setId: string) => {
    const resolvedPaper = findPaper(paperId);
    const resolvedPaperId = resolvedPaper ? resolvedPaper.id : paperId;

    setSelectedPaperId(resolvedPaperId);
    setSelectedSetId(setId);

    const combinedSetId = makeSetKey(resolvedPaperId, setId);
    const savedState = progress.inProgressSets[combinedSetId];

    if (savedState) {
      setCurrentQuestionIndex(savedState.currentQuestionIndex || 0);
      setActiveAnswers(savedState.answers || {});
    } else {
      setCurrentQuestionIndex(0);
      setActiveAnswers({});

      const initialProgress: InProgressSetState = {
        currentQuestionIndex: 0,
        answers: {},
        timestamp: new Date().toISOString()
      };

      setProgress(prev => {
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: initialProgress
          }
        };
        saveProgress(updated);
        return updated;
      });
    }

    setExamStartTime(Date.now());
    setView('active_exam');
  };

  /**
   * Updates answer state (typing, selections, pre-ticks) with debounced persistence.
   */
  const handleUpdateAnswerState = (qId: string, newState: AnswerState) => {
    const newAnswers = { ...activeAnswers, [qId]: newState };
    setActiveAnswers(newAnswers);

    const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
    setProgress(prev => {
      const updated = {
        ...prev,
        inProgressSets: {
          ...prev.inProgressSets,
          [combinedSetId]: {
            currentQuestionIndex,
            answers: newAnswers,
            timestamp: new Date().toISOString()
          }
        }
      };
      debouncedSaveProgress(updated);
      return updated;
    });
  };

  /**
   * Evaluates scored result and synchronizes mistake queue.
   */
  const handleSubmitResult = (qId: string, result: QResult) => {
    const ratio = result.max > 0 ? result.earned / result.max : 0;
    const questions = getQuestionsForSet(selectedPaperId, selectedSetId);
    const q = questions.find(item => item.id === qId);
    const qType = q?.type || 'mcq';

    setProgress(prev => {
      let updatedIncorrect = [...prev.incorrectQuestions];

      if (ratio < MISTAKE_THRESHOLD) {
        // Below mistake threshold -> Log to mistake queue
        const existingIdx = updatedIncorrect.findIndex(r => r.questionId === qId);
        const record: IncorrectQuestionRecord = {
          id: existingIdx >= 0 ? updatedIncorrect[existingIdx].id : `mistake_${Date.now()}_${qId}`,
          questionId: qId,
          paperId: selectedPaperId,
          setId: selectedSetId,
          type: qType,
          earned: result.earned,
          max: result.max,
          summary: `${Math.round(ratio * 100)}% on attempt`,
          timestamp: new Date().toISOString()
        };

        if (existingIdx >= 0) {
          updatedIncorrect[existingIdx] = record;
        } else {
          updatedIncorrect.push(record);
        }
      } else if (ratio >= RESOLVE_THRESHOLD) {
        // Above resolution threshold -> Remove from mistake queue
        updatedIncorrect = updatedIncorrect.filter(r => r.questionId !== qId);
      }

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      const updated = {
        ...prev,
        inProgressSets: {
          ...prev.inProgressSets,
          [combinedSetId]: {
            currentQuestionIndex,
            answers: { ...activeAnswers, [qId]: { ...activeAnswers[qId], result, revealed: true, confirmed: true } },
            timestamp: new Date().toISOString()
          }
        },
        incorrectQuestions: updatedIncorrect
      };

      saveProgress(updated);
      return updated;
    });
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIdx = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIdx);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      setProgress(prev => {
        const currentSaved = prev.inProgressSets[combinedSetId];
        if (!currentSaved) return prev;
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: {
              ...currentSaved,
              currentQuestionIndex: prevIdx,
              timestamp: new Date().toISOString()
            }
          }
        };
        saveProgress(updated);
        return updated;
      });
    }
  };

  const handleNextQuestion = () => {
    const questions = getQuestionsForSet(selectedPaperId, selectedSetId);

    if (currentQuestionIndex + 1 < questions.length) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      setProgress(prev => {
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: {
              currentQuestionIndex: nextIndex,
              answers: activeAnswers,
              timestamp: new Date().toISOString()
            }
          }
        };
        saveProgress(updated);
        return updated;
      });
    } else {
      // Finalize set score
      let totalEarned = 0;
      let totalMax = 0;

      questions.forEach(q => {
        const ans = activeAnswers[q.id];
        const qMax = getQuestionMarks(q);
        totalMax += qMax;

        if (ans && ans.result) {
          totalEarned += ans.result.earned;
        } else if (ans && ans.selectedOption === q.correctAnswer) {
          totalEarned += qMax;
        }
      });

      const elapsedSeconds = Math.max(1, Math.round((Date.now() - examStartTime) / 1000));
      setLatestEarnedMarks(totalEarned);
      setLatestMaxMarks(totalMax);
      setExamDurationSeconds(elapsedSeconds);

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);

      setProgress(prev => {
        const updatedInProgress = { ...prev.inProgressSets };
        delete updatedInProgress[combinedSetId];

        const updated = {
          ...prev,
          completedSets: {
            ...prev.completedSets,
            [combinedSetId]: {
              score: Math.round(totalEarned * 100) / 100,
              maxScore: Math.round(totalMax * 100) / 100,
              date: new Date().toISOString()
            }
          },
          inProgressSets: updatedInProgress
        };

        saveProgress(updated);
        return updated;
      });

      setView('results');
    }
  };

  const handleToggleBookmark = (questionId: string) => {
    setProgress(prev => {
      const isBookmarked = prev.bookmarkedQuestions.includes(questionId);
      const updatedBookmarks = isBookmarked
        ? prev.bookmarkedQuestions.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId];

      const updated = {
        ...prev,
        bookmarkedQuestions: updatedBookmarks
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleRemoveMistakeRecord = (recordId: string) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        incorrectQuestions: prev.incorrectQuestions.filter(r => r.id !== recordId)
      };
      saveProgress(updated);
      return updated;
    });
  };

  const handleClearProgress = () => {
    const cleanSession = resetProgress();
    setProgress(cleanSession);
  };

  const handleRetrySet = () => {
    const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);

    setProgress(prev => {
      const updatedCompleted = { ...prev.completedSets };
      delete updatedCompleted[combinedSetId];

      const updatedInProgress = { ...prev.inProgressSets };
      delete updatedInProgress[combinedSetId];

      const updated = {
        ...prev,
        completedSets: updatedCompleted,
        inProgressSets: updatedInProgress
      };
      saveProgress(updated);
      return updated;
    });

    handleSelectSet(selectedPaperId, selectedSetId);
  };

  const handleNextSet = () => {
    const currentPaper = findPaper(selectedPaperId);
    if (!currentPaper) {
      setActiveTab('papers');
      setView('tabs');
      return;
    }

    const allSets = chunkQuestions(currentPaper);
    const currentIdx = allSets.findIndex(s => s.id === selectedSetId);

    if (currentIdx >= 0 && currentIdx + 1 < allSets.length) {
      const nextSet = allSets[currentIdx + 1];
      handleSelectSet(selectedPaperId, nextSet.id);
    } else {
      setActiveTab('papers');
      setView('tabs');
    }
  };

  const currentQuestions = getQuestionsForSet(selectedPaperId, selectedSetId);
  const activeQuestion = currentQuestions[currentQuestionIndex];
  const isCurrentBookmarked = activeQuestion
    ? progress.bookmarkedQuestions.includes(activeQuestion.id)
    : false;
  const currentPaper = findPaper(selectedPaperId);
  const currentSets = currentPaper ? chunkQuestions(currentPaper) : [];
  const currentSet = currentSets.find(s => s.id === selectedSetId) || {
    id: selectedSetId,
    setNumber: 1,
    name: 'Set 1',
    section: 'A',
    questionsRange: `Questions 1 – ${currentQuestions.length}`,
    startNum: 1,
    endNum: currentQuestions.length,
    questions: currentQuestions,
    totalMarks: latestMaxMarks
  };
  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={handleTabNavigation}
      hideBottomNav={view === 'active_exam'}
    >
      {/* Tabbed Views */}
      {view === 'tabs' && (
        <>
          {activeTab === 'home' && (
            <HomeDashboard
              progress={progress}
              onNavigate={handleTabNavigation}
              onContinueSet={handleSelectSet}
              onClearProgress={handleClearProgress}
            />
          )}

          {activeTab === 'papers' && (
            <PastPapersLibrary
              progress={progress}
              onSelectPaper={handleSelectPaper}
              onBack={() => handleTabNavigation('home')}
            />
          )}

          {activeTab === 'review' && (
            <ReviewIncorrectScreen
              progress={progress}
              onBack={() => handleTabNavigation('home')}
              onRemoveRecord={handleRemoveMistakeRecord}
            />
          )}
        </>
      )}

      {/* Revision Set Selection View */}
      {view === 'sets_selection' && (
        <RevisionSetSelection
          paperId={selectedPaperId}
          progress={progress}
          onSelectSet={handleSelectSet}
          onBack={() => {
            setActiveTab('papers');
            setView('tabs');
          }}
        />
      )}

      {/* Active Examination View */}
      {view === 'active_exam' && (
        <QuestionScreen
          paperId={selectedPaperId}
          setId={selectedSetId}
          questions={currentQuestions}
          currentQuestionIndex={currentQuestionIndex}
          answers={activeAnswers}
          isBookmarked={isCurrentBookmarked}
          onUpdateAnswerState={handleUpdateAnswerState}
          onSubmitResult={handleSubmitResult}
          onPrevQuestion={handlePrevQuestion}
          onNextQuestion={handleNextQuestion}
          onToggleBookmark={() => activeQuestion && handleToggleBookmark(activeQuestion.id)}
          onExit={() => setView('sets_selection')}
        />
      )}

      {/* Results View */}
      {view === 'results' && currentPaper && (
        <ResultsScreen
          score={latestEarnedMarks}
          maxScore={latestMaxMarks}
          timeTakenSeconds={examDurationSeconds}
          paper={currentPaper}
          set={currentSet}
          answers={activeAnswers}
          onReviewIncorrect={() => {
            setActiveTab('review');
            setView('tabs');
          }}
          onRetry={handleRetrySet}
          onNextSet={handleNextSet}
          onGoToHome={() => {
            setActiveTab('home');
            setView('tabs');
          }}
        />
      )}
    </Layout>
  );
}
