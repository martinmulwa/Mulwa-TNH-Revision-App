/**
 * Mulwa Clinical Exam Portal
 * SAQ Condition Categories Library
 *
 * Block 1 · Category: Respiratory Disorders
 * Clean vertical list of SAQ condition categories sorted in decreasing order of exam
 * appearance frequency. Clicking a category immediately launches that condition's
 * question set, presented one question at a time.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.1.0
 */

import React from 'react';
import {
  FileText,
  Flame,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
  Activity,
  ShieldAlert,
  Wind,
  Layers
} from 'lucide-react';
import { SAQPart } from '../types';
import { SAQ_CATEGORIES, ALL_SAQ_QUESTIONS } from '../data/saqData';

interface SAQLibraryProps {
  masteredIds: string[];
  onSelectCategory: (categoryId: string) => void;
  onBackToHome: () => void;
}

export default function SAQLibrary({
  masteredIds,
  onSelectCategory
}: SAQLibraryProps) {
  // Category-specific icons (standard clinical icons, zero AI star icons)
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'chest-drain':
        return <Activity className="w-5 h-5 text-indigo-700" />;
      case 'asthma':
        return <Wind className="w-5 h-5 text-indigo-700" />;
      case 'pneumonia':
        return <ShieldAlert className="w-5 h-5 text-indigo-700" />;
      case 'copd':
        return <Stethoscope className="w-5 h-5 text-indigo-700" />;
      case 'thoracic-surgery':
        return <Activity className="w-5 h-5 text-indigo-700" />;
      default:
        return <FileText className="w-5 h-5 text-indigo-700" />;
    }
  };

  const totalMastered = ALL_SAQ_QUESTIONS.filter((q) => masteredIds.includes(q.id)).length;

  return (
    <div className="space-y-4 sm:space-y-5" id="screen-saq-categories">
      {/* Category Header: Block 1 · Category: Respiratory Disorders */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 text-[#0B1B3D] flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-slate-400">
              <span className="text-indigo-900 font-black">Block 1</span>
              <span>·</span>
              <span>Category</span>
            </div>
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
              Respiratory Disorders
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg hidden sm:inline-block">
            {SAQ_CATEGORIES.length} Conditions · {ALL_SAQ_QUESTIONS.length} SAQs
          </span>
          {totalMastered > 0 && (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
              {totalMastered}/{ALL_SAQ_QUESTIONS.length} Mastered
            </span>
          )}
        </div>
      </div>

      {/* Subtitle banner */}
      <div className="flex items-center justify-between gap-2 px-1">
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Short Answer Questions (SAQ Bank) — Sorted by historical examination frequency
        </p>
      </div>

      {/* Vertical list of Condition Categories (Sorted by decreasing exam frequency) */}
      <div className="space-y-3">
        {SAQ_CATEGORIES.map((category) => {
          const catQuestions = category.questions || [];
          const masteredInCat = catQuestions.filter((q) => masteredIds.includes(q.id)).length;
          const isAllMastered = catQuestions.length > 0 && masteredInCat === catQuestions.length;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className="w-full text-left bg-white border border-slate-200/90 hover:border-[#0B1B3D] p-4 sm:p-4.5 rounded-2xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
              id={`saq-category-${category.id}`}
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                  {getCategoryIcon(category.id)}
                </div>

                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug">
                      {category.title}
                    </h2>

                    {category.frequencyBadge && (
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${
                          category.id === 'chest-drain'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : category.tier === 'Tier 1'
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {category.id === 'chest-drain' && (
                          <Flame className="w-3 h-3 fill-rose-600 inline mr-1 -mt-0.5" />
                        )}
                        {category.frequencyBadge}
                      </span>
                    )}

                    {isAllMastered && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Mastered
                      </span>
                    )}
                  </div>

                  {category.description && (
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold pt-0.5">
                    <span className="text-slate-600 font-bold">{catQuestions.length} Questions</span>
                    <span>·</span>
                    <span className={masteredInCat > 0 ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                      {masteredInCat} / {catQuestions.length} Mastered
                    </span>
                    <span>·</span>
                    <span>Block 1 · Respiratory Disorders</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 pl-2">
                <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-[#0B1B3D] group-hover:text-white text-slate-400 flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
