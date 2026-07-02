import React from 'react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen relative flex flex-col items-center justify-center p-6 text-slate-800">
      {/* Pusbuk Logo on Absolute Top Left - Responsive Size */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-50 shrink-0 animate-fadeIn">
        <img 
          src={logoPusbuk} 
          alt="Logo Pusbuk" 
          className="h-10 sm:h-14 md:h-16 w-auto object-contain"
        />
      </div>

      <div className="z-10 max-w-2xl w-full flex flex-col items-center text-center select-none animate-fadeIn">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black font-serif mb-2 select-none uppercase text-slate-900 tracking-tight">
          PUZZLE STORYBOARD
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xs md:text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest font-bold">
          Susun Alur & Identifikasi Struktur Cerita
        </h2>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="brutalist-button px-8 py-4 rounded-xl font-bold font-mono text-sm tracking-wider uppercase flex items-center gap-2 cursor-pointer"
        >
          Mulai Menyusun
          <span className="font-sans">→</span>
        </button>
      </div>
    </div>
  );
}
