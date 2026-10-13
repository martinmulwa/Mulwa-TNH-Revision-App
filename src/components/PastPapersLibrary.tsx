/**
 * Mulwa Clinical Exam Portal
 * Past Papers Archive View
 *
 * Exclusively categorized under:
 * Category: Block 1
 * └── Sub-Category: Respiratory Disorders
 *
 * Minimalist, decluttered layout inspired by modern clinical question banks.
 * No redundant tags, static pills, or duplicate category labels.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 6.0.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  Inbox,
  ChevronRight,
  BookOpen,
  CheckCircle,
  Search,
  ArrowDownAZ,
  ArrowUpZA,
  ArrowUpDown,
  X,
  Layers
} from 'lucide-react';
import { SessionProgress, PastPaper } from '../types';
import { PAST_PAPERS } from '../data/questions';

interface PastPapersLibraryProps {
  progress: SessionProgress;
  onSelectPaper: (paperId: string) => void;
  onBack: () => void;
}

type SortOrder = 'asc' | 'desc' | 'default';

export default function PastPapersLibrary({
  progress,
  onSelectPaper,
  onBack
}: PastPapersLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Filter papers based on search query
  const filteredPapers = PAST_PAPERS.filter(paper => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      paper.title.toLowerCase().includes(q) ||
      paper.year.toLowerCase().includes(q) ||
      paper.id.toLowerCase().includes(q) ||
      (paper.unit && paper.unit.toLowerCase().includes(q)) ||
      (paper.block && paper.block.toLowerCase().includes(q))
    );
  });

  // Sorting
  const displayedPapers = [...filteredPapers].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' });
    }
    if (sortOrder === 'desc') {
      return b.title.localeCompare(a.title, undefined, { numeric: true, sensitivity: 'base' });
    }
    return 0;
  });

  const handleToggleSort = () => {
    setSortOrder(prev => {
      if (prev === 'asc') return 'desc';
      if (prev === 'desc') return 'default';
      return 'asc';
    });
  };

  const renderPaperCard = (paper: PastPaper) => {
    const totalQuestions = paper.questions?.length || paper.totalQuestions || 0;
    const totalSets = paper.sets?.length || paper.totalSets || 2;

    const completedCount = Object.keys(progress.completedSets).filter(key =>
      key.startsWith(paper.id)
    ).length;

    return (
      <div
        key={paper.id}
        onClick={() => onSelectPaper(paper.id)}
        id={`paper-card-${paper.id}`}
        className="group bg-white border border-slate-200/90 hover:border-[#0B1B3D] p-4 sm:p-4.5 rounded-2xl cursor-pointer transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 min-h-[64px]"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 bg-indigo-50 text-[#0B1B3D]">
            <BookOpen className="w-4.5 h-4.5" />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug truncate">
              {paper.title}
            </h3>

            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {totalQuestions} Questions · {totalSets} Sets
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 ml-2">
          {completedCount > 0 && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>{completedCount}/{totalSets} completed</span>
            </span>
          )}

          <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-white flex items-center justify-center transition-all text-slate-400">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5" id="screen-past-papers">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <button
          onClick={onBack}
          className="p-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 cursor-pointer shadow-2xs"
          id="back-btn-library"
          title="Back to Dashboard"
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
        </button>

        <h1 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Past Papers
        </h1>
      </div>

      {/* Search & Sort Toolbar */}
      <div className="flex items-center gap-2.5" id="papers-toolbar">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search past papers..."
            className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-9 py-2 min-h-[44px] placeholder:text-slate-400 focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/20 transition-colors shadow-2xs"
            id="filter-papers-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              title="Clear search"
              id="clear-search-btn"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Button */}
        <button
          onClick={handleToggleSort}
          id="sort-papers-btn"
          title={
            sortOrder === 'asc'
              ? 'Sorted: A to Z'
              : sortOrder === 'desc'
              ? 'Sorted: Z to A'
              : 'Default Order'
          }
          className={`h-11 px-3 flex items-center justify-center gap-1.5 rounded-xl border text-xs font-semibold transition-all shrink-0 active:scale-95 min-h-[44px] cursor-pointer shadow-2xs ${
            sortOrder !== 'default'
              ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
          aria-label="Sort past papers list"
        >
          {sortOrder === 'asc' ? (
            <>
              <ArrowDownAZ className="w-4 h-4" />
              <span className="hidden sm:inline">A–Z</span>
            </>
          ) : sortOrder === 'desc' ? (
            <>
              <ArrowUpZA className="w-4 h-4" />
              <span className="hidden sm:inline">Z–A</span>
            </>
          ) : (
            <>
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Sort</span>
            </>
          )}
        </button>
      </div>

      {/* Category Hierarchy */}
      {displayedPapers.length === 0 ? (
        <div className="border border-slate-200/90 bg-white p-8 sm:p-10 rounded-2xl flex flex-col items-center justify-center text-center space-y-2.5 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
            <Inbox className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            {searchQuery ? 'No matching papers found' : 'No past papers currently available'}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs sm:text-sm font-semibold text-[#0B1B3D] hover:underline pt-1 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              Reset Search
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-5" id="categories-container">
          {Object.entries(
            displayedPapers.reduce<Record<string, Record<string, PastPaper[]>>>((acc, paper) => {
              const blockKey = paper.block || paper.category || 'Block 1';
              const unitKey = paper.unit || 'General';
              if (!acc[blockKey]) acc[blockKey] = {};
              if (!acc[blockKey][unitKey]) acc[blockKey][unitKey] = [];
              acc[blockKey][unitKey].push(paper);
              return acc;
            }, {})
          ).map(([blockName, units]) => (
            <div key={blockName} className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80">
                <Layers className="w-4 h-4 text-[#0B1B3D]" />
                <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                  {blockName}
                </h2>
              </div>

              {Object.entries(units).map(([unitName, papersInUnit]) => (
                <div key={unitName} className="pl-3 sm:pl-4 border-l-2 border-indigo-200/80 space-y-2.5">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <h3 className="text-xs sm:text-sm font-bold text-slate-700">
                        {unitName}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {papersInUnit.length} {papersInUnit.length === 1 ? 'Paper' : 'Papers'}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {papersInUnit.map(renderPaperCard)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
