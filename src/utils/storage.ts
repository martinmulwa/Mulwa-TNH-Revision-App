/**
 * Mulwa Clinical Exam Portal
 * Session Storage & State Persistence Layer (Schema v3)
 *
 * Provides schema migration, ephemeral sessionStorage management,
 * immediate selection persistence, and marks-based metric aggregation.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 3.0.0
 */

import {
  SessionProgress,
  InProgressSetState,
  IncorrectQuestionRecord,
  AnswerState,
  ActivityLog,
  PastPaper,
  RevisionSet
} from '../types';
import { findPaper, getQuestionsForSet, PAST_PAPERS, getRevisionSetsForPaper } from '../data/questions';
import { getQuestionMarks } from './chunking';

const CURRENT_SCHEMA_VERSION = 3;
const SESSION_STORAGE_KEY = 'mulwa_clinical_portal_session_progress';

export const INITIAL_SESSION: SessionProgress = {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  completedSets: {},
  inProgressSets: {},
  bookmarkedQuestions: [],
  incorrectQuestions: []
};

/**
 * Generates composite key for paper + set (e.g. "krn-block1-sept2024-respiratory-disorders___set1").
 */
export function makeSetKey(paperId: string, setId: string): string {
  return `${paperId}___${setId}`;
}

/**
 * Parses composite key into constituent paper ID and set ID.
 */
export function parseSetKey(key: string): { paperId: string; setId: string } {
  if (key.includes('___')) {
    const [pId, sId] = key.split('___');
    return { paperId: pId, setId: sId };
  }

  const lastHyphenIndex = key.lastIndexOf('-set');
  if (lastHyphenIndex !== -1) {
    return {
      paperId: key.substring(0, lastHyphenIndex),
      setId: key.substring(lastHyphenIndex + 1)
    };
  }

  const lastDash = key.lastIndexOf('-');
  if (lastDash !== -1) {
    return {
      paperId: key.substring(0, lastDash),
      setId: key.substring(lastDash + 1)
    };
  }

  return { paperId: key, setId: 'set1' };
}

/**
 * Migrates legacy session data to v3 AnswerState representations.
 * Never throws on malformed keys or data; discards corrupted values safely.
 */
