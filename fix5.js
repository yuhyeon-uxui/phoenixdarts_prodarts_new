const fs = require('fs');

const code = `"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
    const [activeHeroSlide, setActiveHeroSlide] = useState(0);
    const [isHeroDragging, setIsHeroDragging] = useState(false);
    const [heroStartX, setHeroStartX] = useState(0);

    const heroSlides = [
        {
            title: "AREA CHAMPIONS CUP\\n오키나와 에어리어",
            date: "2026.07.26 - 제7회 에어리어 챔피언스 컵 우승",
            image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2000"
        },
        {
            title: "2026 PERFECT\\n제11전 이시카와",
            date: "2026.08.01 - 2026.08.02 이시카와현 산업전시관",
            image: "https://images.unsplash.com/photo-1611394145458-71e16f31620c?q=80&w=2000"
        },
        {
            title: "2026 PERFECT\\n제12전 하마마츠",
            date: "2026.08.29 - 2026.08.30 액트시티 하마마츠",
            image: "https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=2000"
        }
    ];

    const scrollHero = (direction: "left" | "right") => {
        if (direction === 'left') {
            setActiveHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
        } else {
            setActiveHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }
    };

    const onHeroDragStart = (e: React.MouseEvent) => {
        setIsHeroDragging(true);
        setHeroStartX(e.pageX);
    };
    
    const onHeroDragEnd = (e: React.MouseEvent) => {
        if (!isHeroDragging) return;
        setIsHeroDragging(false);
        const dragDistance = heroStartX - e.pageX;
        if (dragDistance > 50) scrollHero('right');
        else if (dragDistance < -50) scrollHero('left');
    };

    return (
        <main className="flex flex-col w-full font-sans bg-transparent dark:bg-transparent transition-colors duration-300">
            {/* HERO SECTION - FULL WIDTH */}
            <section className="relative w-full h-[640px] flex items-center justify-center overflow-hidden bg-[#111]">
                
                {/* Crossfade Backgrounds */}
                {heroSlides.map((slide, index) => (
                    <div 
                        key={index}
                        className={\`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out \${
                            activeHeroSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }\`}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-700 hover:scale-105" 
                            style={{ backgroundImage: \`url('\${slide.image}')\` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent"></div>
                    </div>
                ))}
                
                {/* Right-aligned Navigation Arrows */}
                <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto" style={{ opacity: 1 /* Force visible for now or use group */}}>
                    {/* Wrapped hero in a group below to make hover work, but setting absolute z-30 here */}
                </div>
                {/* To make group-hover work, we need a wrapper, or we can just make arrows always visible or show on hover of the section */}
                {/* Actually, let's put it inside the Content Container or a full absolute wrapper */}
                
                <div className="absolute inset-0 z-30 flex items-center justify-end px-6 lg:px-10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="flex flex-col gap-3 pointer-events-auto">
                        <button 
                            onClick={() => scrollHero('left')}
                            className="w-[48px] h-[48px] bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 text-white backdrop-blur-sm shadow-lg border border-white/30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 -ml-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                        </button>
                        <button 
                            onClick={() => scrollHero('right')}
                            className="w-[48px] h-[48px] bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 text-white backdrop-blur-sm shadow-lg border border-white/30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 2xl:pr-[60px] h-full flex flex-col justify-center pointer-events-none">
                    
                    {/* Left: Hero Text */}
                    <div className="w-full lg:w-2/3 flex flex-col justify-center h-full text-left lg:pr-8 mb-8 lg:mb-0">
                        <span className="text-gray-200 font-bold text-sm tracking-widest mb-3 transition-colors duration-300">PERFECT PRO TOURNAMENT</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-xl transition-colors duration-300 whitespace-pre-line">
                            {heroSlides[activeHeroSlide].title}
                        </h2>
                        <p className="text-gray-300 mb-8 drop-shadow-md text-sm md:text-base font-medium transition-colors duration-300">
                            {heroSlides[activeHeroSlide].date}
                        </p>
                        <button className="bg-[#E53935] text-white font-black hover:bg-red-700 transition px-8 py-4 rounded-full flex items-center gap-2 w-fit shadow-lg shadow-red-500/30 pointer-events-auto">
                            더 알아보기 <span className="text-xl">→</span>
                        </button>
                        
                        {/* Pagination */}
                        <div className="flex items-center gap-2 mt-8 lg:absolute lg:bottom-16 pointer-events-auto">
                            {heroSlides.map((_, index) => (
                                <span 
                                    key={index}
                                    onClick={() => setActiveHeroSlide(index)}
                                    className={\`h-1.5 rounded-full transition-all duration-500 cursor-pointer \${
                                        activeHeroSlide === index 
                                            ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                                            : 'w-1.5 bg-white/40 hover:bg-white'
                                    }\`}
                                ></span>
                            ))}
                            <span className="text-white ml-2 text-xs font-black tracking-widest cursor-pointer">II</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* RANKING SECTION */}
            <section className="w-full bg-transparent py-20 border-b border-gray-300 dark:border-[#27272A]">
                <div className="max-w-7xl mx-auto px-4 2xl:pr-[60px]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-300 dark:border-[#27272A]">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-widest">RANKING</h3>
                            <a href="#" className="text-sm text-gray-500 dark:text-[#9E9E9E] hover:text-gray-900 dark:text-white transition">전체보기 &gt;</a>
                        </div>
                        <div className="grid grid-cols-[40px_1fr_80px] text-sm text-gray-500 dark:text-[#9E9E9E] mb-4 px-4 font-bold">
                            <div className="text-center">순위</div>
                            <div>선수명</div>
                            <div className="text-right">포인트</div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {[
                                { rank: 1, name: "휴고 리옹", team: "TRiNiDAD", pts: "1359" },
                                { rank: 2, name: "아베 유타로", team: "MACS Design", pts: "992" },
                                { rank: 3, name: "첸 치루이", team: "TRiNiDAD", pts: "970" },
                                { rank: 4, name: "푸포 텡리에", team: "COSMO DARTS", pts: "941" },
                                { rank: 5, name: "죠노 히로키", team: "Pro.Formar", pts: "788" }
                            ].map((player) => (
                                <div key={player.rank} className="grid grid-cols-[40px_1fr_80px] items-center py-4 px-4 bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#27272A] rounded-lg hover:border-[#E53935] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                                    <div className={\`text-center font-black text-xl \${player.rank === 1 ? 'text-[#FFD700]' : 'text-gray-900 dark:text-white'}\`}>
                                        {player.rank}
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 border border-[#eee] dark:border-[#333] hidden sm:block"></div>
                                        <div>
                                            <div className="font-bold text-gray-900 dark:text-white text-lg">{player.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-[#9E9E9E] mt-1">{player.team}</div>
                                        </div>
                                    </div>
                                    <div className="text-right font-black text-gray-900 dark:text-white text-xl">{player.pts}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PREVIOUS WINNER IS DELETED (Moved to Sidebar) */}

            {/* TOPICS SECTION */}
            <section className="w-full bg-transparent py-20 border-b border-gray-300 dark:border-[#27272A]">
                <div className="max-w-7xl mx-auto px-4 2xl:pr-[60px]">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">TOPICS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "프로테스트 정보",
                                subtitle: "CERTIFICATION EXAM",
                                date: "2026.08.15",
                                img: "https://images.unsplash.com/photo-1594950488669-e092120e2fc0?q=80&w=600"
                            },
                            {
                                title: "연간 아카이브",
                                subtitle: "YEARLY ARCHIVE",
                                date: "2026.08.10",
                                img: "https://images.unsplash.com/photo-1627885483163-547df7c5f87b?q=80&w=600"
                            },
                            {
                                title: "시합 동영상",
                                subtitle: "MATCH VIDEO",
                                date: "2026.08.05",
                                img: "https://images.unsplash.com/photo-1563261763-7140889f4b3f?q=80&w=600"
                            },
                            {
                                title: "공식 포스터",
                                subtitle: "POSTER DOWNLOAD",
                                date: "2026.08.01",
                                img: "https://images.unsplash.com/photo-1582236528775-6e54f8e658ec?q=80&w=600"
                            }
                        ].map((topic, i) => (
                            <div key={i} className="bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#27272A] rounded-2xl hover:border-[#E53935] hover:-translate-y-1 cursor-pointer transition-all duration-300 group overflow-hidden flex flex-col shadow-sm">
                                <div className="w-full h-40 bg-gray-100 dark:bg-zinc-800 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: \`url('\${topic.img}')\` }}></div>
                                <div className="p-6 bg-white dark:bg-[#121212] relative z-10 flex-1">
                                    <div className="text-xs text-[#E53935] mb-3 font-mono">{topic.date}</div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white transition mb-1">{topic.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-[#777]">{topic.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OFFICIAL SPONSORS SECTION */}
            <section className="w-full bg-transparent py-24">
                <div className="max-w-7xl mx-auto px-4 2xl:pr-[60px]">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">OFFICIAL SPONSORS</h3>
                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-xs font-bold text-[#555] mb-6 text-center tracking-[0.2em]">TOUR SPONSOR</h4>
                        <div className="flex justify-center mb-16">
                            <div className="w-72 h-24 bg-white dark:bg-white/5 rounded-2xl border border-gray-300 dark:border-[#333] flex items-center justify-center font-black text-gray-900 dark:text-white text-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer shadow-sm">PHOENIXDARTS</div>
                        </div>
                        <h4 className="text-xs font-bold text-[#555] mb-6 text-center tracking-[0.2em]">MAIN SPONSOR</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[
                                "InBusiBull",
                                "Pro.VISION",
                                "Pro.Formar",
                                "FLK",
                                "WAKE",
                                "JET",
                                "AQUARIUS",
                                "Ryu",
                                "TRiNiDAD",
                                "CONDOR",
                                "L-style",
                                "TARGET"
                            ].map((sp, i) => (
                                <div key={i} className="bg-white dark:bg-white/5 border border-gray-300 dark:border-[#222] h-16 flex items-center justify-center font-bold text-gray-500 dark:text-[#999] rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-[#444] transition cursor-pointer shadow-sm">
                                    {sp}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
`;

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
