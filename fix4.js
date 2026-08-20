const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const newHero = `<section className="w-full bg-transparent pt-8 pb-12">
  <div className="max-w-7xl mx-auto px-4 2xl:pr-[60px] flex flex-col lg:flex-row gap-6">
    
    {/* Left Card: Main Hero (Crossfade Slider) */}
    <div className="flex-1 rounded-[2rem] bg-gray-900 relative overflow-hidden h-[600px] flex flex-col justify-center p-10 md:p-16 shadow-lg group">
      {heroSlides.map((slide, index) => (
          <div 
              key={index}
              className={\`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out \${
                  activeHeroSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }\`}
          >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: \`url('\${slide.image}')\` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="relative z-20 w-full max-w-2xl h-full flex flex-col justify-center">
                <span className="text-white/80 font-bold text-sm tracking-widest mb-4 inline-block">PERFECT PRO TOURNAMENT</span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl whitespace-pre-line">
                  {slide.title}
                </h2>
                <p className="text-gray-200 mb-10 drop-shadow-md text-base md:text-lg font-medium">
                  {slide.date}
                </p>
                <button className="bg-[#E53935] text-white font-black hover:bg-red-700 transition px-8 py-4 rounded-full flex items-center gap-2 w-fit shadow-lg shadow-red-500/30 pointer-events-auto">
                  더 알아보기 <span className="text-xl">→</span>
                </button>
              </div>
          </div>
      ))}
      
      {/* Right-aligned Navigation Arrows inside the Left Card */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <div className="absolute bottom-10 left-10 md:left-16 flex items-center gap-2 z-30 pointer-events-auto">
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
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xl font-bold text-gray-400 mt-5">:</div>
            <div className="text-center w-[48px] md:w-[52px]">
              <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">HOUR</div>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xl font-bold text-gray-400 mt-5">:</div>
            <div className="text-center w-[48px] md:w-[52px]">
              <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">MIN</div>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xl font-bold text-gray-400 mt-5">:</div>
            <div className="text-center w-[48px] md:w-[52px]">
              <div className="text-[9px] text-gray-500 dark:text-gray-400 mb-1.5 tracking-widest font-bold">SEC</div>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg px-2 py-2 text-xl font-mono font-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-[#333]">
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
</section>`;

const heroRegex = /<section className="relative w-full h-\[640px\][\s\S]*?<section className="w-full bg-transparent dark:bg-\[#18181B\] py-20 border-b border-gray-300 dark:border-\[#27272A\]">/;
code = code.replace(heroRegex, newHero + '\n\n            <section className="w-full bg-transparent dark:bg-[#18181B] py-20 border-b border-gray-300 dark:border-[#27272A]">');

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
