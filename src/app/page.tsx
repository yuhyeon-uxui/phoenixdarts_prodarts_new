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
];

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

    const [newsTab, setNewsTab] = useState("전체");
    const [rankTab, setRankTab] = useState("남자");

    return (
        <main className="flex flex-col w-full font-sans bg-gray-100 min-h-screen text-gray-900">
            {/* 1. Main Key Visual (Dissolve Carousel) */}
            <section className="relative w-full h-[500px] overflow-hidden bg-black">
                {heroSlides.map((slide, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${activeHero === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('${slide.image}')` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-16 left-8 md:left-20 z-20">
                            <h2 className="text-white text-4xl md:text-5xl font-bold whitespace-pre-line leading-tight">{slide.title}</h2>
                        </div>
                    </div>
                ))}
            </section>

            <div className="max-w-[1200px] mx-auto w-full px-4 flex flex-col gap-16 py-12">
                
                {/* 2. NEXT PERFECT (Swipe) */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">다음 대회 안내</h3>
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-900">전체보기 &gt;</button>
                    </div>
                    <div className="relative group">
                        <div ref={nextMatchRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                            {[1, 2, 3, 4].map(item => (
                                <div key={item} className="snap-start shrink-0 w-[300px] bg-white rounded-[8px] overflow-hidden shadow-sm border border-gray-200 cursor-pointer">
                                    <div className="h-40 bg-gray-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=400')"}}></div>
                                    <div className="p-5">
                                        <div className="text-xs font-bold text-red-600 mb-1">D-10</div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">제12전 하마마츠</h4>
                                        <p className="text-sm text-gray-500">2026.08.29 액트시티</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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

                {/* 4. News */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <div className="flex items-center gap-6">
                            <h3 className="text-2xl font-bold text-gray-900">NEWS</h3>
                            <div className="flex gap-4">
                                {['전체', '대회', '공지', '업데이트'].map(tab => (
                                    <button 
                                        key={tab} 
                                        onClick={() => setNewsTab(tab)}
                                        className={`text-sm font-bold pb-1 border-b-2 transition-colors ${newsTab === tab ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-900">리뷰 전체보기 &gt;</button>
                    </div>
                    <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm p-4">
                        {[1, 2, 3, 4].map(item => (
                            <div key={item} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0 cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">대회</span>
                                    <p className="text-gray-800 font-medium group-hover:underline">[제11전 이시카와] 남자부/여자부 결승전 결과 안내</p>
                                </div>
                                <span className="text-sm text-gray-400">2026.08.10</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Ranking (Full image cards with gradient) */}
                <section>
                    <div className="flex justify-between items-end mb-6">
                        <div className="flex items-center gap-6">
                            <h3 className="text-2xl font-bold text-gray-900">선수 랭킹</h3>
                            <div className="flex gap-4">
                                {['남자', '여자', '브랜드'].map(tab => (
                                    <button 
                                        key={tab} 
                                        onClick={() => setRankTab(tab)}
                                        className={`text-sm font-bold pb-1 border-b-2 transition-colors ${rankTab === tab ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-900">전체보기 &gt;</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {rankingData.map((player) => (
                            <div key={player.rank} className="relative w-full aspect-[3/4] rounded-[8px] overflow-hidden group cursor-pointer shadow-sm">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url('${player.img}')`}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs font-black px-2 py-1 rounded">
                                    TOP {player.rank}
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4">
                                    <h4 className="text-white font-bold text-lg mb-1">{player.name}</h4>
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-300 text-xs">{player.enName}</span>
                                        <span className="text-red-400 font-bold text-sm">{player.pts} Pts</span>
                                    </div>
                                </div>
                            </div>
                        ))}
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
        </main>
    );
}
