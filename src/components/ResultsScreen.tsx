/**
 * Mulwa Clinical Exam Portal
 * Revision Set Results & Performance Review Screen
 *
 * Implements Section 4.3 requirements:
 * - Marks-based scorecard, Distinction/Credit/Needs Review academic bands
 * - Score by source breakdown (Original Questions vs. Derived SAQ/LAQ Questions)
 * - Question-by-question review with question-type badges and sourceRef
 * - Retake set, Review incorrect, Next set, and plain-text clipboard answer export
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import React, { useState } from 'react';
import {
  Award,
  Clock,
  ArrowRight,
  RotateCcw,
  Home,
  AlertCircle,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Tag
} from 'lucide-react';
import { PastPaper, RevisionSet, AnswerState, QuestionType } from '../types';
import { copyAnswersToClipboard } from '../utils/storage';
import { getQuestionMarks } from '../utils/chunking';
import { SCORE_BANDS } from '../config/constants';
import { resolveQuestionType } from '../utils/questionHelpers';

interface ResultsScreenProps {
  score: number;
  maxScore: number;
  timeTakenSeconds: number;
  paper: PastPaper;
  set: RevisionSet;
  answers: Record<string, AnswerState>;
  onReviewIncorrect: () => void;
  onRetry: () => void;
  onNextSet: () => void;
  onGoToHome: () => void;
}

export default function ResultsScreen({
  score,
  maxScore,
  timeTakenSeconds,
  paper,
  set,
  answers,
  onReviewIncorrect,
  onRetry,
  onNextSet,
  onGoToHome
}: ResultsScreenProps) {
  const [copied, setCopied] = useState(false);
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const safeMax = maxScore > 0 ? maxScore : 1;
  const accuracy = Math.round((score / safeMax) * 100);

  // Time format
  const mins = Math.floor(timeTakenSeconds / 60);
  const secs = timeTakenSeconds % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  // Score by source calculation (original vs. derived)
  const sourceScores = {
    original: { earned: 0, max: 0, count: 0 },
    derived: { earned: 0, max: 0, count: 0 }
  };

  let hasAnySourceType = false;
  let mistakeCount = 0;

  set.questions.forEach(q => {
    const qMarks = getQuestionMarks(q);
    const ans = answers[q.id];
    const earned = ans?.result ? ans.result.earned : 0;
    const max = ans?.result ? ans.result.max : qMarks;

    if (q.sourceType) {
      hasAnySourceType = true;
      if (q.sourceType.startsWith('original')) {
        sourceScores.original.earned += earned;
        sourceScores.original.max += max;
        sourceScores.original.count += 1;
      } else if (q.sourceType.startsWith('derived')) {
        sourceScores.derived.earned += earned;
        sourceScores.derived.max += max;
        sourceScores.derived.count += 1;
      }
    }

    if (earned < max) {
      mistakeCount++;
    }
  });

  const handleCopy = async () => {
    const success = await copyAnswersToClipboard(paper, set, answers);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const getBand = (acc: number) => {
    if (acc >= SCORE_BANDS.DISTINCTION) {
      return { title: 'Distinction', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    }
    if (acc >= SCORE_BANDS.CREDIT) {
      return { title: 'Credit', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
    }
    return { title: 'Needs Review', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const band = getBand(accuracy);

  return (
    <div className="space-y-6 max-w-xl mx-auto py-2" id="screen-results">
      {/* 1. Header Performance Icon & Band */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-indigo-50 text-[#0B1B3D] border border-indigo-100 flex items-center justify-center mx-auto rounded-xl">
          <Award className="w-6 h-6" strokeWidth={2.5} />
        </div>

        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${band.color}`}>
            {band.title}
          </span>
          <h2 className="text-sm font-extrabold text-slate-500 uppercase tracking-widest mt-1">
            {set.name}
          </h2>
          <p className="text-xs font-bold text-slate-400 mt-0.5">
            {paper.title}
          </p>
        </div>
      </div>

      {/* 2. Primary Scoreboard Card */}
      <div className="bg-[#0B1B3D] text-white p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 shadow-sm">
        <div className="flex items-baseline justify-center gap-1.5">
          <span className="text-5xl sm:text-6xl font-black tracking-tight" id="score-percentage-value">
            {accuracy}%
          </span>
        </div>

        <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
          {score.toFixed(0)} of {maxScore.toFixed(0)} Questions Correct
        </p>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 pt-1 border-t border-white/10 w-full justify-center">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-300" />
            <span>Time: {timeStr}</span>
          </div>
          <span>•</span>
          <div>
            <span>{set.questions.length} Items</span>
          </div>
        </div>
      </div>

      {/* 3. Section 4.3: Score by Source Breakdown (Original vs. Derived) */}
      {hasAnySourceType && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>Score by Source</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Original Questions Score */}
            {sourceScores.original.count > 0 && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">
                  Original Exam Questions
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    {sourceScores.original.earned.toFixed(0)} / {sourceScores.original.max.toFixed(0)} correct
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {sourceScores.original.max > 0
                      ? Math.round((sourceScores.original.earned / sourceScores.original.max) * 100)
                      : 0}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-[#0B1B3D] h-full rounded-full"
                    style={{
                      width: `${sourceScores.original.max > 0 ? (sourceScores.original.earned / sourceScores.original.max) * 100 : 0}%`
                    }}
                  />
                </div>
              </div>
            )}

            {/* Derived Questions Score */}
            {sourceScores.derived.count > 0 && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="text-[10px] font-bold uppercase text-indigo-600 block tracking-wider">
                  Derived SAQ / LAQ Questions
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    {sourceScores.derived.earned.toFixed(0)} / {sourceScores.derived.max.toFixed(0)} correct
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {sourceScores.derived.max > 0
                      ? Math.round((sourceScores.derived.earned / sourceScores.derived.max) * 100)
                      : 0}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-indigo-600 h-full rounded-full"
                    style={{
                      width: `${sourceScores.derived.max > 0 ? (sourceScores.derived.earned / sourceScores.derived.max) * 100 : 0}%`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Action Buttons Bar */}
      <div className="space-y-3">
        {mistakeCount > 0 && (
          <button
            onClick={onReviewIncorrect}
            className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100/80 border border-rose-200 text-rose-800 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.99] min-h-[42px] cursor-pointer"
            id="review-incorrect-btn"
          >
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Review Mistakes ({mistakeCount})</span>
          </button>
        )}

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={onGoToHome}
            className="p-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl flex items-center justify-center transition-all active:scale-95 min-h-[44px] cursor-pointer"
            title="Dashboard"
            aria-label="Back to dashboard"
          >
            <Home className="w-5 h-5 text-slate-600" />
          </button>

          <button
            onClick={onRetry}
            className="p-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl flex items-center justify-center transition-all active:scale-95 min-h-[44px] cursor-pointer"
            title="Retake Set"
            aria-label="Retake this set"
          >
            <RotateCcw className="w-5 h-5 text-slate-600" />
          </button>

          <button
            onClick={handleCopy}
            className="p-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl flex items-center justify-center transition-all active:scale-95 min-h-[44px] cursor-pointer"
            title="Copy My Answers"
            aria-label="Copy my answers to clipboard"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-slate-600" />}
          </button>

          <button
            onClick={onNextSet}
            className="p-3 bg-[#0B1B3D] hover:bg-[#162f5f] text-white rounded-xl flex items-center justify-center transition-all active:scale-95 min-h-[44px] cursor-pointer"
            title="Next Set"
            aria-label="Advance to next set"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {copied && (
          <p className="text-center text-xs font-bold text-emerald-700 animate-fade-in">
            Answers copied to clipboard as plain text!
          </p>
        )}
      </div>

      {/* 5. Section 4.3: Expandable Question-by-Question Review List */}
      <div className="space-y-3.5 pt-4 border-t border-slate-200">
        <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700">
          Question-by-Question Review ({set.questions.length})
        </h3>

        <div className="border border-slate-200/90 divide-y divide-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs">
          {set.questions.map((q, idx) => {
            const qType: QuestionType = resolveQuestionType(q);
            const isTrueFalse = qType === 'true_false';
            const ans = answers[q.id];
            const earned = ans?.result ? ans.result.earned : 0;
            const max = ans?.result ? ans.result.max : getQuestionMarks(q);
            const isCorrect = earned === max;
            const isExpanded = expandedQuestionId === q.id;

            return (
              <div key={q.id} className="transition-colors">
                <div
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="p-3.5 sm:p-4 cursor-pointer hover:bg-slate-50 flex items-start justify-between gap-3 min-h-[54px]"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap mb-1">
                      <span className="text-xs font-black uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        Q{idx + 1}
                      </span>
                      {q.sourceRef && (
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md truncate">
                          {q.sourceRef}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-bold text-slate-900 truncate leading-snug">
                      {q.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 self-center">
                    <span
                      className={`text-xs sm:text-sm font-black px-2.5 py-1 rounded-lg ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {earned.toFixed(0)}/{max.toFixed(0)}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 space-y-3.5 animate-fade-in text-sm">
                    <p className="font-bold text-slate-900 text-base leading-relaxed">
                      {q.text}
                    </p>



                    {/* Student Selection vs Correct Answer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-xs font-black uppercase text-slate-400 block mb-1">Your Choice:</span>
                        <span className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {ans?.selectedOption
                            ? `${ans.selectedOption}${q.options[ans.selectedOption] ? ` - ${q.options[ans.selectedOption]}` : ''}`
                            : 'Unanswered'}
                        </span>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-xs font-black uppercase text-slate-400 block mb-1">Correct Answer:</span>
                        <span className="font-bold text-emerald-700">
                          {q.correctAnswer} - {q.options[q.correctAnswer]}
                        </span>
                      </div>
                    </div>

                    {/* True/False Verdict Heading */}
                    {isTrueFalse && (
                      <div className="text-sm font-black text-slate-900 pt-1">
                        {q.correctAnswer === 'A' ? 'VERDICT: TRUE' : 'VERDICT: FALSE'}
                      </div>
                    )}

                    {/* Clinical Rationale: Large, clear and legible */}
                    <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">Clinical Rationale & Explanation:</span>
                      <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed whitespace-pre-line font-normal">{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
