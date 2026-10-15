/**
 * Mulwa Clinical Exam Portal
 * Primary Application Shell & Navigation Layout
 *
 * Provides a responsive header, desktop navigation tabs, mobile bottom navigation,
 * and standard content framing.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React from 'react';
import { Home, BookOpen, AlertCircle, GraduationCap, FileText } from 'lucide-react';
import { AppNavTab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: AppNavTab;
  setActiveTab: (tab: AppNavTab) => void;
  hideBottomNav?: boolean;
}

/**
 * Mobile-first responsive layout container with persistent top navigation and bottom tab bar.
 */
export default function Layout({ children, activeTab, setActiveTab, hideBottomNav = false }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans antialiased text-slate-900 selection:bg-indigo-100 selection:text-indigo-950">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-13 sm:h-15 flex items-center justify-between">
          
          {/* Brand Heading / Logo: Centered on Mobile, Far Left on Tablet & Desktop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:left-auto md:top-auto flex items-center justify-center shrink-0 z-10">
            <button 
              type="button"
              onClick={() => setActiveTab('home')}
              className="flex items-center justify-center select-none cursor-pointer group text-center min-h-[40px] px-2 transition-transform active:scale-95"
              id="app-logo-container"
              aria-label="Home Dashboard"
            >
              <span className="text-base sm:text-lg font-black text-[#0B1B3D] tracking-widest uppercase text-center">
                MULWA
              </span>
            </button>
          </div>

          {/* Desktop / Tablet Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 ml-auto z-20" aria-label="Primary Navigation">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Dashboard
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('papers')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Past Papers
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tnh_practice')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'tnh_practice'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
              id="nav-tab-tnh-practice"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>TNH Practice</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('saqs')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'saqs'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
              id="nav-tab-saqs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>SAQ Bank</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('review')}
              className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer ${
                activeTab === 'review'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Mistakes
            </button>
          </nav>

        </div>
      </header>

      {/* Main Content Area */}
      <main className={`flex-1 max-w-4xl w-full mx-auto px-2.5 sm:px-6 lg:px-8 py-2.5 sm:py-4 ${
        hideBottomNav ? 'pb-4 sm:pb-5' : 'pb-20 sm:pb-8'
      }`}>
        <div className={`bg-white border border-slate-200/90 p-3 sm:p-4.5 md:p-5 rounded-2xl shadow-xs ${
          hideBottomNav ? 'min-h-0' : 'min-h-[400px]'
        }`}>
          {children}
        </div>
      </main>

      {/* Mobile Bottom Tab Bar */}
      {!hideBottomNav && (
        <nav
          className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/90 z-40 pb-safe shadow-lg"
          aria-label="Mobile Navigation"
        >
          <div className="grid grid-cols-5 items-center h-15 max-w-md mx-auto px-1">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all min-h-[44px] cursor-pointer ${
                activeTab === 'home'
                  ? 'text-[#0B1B3D] font-bold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="Dashboard"
            >
              <div className={`p-1 rounded-lg ${activeTab === 'home' ? 'bg-indigo-50 text-[#0B1B3D]' : ''}`}>
                <Home className="w-4.5 h-4.5" strokeWidth={activeTab === 'home' ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] sm:text-[11px] leading-tight mt-0.5 ${
                activeTab === 'home' ? 'font-bold text-[#0B1B3D]' : 'font-medium text-slate-500'
              }`}>
                Home
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('papers')}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all min-h-[44px] cursor-pointer ${
                activeTab === 'papers'
                  ? 'text-[#0B1B3D] font-bold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="Past Papers"
            >
              <div className={`p-1 rounded-lg ${activeTab === 'papers' ? 'bg-indigo-50 text-[#0B1B3D]' : ''}`}>
                <BookOpen className="w-4.5 h-4.5" strokeWidth={activeTab === 'papers' ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] sm:text-[11px] leading-tight mt-0.5 ${
                activeTab === 'papers' ? 'font-bold text-[#0B1B3D]' : 'font-medium text-slate-500'
              }`}>
                Papers
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tnh_practice')}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all min-h-[44px] cursor-pointer ${
                activeTab === 'tnh_practice'
                  ? 'text-[#0B1B3D] font-bold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="TNH Practice"
            >
              <div className={`p-1 rounded-lg ${activeTab === 'tnh_practice' ? 'bg-indigo-50 text-[#0B1B3D]' : ''}`}>
                <GraduationCap className="w-4.5 h-4.5" strokeWidth={activeTab === 'tnh_practice' ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] sm:text-[11px] leading-tight mt-0.5 ${
                activeTab === 'tnh_practice' ? 'font-bold text-[#0B1B3D]' : 'font-medium text-slate-500'
              }`}>
                Practice
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('saqs')}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all min-h-[44px] cursor-pointer ${
                activeTab === 'saqs'
                  ? 'text-[#0B1B3D] font-bold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="SAQ Question Bank"
            >
              <div className={`p-1 rounded-lg ${activeTab === 'saqs' ? 'bg-indigo-50 text-[#0B1B3D]' : ''}`}>
                <FileText className="w-4.5 h-4.5" strokeWidth={activeTab === 'saqs' ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] sm:text-[11px] leading-tight mt-0.5 ${
                activeTab === 'saqs' ? 'font-bold text-[#0B1B3D]' : 'font-medium text-slate-500'
              }`}>
                SAQs
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('review')}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all min-h-[44px] cursor-pointer ${
                activeTab === 'review'
                  ? 'text-[#0B1B3D] font-bold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="Mistakes"
            >
              <div className={`p-1 rounded-lg ${activeTab === 'review' ? 'bg-rose-50 text-rose-700' : ''}`}>
                <AlertCircle className="w-4.5 h-4.5" strokeWidth={activeTab === 'review' ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] sm:text-[11px] leading-tight mt-0.5 ${
                activeTab === 'review' ? 'font-bold text-rose-800' : 'font-medium text-slate-500'
              }`}>
                Mistakes
              </span>
            </button>
          </div>
        </nav>
      )}

    </div>
  );
}

