/**
 * Mulwa Clinical Exam Portal
 * Home Dashboard View
 *
 * Displays session-level analytics (questions answered, correct count, accuracy rate),
 * instant resume card for active revision sets, quick navigation, and recent activity logs.
 * Minimalist, decluttered layout matching modern medical exam preparation portals.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 6.0.0
 */

import React, { useState } from 'react';
import {
  ChevronRight,
  Play,
  BookOpen,
  AlertCircle,
  RotateCcw,
  Trash2,
  X
} from 'lucide-react';
import { SessionProgress } from '../types';
import { getPaperMetrics, getActivityLog, parseSetKey } from '../utils/storage';
import { PAST_PAPERS, findPaper } from '../data/questions';

interface HomeDashboardProps {
  progress: SessionProgress;
  onNavigate: (tab: 'home' | 'papers' | 'review') => void;
  onContinueSet: (paperId: string, setId: string) => void;
  onClearProgress: () => void;
}

export default function HomeDashboard({
  progress,
  onNavigate,
  onContinueSet,
  onClearProgress
}: HomeDashboardProps) {
  const [showClearModal, setShowClearModal] = useState(false);
  const paperMetrics = getPaperMetrics(progress);
  const logs = getActivityLog(progress);

  // Determine the most recently updated in-progress set
  const inProgressList = Object.entries(progress.inProgressSets);
  let continuePaperId = PAST_PAPERS[0]?.id || '';
  let continueSetId = 'set1';
  let continueText = 'Resume Practice';

  if (inProgressList.length > 0) {
    const sortedIP = inProgressList.sort(
      (a, b) => new Date(b[1].timestamp).getTime() - new Date(a[1].timestamp).getTime()
    );
    const [id, state] = sortedIP[0];
    const { paperId, setId } = parseSetKey(id);
    const paper = findPaper(paperId);
    continuePaperId = paper ? paper.id : paperId;
    continueSetId = setId;
    const setNum = parseInt(setId.replace('set', ''), 10) || 1;
    const qIndex = (state.currentQuestionIndex || 0) + 1;
    continueText = `Set ${setNum} · Question ${qIndex}`;
  }

  const hasAnyProgress =
    paperMetrics.papersAttempted > 0 ||
    inProgressList.length > 0 ||
    Object.keys(progress.completedSets).length > 0 ||
    progress.incorrectQuestions.length > 0;

  const handleConfirmClear = () => {
    onClearProgress();
    setShowClearModal(false);
  };

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-home-dashboard">
      {/* 1. Quick Resume Card (if an in-progress set exists) */}
      {inProgressList.length > 0 && (
        <button
          onClick={() => onContinueSet(continuePaperId, continueSetId)}
          className="w-full bg-[#0B1B3D] text-left p-4 sm:p-4.5 flex justify-between items-center rounded-2xl group transition-all hover:bg-[#162f5f] active:scale-[0.99] focus:ring-2 focus:ring-[#0B1B3D]/30 min-h-[64px] shadow-sm cursor-pointer"
          id="continue-revision-card"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white">
              <Play className="w-4.5 h-4.5 fill-white ml-0.5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-white font-bold text-sm sm:text-base leading-snug truncate">
                Resume Practice
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm mt-0.5 font-medium truncate">
                {continueText}
              </p>
            </div>
          </div>
          <ChevronRight
            className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors shrink-0 ml-2"
            strokeWidth={2.5}
          />
        </button>
      )}

      {/* 3. Quick Access Navigation Tiles (Clean titles, no subtitles) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {/* Past Papers Tile */}
        <button
          onClick={() => onNavigate('papers')}
          className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#0B1B3D] p-4 sm:p-4.5 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-50 flex items-center justify-center text-[#0B1B3D] rounded-xl shrink-0">
              <BookOpen className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug truncate">
              Past Papers
            </h2>
          </div>
          <ChevronRight
            className="w-5 h-5 text-slate-300 group-hover:text-[#0B1B3D] transition-colors shrink-0 ml-2"
            strokeWidth={2}
          />
        </button>

        {/* Mistakes Review Tile */}
        <button
          onClick={() => onNavigate('review')}
          className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#0B1B3D] p-4 sm:p-4.5 flex justify-between items-center transition-all text-left group min-h-[64px] shadow-2xs hover:shadow-xs active:scale-[0.99] cursor-pointer"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-rose-50 flex items-center justify-center text-rose-700 rounded-xl shrink-0">
              <AlertCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>
            <h2 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug truncate">
              Review Mistakes
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${
                progress.incorrectQuestions.length > 0
                  ? 'bg-rose-50 text-rose-800 border-rose-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              {progress.incorrectQuestions.length}
            </span>
            <ChevronRight
              className="w-5 h-5 text-slate-300 group-hover:text-[#0B1B3D] transition-colors"
              strokeWidth={2}
            />
          </div>
        </button>
      </div>

      {/* 4. Activity Log Section */}
      <div className="space-y-2.5 pt-1" id="section-recent-activity">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Recent Activity
          </h2>

          {hasAnyProgress && (
            <button
              onClick={() => setShowClearModal(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-rose-600 transition-colors cursor-pointer min-h-[36px] px-2 rounded-lg"
              id="clear-progress-btn"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {logs.length > 0 ? (
          <div className="border border-slate-200/90 rounded-2xl divide-y divide-slate-100 overflow-hidden bg-white shadow-2xs">
            {logs.slice(0, 4).map(log => (
              <button
                key={log.id}
                onClick={() => onContinueSet(log.paperId, log.setId)}
                className="w-full p-3 sm:p-3.5 flex justify-between items-center hover:bg-slate-50 transition-colors text-left min-h-[52px] cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 bg-slate-100 flex items-center justify-center text-[#0B1B3D] rounded-xl shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                      {log.paperTitle} – {log.setName}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-normal">
                      {log.timestamp}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-lg border ${
                      log.scoreText.includes('%') && !log.scoreText.includes('answered')
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        : 'bg-amber-50 text-amber-800 border-amber-100'
                    }`}
                  >
                    {log.scoreText}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200/90 p-6 sm:p-8 text-center rounded-2xl bg-white shadow-2xs">
            <button
              onClick={() => onNavigate('papers')}
              className="w-10 h-10 mx-auto bg-[#0B1B3D] text-white flex items-center justify-center rounded-xl hover:bg-[#162f5f] transition-all active:scale-95 shadow-sm cursor-pointer"
              title="Start Practice"
            >
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </button>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2.5">
              Select a past paper to start practicing
            </p>
          </div>
        )}
      </div>

      {/* Confirmation Modal for Resetting Session Progress */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 max-w-sm w-full shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                <Trash2 className="w-5 h-5" />
              </div>
              <button
                onClick={() => setShowClearModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">Reset Session Progress?</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                This will reset questions answered, active set positions, scores, and mistakes review list.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowClearModal(false)}
                className="flex-1 px-4 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors min-h-[44px]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClear}
                className="flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs min-h-[44px]"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
