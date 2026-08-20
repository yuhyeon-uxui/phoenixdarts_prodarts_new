const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const newsSection = `
            {/* NEWS SECTION */}
            <section className="w-full bg-transparent pt-12 pb-20 border-b border-gray-300 dark:border-[#27272A]">
                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-widest uppercase mr-2">NEWS</h3>
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
                            <button className="bg-[#121212] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">전체 기사</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">공지사항</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">대회 정보</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">업데이트</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Card 1 (Shorts Style) */}
                        <div className="relative rounded-[16px] overflow-hidden aspect-[9/16] group cursor-pointer shadow-md bg-[#800000]">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=400')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#800000] via-[#800000]/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col items-center text-center">
                                <div className="text-white/80 font-bold text-[10px] mb-1">무관의 신인왕 설움 다 풀었다!</div>
                                <h4 className="text-white font-black text-xl leading-tight mb-4 drop-shadow-md">서교림 짜릿한 역전극</h4>
                                <div className="bg-[#E53935] text-white font-bold text-xs px-3 py-1.5 w-full shadow-lg">PERFECT 메디힐 챔피언십</div>
                            </div>
                        </div>
                        {/* Card 2 (Standard Style) */}
                        <div className="bg-white dark:bg-[#1A1A1A] rounded-[16px] overflow-hidden flex flex-col group cursor-pointer shadow-md">
                            <div className="w-full aspect-[4/3] bg-cover bg-[center_top] transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=400')" }}></div>
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
                        <div className="relative rounded-[16px] overflow-hidden aspect-[9/16] group cursor-pointer shadow-md bg-gray-900">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400')" }}></div>
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
                        <div className="bg-white dark:bg-[#1A1A1A] rounded-[16px] overflow-hidden flex flex-col group cursor-pointer shadow-md">
                            <div className="w-full aspect-[4/3] bg-cover bg-[center_top] transition-transform duration-700 group-hover:scale-105 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400')" }}>
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
                        <div className="relative rounded-[16px] overflow-hidden aspect-[9/16] group cursor-pointer shadow-md bg-[#001040] hidden lg:block">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-70 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001040] via-[#001040]/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col items-center text-center">
                                <div className="text-white/80 font-bold text-[10px] mb-1">부모님께 드리는 선물, 효녀가 된 서교림</div>
                                <h4 className="text-white font-black text-xl leading-tight mb-4 drop-shadow-md">우승자 부상이 와르르</h4>
                                <div className="bg-[#E53935] text-white font-bold text-xs px-3 py-1.5 w-full shadow-lg">PERFECT 메디힐 챔피언십</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
`;

code = code.replace(
    '<section className="w-full bg-white dark:bg-[#121212] py-20 border-b border-gray-300 dark:border-[#27272A]">',
    '<section className="w-full bg-transparent py-20 border-b border-gray-300 dark:border-[#27272A]">'
);

code = code.replace('{/* RANKING SECTION */}', newsSection + '\n' + '{/* RANKING SECTION */}');

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
