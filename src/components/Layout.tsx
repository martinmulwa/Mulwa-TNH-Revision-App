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
import { Home, BookOpen, AlertCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'home' | 'papers' | 'review';
  setActiveTab: (tab: 'home' | 'papers' | 'review') => void;
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
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-13 sm:h-15 flex items-center justify-center">
          
          {/* Brand Heading / Logo - Perfectly Centered */}
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

          {/* Desktop Navigation Tabs - Positioned absolute right so logo remains mathematically centered */}
          <nav className="hidden md:flex items-center gap-1.5 absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2" aria-label="Primary Navigation">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer ${
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
              className={`px-3.5 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100'
              }`}
            >
              Past Papers
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('review')}
              className={`px-3.5 py-1.5 text-xs font-semibold transition-all rounded-xl min-h-[36px] cursor-pointer ${
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

      {/* Mobile Bottom Tab Bar (Pattern 1) */}
      {!hideBottomNav && (
        <nav
          className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/90 z-40 pb-safe shadow-lg"
          aria-label="Mobile Navigation"
        >
          <div className="grid grid-cols-3 items-center h-15 max-w-md mx-auto px-2">
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
              <span className={`text-xs leading-tight mt-0.5 ${
                activeTab === 'home' ? 'font-bold text-[#0B1B3D]' : 'font-medium text-slate-500'
              }`}>
                Dashboard
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
              <span className={`text-xs leading-tight mt-0.5 ${
                activeTab === 'papers' ? 'font-bold text-[#0B1B3D]' : 'font-medium text-slate-500'
              }`}>
                Papers
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
              <span className={`text-xs leading-tight mt-0.5 ${
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

