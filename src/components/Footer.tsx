'use client';

import Link from 'next/link';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full mt-auto flex flex-col">
            {/* Top Bar (Black) */}
            <div className="w-full h-10 bg-[#222] border-t-4 border-[#111] relative">
                {/* Scroll to Top Button */}
                <button 
                    onClick={scrollToTop}
                    className="absolute right-4 lg:right-[60px] top-0 h-full px-4 bg-gradient-to-b from-white to-gray-300 text-gray-800 text-xs font-bold flex items-center gap-1.5 shadow-sm hover:from-white hover:to-gray-100 rounded-t-sm"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 4l8 8h-6v8h-4v-8H4l8-8z"/></svg>
                    ページの先頭へ
                </button>
            </div>

            {/* Main Red Area */}
            <div className="w-full bg-[#b91515] py-10 relative overflow-hidden" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)' }}>
                <div className="max-w-[1280px] mx-auto px-4 lg:px-[60px] flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
                    
                    {/* Left: PERFECT Logo */}
                    <div className="flex flex-col items-center">
                        <svg viewBox="0 0 100 60" fill="white" className="w-20 h-12 mb-1">
                            {/* Abstract dart & hand shape */}
                            <path d="M60,20 L80,15 L90,20 L80,25 Z" />
                            <path d="M30,22 L60,20 L60,22 Z" stroke="white" strokeWidth="2" />
                            <path d="M40,25 Q50,45 45,55 L35,55 Q35,35 45,25 Z" />
                            <path d="M45,25 Q60,35 55,20 L50,15 Q40,20 45,25 Z" />
                        </svg>
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-white tracking-[0.2em] leading-none mb-1 shadow-sm">
                            PERFECT
                        </h2>
                        <span className="text-[9px] md:text-[10px] text-white tracking-[0.3em] font-medium opacity-90">
                            SOFT DARTS PRO TOURNAMENT
                        </span>
                    </div>

                    {/* Right: Links & Copyright */}
                    <div className="flex flex-col items-end gap-16">
                        {/* Links */}
                        <div className="flex items-center gap-6">
                            <Link href="#" className="flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors text-sm font-medium">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                お問い合わせ
                            </Link>
                            <Link href="#" className="flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors text-sm font-medium">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                プライバシーポリシー
                            </Link>
                        </div>

                        {/* Copyright */}
                        <p className="text-white text-xs font-medium tracking-wide">
                            COPYRIGHT &copy; PERFECT. ALL RIGHTS RESERVED.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
