import React from 'react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';
import splashBg from '../../../assets/splash-bg.jpg';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen relative flex items-end justify-end p-4 sm:p-8 md:p-12 overflow-hidden text-slate-800">
      {/* Background Image - Clean illustration focused on left */}
      <img
        src={splashBg}
        alt="Background Storyboard"
        className="absolute inset-0 w-full h-full object-cover object-left z-0 pointer-events-none"
      />

      {/* Responsive Gradient Overlay: Top-to-bottom on mobile, left-to-right on larger screens */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950/95 sm:bg-gradient-to-r sm:from-transparent sm:via-slate-900/60 sm:to-slate-950/90 z-0 pointer-events-none" />

      {/* Pusbuk Logo on Top Left */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-8 z-20 shrink-0 animate-fadeIn">
        <img 
          src={logoPusbuk} 
          alt="Logo Pusbuk" 
          className="h-10 sm:h-16 md:h-20 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Main Content Area - Strictly Aligned Right for All Devices */}
      <div className="z-10 w-full max-w-lg sm:max-w-xl ml-auto flex flex-col items-end text-right select-none animate-fadeIn pb-6 sm:pb-0">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-black font-serif mb-2 sm:mb-3 select-none uppercase text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          PUZZLE <br /> STORYBOARD
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-[10px] sm:text-xs md:text-sm font-mono text-orange-300 mb-6 sm:mb-8 uppercase tracking-widest font-bold bg-slate-900/90 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-orange-500/40 backdrop-blur-xs shadow-md max-w-full">
          Susun Alur & Identifikasi Struktur Cerita
        </h2>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="brutalist-button px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold font-mono text-xs sm:text-base tracking-wider uppercase flex items-center gap-2.5 sm:gap-3 cursor-pointer bg-orange-600 hover:bg-orange-500 text-white border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] sm:shadow-[6px_6px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#0f172a] transition-all"
        >
          <span>Mulai Menyusun</span>
          <span className="font-sans text-base sm:text-lg">→</span>
        </button>
      </div>
    </div>
  );
}
