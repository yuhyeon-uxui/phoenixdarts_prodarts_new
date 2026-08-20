const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const rankingData = `
const rankingData = [
    { rank: 1, name: "휴고 리옹", enName: "Hugo Leung", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150", sponsors: ["TRiNiDAD", "CONDOR"], pts: "1359", trend: "same", trendVal: 0 },
    { rank: 2, name: "아베 유타로", enName: "Abe Yutaro", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150", sponsors: ["TRiNiDAD", "CONDOR", "MACS Design"], pts: "992", trend: "up", trendVal: 2 },
    { rank: 3, name: "첸 치루이", enName: "Tseng Chijui", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150", sponsors: ["TRiNiDAD", "CONDOR"], pts: "970", trend: "down", trendVal: 1 },
    { rank: 4, name: "푸포 텡리에", enName: "Pupo Teng Lieh", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150", sponsors: ["COSMO DARTS", "Fit Flight"], pts: "941", trend: "up", trendVal: 1 },
    { rank: 5, name: "죠노 히로키", enName: "Jono Hiroki", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150", sponsors: ["TRiNiDAD", "CONDOR"], pts: "788", trend: "same", trendVal: 0 },
    { rank: 6, name: "아사다 세이고", enName: "Asada Seigo", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150", sponsors: ["unicorn", "L-style"], pts: "750", trend: "down", trendVal: 2 },
    { rank: 7, name: "마츠다 준", enName: "Matsuda Jun", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150", sponsors: ["DYNASTY", "L-style"], pts: "720", trend: "up", trendVal: 3 },
    { rank: 8, name: "고토 토모야", enName: "Goto Tomoya", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150", sponsors: ["TRiNiDAD", "CONDOR"], pts: "690", trend: "down", trendVal: 1 },
    { rank: 9, name: "니시타니 죠지", enName: "Nishitani Joji", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150", sponsors: ["TARGET", "8FLIGHT"], pts: "650", trend: "up", trendVal: 1 },
    { rank: 10, name: "야마다 유키", enName: "Yamada Yuki", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150", sponsors: ["COSMO DARTS", "Fit Flight"], pts: "610", trend: "same", trendVal: 0 },
];
`;

const newRankingSection = 
'            {/* RANKING SECTION */}\n' +
'            <section className="w-full bg-white dark:bg-[#121212] py-20 border-b border-gray-300 dark:border-[#27272A]">\n' +
'                <div className="max-w-[1600px] mx-auto px-4 xl:pr-[380px]">\n' +
'                    \n' +
'                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-300 dark:border-[#27272A]">\n' +
'                        <div className="flex items-baseline gap-3">\n' +
'                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-widest uppercase">2026 RANKING</h3>\n' +
'                            <span className="text-sm font-bold text-gray-500 dark:text-[#9E9E9E]">2026.08.09 현재</span>\n' +
'                        </div>\n' +
'                        <a href="#" className="bg-[#121212] text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300 text-xs font-black px-6 py-2.5 rounded-full uppercase shadow-sm origin-center hover:scale-[1.2]">MORE</a>\n' +
'                    </div>\n' +
'                    \n' +
'                    <div className="flex gap-6 mb-8 mt-4 border-b border-gray-200 dark:border-[#333]">\n' +
'                        <button className="pb-3 border-b-[3px] border-[#E53935] font-black text-gray-900 dark:text-white tracking-widest text-sm">JAPAN</button>\n' +
'                        <button className="pb-3 text-gray-400 font-bold hover:text-gray-900 dark:hover:text-white tracking-widest text-sm transition-colors">JAPAN LADIES</button>\n' +
'                        <button className="pb-3 text-gray-400 font-bold hover:text-gray-900 dark:hover:text-white tracking-widest text-sm transition-colors">BRANDS</button>\n' +
'                    </div>\n' +
'\n' +
'                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">\n' +
'                        {rankingData.map((player) => (\n' +
'                            <div key={player.rank} className="flex items-center p-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] rounded-[16px] shadow-sm hover:shadow-md hover:border-[#E53935] hover:-translate-y-1 transition-all duration-300 cursor-pointer">\n' +
'                                <div className={`w-12 text-center text-3xl font-black ${player.rank === 1 ? \'text-[#FFB300]\' : \'text-gray-400 dark:text-gray-500\'}`}>\n' +
'                                    {player.rank}\n' +
'                                </div>\n' +
'                                <div className="w-16 h-16 rounded-[12px] mx-4 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url(\'${player.img}\')` }}></div>\n' +
'                                <div className="flex-1">\n' +
'                                    <div className="flex items-end gap-2 mb-1.5">\n' +
'                                        <div className="font-bold text-lg text-gray-900 dark:text-white leading-none">{player.name}</div>\n' +
'                                        <div className="text-xs text-gray-400 leading-none pb-0.5">{player.enName}</div>\n' +
'                                    </div>\n' +
'                                    <div className="flex gap-2">\n' +
'                                        {player.sponsors.map((sp, idx) => (\n' +
'                                            <span key={idx} className="text-[9px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-[4px] font-bold tracking-wider">{sp}</span>\n' +
'                                        ))}\n' +
'                                    </div>\n' +
'                                </div>\n' +
'                                <div className="flex items-center gap-4 text-right pr-2">\n' +
'                                    <div>\n' +
'                                        <div className="text-[9px] font-bold text-gray-400 mb-1 tracking-widest">POINTS</div>\n' +
'                                        <div className="text-2xl font-black text-gray-900 dark:text-white leading-none">{player.pts}</div>\n' +
'                                    </div>\n' +
'                                    <div className="w-6 flex flex-col items-center justify-center">\n' +
'                                        {player.trend === \'same\' && (\n' +
'                                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>\n' +
'                                        )}\n' +
'                                        {player.trend === \'up\' && (\n' +
'                                            <>\n' +
'                                                <svg className="w-4 h-4 text-[#E53935]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>\n' +
'                                                <span className="text-[#E53935] font-black text-xs">{player.trendVal}</span>\n' +
'                                            </>\n' +
'                                        )}\n' +
'                                        {player.trend === \'down\' && (\n' +
'                                            <>\n' +
'                                                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>\n' +
'                                                <span className="text-blue-500 font-black text-xs">{player.trendVal}</span>\n' +
'                                            </>\n' +
'                                        )}\n' +
'                                    </div>\n' +
'                                </div>\n' +
'                            </div>\n' +
'                        ))}\n' +
'                    </div>\n' +
'                </div>\n' +
'            </section>';

const startStr = "{/* RANKING SECTION */}";
const endStr = "{/* TOPICS SECTION */}";

const startIdx = code.indexOf(startStr);
const endIdx = code.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + newRankingSection + "\n\n            " + code.substring(endIdx);
}

if (!code.includes('const rankingData')) {
    code = code.replace('export default function Home() {', rankingData + '\nexport default function Home() {');
}

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
