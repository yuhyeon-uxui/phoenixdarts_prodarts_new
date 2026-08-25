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
const rankingDataWomen = [
    { rank: 1, name: "오오시로 아키호", enName: "Akiho Oshiro", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300", sponsors: ["TRiNiDAD", "L-style"], pts: "1,200", trend: "up" },
    { rank: 2, name: "사토 카스미", enName: "Kasumi Sato", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300", sponsors: ["TARGET", "CONDOR"], pts: "1,150", trend: "same" },
    { rank: 3, name: "오오우치 마유미", enName: "Mayumi Ouchi", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300", sponsors: ["DYNASTY", "L-style"], pts: "1,080", trend: "down" },
    { rank: 4, name: "스즈키 미쿠", enName: "Miku Suzuki", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300", sponsors: ["TARGET"], pts: "950", trend: "up" },
    { rank: 5, name: "이와타 나츠미", enName: "Natsumi Iwata", img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=300", sponsors: ["COSMO DARTS"], pts: "920", trend: "same" },
    { rank: 6, name: "야마자키 유코", enName: "Yuko Yamazaki", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300", sponsors: ["TRiNiDAD"], pts: "890", trend: "down" },
    { rank: 7, name: "호시노 리에", enName: "Rie Hoshino", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300", sponsors: ["TARGET"], pts: "850", trend: "same" },
    { rank: 8, name: "시미즈 사오리", enName: "Saori Shimizu", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300", sponsors: ["L-style"], pts: "820", trend: "up" },
    { rank: 9, name: "마츠모토 메구미", enName: "Megumi Matsumoto", img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=300", sponsors: ["TRiNiDAD"], pts: "790", trend: "down" },
    { rank: 10, name: "카와카미 마리", enName: "Mari Kawakami", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300", sponsors: ["DYNASTY"], pts: "750", trend: "same" },
];

const rankingDataBrand = [
    { rank: 1, name: "TRiNiDAD", enName: "트리니다드", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "5,430", trend: "same" },
    { rank: 2, name: "TARGET", enName: "타겟", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "4,920", trend: "up" },
    { rank: 3, name: "DYNASTY", enName: "다이너스티", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "4,510", trend: "down" },
    { rank: 4, name: "COSMO DARTS", enName: "코스모 다트", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "4,100", trend: "up" },
    { rank: 5, name: "L-style", enName: "엘스타일", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "3,800", trend: "same" },
    { rank: 6, name: "CONDOR", enName: "콘도르", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "3,500", trend: "down" },
    { rank: 7, name: "unicorn", enName: "유니콘", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "2,900", trend: "up" },
    { rank: 8, name: "Monster", enName: "몬스터", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "2,500", trend: "down" },
    { rank: 9, name: "Winmau", enName: "윈마우", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "2,100", trend: "same" },
    { rank: 10, name: "Harrows", enName: "해로우즈", img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=300", sponsors: ["SPONSOR"], pts: "1,800", trend: "up" },
];
const newsData = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    category: i % 3 === 0 ? 'Notice' : i % 3 === 1 ? 'Tournament' : 'Event',
    title: `PERFECT 2026 제${11 + i}전 이시카와 대회 결과 안내`,
    desc: '열띤 경쟁 속에서 펼쳐진 이번 이시카와 대회에서 새로운 챔피언이 탄생했습니다. 경기 내용 및 자세한 결과...',
    date: `2026.08.${30 - i}`,
    image: i % 2 === 0 ? '/next_perfect_poster.png' : undefined
}));

const tourScheduleData = [
    { round: "개막전", location: "요코하마", date: "02.14", day: "토", grade: "PT300", hasMen: true, hasWomen: true },
    { round: "제2전", location: "시즈오카", date: "03.14", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제3전", location: "요코하마", date: "04.11", day: "토", grade: "PT300", hasMen: true, hasWomen: true },
    { round: "제4전", location: "니가타", date: "04.18", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제5전", location: "센다이", date: "05.09", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제6전", location: "도치기", date: "05.23", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제7전", location: "야마구치", date: "06.06", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제8전", location: "후쿠시마", date: "06.28", day: "일", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제9전", location: "삿포로", date: "07.19", day: "일", grade: "Extension", hasMen: true, hasWomen: true },
    { round: "제10전", location: "고베", date: "07.25", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제11전", location: "이시카와", date: "08.01", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제12전", location: "하마마츠", date: "08.29", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제13전", location: "교토", date: "09.05", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제14전", location: "후쿠오카", date: "09.26", day: "토", grade: "Extension", hasMen: true, hasWomen: true },
    { round: "제15전", location: "시즈오카", date: "10.10", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제16전", location: "군마", date: "10.24", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "제17전", location: "요코하마", date: "10.31", day: "토", grade: "PT300", hasMen: true, hasWomen: true },
    { round: "제18전", location: "이바라키", date: "11.28", day: "토", grade: "PT200", hasMen: true, hasWomen: true },
    { round: "최종전", location: "요코하마", date: "12.19", day: "토", grade: "PT300", hasMen: true, hasWomen: true },
];

const proTestData = [
    { location: "도쿄", date: "2026.03.28", day: "토" },
    { location: "군마", date: "2026.04.04", day: "토" },
    { location: "이바라키", date: "2026.04.25", day: "토" },
    { location: "센다이", date: "2026.04.26", day: "일" },
    { location: "삿포로", date: "2026.06.14", day: "일" },
    { location: "이시카와", date: "2026.07.04", day: "토" },
    { location: "오사카", date: "2026.07.05", day: "일" },
    { location: "오카야마", date: "2026.07.12", day: "일" },
    { location: "나고야", date: "2026.08.02", day: "일" },
    { location: "군마", date: "2026.08.08", day: "토" },
    { location: "후쿠오카", date: "2026.09.06", day: "일" },
    { location: "시즈오카", date: "2026.09.13", day: "일" },
    { location: "도쿄", date: "2026.10.03", day: "토" },
    { location: "이바라키", date: "2026.10.17", day: "토" },
    { location: "도쿄", date: "2026.11.14", day: "토" },
    { location: "오키나와", date: "2026.12.05", day: "토" },
];

export default function Home() {
    const [now, setNow] = useState<Date | null>(null);

    const nextTourIdx = React.useMemo(() => {
        if (!now) return -1;
        return tourScheduleData.findIndex(item => {
            const parts = item.date.split('.');
            const itemDate = new Date(2026, parseInt(parts[0]) - 1, parseInt(parts[1]), 23, 59, 59);
            return itemDate > now;
        });
    }, [now]);

    useEffect(() => {
        setNow(new Date());
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // 2. Main Hero State
    const [activeHero, setActiveHero] = useState(0);
    const [heroHover, setHeroHover] = useState(false);
    const [isHeroPaused, setIsHeroPaused] = useState(false);
    const heroSlides = [
        { title: "2026 PERFECT 챔피언십\n결승전 LIVE", image: "/hero_bg_1.png?v=3" },
        { title: "오키나와 에어리어\n차세대 선수 결정전", image: "/hero_bg_2.png?v=2" }
    ];

    useEffect(() => {
        if (isHeroPaused) return;
        const interval = setInterval(() => {
            setActiveHero(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [heroSlides.length, isHeroPaused]);

    // 2. Next Match Carousel
    const nextMatchRef = useRef<HTMLDivElement>(null);
    const [activeNextMatchTab, setActiveNextMatchTab] = useState(0);

    const onNextMatchScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const width = el.clientWidth;
        if (width > 0) {
            setActiveNextMatchTab(Math.round(el.scrollLeft / width));
        }
    };

    // 3. News Carousel Drag & Scroll
    const newsScrollRef = useRef<HTMLDivElement>(null);
    const winnersScrollRef = useRef<HTMLDivElement>(null);
    const [activeWinnerTab, setActiveWinnerTab] = useState(0);

    const onWinnersScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const width = el.clientWidth;
        if (width > 0) {
            setActiveWinnerTab(Math.round(el.scrollLeft / width));
        }
    };

    useEffect(() => {
        const setupDrag = (slider: HTMLDivElement | null) => {
            if (!slider) return null;
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
        };

        const cleanupNews = setupDrag(newsScrollRef.current);
        const cleanupWinners = setupDrag(winnersScrollRef.current);
        const cleanupNextMatch = setupDrag(nextMatchRef.current);

        return () => {
            if (cleanupNews) cleanupNews();
            if (cleanupWinners) cleanupWinners();
            if (cleanupNextMatch) cleanupNextMatch();
        };
    }, []);

    const scrollNewsLeft = () => {
        if (newsScrollRef.current) newsScrollRef.current.scrollBy({ left: -276, behavior: 'smooth' });
    };
    const scrollNewsRight = () => {
        if (newsScrollRef.current) newsScrollRef.current.scrollBy({ left: 276, behavior: 'smooth' });
    };

    const [newsTab, setNewsTab] = useState("전체 보기 (ALL)");
    const [rankTab, setRankTab] = useState("남자");
    const [brandTab, setBrandTab] = useState("BARREL");

    const activeRankingData = rankTab === '남자' ? rankingData : rankTab === '여자' ? rankingDataWomen : rankingDataBrand;
    const filteredNews = newsTab === "전체 보기 (ALL)" ? newsData : newsData.filter(n => `#${n.category}` === newsTab);

    return (
        <main className="flex flex-col w-full font-sans bg-gray-100 min-h-screen text-gray-900">
            <div className="max-w-[1280px] mx-auto w-full px-4 lg:px-[60px] pt-10">
                {/* HERO SECTION - SIDE-BY-SIDE */}
                <FadeUp>
<section className="flex flex-col lg:flex-row gap-6 mb-16">
                    {/* Left Card: Main Hero (Crossfade Slider) */}
                    <div 
                        className="w-full lg:flex-1 rounded-[4px] bg-gray-900 relative overflow-hidden h-[500px] flex flex-col justify-center shadow-lg"
                        onMouseEnter={() => setHeroHover(true)}
                        onMouseLeave={() => setHeroHover(false)}
                    >
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
                                    <button className="bg-red-600 hover:bg-red-700 transition text-white font-bold px-6 py-3 rounded-[4px] flex items-center gap-2 w-fit shadow-lg shadow-red-500/30 text-sm">
                                        더 알아보기 <span>&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* Pagination indicator */}
                        <div className="absolute bottom-6 left-10 flex items-center gap-2 z-20">
                            {heroSlides.map((_, idx) => (
                                <div key={idx} onClick={() => setActiveHero(idx)} className={`h-1.5 rounded-[4px] cursor-pointer transition-all ${activeHero === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}></div>
                            ))}
                            <button onClick={() => setIsHeroPaused(!isHeroPaused)} className="text-white ml-2 hover:text-gray-300 transition-colors focus:outline-none flex items-center justify-center">
                                {isHeroPaused ? (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M8 5v14l11-7z"/></svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                )}
                            </button>
                        </div>

                        {/* Left/Right Arrows (visible on hover) */}
                        <div className={`absolute inset-y-0 right-0 w-24 flex flex-col items-end justify-center pr-6 gap-3 transition-opacity duration-300 z-50 pointer-events-none ${heroHover ? 'opacity-100' : 'opacity-0'}`}>
                            <button 
                                onClick={() => setActiveHero((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                                className="w-12 h-12 rounded-[2px] bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors pointer-events-auto shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>
                            <button 
                                onClick={() => setActiveHero((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                                className="w-12 h-12 rounded-[2px] bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors pointer-events-auto shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Card: NEXT PERFECT */}
                    <div className="w-full lg:w-[320px] shrink-0 h-[500px] rounded-[4px] relative p-6 shadow-sm flex flex-col bg-gray-50 border border-gray-200 overflow-hidden group">
                        <div className="mb-4 flex justify-between items-center shrink-0">
                            <h3 className="text-lg font-black text-black tracking-wider">NEXT PERFECT</h3>
                            <button className="bg-gray-900 text-white hover:bg-black text-[10px] font-bold px-4 py-1.5 rounded-[4px] transition-colors z-10">전체일정</button>
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                            onClick={() => {
                                const el = nextMatchRef.current;
                                if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                            }}
                            className="absolute left-4 top-[220px] w-8 h-8 rounded-[2px] bg-black/40 text-white flex items-center justify-center hover:bg-black/60 z-20 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0"
                            style={{ display: activeNextMatchTab === 0 ? 'none' : 'flex' }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                        </button>
                        <button 
                            onClick={() => {
                                const el = nextMatchRef.current;
                                if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
                            }}
                            className="absolute right-4 top-[220px] w-8 h-8 rounded-[2px] bg-black/40 text-white flex items-center justify-center hover:bg-black/60 z-20 transition-colors opacity-0 group-hover:opacity-100"
                            style={{ display: activeNextMatchTab === 2 ? 'none' : 'flex' }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                        </button>

                        <div 
                            className="flex-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex w-full cursor-grab active:cursor-grabbing select-none touch-pan-x gap-6 relative z-10"
                            ref={nextMatchRef}
                            onScroll={onNextMatchScroll}
                        >
                            {[
                                { tour: "2026 PERFECT TOUR", title: "제12전 하마마츠", date: "2026. 08. 29 (SUN) 10:00 / 액트시티 하마마츠", targetDate: "2026-08-29T10:00:00", img: "/next_perfect_poster.png?v=2", d: "08", h: "19", m: "48", s: "54" },
                                { tour: "2026 PERFECT TOUR", title: "제13전 도쿄", date: "2026. 09. 15 (SUN) 10:00 / 도쿄 빅사이트", targetDate: "2026-09-15T10:00:00", img: "/next_perfect_poster.png?v=2", d: "25", h: "09", m: "12", s: "30" },
                                { tour: "2026 PERFECT TOUR", title: "제14전 오사카", date: "2026. 10. 10 (SAT) 10:00 / 인텍스 오사카", targetDate: "2026-10-10T10:00:00", img: "/next_perfect_poster.png?v=2", d: "50", h: "14", m: "05", s: "11" },
                            ].map((match, idx) => {
                                let d = match.d, h = match.h, m = match.m, s = match.s;
                                if (now) {
                                    const diff = Math.max(0, new Date(match.targetDate).getTime() - now.getTime());
                                    d = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                                    h = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
                                    m = Math.floor((diff / 1000 / 60) % 60).toString().padStart(2, '0');
                                    s = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
                                }

                                const titleParts = match.title.split(' ');
                                const redPart = titleParts[0];
                                const blackPart = titleParts.slice(1).join(' ');

                                return (
                                <div key={idx} className="w-full shrink-0 snap-start flex flex-col pointer-events-none">
                                    <div className="text-left mb-4 shrink-0">
                                        <div className="text-gray-500 font-bold text-[13px] italic mb-1">{match.tour}</div>
                                        <h4 className="text-[26px] font-black text-black mb-2">
                                            <span className="text-red-600 mr-1.5">{redPart}</span>
                                            {blackPart}
                                        </h4>
                                        <p className="text-gray-500 text-[13px] font-medium">{match.date}</p>
                                    </div>

                                    <div className="w-full h-[180px] rounded-[4px] mb-4 bg-cover bg-center shrink-0 shadow-sm" style={{backgroundImage: `url('${match.img}')`}}></div>
                                    
                                    {/* Countdown Timer */}
                                    <div className="flex justify-center gap-2 shrink-0 pb-2">
                                        <div className="text-center w-[52px]">
                                            <div className="text-[10px] text-gray-500 mb-1.5 font-bold">DAY</div>
                                            <div className="bg-white rounded-[4px] py-2 text-xl font-black text-gray-900 border border-gray-200 shadow-sm">{d}</div>
                                        </div>
                                        <div className="text-xl font-bold text-gray-300 mt-5">:</div>
                                        <div className="text-center w-[52px]">
                                            <div className="text-[10px] text-gray-500 mb-1.5 font-bold">HOUR</div>
                                            <div className="bg-white rounded-[4px] py-2 text-xl font-black text-gray-900 border border-gray-200 shadow-sm">{h}</div>
                                        </div>
                                        <div className="text-xl font-bold text-gray-300 mt-5">:</div>
                                        <div className="text-center w-[52px]">
                                            <div className="text-[10px] text-gray-500 mb-1.5 font-bold">MIN</div>
                                            <div className="bg-white rounded-[4px] py-2 text-xl font-black text-gray-900 border border-gray-200 shadow-sm">{m}</div>
                                        </div>
                                        <div className="text-xl font-bold text-gray-300 mt-5">:</div>
                                        <div className="text-center w-[52px]">
                                            <div className="text-[10px] text-gray-500 mb-1.5 font-bold">SEC</div>
                                            <div className="bg-white rounded-[4px] py-2 text-xl font-black text-gray-900 border border-gray-200 shadow-sm">{s}</div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                        
                        {/* Pagination indicator (dots) */}
                        <div className="flex justify-center gap-2 mt-6 shrink-0 relative z-10">
                            {[0, 1, 2].map((idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => {
                                        const el = nextMatchRef.current;
                                        if (el && el.children[idx]) {
                                            (el.children[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                                        }
                                    }}
                                    className={`w-2 h-2 rounded-[4px] transition-all duration-300 ${activeNextMatchTab === idx ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
</FadeUp>
                
                {/* Inner Content Wrapper */}
                <div className="flex flex-col gap-16 pb-12">

                {/* 3. Event Banner */}
                <FadeUp>
<section>
                    <div className="w-full h-[140px] rounded-[4px] bg-blue-900 overflow-hidden relative cursor-pointer shadow-sm">
                        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: "url('https://images.unsplash.com/photo-1572620409054-d830b809623b?q=80&w=1200')"}}></div>
                        <div className="absolute inset-0 flex items-center justify-between px-10">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">신규 프로 회원가입 이벤트</h3>
                                <p className="text-sm opacity-80">지금 가입하고 피닉스다트 공식 굿즈 받자!</p>
                            </div>
                            <button className="bg-white text-blue-900 px-6 py-2 rounded-[4px] font-bold text-sm">자세히 보기</button>
                        </div>
                    </div>
                </section>
</FadeUp>

                {/* 4. News (New Layout: Side Title & Horizontal Cards) */}
                <FadeUp>
<section className="flex flex-col lg:flex-row gap-6">
                    {/* Left Title & Filters */}
                    <div className="w-full lg:w-[256px] shrink-0 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            NEWS
                        </h3>
                        
                        <div className="flex flex-col gap-4">
                            {['전체 보기 (ALL)', '#Tournament', '#Notice', '#Event'].map(tab => (
                                <button 
                                    key={tab}
                                    onClick={() => setNewsTab(tab)}
                                    className={`text-left transition-colors w-fit ${newsTab === tab ? 'text-gray-900 border-b-2 border-gray-900 pb-1 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        
                        <button className="text-sm font-bold text-gray-400 hover:text-gray-900 flex items-center gap-1 transition-colors mt-auto mb-4 w-fit">
                            MORE
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>

                    {/* Right Horizontal Scroll Cards */}
                    <div className="flex-1 relative min-w-0">
                        <div 
                            className="overflow-x-auto scrollbar-hide pb-4 cursor-grab flex gap-4 w-full select-none touch-pan-x"
                            ref={newsScrollRef}
                        >
                            {/* Inner wide container for cards */}
                            <div className="flex gap-4 w-max shrink-0">
                                {filteredNews.map((news) => (
                                    <div key={news.id} className="w-[260px] h-[400px] bg-white border border-gray-200 rounded-[4px] flex flex-col hover:shadow-md transition-shadow group overflow-hidden">
                                        <div className="p-6 flex flex-col flex-1 pointer-events-none select-none">
                                            <div>
                                                <span className={`text-[10px] font-bold px-2 py-1 rounded-[2px] inline-block mb-4 text-white ${news.category === 'Notice' ? 'bg-blue-600' : news.category === 'Tournament' ? 'bg-red-600' : 'bg-green-600'}`}>
                                                    {news.category}
                                                </span>
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:underline line-clamp-2 leading-snug">{news.title}</h4>
                                                {!news.image && <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{news.desc}</p>}
                                            </div>
                                            <span className="text-sm text-gray-400 font-medium mt-auto">{news.date}</span>
                                        </div>
                                        {news.image && (
                                            <div className="h-[200px] w-full shrink-0 bg-cover bg-center pointer-events-none" style={{backgroundImage: `url('${news.image}')`}}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scroll Arrows (Always visible) */}
                        <div className="absolute right-0 top-0 bottom-4 w-32 bg-gradient-to-l from-gray-100 via-gray-100/70 to-transparent flex flex-col items-end justify-center pr-4 gap-2 pointer-events-none z-50">
                            <button 
                                onClick={scrollNewsLeft}
                                className="w-12 h-12 rounded-[2px] bg-[#4A4A4A] text-white flex items-center justify-center hover:bg-black transition-colors pointer-events-auto shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>
                            <button 
                                onClick={scrollNewsRight}
                                className="w-12 h-12 rounded-[2px] bg-[#4A4A4A] text-white flex items-center justify-center hover:bg-black transition-colors pointer-events-auto shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6"><path d="M9 18l6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </section>
</FadeUp>

                {/* 5. Ranking (New Layout from Image) */}
                <FadeUp>
<section className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-16">
                    {/* Left: 선수 랭킹 */}
                    <div className="flex-1 flex flex-col">
                        {/* Title Row */}
                        <div className="flex items-center justify-between mb-4 px-1">
                            <h3 className="text-2xl font-bold text-gray-900">RANKING</h3>
                            <button className="text-sm font-bold text-gray-400 hover:text-gray-900 flex items-center gap-1 transition-colors">
                                MORE
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M9 18l6-6-6-6" /></svg>
                            </button>
                        </div>
                        
                        {/* Tabs Row */}
                        <div className="flex items-center mb-4 overflow-x-auto scrollbar-hide pb-1 px-1">
                            <div className="flex gap-2 shrink-0">
                                {['남자', '여자', '브랜드'].map((tab) => (
                                    <button 
                                        key={tab} 
                                        onClick={() => setRankTab(tab)}
                                        className={`px-4 py-1 rounded-[2px] text-[13px] font-bold border transition-colors ${rankTab === tab ? 'bg-[#222] text-white border-[#222]' : 'bg-transparent text-gray-500 border-gray-300 hover:border-gray-400 hover:text-gray-700'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Brand Sub Tabs */}
                            {rankTab === '브랜드' && (
                                <div className="flex items-center gap-2 shrink-0 border-l border-gray-300 pl-4 ml-4">
                                    {['BARREL', 'FLIGHT', 'APPAREL', 'CO-CREATORS'].map(sub => (
                                        <button 
                                            key={sub}
                                            onClick={() => setBrandTab(sub)}
                                            className={`px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors ${brandTab === sub ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* 2-column list layout */}
                        <div className="bg-white rounded-[4px] p-4 sm:p-6 shadow-sm border border-gray-100 flex-1">
                            <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-5 xl:grid-flow-col gap-x-12 gap-y-0 h-full">
                            {activeRankingData.map((item, idx) => (
                                <div key={item.rank} className={`flex items-center justify-between py-4 px-2 ${idx === 4 || idx === 9 ? '' : 'border-b border-gray-100'} hover:bg-gray-50 transition-colors cursor-pointer group`}>
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        {/* Rank Number */}
                                        <div className={`w-6 text-center font-black text-xl ${item.rank === 1 ? 'text-[#EAA51D]' : item.rank === 2 ? 'text-[#7C8B9D]' : item.rank === 3 ? 'text-[#A06B60]' : item.rank >= 6 ? 'text-[#6B6B6B]' : 'text-gray-900'}`}>{item.rank}</div>
                                        {/* Profile or Brand Logo */}
                                        <div className={`h-12 rounded-[4px] bg-cover bg-center shrink-0 border border-gray-100 ${rankTab === '브랜드' ? 'w-12 bg-contain bg-no-repeat bg-white' : 'w-12'}`} style={{backgroundImage: `url('${item.img}')`}}></div>
                                        {/* Name & Sponsors */}
                                        <div className="flex flex-col justify-center overflow-hidden flex-1 min-w-0">
                                            <div className="flex items-baseline gap-1.5 mb-1 w-full overflow-hidden">
                                                <span className="font-bold text-gray-900 leading-none shrink-0 group-hover:underline">{item.name}</span>
                                                {rankTab !== '브랜드' && (
                                                    <span className="text-[10px] text-gray-400 font-medium leading-none hidden sm:block truncate">{item.enName}</span>
                                                )}
                                            </div>
                                            {rankTab !== '브랜드' && (
                                                <div className="flex gap-1.5 flex-wrap">
                                                    {item.sponsors.map((sp: string) => (
                                                        <span key={sp} className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-[2px] font-bold uppercase tracking-wider">{sp}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Score */}
                                    <div className="flex flex-col items-end shrink-0 pl-2">
                                        <span className="text-[9px] font-bold text-gray-400 tracking-wider">POINTS</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className={`text-xl md:text-2xl font-black tracking-tighter ${item.rank === 1 ? 'text-[#EAA51D]' : item.rank === 2 ? 'text-[#7C8B9D]' : item.rank === 3 ? 'text-[#A06B60]' : item.rank >= 6 ? 'text-[#6B6B6B]' : 'text-gray-900'}`}>{item.pts}</span>
                                            {/* Trend Icon */}
                                            {item.trend === 'up' ? (
                                                <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                            ) : item.trend === 'down' ? (
                                                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                            ) : (
                                                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: 대회 리더보드 */}
                    <div className="w-full lg:w-[320px] shrink-0 flex flex-col pt-1 lg:pl-4">
                        <div className="mb-6 px-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">PREVIOUS WINNER</h3>
                            <p className="text-sm font-bold text-gray-500">제11전 이시카와 챔피언십</p>
                        </div>
                        
                        <div className="flex flex-col">
                            {/* MEN */}
                            <div className="flex flex-col gap-2 pb-5 border-b border-gray-200 mb-5">
                                <h4 className="text-[10px] font-black tracking-widest text-gray-400 mb-1 ml-2">MEN</h4>
                                {[
                                    { rank: 1, name: "아리하라 류타", enName: "Ryuta Arihara", no: "0003", color: "text-[#B8860B]", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" },
                                    { rank: 2, name: "시마노우치 유키", enName: "Yuki Shimanouchi", no: "0015", color: "text-gray-400", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300" },
                                    { rank: 3, name: "하마다 아키노리", enName: "Akinori Hamada", no: "1046", color: "text-[#CD7F32]", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300" },
                                    { rank: 3, name: "무라마츠 하루키", enName: "Haruki Muramatsu", no: "0001", color: "text-[#CD7F32]", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300" },
                                ].map((p, idx) => (
                                    <div key={idx} className="flex gap-3 items-center pointer-events-none py-2 px-2 -mx-2 rounded-[4px] relative group">
                                        <div className={`text-xl font-black w-6 text-center shrink-0 ${p.color}`}>{p.rank}</div>
                                        <div className="w-8 h-8 rounded-[4px] bg-cover bg-center border border-gray-200 shrink-0" style={{backgroundImage: `url('${p.img}')`}}></div>
                                        <div className="flex flex-col overflow-hidden">
                                            <span className="font-bold text-gray-900 truncate text-[13px]">{p.name}</span>
                                            <span className="text-[9px] text-gray-400 truncate leading-tight">{p.no} | {p.enName}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* WOMEN */}
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[10px] font-black tracking-widest text-gray-400 mb-1 ml-2">WOMEN</h4>
                                {[
                                    { rank: 1, name: "오오시로 아키호", enName: "Akiho Oshiro", no: "0022", color: "text-[#B8860B]", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300" },
                                    { rank: 2, name: "사토 카스미", enName: "Kasumi Sato", no: "0089", color: "text-gray-400", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300" },
                                    { rank: 3, name: "오오우치 마유미", enName: "Mayumi Ouchi", no: "0077", color: "text-[#CD7F32]", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300" },
                                    { rank: 3, name: "스즈키 미쿠", enName: "Miku Suzuki", no: "0004", color: "text-[#CD7F32]", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300" },
                                ].map((p, idx) => (
                                    <div key={idx} className="flex gap-3 items-center pointer-events-none py-2 px-2 -mx-2 rounded-[4px] relative group">
                                        <div className={`text-xl font-black w-6 text-center shrink-0 ${p.color}`}>{p.rank}</div>
                                        <div className="w-8 h-8 rounded-[4px] bg-cover bg-center border border-gray-200 shrink-0" style={{backgroundImage: `url('${p.img}')`}}></div>
                                        <div className="flex flex-col overflow-hidden">
                                            <span className="font-bold text-gray-900 truncate text-[13px]">{p.name}</span>
                                            <span className="text-[9px] text-gray-400 truncate leading-tight">{p.no} | {p.enName}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
</FadeUp>
                {/* 5.5 Schedule & Pro Test */}
                <FadeUp>
                <section className="mb-16">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">2026 SCHEDULE</h3>
                            <p className="text-sm font-bold text-gray-500 mt-1">투어 일정 및 프로테스트 정보</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 h-[400px]">
                        {/* Left: Tour Schedule */}
                        <div className="flex-1 bg-white rounded-[4px] border border-gray-200 shadow-sm flex flex-col overflow-hidden h-full">
                            {nextTourIdx !== -1 ? (
                                <div className="p-3 border-b border-red-200 bg-red-50 shrink-0 shadow-[0_1px_3px_rgba(239,68,68,0.1)] z-10 relative">
                                    <div className="flex items-center gap-2 mb-1.5 ml-1">
                                        <span className="text-[10px] font-black bg-red-600 text-white px-1.5 py-0.5 rounded-[2px] animate-pulse">UPCOMING</span>
                                        <span className="text-[11px] font-bold text-gray-500">2026 PERFECT 투어 일정</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1 px-1 pr-[14px]">
                                        <div className="flex items-center gap-4 flex-1">
                                            <span className="w-12 text-sm font-bold text-red-600">{tourScheduleData[nextTourIdx].round}</span>
                                            <span className="w-20 font-bold text-red-600">{tourScheduleData[nextTourIdx].location}</span>
                                            <span className="w-20 text-sm font-medium text-red-500">
                                                {tourScheduleData[nextTourIdx].date} <span className="text-[10px] ml-0.5">{tourScheduleData[nextTourIdx].day}</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`w-20 text-center text-[10px] font-bold px-2 py-1 rounded-[2px] ${tourScheduleData[nextTourIdx].grade === 'PT300' ? 'bg-black text-white' : tourScheduleData[nextTourIdx].grade === 'PT200' ? 'bg-gray-200 text-gray-600' : 'bg-[#EAA51D] text-white'}`}>
                                                {tourScheduleData[nextTourIdx].grade}
                                            </span>
                                            <div className="w-8 flex gap-1 justify-center">
                                                {tourScheduleData[nextTourIdx].hasMen && <div className="w-2.5 h-2.5 rounded-[2px] bg-blue-500"></div>}
                                                {tourScheduleData[nextTourIdx].hasWomen && <div className="w-2.5 h-2.5 rounded-[2px] bg-pink-500"></div>}
                                            </div>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-red-400 ml-2 shrink-0"><path d="M9 18l6-6-6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 border-b border-gray-200 bg-gray-50 shrink-0">
                                    <h4 className="font-bold text-gray-900">2026 PERFECT 투어 일정</h4>
                                </div>
                            )}
                            <div className="overflow-y-auto flex-1 p-2 custom-scrollbar pr-1">
                                {tourScheduleData.map((item, idx) => {
                                    return (
                                        <div key={idx} className="flex items-center justify-between py-2.5 px-3 rounded-[4px] transition-colors border-b last:border-0 group cursor-pointer hover:bg-gray-50 border-gray-50">
                                            <div className="flex items-center gap-4 flex-1">
                                                <span className="w-12 text-sm font-bold text-gray-500">{item.round}</span>
                                                <span className="w-20 font-bold group-hover:text-red-600 transition-colors text-gray-900">{item.location}</span>
                                                <span className="w-20 text-sm font-medium flex items-center text-gray-400">
                                                    {item.date} <span className="text-[10px] ml-0.5">{item.day}</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`w-20 text-center text-[10px] font-bold px-2 py-1 rounded-[2px] ${item.grade === 'PT300' ? 'bg-black text-white' : item.grade === 'PT200' ? 'bg-gray-200 text-gray-600' : 'bg-[#EAA51D] text-white'}`}>
                                                    {item.grade}
                                                </span>
                                                <div className="w-8 flex gap-1 justify-center">
                                                    {item.hasMen && <div className="w-2.5 h-2.5 rounded-[2px] bg-blue-500"></div>}
                                                    {item.hasWomen && <div className="w-2.5 h-2.5 rounded-[2px] bg-pink-500"></div>}
                                                </div>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 transition-colors ml-2 shrink-0 text-gray-300 group-hover:text-gray-900"><path d="M9 18l6-6-6-6" /></svg>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Pro Test */}
                        <div className="lg:w-[320px] shrink-0 bg-gray-900 rounded-[4px] shadow-sm flex flex-col overflow-hidden h-full text-white">
                            <div className="p-4 border-b border-gray-800 bg-black/20 shrink-0">
                                <h4 className="font-bold text-white">프로테스트 정보</h4>
                            </div>
                            <div className="overflow-y-auto flex-1 p-2 custom-scrollbar-dark pr-1">
                                {proTestData.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-2.5 px-3 hover:bg-gray-800 rounded-[4px] transition-colors border-b border-gray-800 last:border-0 group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <span className="w-16 font-bold group-hover:text-red-500 transition-colors">{item.location}</span>
                                            <span className="text-sm text-gray-400 font-medium">{item.date} <span className="text-[10px] ml-0.5">{item.day}</span></span>
                                        </div>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors"><path d="M9 18l6-6-6-6" /></svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                </FadeUp>

                {/* 6. Media */}
                <FadeUp>
<section>
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">MEDIA</h3>
                        <button className="text-sm font-bold text-gray-400 hover:text-gray-900 flex items-center gap-1 transition-colors">
                            MORE
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <a href="https://youtu.be/VOA4GNHOsdE?si=SxSuMJW1FwiTHJtZ" target="_blank" rel="noopener noreferrer" className="flex-1 relative aspect-video rounded-[4px] overflow-hidden group cursor-pointer shadow-sm block">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: "url('https://img.youtube.com/vi/VOA4GNHOsdE/maxresdefault.jpg')"}}></div>
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 bg-red-600 rounded-[4px] flex items-center justify-center text-white pl-1 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">LIVE</span>
                                <h4 className="text-white font-bold text-lg">제11전 이시카와 결승전 하이라이트</h4>
                            </div>
                        </a>
                        <div className="w-full lg:w-[320px] shrink-0 relative min-h-[400px] lg:min-h-0">
                            <div className="lg:absolute lg:inset-0 flex flex-col gap-3">
                                {[
                                    { id: "mLjESz59Dts", title: "퍼펙트 투어 주요 장면 하이라이트", date: "2026.08.15", link: "https://youtu.be/mLjESz59Dts?si=yoF7wNjVJ7ENrC8y" },
                                    { id: "ERhNtYm6tjw", title: "최고의 명승부, 결승전 다시보기", date: "2026.08.12", link: "https://youtu.be/ERhNtYm6tjw?si=sMEN8-bBM1laVHsJ" },
                                    { id: "-DRC1OOKWAg", title: "주목할 만한 신인 선수 인터뷰", date: "2026.08.10", link: "https://youtu.be/-DRC1OOKWAg?si=jFDoWt1wQ-nD_wPq" },
                                    { id: "N9pVyM6WLeg", title: "투어 비하인드 씬 대공개", date: "2026.08.05", link: "https://youtu.be/N9pVyM6WLeg?si=xRcvuwGKuXN8NYSn" },
                                    { id: "S8XDJRxAZnY", title: "다트 프로들의 연습 루틴 엿보기", date: "2026.08.01", link: "https://youtu.be/S8XDJRxAZnY?si=p4Zfz_3Eh8OKhF9_" },
                                ].map((item, idx) => (
                                    <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 min-h-[70px] flex bg-white rounded-[4px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                        <div className="w-1/3 shrink-0 bg-cover bg-center" style={{backgroundImage: `url('https://img.youtube.com/vi/${item.id}/hqdefault.jpg')`}}></div>
                                        <div className="w-2/3 p-3 flex flex-col justify-center gap-1">
                                            <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:underline decoration-2 underline-offset-2 leading-snug">{item.title}</h4>
                                            <span className="text-[10px] text-gray-400">{item.date}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
</FadeUp>

                {/* 7. Sponsor List */}
                <FadeUp>
<section className="mb-12">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">SPONSORS</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {["PHOENIXDARTS", "TRiNiDAD", "CONDOR", "L-style", "DYNASTY", "TARGET"].map((sp, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 h-16 flex items-center justify-center rounded-[4px] text-gray-500 font-bold text-sm shadow-sm hover:border-gray-400 cursor-pointer transition-colors">
                                {sp}
                            </div>
                        ))}
                    </div>
                </section>
</FadeUp>
            </div>
            </div>
        </main>
    );
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: 0.1, rootMargin: '50px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