export function migrateSessionData(raw: unknown): SessionProgress {
  if (!raw || typeof raw !== 'object') {
    return INITIAL_SESSION;
  }

  const data = raw as Record<string, unknown>;

  const migratedInProgress: Record<string, InProgressSetState> = {};
  const inProgressRaw = data.inProgressSets && typeof data.inProgressSets === 'object'
    ? (data.inProgressSets as Record<string, unknown>)
    : {};

  Object.entries(inProgressRaw).forEach(([comboKey, rawState]) => {
    try {
      if (!rawState || typeof rawState !== 'object') return;
      const stateObj = rawState as Record<string, unknown>;
      const currentQuestionIndex = typeof stateObj.currentQuestionIndex === 'number'
        ? stateObj.currentQuestionIndex
        : 0;
      const timestamp = typeof stateObj.timestamp === 'string'
        ? stateObj.timestamp
        : new Date().toISOString();

      const answersRaw = stateObj.answers && typeof stateObj.answers === 'object'
        ? (stateObj.answers as Record<string, unknown>)
        : {};
      const migratedAnswers: Record<string, AnswerState> = {};

      Object.entries(answersRaw).forEach(([qId, ansVal]) => {
        try {
          if (typeof ansVal === 'string') {
            // v1 legacy MCQ string choice ('A' | 'B' | 'C' | 'D')
            if (['A', 'B', 'C', 'D'].includes(ansVal)) {
              migratedAnswers[qId] = {
                type: 'mcq',
                selectedOption: ansVal as 'A' | 'B' | 'C' | 'D',
                submitted: true
              };
            }
          } else if (ansVal && typeof ansVal === 'object' && 'type' in ansVal) {
            migratedAnswers[qId] = ansVal as AnswerState;
          }
        } catch {
          // Discard single malformed answer key
        }
      });

      migratedInProgress[comboKey] = {
        currentQuestionIndex,
        answers: migratedAnswers,
        timestamp
      };
    } catch {
      // Discard single malformed in-progress set
    }
  });

  const migratedCompleted: Record<string, { score: number; maxScore?: number; date: string }> = {};
  const completedRaw = data.completedSets && typeof data.completedSets === 'object'
    ? (data.completedSets as Record<string, unknown>)
    : {};

  Object.entries(completedRaw).forEach(([comboKey, compVal]) => {
    try {
      if (!compVal || typeof compVal !== 'object') return;
      const c = compVal as Record<string, unknown>;
      const score = typeof c.score === 'number' ? c.score : 0;
      const maxScore = typeof c.maxScore === 'number' ? c.maxScore : undefined;
      const date = typeof c.date === 'string' ? c.date : new Date().toISOString();
      migratedCompleted[comboKey] = { score, maxScore, date };
    } catch {
      // Discard malformed entry
    }
  });

  const migratedMistakes: IncorrectQuestionRecord[] = [];
  if (Array.isArray(data.incorrectQuestions)) {
    data.incorrectQuestions.forEach(item => {
      try {
        if (!item || typeof item !== 'object') return;
        const rec = item as Record<string, unknown>;
        const qId = typeof rec.questionId === 'string' ? rec.questionId : '';
        if (!qId) return;

        const id = typeof rec.id === 'string' ? rec.id : `mistake_${qId}`;
        const paperId = typeof rec.paperId === 'string' ? rec.paperId : 'unknown';
        const setId = typeof rec.setId === 'string' ? rec.setId : 'set1';
        const type = typeof rec.type === 'string' ? (rec.type as any) : 'mcq';
        const earned = typeof rec.earned === 'number' ? rec.earned : 0;
        const max = typeof rec.max === 'number' ? rec.max : 1;
        const timestamp = typeof rec.timestamp === 'string' ? rec.timestamp : new Date().toISOString();
        const selectedAnswer = typeof rec.selectedAnswer === 'string' ? rec.selectedAnswer : undefined;

        migratedMistakes.push({
          id,
          questionId: qId,
          paperId,
          setId,
          type,
          earned,
          max,
          timestamp,
          selectedAnswer
        });
      } catch {
        // Discard malformed mistake item
      }
    });
  }

  const bookmarkedQuestions = Array.isArray(data.bookmarkedQuestions)
    ? data.bookmarkedQuestions.filter(x => typeof x === 'string')
    : [];

  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    completedSets: migratedCompleted,
    inProgressSets: migratedInProgress,
    bookmarkedQuestions,
    incorrectQuestions: migratedMistakes
  };
}

/**
 * Loads session progress from `window.sessionStorage`.
 */
export function loadProgress(): SessionProgress {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const data = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return migrateSessionData(parsed);
      }
    }
  } catch (err) {
    console.error('Session progress load error:', err);
  }
  return INITIAL_SESSION;
}

/**
 * Persists session progress to `window.sessionStorage`.
 */
export function saveProgress(progress: SessionProgress): void {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify({ ...progress, schemaVersion: CURRENT_SCHEMA_VERSION })
      );
    }
  } catch (err) {
    console.error('Session progress save error:', err);
  }
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

/**
 * Debounced persistence for frequent inputs (e.g. typing or reordering).
 */
export function debouncedSaveProgress(progress: SessionProgress, delayMs = 300): void {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    saveProgress(progress);
    debounceTimer = null;
  }, delayMs);
}

/**
 * Resets all session progress.
 */
export function resetProgress(): SessionProgress {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  } catch (err) {
    console.error('Session progress reset error:', err);
  }
  return { ...INITIAL_SESSION };
}

/**
 * Aggregates overall performance metrics for HomeDashboard and stats cards.
 */
