/**
 * Mulwa Clinical Exam Portal
 * Single Past Paper View / Revision Set Selection View
 *
 * Displays only the set number and number of questions text per revision set card,
 * completely removing unnecessary tags, subtitle text, and descriptions.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 6.0.0
 */

import React from 'react';
import { ArrowLeft, Inbox, CheckCircle, ChevronRight, Play } from 'lucide-react';
import { SessionProgress } from '../types';
import { findPaper, getRevisionSetsForPaper } from '../data/questions';
import { makeSetKey } from '../utils/storage';

interface RevisionSetSelectionProps {
  paperId: string;
  progress: SessionProgress;
  onSelectSet: (paperId: string, setId: string) => void;
  onBack: () => void;
}

export default function RevisionSetSelection({
  paperId,
  progress,
  onSelectSet,
  onBack
}: RevisionSetSelectionProps) {
  const matchedPaper = findPaper(paperId);
  const sets = matchedPaper ? getRevisionSetsForPaper(matchedPaper.id) : [];

  if (!matchedPaper) {
    return (
      <div className="space-y-4" id="screen-set-selection">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold text-slate-500">Paper not found</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5" id="screen-set-selection">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <button
          onClick={onBack}
          className="p-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 shadow-2xs cursor-pointer"
          id="back-button-sets"
          title="Back to Papers"
          aria-label="Back to past papers archive"
        >
          <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
        </button>

        <h1 className="text-sm sm:text-base font-bold text-slate-900 truncate text-right">
          {matchedPaper.title}
        </h1>
      </div>

      {sets.length === 0 ? (
        <div className="border border-slate-200/90 bg-white p-10 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
            <Inbox className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-500">
            No sets available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {sets.map(set => {
            const compositeKey = makeSetKey(matchedPaper.id, set.id);
            const isCompleted = !!progress.completedSets[compositeKey];
            const inProgress = progress.inProgressSets[compositeKey];
            const answeredCount = inProgress ? Object.keys(inProgress.answers || {}).length : 0;
            const completedData = progress.completedSets[compositeKey];
            const completedScore = completedData ? completedData.score : 0;

            return (
              <div
                key={set.id}
                onClick={() => onSelectSet(matchedPaper.id, set.id)}
                className={`group bg-white border p-4 sm:p-5 rounded-2xl active:scale-[0.99] cursor-pointer transition-all flex items-center justify-between min-h-[76px] shadow-2xs ${
                  inProgress && !isCompleted
                    ? 'border-amber-400 bg-amber-50/15 shadow-xs'
                    : isCompleted
                    ? 'border-emerald-300 bg-emerald-50/15'
                    : 'border-slate-200/90 hover:border-[#0B1B3D] hover:shadow-xs'
                }`}
              >
                {/* Only set number and number of questions text */}
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug">
                    Set {set.setNumber}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    {set.questions.length} Questions
                  </p>
                </div>

                {/* Progress / Action indicator */}
                <div className="flex items-center gap-2.5 shrink-0 ml-2">
                  {isCompleted && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{completedScore.toFixed(0)}/{set.questions.length}</span>
                    </span>
                  )}

                  {inProgress && !isCompleted && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-lg">
                      <Play className="w-3 h-3 fill-amber-700 text-amber-700" />
                      <span>{answeredCount}/{set.questions.length}</span>
                    </span>
                  )}

                  <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-white flex items-center justify-center transition-all text-slate-400">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
