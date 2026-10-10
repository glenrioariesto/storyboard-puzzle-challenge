import React from 'react';
import bgSplash from '../../../assets/bg-splash.webp';
import titlePuzzle from '../../../assets/title-puzzle.webp';
import titleStoryboard from '../../../assets/title-storyboard.webp';
import btnMulai from '../../../assets/btn-mulai.webp';
import logoJenama from '../../../assets/logo-jenama.webp?v2';
import { AudioToggle } from '../../components/AudioToggle';
import { Target } from 'lucide-react';
import { playSynthesizerNote } from '../../utils/audio';

interface SplashPageProps {
  onStart: () => void;
  onOpenObjectives: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export function SplashPage({ onStart, onOpenObjectives, isMuted, onToggleAudio }: SplashPageProps) {
  const handleStartClick = () => {
    playSynthesizerNote('btn');
    onStart();
  };

  const handleObjectivesClick = () => {
    playSynthesizerNote('pop');
    onOpenObjectives();
  };

  return (
    <div
      id="splash-page"
      className="fixed inset-0 w-screen h-screen select-none overflow-hidden bg-cover bg-center bg-no-repeat z-10"
      style={{ backgroundImage: `url(${bgSplash})` }}
    >
      {/* Subtle depth gradient overlay */}
      <div
        id="splash-vignette-overlay"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-amber-950/15 pointer-events-none"
      />

      {/* Top Left: Logo Jenama Kemendikdasmen / Pusbuk */}
      <div
        id="splash-logo-container"
        className="fixed top-3 left-3 sm:top-5 sm:left-6 lg:top-7 lg:left-8 2xl:top-10 2xl:left-12 z-30 animate-fadeIn"
      >
        <img
          id="splash-logo-image"
          src={logoJenama}
          alt="Logo Pusbuk"
          className="h-10 sm:h-13 md:h-15 lg:h-18 2xl:h-24 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Top Right Controls: Tujuan Pembelajaran & Audio Toggle */}
      <div
        id="splash-header-controls"
        className="fixed top-3 right-3 sm:top-5 sm:right-6 lg:top-7 lg:right-8 2xl:top-10 2xl:right-12 z-30 flex items-center gap-2 sm:gap-3 animate-fadeIn"
      >
        <button
          id="splash-objectives-top-btn"
          type="button"
          onClick={handleObjectivesClick}
          className="h-9 sm:h-11 md:h-12 2xl:h-16 px-2.5 sm:px-4 2xl:px-6 bg-white/95 hover:bg-white text-emerald-900 border-2 border-emerald-950/20 hover:border-emerald-600 rounded-xl 2xl:rounded-2xl shadow-[2px_2px_0px_#0f172a] text-[10px] sm:text-xs md:text-sm 2xl:text-lg font-black font-display uppercase tracking-wide flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95 backdrop-blur-xs"
        >
          <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6 text-emerald-600 shrink-0" />
          <span>Tujuan Pembelajaran</span>
        </button>

        <AudioToggle
          id="splash-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
          className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 2xl:h-16 2xl:w-16 bg-white/95 backdrop-blur-xs shadow-[2px_2px_0px_#0f172a]"
        />
      </div>

      {/* Safe right boundary container: Title & Start Button stack */}
      <div className="w-full h-full flex justify-end items-center pr-6 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20 2xl:pr-28">
        <div
          id="splash-card-column"
          className="flex flex-col items-center max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px] 2xl:max-w-[800px] w-full z-20"
        >
          {/* Floating container for titles to create a smooth bobbing/wiggle effect */}
          <div className="w-full flex flex-col items-center animate-float-wiggle">
            {/* Title 1: PUZZLE */}
            <img
              id="splash-title-puzzle"
              src={titlePuzzle}
              alt="PUZZLE"
              className="w-[72%] sm:w-[70%] h-auto object-contain select-none pointer-events-none relative z-10 animate-title-1 drop-shadow-xl"
            />
            {/* Title 2: STORYBOARD */}
            <img
              id="splash-title-storyboard"
              src={titleStoryboard}
              alt="STORYBOARD"
              className="w-full h-auto object-contain select-none pointer-events-none -mt-2 sm:-mt-3 md:-mt-5 lg:-mt-7 2xl:-mt-10 relative z-20 animate-title-2 drop-shadow-xl"
            />
          </div>

          {/* Centered Start Button with Pulse and Hover Grow Effect */}
          <button
            id="splash-start-button"
            type="button"
            onClick={handleStartClick}
            className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-14 cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300 hover:brightness-110 focus:outline-none animate-btn-pulse"
            aria-label="Mulai Menyusun"
          >
            <img
              id="splash-start-button-image"
              src={btnMulai}
              alt="Mulai Menyusun"
              className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[480px] h-auto object-contain select-none pointer-events-none"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