export function getMetrics(progress: SessionProgress) {
  let questionsAnswered = 0;
  let marksEarned = 0;
  let marksPossible = 0;

  // Completed sets
  Object.entries(progress.completedSets || {}).forEach(([key, data]) => {
    const { paperId, setId } = parseSetKey(key);
    // If set is currently actively being retaken in inProgressSets, count active instead
    if (progress.inProgressSets && progress.inProgressSets[key]) {
      return;
    }
    const questions = getQuestionsForSet(paperId, setId);
    const setMax = data.maxScore !== undefined && data.maxScore > 0
      ? data.maxScore
      : questions.reduce((sum, q) => sum + getQuestionMarks(q), 0);

    questionsAnswered += questions.length;
    marksEarned += (data.score || 0);
    marksPossible += (setMax || questions.length);
  });

  // In-progress sets
  Object.entries(progress.inProgressSets || {}).forEach(([key, state]) => {
    const { paperId, setId } = parseSetKey(key);
    const questions = getQuestionsForSet(paperId, setId);
    const answeredCount = Object.keys(state.answers || {}).length;
    questionsAnswered += answeredCount;

    Object.entries(state.answers || {}).forEach(([qId, ansState]) => {
      const q = questions.find(item => item.id === qId);
      const qMax = q ? getQuestionMarks(q) : 1;
      marksPossible += qMax;

      if (ansState && ansState.result) {
        marksEarned += ansState.result.earned;
      } else if (ansState && ansState.type === 'mcq' && q && q.type === 'mcq' && ansState.selectedOption === q.correctAnswer) {
        marksEarned += qMax;
      }
    });
  });

  const accuracy = marksPossible > 0
    ? Math.round((marksEarned / marksPossible) * 100)
    : 0;

  const setsCompletedCount = Object.keys(progress.completedSets || {}).length;

  return {
    questionsAnswered,
    marksEarned: Math.round(marksEarned * 100) / 100,
    marksPossible: Math.round(marksPossible * 100) / 100,
    correctAnswers: Math.round(marksEarned),
    accuracy,
    setsCompletedCount
  };
}

export interface PaperMetrics {
  papersAttempted: number;
  papersCompleted: number;
  averageAccuracy: number;
}

/**
 * Aggregates paper-level performance metrics for individual exam papers:
 * - papers attempted (at least one question answered or set completed in the paper)
 * - papers completed (all sets of the paper completed)
 * - average accuracy across individual attempted papers
 */
export function getPaperMetrics(progress: SessionProgress): PaperMetrics {
  let papersAttempted = 0;
  let papersCompleted = 0;
  const paperAccuracies: number[] = [];

  PAST_PAPERS.forEach(paper => {
    const sets = getRevisionSetsForPaper(paper.id);
    const totalSets = sets.length || paper.totalSets || (paper.sets?.length ?? 1);

    let paperEarned = 0;
    let paperPossible = 0;
    let paperAnsweredQuestions = 0;
    let completedSetsCount = 0;

    // Completed sets for this paper
    Object.entries(progress.completedSets || {}).forEach(([key, data]) => {
      const { paperId, setId } = parseSetKey(key);
      if (paperId === paper.id) {
        completedSetsCount++;
        if (progress.inProgressSets && progress.inProgressSets[key]) {
          return;
        }
        const questions = getQuestionsForSet(paperId, setId);
        const setMax = data.maxScore !== undefined && data.maxScore > 0
          ? data.maxScore
          : questions.reduce((sum, q) => sum + getQuestionMarks(q), 0);

        paperAnsweredQuestions += questions.length;
        paperEarned += (data.score || 0);
        paperPossible += (setMax || questions.length);
      }
    });

    // In-progress sets for this paper
    Object.entries(progress.inProgressSets || {}).forEach(([key, state]) => {
      const { paperId, setId } = parseSetKey(key);
      if (paperId === paper.id) {
        const questions = getQuestionsForSet(paperId, setId);
        const answeredCount = Object.keys(state.answers || {}).length;
        paperAnsweredQuestions += answeredCount;

        Object.entries(state.answers || {}).forEach(([qId, ansState]) => {
          const q = questions.find(item => item.id === qId);
          const qMax = q ? getQuestionMarks(q) : 1;
          paperPossible += qMax;

          if (ansState && ansState.result) {
            paperEarned += ansState.result.earned;
          } else if (ansState && ansState.type === 'mcq' && q && q.type === 'mcq' && ansState.selectedOption === q.correctAnswer) {
            paperEarned += qMax;
          }
        });
      }
    });

    const isAttempted = paperAnsweredQuestions > 0 || completedSetsCount > 0;
    const isCompleted = totalSets > 0 && completedSetsCount >= totalSets;

    if (isAttempted) {
      papersAttempted++;
      const paperAcc = paperPossible > 0 ? (paperEarned / paperPossible) * 100 : 0;
      paperAccuracies.push(paperAcc);
    }

    if (isCompleted) {
      papersCompleted++;
    }
  });

  const averageAccuracy = paperAccuracies.length > 0
    ? Math.round(paperAccuracies.reduce((sum, acc) => sum + acc, 0) / paperAccuracies.length)
    : 0;

  return {
    papersAttempted,
    papersCompleted,
    averageAccuracy
  };
}

