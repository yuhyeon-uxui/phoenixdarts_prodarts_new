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

    const [timeLeft, setTimeLeft] = useState({
        days: 10,
        hours: 14,
        minutes: 30,
        seconds: 0
    });

    useEffect(() => {
        // 2026년 8월 29일 오전 10시 기준
        const targetDate = new Date("2026-08-29T10:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance < 0) {
                clearInterval(interval);
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex flex-col w-full font-sans bg-transparent dark:bg-transparent transition-colors duration-300">
            {/* HERO SECTION - TWO CARD LAYOUT */}
            <section className="w-full bg-transparent pt-8 pb-12">
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px] flex flex-col lg:flex-row gap-6">
                    
                    {/* Left Card: Main Hero (Crossfade Slider) */}
                    <div className="flex-1 rounded-[2rem] bg-gray-900 relative overflow-hidden h-[600px] flex flex-col justify-center p-[32px] shadow-lg group">
                        
                        {/* Crossfade Backgrounds */}
                        {heroSlides.map((slide, index) => (
                            <div 
                                key={index}
                                className={\`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out \${
                                    activeHeroSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                                }\`}
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-700 group-hover:scale-105" 
                                    style={{ backgroundImage: \`url('\${slide.image}')\` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent"></div>
                                
                                {/* Content container */}
                                <div className="relative z-20 w-full max-w-2xl h-full flex flex-col justify-center">
                                    <span className="text-white/80 font-bold text-sm tracking-widest mb-4 inline-block">PERFECT PRO TOURNAMENT</span>
                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl whitespace-pre-line">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-200 mb-10 drop-shadow-md text-base md:text-lg font-medium">
                                        {slide.date}
                                    </p>
                                    <button className="bg-[#E53935] text-white font-black hover:bg-red-700 transition px-8 py-4 rounded-[8px] flex items-center gap-2 w-fit shadow-lg shadow-red-500/30 pointer-events-auto">
                                        더 알아보기 <span className="text-xl">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        
                        {/* Right-aligned Navigation Arrows inside the Card */}
                        <div className="absolute right-[32px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                        
                        {/* Pagination */}
                        <div className="absolute bottom-[32px] left-[32px] flex items-center gap-2 z-30 pointer-events-auto">
                            {heroSlides.map((_, index) => (
                                <span 
                                    key={index}
                                    onClick={() => setActiveHeroSlide(index)}
                                    className={\`h-1.5 rounded-[8px] transition-all duration-500 cursor-pointer \${
                                        activeHeroSlide === index 
                                            ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                                            : 'w-1.5 bg-white/40 hover:bg-white'
                                    }\`}
                                ></span>
                            ))}
                            <span className="text-white ml-3 text-xs font-black tracking-widest cursor-pointer">II</span>
                        </div>
                    </div>

                    {/* Right Card: NEXT MATCH */}
                    <div className="w-full lg:w-[400px] shrink-0 h-[600px] rounded-[1.5rem] relative overflow-hidden p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-center bg-white dark:bg-[#121212]">
                        {/* Blurred Poster Background for NEXT PERFECT Card */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl scale-110 opacity-40 z-0"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=600')" }}
                        ></div>
                        {/* Gradient overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-white/80 dark:bg-[#121212]/80 z-0"></div>

                        <div className="w-full relative z-10">
                            <div className="mb-5 pb-3 flex justify-between items-center">
                            <h3 className="text-sm font-black text-[#E53935] tracking-widest drop-shadow-sm">NEXT PERFECT</h3>
                            <a href="#" className="bg-[#0A1118] text-white hover:scale-105 hover:shadow-lg text-[10px] font-black px-4 py-1.5 rounded-full transition-all duration-300 tracking-widest shadow-sm origin-right">전체일정</a>
                            </div>
                            <div className="relative group cursor-pointer">
                            {/* The actual tournament image */}
                            <div className="w-full h-48 rounded-xl mb-6 bg-cover bg-center relative overflow-hidden shadow-md transition-colors duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=600')" }}>
                            </div>
                            <div className="mb-8 text-left px-1">
                                <div className="text-[#E53935] font-black text-xs italic mb-1.5 tracking-tight">2026 PERFECT TOUR</div>
                                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2 drop-shadow-sm">제12전 하마마츠</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-[11px] font-medium">2026. 08. 29 (SUN) 10:00 / 액트시티 하마마츠</p>
                            </div>
                            </div>
                            
                            <div className="flex justify-center items-center pt-2">
                            <div className="flex justify-center gap-2 md:gap-3">
                                <div className="text-center w-[48px] md:w-[52px]">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">DAY</div>
                                <div className="bg-white dark:bg-[#1A1A1A] rounded-[8px] px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                                    {String(timeLeft.days).padStart(2, '0')}
                                </div>
                                </div>
                                <div className="text-xl font-bold text-gray-400 mt-5">:</div>
                                <div className="text-center w-[48px] md:w-[52px]">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">HOUR</div>
                                <div className="bg-white dark:bg-[#1A1A1A] rounded-[8px] px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                                    {String(timeLeft.hours).padStart(2, '0')}
                                </div>
                                </div>
                                <div className="text-xl font-bold text-gray-400 mt-5">:</div>
                                <div className="text-center w-[48px] md:w-[52px]">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">MIN</div>
                                <div className="bg-white dark:bg-[#1A1A1A] rounded-[8px] px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                                    {String(timeLeft.minutes).padStart(2, '0')}
                                </div>
                                </div>
                                <div className="text-xl font-bold text-gray-400 mt-5">:</div>
                                <div className="text-center w-[48px] md:w-[52px]">
                                <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">SEC</div>
                                <div className="bg-white dark:bg-[#1A1A1A] rounded-[8px] px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                                    {String(timeLeft.seconds).padStart(2, '0')}
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="flex justify-center gap-1.5 mt-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-[#444] cursor-pointer hover:bg-gray-800 transition-colors"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-[#444] cursor-pointer hover:bg-gray-800 transition-colors"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RANKING SECTION */}
            <section className="w-full bg-transparent py-20 border-b border-gray-300 dark:border-[#27272A]">
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">
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
                                <div key={player.rank} className="grid grid-cols-[40px_1fr_80px] items-center py-4 px-4 bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#27272A] rounded-[8px] hover:border-[#E53935] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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

            {/* TOPICS SECTION */}
            <section className="w-full bg-transparent py-20 border-b border-gray-300 dark:border-[#27272A]">
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">
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
                            <div key={i} className="bg-white dark:bg-[#121212] border border-gray-300 dark:border-[#27272A] rounded-[8px] hover:border-[#E53935] hover:-translate-y-1 cursor-pointer transition-all duration-300 group overflow-hidden flex flex-col shadow-sm">
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
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">OFFICIAL SPONSORS</h3>
                    <div className="max-w-4xl mx-auto">
                        <h4 className="text-xs font-bold text-[#555] mb-6 text-center tracking-[0.2em]">TOUR SPONSOR</h4>
                        <div className="flex justify-center mb-16">
                            <div className="w-72 h-24 bg-white dark:bg-white/5 rounded-[8px] border border-gray-300 dark:border-[#333] flex items-center justify-center font-black text-gray-900 dark:text-white text-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer shadow-sm">PHOENIXDARTS</div>
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
                                <div key={i} className="bg-white dark:bg-white/5 border border-gray-300 dark:border-[#222] h-16 flex items-center justify-center font-bold text-gray-500 dark:text-[#999] rounded-[8px] text-sm hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-[#444] transition cursor-pointer shadow-sm">
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
