const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add useRef to import if not present
if (!code.includes('useRef')) {
    code = code.replace("import React, { useState, useEffect }", "import React, { useState, useEffect, useRef }");
}

// 2. Add carouselRef and scroll functions inside Home()
if (!code.includes('carouselRef')) {
    const hooksCode = `
    const carouselRef = useRef(null);
    const scrollCarousel = (dir) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: dir * 400, behavior: 'smooth' });
        }
    };
    `;
    code = code.replace('export default function Home() {\n    const [activeHeroSlide', 'export default function Home() {\n' + hooksCode + '\n    const [activeHeroSlide');
}

// 3. Define the new NEWS TEXT LIST and RECOMMENDED VIDEOS
const newSections = `
            {/* NEWS TEXT LIST SECTION */}
            <section className="w-full bg-transparent pt-12 pb-4">
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">
                    <div className="bg-white dark:bg-[#1A1A1A] p-6 lg:p-10 shadow-sm border-t-[6px] border-[#E53935]">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-[#333] pb-4">
                            <div className="w-5 h-5 rounded-full bg-[#E53935] flex items-center justify-center shadow-inner">
                                <div className="w-2 h-2 rounded-full bg-black/30"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-widest">뉴스 전체보기</h3>
                        </div>
                        <ul className="flex flex-col">
                            {[
                                { date: "2026/08/05", title: "[제13전 교토] 엔트리 접수 개시 · 대회 개요 공개" },
                                { date: "2026/08/03", title: "[제11전 이시카와] 리절트" },
                                { date: "2026/07/31", title: "[제11전 이시카와] LIVE 중계" },
                                { date: "2026/07/29", title: "[제11전 이시카와] 예선 조편성" },
                                { date: "2026/07/29", title: "[제12전 하마마츠] 엔트리 접수 개시 · 대회 개요 공개" },
                                { date: "2026/07/28", title: "[제11전 이시카와] 예선 추첨회 일정" },
                            ].map((item, idx) => (
                                <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4 border-b border-gray-100 dark:border-[#222] border-dashed hover:bg-gray-50 dark:hover:bg-[#222] transition-colors cursor-pointer px-2">
                                    <span className="text-[#E53935] font-black text-sm sm:w-28 shrink-0">{item.date}</span>
                                    <div className="flex items-center gap-3 flex-1">
                                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base line-clamp-1">{item.title}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* RECOMMENDED VIDEOS SECTION */}
            <section className="w-full bg-transparent pt-8 pb-20 border-b border-gray-300 dark:border-[#27272A]">
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-widest uppercase mr-2 shrink-0">추천 영상</h3>
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
                            <button className="bg-[#121212] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">KLPGA</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">레슨</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">KPGA</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">GTOUR</button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* LEFT ARROW */}
                        <div onClick={() => scrollCarousel(-1)} className="absolute left-[-20px] top-[40%] -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg backdrop-blur-sm">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                        </div>
                        {/* RIGHT ARROW */}
                        <div onClick={() => scrollCarousel(1)} className="absolute right-[-20px] top-[40%] -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg backdrop-blur-sm">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                        </div>

                        {/* CAROUSEL CONTAINER */}
                        <div ref={carouselRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4">
                            {[1, 2, 3].map((loopIdx) => (
                                <React.Fragment key={loopIdx}>
                                    {/* Card 1 (Shorts Style) */}
                                    <div className="snap-start shrink-0 w-[240px] md:w-[280px] relative rounded-[16px] overflow-hidden aspect-[9/16] group/card cursor-pointer shadow-md bg-[#800000]">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105 opacity-80 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=400')" }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#800000] via-[#800000]/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col items-center text-center">
                                            <div className="text-white/80 font-bold text-[10px] mb-1">무관의 신인왕 설움 다 풀었다!</div>
                                            <h4 className="text-white font-black text-xl leading-tight mb-4 drop-shadow-md">서교림 짜릿한 역전극</h4>
                                            <div className="bg-[#E53935] text-white font-bold text-xs px-3 py-1.5 w-full shadow-lg">PERFECT 챔피언십</div>
                                        </div>
                                    </div>
                                    {/* Card 2 (Standard Style) */}
                                    <div className="snap-start shrink-0 w-[300px] md:w-[320px] bg-white dark:bg-[#1A1A1A] rounded-[16px] overflow-hidden flex flex-col group/card cursor-pointer shadow-md">
                                        <div className="w-full aspect-[4/3] bg-cover bg-[center_top] transition-transform duration-700 group-hover/card:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=400')" }}></div>
                                        <div className="p-5 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2 line-clamp-2 leading-tight">필드 위를 수놓는 뷰티풀 임팩트, 챔피언십 핫샷</h4>
                                            </div>
                                            <div className="flex items-center gap-2 mt-4">
                                                <div className="w-5 h-5 rounded-full bg-[#E53935] flex items-center justify-center text-white text-[10px] font-bold italic pr-0.5">P</div>
                                                <span className="text-[11px] text-gray-500 font-bold tracking-tight">2026 PERFECT투어</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 3 (Shorts Style) */}
                                    <div className="snap-start shrink-0 w-[240px] md:w-[280px] relative rounded-[16px] overflow-hidden aspect-[9/16] group/card cursor-pointer shadow-md bg-gray-900">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400')" }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-5 w-full">
                                            <h4 className="text-white font-bold text-base leading-tight mb-3">"얘가 저 괴롭혀요" 티격태격 찐친 케미 보여준 김민솔</h4>
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-white text-[10px] font-bold">IN</div>
                                                <span className="text-white/80 font-bold text-[11px]">인사이드 PERFECT</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 4 (Standard Style) */}
                                    <div className="snap-start shrink-0 w-[300px] md:w-[320px] bg-white dark:bg-[#1A1A1A] rounded-[16px] overflow-hidden flex flex-col group/card cursor-pointer shadow-md">
                                        <div className="w-full aspect-[4/3] bg-cover bg-[center_top] transition-transform duration-700 group-hover/card:scale-105 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400')" }}>
                                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">03:42</div>
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2 line-clamp-2 leading-tight">김아림 극찬에 서교림 반응은?! 시즌 4승을 향한 경쟁</h4>
                                            </div>
                                            <div className="flex items-center gap-2 mt-4">
                                                <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-white text-[10px] font-bold">IN</div>
                                                <span className="text-[11px] text-gray-500 font-bold tracking-tight">인사이드 PERFECT</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 5 (Shorts Style) */}
                                    <div className="snap-start shrink-0 w-[240px] md:w-[280px] relative rounded-[16px] overflow-hidden aspect-[9/16] group/card cursor-pointer shadow-md bg-[#001040]">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105 opacity-70 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400')" }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#001040] via-[#001040]/60 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col items-center text-center">
                                            <div className="text-white/80 font-bold text-[10px] mb-1">부모님께 드리는 선물, 효녀가 된 서교림</div>
                                            <h4 className="text-white font-black text-xl leading-tight mb-4 drop-shadow-md">우승자 부상이 와르르</h4>
                                            <div className="bg-[#E53935] text-white font-bold text-xs px-3 py-1.5 w-full shadow-lg">PERFECT 챔피언십</div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
`;

const startStr = "{/* NEWS SECTION */}";
const endStr = "{/* RANKING SECTION */}";

const startIdx = code.indexOf(startStr);
const endIdx = code.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + newSections + "\n            " + code.substring(endIdx);
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