/**
 * Builds chronological activity log for dashboard.
 */
export function getActivityLog(progress: SessionProgress): ActivityLog[] {
  const logs: ActivityLog[] = [];

  // Completed sets
  Object.entries(progress.completedSets || {}).forEach(([id, data]) => {
    const { paperId, setId } = parseSetKey(id);
    const paper = findPaper(paperId);
    const paperTitle = paper ? (paper.year ? `${paper.year} · ${paper.title}` : paper.title) : 'Clinical Exam';
    const questions = getQuestionsForSet(paperId, setId);
    const maxScore = data.maxScore ?? questions.reduce((acc, q) => acc + getQuestionMarks(q), 0);
    const scorePct = maxScore > 0 ? Math.round(((data.score || 0) / maxScore) * 100) : 0;
    const setNum = parseInt(setId.replace('set', ''), 10) || 1;

    logs.push({
      id: `log-comp-${id}`,
      paperId: paper ? paper.id : paperId,
      setId,
      paperTitle,
      setName: `Set ${setNum}`,
      scoreText: `${data.score}/${maxScore} pts (${scorePct}%)`,
      timestamp: data.date ? new Date(data.date).toLocaleDateString() : 'Completed'
    });
  });

  // In-progress sets
  Object.entries(progress.inProgressSets || {}).forEach(([id, state]) => {
    const { paperId, setId } = parseSetKey(id);
    const paper = findPaper(paperId);
    const paperTitle = paper ? (paper.year ? `${paper.year} · ${paper.title}` : paper.title) : 'Clinical Exam';
    const questions = getQuestionsForSet(paperId, setId);
    const totalCount = questions.length;
    const answeredCount = Object.keys(state.answers || {}).length;
    const pct = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
    const setNum = parseInt(setId.replace('set', ''), 10) || 1;

    logs.push({
      id: `log-ip-${id}`,
      paperId: paper ? paper.id : paperId,
      setId,
      paperTitle,
      setName: `Set ${setNum}`,
      scoreText: `${answeredCount}/${totalCount} answered (${pct}%)`,
      timestamp: 'In Progress'
    });
  });

  return logs;
}

/**
 * Copies a student's answers for a set to clipboard formatted cleanly as plain text.
 */
export async function copyAnswersToClipboard(
  paper: PastPaper,
  set: RevisionSet,
  answers: Record<string, AnswerState>
): Promise<boolean> {
  try {
    const lines: string[] = [
      `=== ${paper.title} (${paper.year}) ===`,
      `=== ${set.name} ===`,
      `Date: ${new Date().toLocaleString()}`,
      ''
    ];

    set.questions.forEach((q, idx) => {
      const ans = answers[q.id];
      const res = ans?.result;
      const earned = res?.earned ?? 0;
      const max = res?.max ?? getQuestionMarks(q);

      const qTypeName = q.questionType === 'true_false' ? 'True/False' : 'Single Choice';
      lines.push(`Q${idx + 1} [${qTypeName}] (${earned.toFixed(0)}/${max.toFixed(0)} marks): ${q.text}`);

      if (!ans || !ans.selectedOption) {
        lines.push('  Status: Unanswered');
      } else {
        const chosenText = q.options[ans.selectedOption] || ans.selectedOption;
        lines.push(`  Selected: Option ${ans.selectedOption} - ${chosenText}`);
        lines.push(`  Correct: Option ${q.correctAnswer} - ${q.options[q.correctAnswer]}`);
        lines.push(`  Result: ${earned >= max ? 'Correct' : 'Incorrect'}`);
      }
      lines.push('');
    });

    const fullText = lines.join('\n');
    await navigator.clipboard.writeText(fullText);
    return true;
  } catch (err) {
    console.error('Failed to copy answers to clipboard', err);
    return false;
  }
}
