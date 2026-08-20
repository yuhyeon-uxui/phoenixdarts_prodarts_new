const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Change max-w-[1600px] to max-w-[1280px] globally
code = code.replace(/max-w-\[1600px\]/g, 'max-w-[1280px]');

// 2. Change News tabs
const oldTabs = `<button className="bg-[#121212] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">전체 기사</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">공지사항</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">대회 정보</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">업데이트</button>`;

const newTabs = `<button className="bg-[#121212] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">전체</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">뉴스</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">공지</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">대회</button>
                            <button className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#333] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#222] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-colors whitespace-nowrap">업데이트</button>`;

code = code.replace(oldTabs, newTabs);

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
