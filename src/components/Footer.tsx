'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#111] text-gray-300 py-12 md:py-16 mt-auto border-t border-[#222]">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-[60px]">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
                    {/* Logo & Info */}
                    <div className="flex flex-col gap-4 lg:w-1/2">
                        {/* PERFECT Logo (Premium Typography style) */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-serif font-black text-white tracking-[0.2em] mb-1">
                                PERFECT
                            </h2>
                            <span className="text-[10px] text-gray-400 tracking-[0.3em] font-medium">
                                SOFT DARTS PRO TOURNAMENT
                            </span>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-16 items-start lg:items-center mt-4 lg:mt-0">
                        <Link href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                            お問い合わせ
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                            プライバシーポリシー
                        </Link>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="w-full h-[1px] bg-[#222] mb-8"></div>
                
                {/* Bottom */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                        &copy; PERFECT. ALL RIGHTS RESERVED.
                    </p>
                    
                    {/* Social Icons (Optional but keeps it premium) */}
                    <div className="flex items-center gap-3">
                        <Link href="#" className="w-10 h-10 rounded-[4px] bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:scale-110 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-[4px] bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
