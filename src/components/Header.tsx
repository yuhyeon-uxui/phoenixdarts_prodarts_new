"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  // 임시로 라이트 모드 고정 (다크 모드 잠시 보류)
  const [isDark, setIsDark] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-[100] w-full transition-colors duration-300">
      {/* Header Background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/90 dark:bg-[#121212]/90 pointer-events-none -z-10"></div>
      <div className="relative max-w-[1280px] mx-auto px-4 lg:px-[60px] h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-black text-2xl tracking-tighter text-black dark:text-white italic cursor-pointer">
          PERFECT
          <span className="text-[10px] block font-normal -mt-1 opacity-60">SOFT DARTS PRO TOURNAMENT</span>
        </div>

        {/* Pill Navigation (Centered) */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <nav className="flex items-center bg-gray-500/10 dark:bg-[#1A1A1A]/50 backdrop-blur-md rounded-lg p-1">
            {['PERFECT 소개', '투어 일정', 'LIVE 중계', '매치 결과', '랭킹'].map((item) => (
              <div 
                key={item} 
                className="relative"
                onMouseEnter={() => setHoveredMenu(item)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a href="#" className={`block px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                  hoveredMenu === item ? 'bg-black text-white dark:bg-white dark:text-black shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}>
                  {item}
                </a>

                {/* 2-Depth Dropdown (Glassmorphism) */}
                {hoveredMenu === item && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white/80 dark:bg-black/80 backdrop-filter backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-lg py-3 flex flex-col z-[150] animate-in fade-in zoom-in-95 duration-200">
                    <a href="#" className="px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">서브메뉴 1</a>
                    <a href="#" className="px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">서브메뉴 2</a>
                    <a href="#" className="px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">서브메뉴 3</a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Section (Theme Toggle + Login + Hamburger) */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="hidden p-2.5 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] hover:bg-gray-200 dark:hover:bg-[#333] transition-colors text-black dark:text-white border border-transparent dark:border-[#333]"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </button>
          
          <a href="#" className={`${isMobileMenuOpen ? 'flex' : 'hidden lg:flex'} bg-[#E53935] hover:bg-[#D32F2F] text-white px-4 py-1.5 lg:px-7 lg:py-2.5 rounded-md lg:rounded-lg text-xs lg:text-sm font-black tracking-widest shadow-md transition-all hover:scale-105 active:scale-95 items-center justify-center`}>
            LOGIN
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl z-[90] lg:hidden flex flex-col p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl border-t border-gray-100 dark:border-gray-800">
          <nav className="flex flex-col gap-2 mb-8">
            {['PERFECT 소개', '투어 일정', 'LIVE 중계', '매치 결과', '랭킹'].map((item) => (
              <div key={item} className="flex flex-col border-b border-gray-100 dark:border-gray-800 last:border-0 pb-2">
                <div className="flex justify-between items-center py-3">
                  <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">{item}</a>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M9 18l6-6-6-6"/></svg>
                </div>
                {/* Mobile Submenu */}
                <div className="flex flex-col gap-3 pl-4 pt-2 pb-3 bg-gray-50/50 dark:bg-white/5 rounded-lg">
                    <a href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-400">서브메뉴 1</a>
                    <a href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-400">서브메뉴 2</a>
                    <a href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-400">서브메뉴 3</a>
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
