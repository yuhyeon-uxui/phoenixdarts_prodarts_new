"use client";

import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 2026.08.29 10:00:00
    const targetDate = new Date('2026-08-29T10:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <aside className="hidden xl:flex flex-col fixed right-0 top-20 bottom-0 w-[320px] 2xl:w-[380px] bg-[#0A0A0A] border-l border-[#27272A] p-6 pb-24 overflow-y-auto z-40 shadow-2xl transition-all duration-300 transform translate-x-0">
      
      {/* 1. COUNTDOWN */}
      <div className="bg-[#18181B] border border-[#27272A] rounded-[4px] p-5 mb-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#E53935] rounded-[4px] blur-[50px] opacity-20 pointer-events-none"></div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-black tracking-widest text-sm">NEXT MATCH</h3>
          <span className="bg-[#E53935] text-white text-[9px] font-black px-2 py-0.5 rounded-[4px] tracking-wider animate-pulse">D-DAY</span>
        </div>

        <div className="relative group cursor-pointer">
          <div className="w-full h-36 bg-zinc-800 rounded-[4px] mb-4 bg-cover bg-center border border-[#333] relative overflow-hidden shadow-inner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?q=80&w=600')" }}>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/60 hover:bg-[#E53935] text-white rounded-[4px] flex items-center justify-center transition duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/60 hover:bg-[#E53935] text-white rounded-[4px] flex items-center justify-center transition duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </div>
          </div>
          <div className="mb-4 text-left px-1">
            <div className="text-[#E53935] font-black text-[10px] italic mb-1 tracking-tight">2026 PERFECT TOUR</div>
            <h4 className="text-xl font-black text-white mb-1">제2전 하마마츠</h4>
            <p className="text-[#9E9E9E] text-[10px]">2026. 08. 29 (SUN) 10:00 / 액트시티 하마마츠</p>
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-[#27272A] pt-4">
          <div className="flex justify-center gap-1.5">
            <div className="text-center w-[45px]">
              <div className="text-[8px] text-[#9E9E9E] mb-1 tracking-widest">DAY</div>
              <div className="bg-[#121212] border border-[#333] rounded-[4px] px-1 py-1.5 text-lg font-mono font-black text-white shadow-inner">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
            </div>
            <div className="text-lg font-bold text-[#555] mt-3">:</div>
            <div className="text-center w-[45px]">
              <div className="text-[8px] text-[#9E9E9E] mb-1 tracking-widest">HOUR</div>
              <div className="bg-[#121212] border border-[#333] rounded-[4px] px-1 py-1.5 text-lg font-mono font-black text-white shadow-inner">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
            </div>
            <div className="text-lg font-bold text-[#555] mt-3">:</div>
            <div className="text-center w-[45px]">
              <div className="text-[8px] text-[#9E9E9E] mb-1 tracking-widest">MIN</div>
              <div className="bg-[#121212] border border-[#333] rounded-[4px] px-1 py-1.5 text-lg font-mono font-black text-white shadow-inner">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
            </div>
            <div className="text-lg font-bold text-[#555] mt-3">:</div>
            <div className="text-center w-[45px]">
              <div className="text-[8px] text-[#9E9E9E] mb-1 tracking-widest">SEC</div>
              <div className="bg-[#121212] border border-[#333] rounded-[4px] px-1 py-1.5 text-lg font-mono font-black text-white shadow-inner">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-5">
          <span className="w-1.5 h-1.5 rounded-[4px] bg-[#E53935]"></span>
          <span className="w-1.5 h-1.5 rounded-[4px] bg-[#444] cursor-pointer hover:bg-white transition"></span>
          <span className="w-1.5 h-1.5 rounded-[4px] bg-[#444] cursor-pointer hover:bg-white transition"></span>
        </div>
      </div>

      {/* 2. STAGE WINNER */}
      <div className="bg-[#18181B] border border-[#27272A] rounded-[4px] p-4 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-sans relative">

        <div className="bg-[#27272A] -mx-4 -mt-4 px-4 py-3 mb-2 flex justify-between items-center border-b border-[#333]">
          <h3 className="text-white font-black tracking-wider text-sm ml-2">STAGE 11 WINNER</h3>
          <span className="bg-[#121212] text-[#9E9E9E] text-[9px] font-bold px-2 py-0.5 rounded-[4px] border border-[#444]">MORE</span>
        </div>
        
        {/* JAPAN (MEN) */}
        <div className="bg-[#121212] text-[#E53935] text-center py-1.5 -mx-4 text-xs tracking-[0.3em] font-black border-b border-[#27272A]">
          MEN
        </div>
        
        <div className="flex bg-[#18181B] p-3 -mx-4 border-b border-[#27272A]">
          <div className="flex flex-col items-center justify-center pr-3">
            <span className="text-[#FFD700] text-2xl font-black font-serif leading-none">1</span>
            <span className="text-[#FFD700] text-xs">위</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">아베 유타로</div>
            <div className="text-[10px] text-[#777] mb-1">0012 | Yutaro Abe</div>
            <div className="flex gap-2 mt-1">
              <div className="w-11 h-11 bg-zinc-800 rounded-[4px] object-cover border border-[#333]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100')", backgroundSize: 'cover' }}></div>
              <div className="flex flex-col justify-center text-[9px] text-[#FFD700] font-bold leading-tight">
                <div>TARGET</div>
                <div>L-Style</div>
                <div>SHADE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[#18181B] px-3 py-2.5 -mx-4 border-b border-[#27272A]">
          <div className="w-10 text-center pr-3 text-[#E0E0E0] text-xl font-black font-serif">2</div>
          <div>
            <div className="text-xs font-bold text-white">휴고 렁</div>
            <div className="text-[9px] text-[#777]">1359 | Hugo Leung</div>
          </div>
        </div>

        <div className="flex items-center bg-[#18181B] px-3 py-2.5 -mx-4 border-b border-[#27272A]">
          <div className="w-10 text-center pr-3 text-[#CD7F32] text-xl font-black font-serif">3</div>
          <div>
            <div className="text-xs font-bold text-white">천 치 루이</div>
            <div className="text-[9px] text-[#777]">0970 | Chen Chi Rui</div>
          </div>
        </div>
        
        {/* LADIES */}
        <div className="bg-[#121212] text-[#E53935] text-center py-1.5 -mx-4 mt-4 text-xs tracking-[0.3em] font-black border-y border-[#27272A]">
          LADIES
        </div>

        <div className="flex bg-[#18181B] p-3 -mx-4 border-b border-[#27272A]">
          <div className="flex flex-col items-center justify-center pr-3">
            <span className="text-[#FFD700] text-2xl font-black font-serif leading-none">1</span>
            <span className="text-[#FFD700] text-xs">위</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">오시로 아카리</div>
            <div className="text-[10px] text-[#777] mb-1">5001 | Akari Oshiro</div>
            <div className="flex gap-2 mt-1">
              <div className="w-11 h-11 bg-zinc-800 rounded-[4px] object-cover border border-[#333]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100')", backgroundSize: 'cover' }}></div>
              <div className="flex flex-col justify-center text-[9px] text-[#FFD700] font-bold leading-tight">
                <div>DYNASTY</div>
                <div>Fit Flight</div>
                <div>SHADE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 챗봇 아이콘 (채팅 말풍선) */}
      <div 
        className="fixed bottom-8 right-[60px] z-50 flex items-center gap-3 bg-[#E53935] text-white p-3 pr-5 rounded-[4px] shadow-md cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-red-700 transition-all duration-300 group"
      >
        <div className="w-10 h-10 bg-white text-[#E53935] rounded-[4px] flex items-center justify-center shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 5.978-2.046l3.286.822a.75.75 0 0 0 .911-.91l-.822-3.287A9.72 9.72 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75ZM9 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-red-200 font-bold mb-0.5">Need help?</span>
          <span className="font-bold text-sm tracking-wide group-hover:tracking-widest transition-all">
            고객 지원
          </span>
        </div>
      </div>
    </aside>
  );
}
