import React from 'react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';
import splashBg from '../../../assets/splash-bg.jpg';
import { AudioToggle } from '../../components/AudioToggle';

interface SplashPageProps {
  onStart: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export function SplashPage({ onStart, isMuted, onToggleAudio }: SplashPageProps) {
  return (
    <div
      id="splash-page"
      className="min-h-screen w-screen relative flex items-end justify-end p-4 sm:p-8 md:p-12 lg:p-16 2xl:p-24 overflow-hidden text-slate-800"
    >
      {/* Background Image - Clean illustration focused on left */}
      <img
        id="splash-bg-image"
        src={splashBg}
        alt="Background Storyboard"
        className="absolute inset-0 w-full h-full object-cover object-left z-0 pointer-events-none"
      />

      {/* Responsive Gradient Overlay: Top-to-bottom on mobile, left-to-right on larger screens */}
      <div
        id="splash-gradient-overlay"
        className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950/95 sm:bg-gradient-to-r sm:from-transparent sm:via-slate-900/60 sm:to-slate-950/90 z-0 pointer-events-none"
      />

      {/* Pusbuk Logo on Top Left - Large and crisp on 2xl */}
      <div
        id="splash-logo-container"
        className="absolute top-3 left-3 sm:top-5 sm:left-6 lg:top-8 lg:left-10 2xl:top-12 2xl:left-14 z-20 shrink-0 animate-fadeIn"
      >
        <img
          id="splash-logo-image"
          src={logoPusbuk} 
          alt="Logo Pusbuk" 
          className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-32 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Audio Mute/Unmute Toggle on Top Right - Scaled for 2xl */}
      <div
        id="splash-audio-container"
        className="absolute top-3 right-3 sm:top-5 sm:right-6 lg:top-8 lg:right-10 2xl:top-12 2xl:right-14 z-20 shrink-0 animate-fadeIn"
      >
        <AudioToggle
          id="splash-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 bg-white/90 backdrop-blur-sm shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[4px_4px_0px_#0f172a]"
        />
      </div>

      {/* Main Content Area - Strictly Aligned Right for All Devices */}
      <div
        id="splash-content"
        className="z-10 w-full max-w-lg sm:max-w-xl lg:max-w-2xl 2xl:max-w-4xl ml-auto flex flex-col items-end text-right select-none animate-fadeIn pb-6 sm:pb-0"
      >
        {/* Title */}
        <h1
          id="splash-title"
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black font-serif mb-2 sm:mb-3 2xl:mb-6 select-none uppercase text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
        >
          PUZZLE <br /> STORYBOARD
        </h1>
        
        {/* Subtitle */}
        <h2
          id="splash-subtitle"
          className="text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-2xl font-mono text-orange-300 mb-6 sm:mb-8 2xl:mb-12 uppercase tracking-widest font-bold bg-slate-900/90 px-2.5 sm:px-3 lg:px-4 2xl:px-6 py-1 sm:py-1.5 lg:py-2 2xl:py-3 rounded-lg 2xl:rounded-2xl border border-orange-500/40 backdrop-blur-xs shadow-md max-w-full"
        >
          Susun Alur & Identifikasi Struktur Cerita
        </h2>

        {/* Start Button */}
        <button
          id="splash-start-button"
          type="button"
          onClick={onStart}
          className="brutalist-button px-6 sm:px-10 lg:px-12 2xl:px-16 py-3.5 sm:py-5 lg:py-6 2xl:py-8 rounded-xl sm:rounded-2xl 2xl:rounded-3xl font-bold font-mono text-xs sm:text-base lg:text-lg 2xl:text-2xl tracking-wider uppercase flex items-center gap-2.5 sm:gap-3 2xl:gap-5 cursor-pointer bg-orange-600 hover:bg-orange-500 text-white border-2 2xl:border-4 border-slate-900 shadow-[4px_4px_0px_#0f172a] sm:shadow-[6px_6px_0px_#0f172a] 2xl:shadow-[8px_8px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#0f172a] transition-all"
        >
          <span>Mulai Menyusun</span>
          <span className="font-sans text-base sm:text-lg 2xl:text-3xl">→</span>
        </button>
      </div>
    </div>
  );
}
