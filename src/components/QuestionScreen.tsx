/**
 * Mulwa Clinical Exam Portal
 * Question Revision Workspace (Single-Choice MCQ and True/False)
 *
 * Implements Section 4.1 UI and logic requirements:
 * - Auto-gradable questions: Single Choice ('mcq') and True/False ('true_false')
 * - Render only keys present in question.options (never assumes four)
 * - True/False: Two large buttons (True & False) side by side (stacked on mobile)
 * - Question type badge: "Single Choice" or "True / False" near question counter
 * - sourceRef: Subtle caption e.g. "From: Section B, Q1 (acute asthma)"
 * - markingPoint: Revealed as chip "Tests: ..." inside rationale box after answer is selected
 * - Feedback: Correct (emerald + check), Wrong (soft red + X), Others muted
 * - Rationale with whitespace: pre-line and bold "TRUE" / "FALSE" verdict for true_false
 * - Zero free-text input or textarea controls
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  ChevronLeft,
  CheckCircle2,
  X,
  Check,
  AlertCircle,
  Sparkles,
  Tag
} from 'lucide-react';
import { Question, AnswerState, QResult, OptionKey } from '../types';
import { scoreQuestion } from '../utils/scoring';
import { resolveQuestionType } from '../utils/questionHelpers';
import { findPaper } from '../data/questions';

interface QuestionScreenProps {
  paperId: string;
  setId: string;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, AnswerState>;
  isBookmarked: boolean;
  onUpdateAnswerState: (qId: string, state: AnswerState) => void;
  onSubmitResult: (qId: string, result: QResult) => void;
  onPrevQuestion: () => void;
  onNextQuestion: () => void;
  onToggleBookmark: () => void;
  onExit: () => void;
}

export default function QuestionScreen({
  paperId,
  setId,
  questions,
  currentQuestionIndex,
  answers,
  isBookmarked,
  onUpdateAnswerState,
  onSubmitResult,
  onPrevQuestion,
  onNextQuestion,
  onToggleBookmark,
  onExit
}: QuestionScreenProps) {
  const currentQuestion = questions[currentQuestionIndex];
  const qState = currentQuestion ? answers[currentQuestion.id] : undefined;

  const isAnswered = qState?.submitted ?? (qState?.selectedOption !== undefined);
  const selectedOption = qState?.selectedOption;
  const progressPercentage = questions.length > 0
    ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100)
    : 0;
  const setNum = parseInt(setId.replace('set', ''), 10) || 1;
  const matchedPaper = findPaper(paperId);
  const explicitSet = matchedPaper?.sets?.find(s => s.setNumber === setNum);
  const setTitle = explicitSet?.title || `Set ${setNum}`;
  const hasPrevious = currentQuestionIndex > 0;
  const isLastQuestion = currentQuestionIndex + 1 === questions.length;

  // Auto-scroll to top whenever question changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (typeof document !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    return () => cancelAnimationFrame(frame);
  }, [currentQuestionIndex]);

  if (!currentQuestion) {
    return (
      <div className="p-8 text-center text-slate-500">
        Question not found.
        <button
          onClick={onExit}
          className="mt-4 px-4 py-2 bg-[#0B1B3D] text-white rounded-lg min-h-[40px] text-xs font-bold"
        >
          Back to Sets
        </button>
      </div>
    );
  }

  const qType = resolveQuestionType(currentQuestion);
  const isTrueFalse = qType === 'true_false';

  // Determine available option keys strictly from question.options
  const availableOptions = (Object.keys(currentQuestion.options || {}) as OptionKey[])
    .filter(k => currentQuestion.options[k] !== undefined && currentQuestion.options[k] !== '')
    .sort();

  const handleSelectOption = (key: OptionKey) => {
    if (isAnswered) return;

    const result = scoreQuestion(currentQuestion, key);
    const newState: AnswerState = {
      type: qType,
      questionType: qType,
      selectedOption: key,
      submitted: true,
      revealed: true,
      confirmed: true,
      result,
      timestamp: new Date().toISOString()
    };

    onUpdateAnswerState(currentQuestion.id, newState);
    onSubmitResult(currentQuestion.id, result);
  };

  const handleNextWithScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (typeof document !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    onNextQuestion();
  };

  const handlePrevWithScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (typeof document !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    onPrevQuestion();
  };

  const isCorrectChoice = selectedOption === currentQuestion.correctAnswer;

  return (
    <div className="space-y-3.5 sm:space-y-4 max-w-2xl mx-auto pb-0" id="active-revision-pane">
      {/* 1. Header Navigation & Set Indicator */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            onClick={onExit}
            className="p-2 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] transition-all rounded-xl active:scale-95 shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 cursor-pointer shadow-2xs"
            id="exit-revision-button"
            title="Exit to Sets"
            aria-label="Exit to revision sets"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          </button>

          {hasPrevious && (
            <button
              onClick={handlePrevWithScroll}
              className="p-2 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] transition-all rounded-xl active:scale-95 shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 cursor-pointer shadow-2xs"
              id="prev-question-header-btn"
              title="Previous Question"
              aria-label="Previous question"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>
          )}

          <div className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-lg">
            Set {currentQuestion.setNumber || 1}
          </div>
        </div>

        {/* Question Counter */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-900">
            <span>{currentQuestionIndex + 1}</span>
            <span className="text-slate-400 font-normal mx-0.5">/</span>
            <span className="text-slate-500 font-medium">{questions.length}</span>
          </div>
        </div>
      </div>

      {/* 2. Linear Progress Bar */}
      <div
        className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="bg-[#0B1B3D] h-full transition-all duration-300 rounded-full motion-reduce:transition-none"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* 3. Question Metadata Bar & Vignette Statement */}
      <div className="space-y-2.5 sm:space-y-3 pt-0.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
            {currentQuestion.sourceRef && (
              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80 truncate">
                {currentQuestion.sourceRef}
              </span>
            )}
          </div>

          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-lg border transition-colors shrink-0 min-h-[34px] min-w-[34px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 cursor-pointer shadow-2xs ${
              isBookmarked
                ? 'border-indigo-600 bg-indigo-50 text-[#0B1B3D]'
                : 'border-slate-200 bg-white text-slate-400 hover:text-slate-600'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-indigo-600 text-indigo-600' : ''}`} />
          </button>
        </div>

        {/* Question Statement / Vignette with increased line height */}
        <h3 className="text-[15px] sm:text-[17px] font-bold text-slate-900 leading-relaxed sm:leading-[1.65] pt-0.5">
          {currentQuestion.text}
        </h3>
      </div>

      {/* 4. Options Interactive Area (Generous spacing above choices) */}
      <div className="mt-3.5 sm:mt-4.5">
        {isTrueFalse ? (
          /* True / False: Large touch buttons */
          <div
            className="grid grid-cols-2 gap-2.5 sm:gap-3"
            role="radiogroup"
            aria-label="True or False selection"
          >
            {(['A', 'B'] as const).map(key => {
              const label = key === 'A' ? 'True' : 'False';
              const isSelected = selectedOption === key;
              const isCorrect = currentQuestion.correctAnswer === key;

              let btnStyle =
                'bg-white border-slate-200 hover:border-[#0B1B3D] hover:bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#0B1B3D]/30 shadow-2xs';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black shadow-xs ring-1 ring-emerald-400';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-black shadow-xs ring-1 ring-rose-400';
                } else {
                  btnStyle = 'bg-slate-50/70 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={key}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(key)}
                  className={`w-full min-h-[48px] px-3.5 py-3 rounded-xl border-2 transition-all flex items-center justify-between gap-2 text-base font-bold cursor-pointer disabled:cursor-default active:scale-[0.99] ${btnStyle}`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black shrink-0 ${
                        isAnswered && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isAnswered && isSelected && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {key}
                    </span>
                    <span className="text-base font-black tracking-tight">{label}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <X className="w-4 h-4 text-rose-600 shrink-0" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          /* MCQ: Single-Choice Option Rows with increased spacing & line-height */
          <div className="space-y-2.5 sm:space-y-3" role="radiogroup" aria-label="Single choice options">
            {availableOptions.map(key => {
              const optionText = currentQuestion.options[key] || '';
              const isSelected = selectedOption === key;
              const isCorrect = currentQuestion.correctAnswer === key;

              let btnStyle =
                'bg-white border-slate-200 hover:border-[#0B1B3D] hover:bg-slate-50 text-slate-800 focus:ring-2 focus:ring-[#0B1B3D]/30 shadow-2xs';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold ring-1 ring-rose-400';
                } else {
                  btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={key}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(key)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 min-h-[48px] cursor-pointer disabled:cursor-default active:scale-[0.99] ${btnStyle}`}
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <span
                      className={`w-5.5 h-5.5 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${
                        isAnswered && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isAnswered && isSelected && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {key}
                    </span>
                    <span className="text-[14px] sm:text-[15px] leading-relaxed sm:leading-[1.6] min-w-0 break-words font-medium text-slate-800">
                      {optionText}
                    </span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-1" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. Clinical Rationale & Explanation Box with increased padding, spacing & line height */}
      {isAnswered && (
        <div
          className="p-3.5 sm:p-4.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl space-y-3 mt-3.5 sm:mt-4.5 animate-fade-in shadow-2xs"
          role="status"
          aria-live="polite"
        >
          {/* Verdict Header */}
          <div className="flex items-center justify-between gap-1.5 flex-wrap">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
              {isCorrectChoice ? (
                <span className="text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                  Correct
                </span>
              ) : (
                <span className="text-rose-700 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 stroke-[3]" />
                  Incorrect (Correct: {isTrueFalse ? (currentQuestion.correctAnswer === 'A' ? 'True' : 'False') : currentQuestion.correctAnswer})
                </span>
              )}
            </div>
          </div>

          {/* For true_false: Verdict Heading */}
          {isTrueFalse && (
            <div className="text-[11px] sm:text-xs font-bold tracking-wide text-slate-900 border-b border-slate-200/80 pb-1.5">
              {currentQuestion.correctAnswer === 'A' ? 'Verdict: True' : 'Verdict: False'}
            </div>
          )}

          {/* Explanation text with enhanced line-height */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Rationale:
            </span>
            <div className="text-[14px] sm:text-[15px] text-slate-800 leading-relaxed sm:leading-[1.7] font-normal whitespace-pre-line">
              {currentQuestion.explanation}
            </div>
          </div>

          {/* Original Exam Wording (if present) */}
          {currentQuestion.originalText && (
            <div className="pt-2 mt-2 border-t border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                Original Exam Wording:
              </span>
              <p className="text-[12px] sm:text-[13px] text-slate-600 italic mt-1 leading-relaxed">
                {currentQuestion.originalText}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 6. Navigation / Submit Controls */}
      <div className="pt-3 border-t border-slate-200/80 mt-3.5 sm:mt-4.5">
        <div className="flex items-center justify-between gap-2.5">
          <div>
            {hasPrevious ? (
              <button
                type="button"
                onClick={handlePrevWithScroll}
                className="px-3.5 py-2.5 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 active:scale-95 transition-all min-h-[44px] cursor-pointer shadow-2xs whitespace-nowrap"
                id="bottom-prev-question-btn"
                aria-label="Previous question"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
            ) : (
              <div />
            )}
          </div>

          <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
            {isAnswered ? (
              <button
                type="button"
                onClick={handleNextWithScroll}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#162f5f] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm min-h-[44px] cursor-pointer whitespace-nowrap"
                id="next-question-btn"
              >
                <span>{isLastQuestion ? 'Results' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 text-slate-400 text-xs sm:text-sm font-medium rounded-xl cursor-not-allowed border border-slate-200 min-h-[44px] whitespace-nowrap text-center"
              >
                Choose an option
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
