/**
 * Mulwa Clinical Exam Portal
 * Past Papers & TNH Practice Archive View
 *
 * Exclusively categorized under:
 * Category: Respiratory Disorders
 *
 * Features:
 * - Dedicated Tabs for "Past Papers" (Board/Qualifying) and "TNH Practice"
 * - Live keyword search (title, year, id, unit)
 * - Year Filter Dropdown Menu for Past Papers (2026, 2025, 2024, 2023, 2013, 2011)
 * - Sorting toggle (A-Z, Z-A, Default)
 * - Clean medical question bank styling
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 8.0.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
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
  Layers,
  Calendar,
  ChevronDown,
  Check,
  GraduationCap,
  FileText
} from 'lucide-react';
import { SessionProgress, PastPaper } from '../types';
import { BOARD_PAST_PAPERS, TNH_PRACTICE_PAPERS } from '../data/questions';

interface PastPapersLibraryProps {
  progress: SessionProgress;
  onSelectPaper: (paperId: string) => void;
  onBack: () => void;
  activeSection?: 'past_papers' | 'tnh_practice';
  onSectionChange?: (section: 'past_papers' | 'tnh_practice') => void;
}

type SortOrder = 'asc' | 'desc' | 'default';

export default function PastPapersLibrary({
  progress,
  onSelectPaper,
  onBack,
  activeSection = 'past_papers',
  onSectionChange
}: PastPapersLibraryProps) {
  const [currentTab, setCurrentTab] = useState<'past_papers' | 'tnh_practice'>(activeSection);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const yearDropdownRef = useRef<HTMLDivElement>(null);

  // Sync state if activeSection prop changes from outside (e.g. navbar click)
  useEffect(() => {
    if (activeSection && activeSection !== currentTab) {
      setCurrentTab(activeSection);
      setSelectedYear('all');
      setSearchQuery('');
      setIsYearDropdownOpen(false);
    }
  }, [activeSection]);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsYearDropdownOpen(false);
      }
    }
    if (isYearDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isYearDropdownOpen]);

  const handleSwitchTab = (tab: 'past_papers' | 'tnh_practice') => {
    setCurrentTab(tab);
    setSelectedYear('all');
    setSearchQuery('');
    setIsYearDropdownOpen(false);
    onSectionChange?.(tab);
  };

  // Base list of papers based on active tab
  const sourcePapers = currentTab === 'past_papers' ? BOARD_PAST_PAPERS : TNH_PRACTICE_PAPERS;

  // Extract all distinct years for the board past papers, sorted newest first
  const availableYears = useMemo(() => {
    const yearSet = new Set<string>();
    BOARD_PAST_PAPERS.forEach(p => {
      if (p.year && p.year !== 'Practice') {
        yearSet.add(p.year);
      }
    });
    return Array.from(yearSet).sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));
  }, []);

  // Filter papers based on year filter and search query
  const filteredPapers = sourcePapers.filter(paper => {
    // 1. Year filter (only applicable to official past papers)
    if (currentTab === 'past_papers' && selectedYear !== 'all' && paper.year !== selectedYear) {
      return false;
    }

    // 2. Search query filter
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      paper.title.toLowerCase().includes(q) ||
      paper.year.toLowerCase().includes(q) ||
      paper.id.toLowerCase().includes(q) ||
      (paper.unit && paper.unit.toLowerCase().includes(q)) ||
      (paper.block && paper.block.toLowerCase().includes(q)) ||
      (paper.category && paper.category.toLowerCase().includes(q))
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

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedYear('all');
    setIsYearDropdownOpen(false);
  };

  // Group papers strictly under Category: "Respiratory Disorders"
  const categorizedPapers: Record<string, PastPaper[]> = useMemo(() => {
    const map: Record<string, PastPaper[]> = {};
    displayedPapers.forEach(paper => {
      const categoryKey = paper.category || paper.unit || 'Respiratory Disorders';
      if (!map[categoryKey]) map[categoryKey] = [];
      map[categoryKey].push(paper);
    });
    return map;
  }, [displayedPapers]);

  const renderPaperCard = (paper: PastPaper) => {
    const totalQuestions = paper.questions?.length || paper.totalQuestions || 0;
    const totalSets = paper.sets?.length || paper.totalSets || 2;
    const isPractice = paper.examType === 'Practice' || paper.year === 'Practice';

    const completedCount = Object.keys(progress.completedSets).filter(key =>
      key.startsWith(paper.id)
    ).length;

    return (
      <div
        key={paper.id}
        onClick={() => onSelectPaper(paper.id)}
        id={`paper-card-${paper.id}`}
        className="group bg-white border border-slate-200/90 hover:border-[#0B1B3D] p-4 sm:p-4.5 rounded-2xl cursor-pointer transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex flex-col gap-3 min-h-[64px]"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isPractice ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-[#0B1B3D]'
            }`}>
              {isPractice ? (
                <GraduationCap className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              ) : (
                <BookOpen className="w-4.5 h-4.5" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug">
                  {paper.title}
                </h3>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0 border ${
                  isPractice
                    ? 'text-indigo-700 bg-indigo-50 border-indigo-200/90'
                    : 'text-slate-700 bg-slate-50 border-slate-200'
                }`}>
                  {isPractice ? 'Practice' : paper.year}
                </span>
                {paper.unit && paper.unit !== paper.category && (
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md shrink-0">
                    {paper.unit}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {totalQuestions} Questions · {totalSets} Revision Sets
                {paper.examType && paper.examType !== 'Practice' && (
                  <span className="text-slate-400 font-normal"> · {paper.examType}</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 ml-2">
            {completedCount > 0 && (
              <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{completedCount}/{totalSets} completed</span>
              </span>
            )}

            <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-white flex items-center justify-center transition-all text-slate-400">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* For TNH Practice: Show sets breakdown snippet */}
        {isPractice && paper.sets && paper.sets.length > 0 && (
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {paper.sets.map(s => {
              const setKey = `${paper.id}_set${s.setNumber}`;
              const isSetDone = !!progress.completedSets[setKey];
              return (
                <div
                  key={s.setNumber}
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-50/80 border border-slate-200/60"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {s.questionCount} Qs
                    </span>
                    {isSetDone && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const isFiltered = searchQuery.trim() !== '' || (currentTab === 'past_papers' && selectedYear !== 'all');

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-past-papers">
      {/* Header Bar with Segmented Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-[#0B1B3D]/20 cursor-pointer shadow-2xs"
            id="back-btn-library"
            title="Back to Dashboard"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
          </button>

          <div>
            <h1 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
              {currentTab === 'past_papers' ? 'Past Papers' : 'TNH Practice'}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              {currentTab === 'past_papers'
                ? 'Official Board & Qualifying Exam Papers'
                : 'Targeted Practice Questions · Acute Conditions'}
            </p>
          </div>
        </div>

        {/* Segmented Section Switcher */}
        <div
          className="flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 self-start sm:self-auto"
          role="tablist"
          id="library-tab-switcher"
        >
          <button
            type="button"
            role="tab"
            aria-selected={currentTab === 'past_papers'}
            onClick={() => handleSwitchTab('past_papers')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'past_papers'
                ? 'bg-[#0B1B3D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
            id="tab-btn-past-papers"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Past Papers ({BOARD_PAST_PAPERS.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={currentTab === 'tnh_practice'}
            onClick={() => handleSwitchTab('tnh_practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'tnh_practice'
                ? 'bg-[#0B1B3D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
            id="tab-btn-tnh-practice"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>TNH Practice ({TNH_PRACTICE_PAPERS.length})</span>
          </button>
        </div>
      </div>

      {/* Search, Year Dropdown & Sort Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5" id="papers-toolbar">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currentTab === 'past_papers'
                ? 'Search past papers...'
                : 'Search practice questions, topics, conditions...'
            }
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

        {/* Action Controls: Year Dropdown (for Past Papers) & Sort */}
        <div className="flex items-center gap-2">
          {/* Year Filter Dropdown Menu (only relevant for Past Papers) */}
          {currentTab === 'past_papers' && (
            <div className="relative flex-1 sm:flex-initial" ref={yearDropdownRef}>
              <button
                type="button"
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className={`w-full sm:w-auto h-11 px-3.5 flex items-center justify-between sm:justify-start gap-2 rounded-xl border text-xs font-semibold transition-all min-h-[44px] cursor-pointer shadow-2xs select-none active:scale-95 ${
                  selectedYear !== 'all'
                    ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                id="year-filter-dropdown-btn"
                aria-expanded={isYearDropdownOpen}
                aria-haspopup="true"
                title="Filter by Year"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <Calendar className={`w-4 h-4 shrink-0 ${selectedYear !== 'all' ? 'text-indigo-200' : 'text-slate-400'}`} />
                  <span className="truncate">
                    {selectedYear === 'all' ? 'Year: All' : `Year: ${selectedYear}`}
                  </span>
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    isYearDropdownOpen ? 'rotate-180' : ''
                  } ${selectedYear !== 'all' ? 'text-indigo-200' : 'text-slate-400'}`}
                />
              </button>

              {/* Dropdown Menu Modal */}
              {isYearDropdownOpen && (
                <div
                  className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl z-30 py-1.5 animate-fade-in"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                    <span>Filter by Year</span>
                    {selectedYear !== 'all' && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedYear('all');
                          setIsYearDropdownOpen(false);
                        }}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold lowercase cursor-pointer"
                      >
                        reset
                      </button>
                    )}
                  </div>

                  {/* All Years Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedYear('all');
                      setIsYearDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2.5 text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer hover:bg-slate-50 ${
                      selectedYear === 'all' ? 'text-[#0B1B3D] font-bold bg-indigo-50/60' : 'text-slate-700'
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2">
                      {selectedYear === 'all' ? (
                        <Check className="w-3.5 h-3.5 text-[#0B1B3D] shrink-0" />
                      ) : (
                        <span className="w-3.5 h-3.5 inline-block shrink-0" />
                      )}
                      <span>All Years</span>
                    </div>
                    <span className="text-[11px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md font-medium">
                      {BOARD_PAST_PAPERS.length}
                    </span>
                  </button>

                  {/* Individual Year Options */}
                  {availableYears.map(year => {
                    const count = BOARD_PAST_PAPERS.filter(p => p.year === year).length;
                    const isSelected = selectedYear === year;
                    return (
                      <button
                        key={year}
                        type="button"
                        onClick={() => {
                          setSelectedYear(year);
                          setIsYearDropdownOpen(false);
                        }}
                        className={`w-full px-3.5 py-2.5 text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer hover:bg-slate-50 ${
                          isSelected ? 'text-[#0B1B3D] font-bold bg-indigo-50/60' : 'text-slate-700'
                        }`}
                        role="menuitem"
                      >
                        <div className="flex items-center gap-2">
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 text-[#0B1B3D] shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 inline-block shrink-0" />
                          )}
                          <span>{year}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md font-medium">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

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
      </div>

      {/* Active Filter Tags Bar (if filtered by year or search) */}
      {isFiltered && (
        <div className="flex items-center gap-2 flex-wrap text-xs pt-0.5" id="active-filters-bar">
          <span className="text-slate-400 font-semibold">Active:</span>

          {currentTab === 'past_papers' && selectedYear !== 'all' && (
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200/80 text-[#0B1B3D] px-2.5 py-1 rounded-lg font-semibold">
              <Calendar className="w-3.5 h-3.5 text-indigo-700" />
              <span>Year: {selectedYear}</span>
              <button
                type="button"
                onClick={() => setSelectedYear('all')}
                className="hover:bg-indigo-100 rounded p-0.5 cursor-pointer ml-0.5"
                title="Remove year filter"
              >
                <X className="w-3 h-3 text-indigo-700" />
              </button>
            </span>
          )}

          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg font-semibold">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate max-w-[120px]">"{searchQuery}"</span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="hover:bg-slate-200 rounded p-0.5 cursor-pointer ml-0.5"
                title="Clear search"
              >
                <X className="w-3 h-3 text-slate-500" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={handleClearFilters}
            className="text-xs text-indigo-700 hover:text-indigo-900 font-semibold underline cursor-pointer ml-auto"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Categorized Papers List */}
      {displayedPapers.length === 0 ? (
        <div className="border border-slate-200/90 bg-white p-8 sm:p-10 rounded-2xl flex flex-col items-center justify-center text-center space-y-2.5 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
            <Inbox className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            {isFiltered
              ? 'No papers match your active filter'
              : currentTab === 'past_papers'
              ? 'No past papers currently available'
              : 'No TNH practice papers currently available'}
          </p>
          {isFiltered && (
            <button
              onClick={handleClearFilters}
              className="text-xs sm:text-sm font-semibold text-[#0B1B3D] hover:underline pt-1 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              Clear All Filters
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6" id="categories-container">
          {(Object.entries(categorizedPapers) as [string, PastPaper[]][]).map(([categoryName, papersInCat]) => (
            <div key={categoryName} className="space-y-3">
              {/* Category Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#0B1B3D] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                      Category
                    </div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {categoryName}
                    </h2>
                  </div>
                </div>

                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {papersInCat.length} {papersInCat.length === 1 ? 'Paper' : 'Papers'}
                </span>
              </div>

              {/* Papers in this category */}
              <div className="space-y-2.5">
                {papersInCat.map(renderPaperCard)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
