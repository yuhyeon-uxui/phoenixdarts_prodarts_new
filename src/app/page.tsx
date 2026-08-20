"use client";

import React, { useState, useEffect, useRef } from 'react';

const rankingData = [
    { rank: 1, name: "휴고 리옹", enName: "Hugo Leung", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300", sponsors: ["TRiNiDAD", "CONDOR"], pts: "1,359", trend: "same" },
    { rank: 2, name: "아베 유타로", enName: "Abe Yutaro", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300", sponsors: ["TRiNiDAD", "MACS"], pts: "992", trend: "up" },
    { rank: 3, name: "첸 치루이", enName: "Tseng Chijui", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300", sponsors: ["TRiNiDAD", "CONDOR"], pts: "970", trend: "down" },
    { rank: 4, name: "푸포 텡리에", enName: "Pupo Teng Lieh", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300", sponsors: ["COSMO DARTS"], pts: "941", trend: "up" },
    { rank: 5, name: "죠노 히로키", enName: "Jono Hiroki", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300", sponsors: ["TRiNiDAD", "CONDOR"], pts: "788", trend: "same" },
    { rank: 6, name: "아사다 세이고", enName: "Asada Seigo", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300", sponsors: ["unicorn", "L-style"], pts: "750", trend: "down" },
    { rank: 7, name: "마츠다 준", enName: "Matsuda Jun", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300", sponsors: ["DYNASTY", "L-style"], pts: "720", trend: "up" },
    { rank: 8, name: "고토 토모야", enName: "Goto Tomoya", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300", sponsors: ["TRiNiDAD", "CONDOR"], pts: "690", trend: "down" },
    { rank: 9, name: "니시타니 죠지", enName: "Nishitani Joji", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300", sponsors: ["TARGET"], pts: "650", trend: "up" },
    { rank: 10, name: "야마다 유키", enName: "Yamada Yuki", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300", sponsors: ["COSMO DARTS"], pts: "610", trend: "same" },
];

const newsData = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    category: i % 3 === 0 ? 'Notice' : i % 3 === 1 ? 'Tournament' : 'Event',
    title: `PERFECT 2026 제${11 + i}전 이시카와 대회 결과 안내`,
    desc: '열띤 경쟁 속에서 펼쳐진 이번 이시카와 대회에서 새로운 챔피언이 탄생했습니다. 경기 내용 및 자세한 결과...',
    date: `2026.08.${30 - i}`
}));

export default function Home() {
    // 1. Hero Carousel (Dissolve)
    const [activeHero, setActiveHero] = useState(0);
    const heroSlides = [
        { title: "2026 PERFECT 챔피언십\n결승전 LIVE", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2000" },
        { title: "오키나와 에어리어\n차세대 선수 결정전", image: "https://images.unsplash.com/photo-1611394145458-71e16f31620c?q=80&w=2000" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveHero(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [heroSlides.length]);

    // 2. Next Match Carousel
    const nextMatchRef = useRef<HTMLDivElement>(null);
    const scrollNextMatch = (dir: number) => {
        if (nextMatchRef.current) nextMatchRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    };

    // 3. News Carousel Drag & Scroll
    const newsScrollRef = useRef<HTMLDivElement>(null);
    const [newsHover, setNewsHover] = useState(false);

    useEffect(() => {
        const slider = newsScrollRef.current;
        if (!slider) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.clientX;
            scrollLeft = slider.scrollLeft;
        };
        const onMouseLeave = () => {
            isDown = false;
            slider.style.cursor = 'grab';
        };
        const onMouseUp = () => {
            isDown = false;
            slider.style.cursor = 'grab';
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const dx = e.clientX - startX;
            slider.scrollLeft = scrollLeft - dx * 1.5;
        };
        const onDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        slider.addEventListener('mousedown', onMouseDown);
        slider.addEventListener('mouseleave', onMouseLeave);
        slider.addEventListener('mouseup', onMouseUp);
        slider.addEventListener('mousemove', onMouseMove);
        slider.addEventListener('dragstart', onDragStart);

        return () => {
            slider.removeEventListener('mousedown', onMouseDown);
            slider.removeEventListener('mouseleave', onMouseLeave);
            slider.removeEventListener('mouseup', onMouseUp);
            slider.removeEventListener('mousemove', onMouseMove);
            slider.removeEventListener('dragstart', onDragStart);
        };
    }, []);

    const scrollNewsRight = () => {
        if (newsScrollRef.current) newsScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    };

    const [newsTab, setNewsTab] = useState("전체");
    const [rankTab, setRankTab] = useState("남자");

    return (
        <main className="flex flex-col w-full font-sans bg-gray-100 min-h-screen text-gray-900">
            <div className="max-w-[1200px] mx-auto w-full px-4 pt-10">
                {/* HERO SECTION - SIDE-BY-SIDE */}
                <section className="flex flex-col lg:flex-row gap-6 mb-16">
                    {/* Left Card: Main Hero (Crossfade Slider) */}
                    <div className="flex-1 rounded-[8px] bg-gray-900 relative overflow-hidden h-[500px] flex flex-col justify-center shadow-lg">
                        {heroSlides.map((slide, idx) => (
                            <div 
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-1000 ${activeHero === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('${slide.image}')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="relative z-20 w-full h-full flex flex-col justify-center pl-10 pr-4">
                                    <span className="text-white/80 font-bold text-xs tracking-widest mb-3 inline-block">PERFECT PRO TOURNAMENT</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-lg whitespace-pre-line">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-200 mb-8 font-medium text-sm">
                                        2026.07.26 - 제7회 에어리어 챔피언스 컵 우승
                                    </p>
                                    <button className="bg-red-600 hover:bg-red-700 transition text-white font-bold px-6 py-3 rounded-[8px] flex items-center gap-2 w-fit shadow-lg shadow-red-500/30 text-sm">
                                        더 알아보기 <span>&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* Pagination indicator */}
                        <div className="absolute bottom-6 left-10 flex items-center gap-2 z-20">
                            {heroSlides.map((_, idx) => (
                                <div key={idx} onClick={() => setActiveHero(idx)} className={`h-1.5 rounded-full cursor-pointer transition-all ${activeHero === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}></div>
                            ))}
                            <span className="text-white ml-2 text-xs font-black tracking-widest cursor-pointer">II</span>
                        </div>
                    </div>

                    {/* Right Card: NEXT PERFECT */}
                    <div className="w-full lg:w-[400px] shrink-0 h-[500px] rounded-[8px] relative p-8 shadow-sm flex flex-col justify-center bg-gray-50 border border-gray-200">
                        <div className="mb-6 flex justify-between items-center">
                            <h3 className="text-sm font-black text-red-600 tracking-widest">NEXT PERFECT</h3>
                            <button className="bg-gray-900 text-white hover:bg-black text-[10px] font-bold px-4 py-1.5 rounded-full transition-colors">전체일정</button>
                        </div>
                        
                        {/* Placeholder Image (Cat) */}
                        <div className="w-full h-[180px] rounded-[8px] mb-6 bg-cover bg-center shadow-inner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400')"}}></div>
                        
                        <div className="text-left mb-6">
                            <div className="text-red-600 font-bold text-xs italic mb-1.5">2026 PERFECT TOUR</div>
                            <h4 className="text-2xl font-black text-gray-900 mb-2">제12전 하마마츠</h4>
                            <p className="text-gray-500 text-xs font-medium">2026. 08. 29 (SUN) 10:00 / 액트시티 하마마츠</p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="flex justify-center gap-2">
                            <div className="text-center w-[52px]">
                                <div className="text-[9px] text-gray-500 mb-1 font-bold">DAY</div>
                                <div className="bg-white rounded-[8px] py-2 text-xl font-mono font-black text-gray-900 border border-gray-200 shadow-sm">08</div>
                            </div>
                            <div className="text-xl font-bold text-gray-300 mt-4">:</div>
                            <div className="text-center w-[52px]">
                                <div className="text-[9px] text-gray-500 mb-1 font-bold">HOUR</div>
                                <div className="bg-white rounded-[8px] py-2 text-xl font-mono font-black text-gray-900 border border-gray-200 shadow-sm">19</div>
                            </div>
                            <div className="text-xl font-bold text-gray-300 mt-4">:</div>
                            <div className="text-center w-[52px]">
                                <div className="text-[9px] text-gray-500 mb-1 font-bold">MIN</div>
                                <div className="bg-white rounded-[8px] py-2 text-xl font-mono font-black text-gray-900 border border-gray-200 shadow-sm">48</div>
                            </div>
                            <div className="text-xl font-bold text-gray-300 mt-4">:</div>
                            <div className="text-center w-[52px]">
                                <div className="text-[9px] text-gray-500 mb-1 font-bold">SEC</div>
                                <div className="bg-white rounded-[8px] py-2 text-xl font-mono font-black text-gray-900 border border-gray-200 shadow-sm">54</div>
                            </div>
                        </div>
                        
                        {/* Pagination indicator (dots) */}
                        <div className="flex justify-center gap-1.5 mt-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                        </div>
                    </div>
                </section>
                
                {/* Inner Content Wrapper */}
                <div className="flex flex-col gap-16 pb-12">

                {/* 3. Event Banner */}
                <section>
                    <div className="w-full h-[140px] rounded-[8px] bg-blue-900 overflow-hidden relative cursor-pointer shadow-sm">
                        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200')"}}></div>
                        <div className="absolute inset-0 flex items-center justify-between px-10">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">신규 프로 회원가입 이벤트</h3>
                                <p className="text-sm opacity-80">지금 가입하고 피닉스다트 공식 굿즈 받자!</p>
                            </div>
                            <button className="bg-white text-blue-900 px-6 py-2 rounded-[4px] font-bold text-sm">자세히 보기</button>
                        </div>
                    </div>
                </section>

                {/* 4. News (New Layout: Side Title & Horizontal Cards) */}
                <section className="flex flex-col md:flex-row gap-8">
                    {/* Left Title & Filters */}
                    <div className="w-full md:w-[280px] shrink-0">
                        <h3 className="text-4xl font-black text-gray-900 leading-tight mb-8 tracking-tighter">
                            LATEST<br />NEWS &amp;<br />NOTICES.
                        </h3>
                        
                        <div className="flex flex-col gap-4 font-bold text-sm">
                            <button className="text-left text-gray-900 border-b-2 border-gray-900 pb-1 w-fit">전체 보기 (ALL)</button>
                            <button className="text-left text-gray-500 hover:text-gray-900 transition-colors w-fit">#Tournament</button>
                            <button className="text-left text-gray-500 hover:text-gray-900 transition-colors w-fit">#Notice</button>
                            <button className="text-left text-gray-500 hover:text-gray-900 transition-colors w-fit">#Event</button>
                        </div>
                        
                        <button className="text-red-600 font-bold text-sm mt-12 hover:underline">VIEW ALL +</button>
                    </div>

                    {/* Right Horizontal Scroll Cards */}
                    <div 
                        className="flex-1 relative"
                        onMouseEnter={() => setNewsHover(true)}
                        onMouseLeave={() => setNewsHover(false)}
                    >
                        <div 
                            className="overflow-x-auto scrollbar-hide pb-4 cursor-grab flex gap-4 w-full select-none touch-pan-x"
                            ref={newsScrollRef}
                        >
                            {/* Inner wide container for cards */}
                            <div className="flex gap-4 w-max shrink-0">
                                {newsData.map((news) => (
                                    <div key={news.id} className="w-[300px] h-[300px] bg-white border border-gray-200 rounded-[8px] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                                        <div className="pointer-events-none select-none">
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded-[4px] inline-block mb-4 ${news.category === 'Notice' ? 'bg-blue-50 text-blue-600' : news.category === 'Tournament' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                                {news.category}
                                            </span>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:underline line-clamp-2 leading-snug">{news.title}</h4>
                                            <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{news.desc}</p>
                                        </div>
                                        <span className="text-sm text-gray-400 font-medium pointer-events-none select-none">{news.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Scroll Arrow (visible on hover) */}
                        <div className={`absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-gray-100 via-gray-100/70 to-transparent flex items-center justify-end pr-4 transition-opacity duration-300 pointer-events-none z-50 ${newsHover ? 'opacity-100' : 'opacity-0'}`}>
                            <button 
                                onClick={scrollNewsRight}
                                className="w-12 h-12 rounded-full bg-gray-900/80 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black transition-colors pointer-events-auto shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path d="M9 18l6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* 5. Ranking (New Layout from Image) */}
                <section className="flex flex-col lg:flex-row gap-6">
                    {/* Left: 선수 랭킹 */}
                    <div className="flex-1 bg-white rounded-[8px] p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 md:gap-6 mb-8 overflow-x-auto scrollbar-hide pb-2">
                            <h3 className="text-2xl font-black text-gray-900 shrink-0">선수 랭킹</h3>
                            <div className="flex gap-2 shrink-0">
                                {['남자', '여자', '브랜드'].map((tab, idx) => (
                                    <button 
                                        key={tab} 
                                        className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${idx === 0 ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-600'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        {/* 2-column list layout */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-5 xl:grid-flow-col gap-x-6 gap-y-3">
                            {rankingData.map((player) => (
                                <div key={player.rank} className="flex items-center justify-between p-[14px] rounded-[8px] bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        {/* Rank Number */}
                                        <div className={`w-6 text-center font-black text-xl ${player.rank === 1 ? 'text-[#EAA51D]' : player.rank === 2 ? 'text-[#7C8B9D]' : player.rank === 3 ? 'text-[#A06B60]' : player.rank >= 6 ? 'text-[#6B6B6B]' : 'text-gray-900'}`}>{player.rank}</div>
                                        {/* Profile Image */}
                                        <div className="w-12 h-12 rounded-[8px] bg-cover bg-center shrink-0 border border-gray-100" style={{backgroundImage: `url('${player.img}')`}}></div>
                                        {/* Name & Sponsors */}
                                        <div className="flex flex-col justify-center overflow-hidden">
                                            <div className="flex items-baseline gap-1.5 mb-1 truncate">
                                                <span className="font-bold text-gray-900 leading-none truncate group-hover:underline">{player.name}</span>
                                                <span className="text-[10px] text-gray-400 font-medium leading-none hidden sm:inline-block">{player.enName}</span>
                                            </div>
                                            <div className="flex gap-2 flex-wrap">
                                                {player.sponsors.map(sp => (
                                                    <span key={sp} className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{sp}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Score */}
                                    <div className="flex flex-col items-end shrink-0 pl-2">
                                        <span className="text-[9px] font-bold text-gray-400 tracking-wider">POINTS</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className={`text-xl md:text-2xl font-black tracking-tighter ${player.rank === 1 ? 'text-[#EAA51D]' : player.rank === 2 ? 'text-[#7C8B9D]' : player.rank === 3 ? 'text-[#A06B60]' : player.rank >= 6 ? 'text-[#6B6B6B]' : 'text-gray-900'}`}>{player.pts}</span>
                                            {/* Trend Icon */}
                                            <div className="w-4 flex justify-center">
                                                {player.trend === 'up' && <span className="text-red-500 font-bold text-sm">↑</span>}
                                                {player.trend === 'down' && <span className="text-blue-500 font-bold text-sm">↓</span>}
                                                {player.trend === 'same' && <span className="text-green-500 font-bold text-sm">→</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: 대회 리더보드 */}
                    <div className="w-full lg:w-[320px] shrink-0 bg-white rounded-[8px] p-6 border border-gray-100 shadow-sm flex flex-col">
                        <h3 className="text-xl font-black text-gray-900 mb-1">대회 리더보드</h3>
                        <p className="text-sm font-bold text-gray-500 mb-8">제11전 이시카와 챔피언십</p>
                        
                        <div className="flex flex-col gap-6">
                            {/* 1st Place */}
                            <div className="flex gap-4 items-start relative pb-6 border-b border-gray-100">
                                <div className="text-5xl font-black text-[#B8860B] mt-2">1</div>
                                <div className="absolute -top-3 -left-2 text-3xl z-10 rotate-[-15deg]">👑</div>
                                <div className="w-20 h-24 rounded bg-cover bg-center shadow-sm shrink-0 ml-2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300')"}}></div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 text-lg">아리하라 류타</span>
                                    <span className="text-xs text-gray-400 mb-2">0003 | Ryuta Arihara</span>
                                    <span className="text-[10px] text-[#B8860B] font-bold">unicorn</span>
                                    <span className="text-[10px] text-[#B8860B] font-bold">L-style</span>
                                    <span className="text-[10px] text-[#B8860B] font-bold">SHADE</span>
                                </div>
                            </div>
                            
                            {/* 2nd Place */}
                            <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-[8px] transition-colors">
                                <div className="text-3xl font-black text-gray-400 w-8 text-center">2</div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900">시마노우치 유키</span>
                                    <span className="text-xs text-gray-400">0015 | Yuki Shimanouchi</span>
                                </div>
                            </div>
                            
                            {/* 3rd Place */}
                            <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-[8px] transition-colors">
                                <div className="text-3xl font-black text-[#CD7F32] w-8 text-center">3</div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900">하마다 아키노리</span>
                                    <span className="text-xs text-gray-400">1046 | Akinori Hamada</span>
                                </div>
                            </div>

                            {/* 3rd Place (Tied) */}
                            <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-[8px] transition-colors">
                                <div className="text-3xl font-black text-[#CD7F32] w-8 text-center">3</div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900">무라마츠 하루키</span>
                                    <span className="text-xs text-gray-400">0001 | Haruki Muramatsu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Media */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">미디어</h3>
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-900">전체보기 &gt;</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 relative aspect-video rounded-[8px] overflow-hidden group cursor-pointer shadow-sm">
                            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563261763-7140889f4b3f?q=80&w=800')"}}></div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white pl-1">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">LIVE</span>
                                <h4 className="text-white font-bold text-lg">제11전 이시카와 결승전 하이라이트</h4>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[1, 2].map(item => (
                                <div key={item} className="flex bg-white rounded-[8px] overflow-hidden border border-gray-200 shadow-sm cursor-pointer group">
                                    <div className="w-1/3 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1582236528775-6e54f8e658ec?q=80&w=200')"}}></div>
                                    <div className="w-2/3 p-3 flex flex-col justify-between">
                                        <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:underline">아베 유타로, 극적인 역전승으로 2연패 달성</h4>
                                        <span className="text-xs text-gray-400">2026.08.12</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Sponsor List */}
                <section className="mb-12">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-xl font-bold text-gray-900">SPONSORS</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {["PHOENIXDARTS", "TRiNiDAD", "CONDOR", "L-style", "DYNASTY", "TARGET"].map((sp, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 h-16 flex items-center justify-center rounded-[8px] text-gray-500 font-bold text-sm shadow-sm hover:border-gray-400 cursor-pointer transition-colors">
                                {sp}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            </div>
        </main>
    );
}
