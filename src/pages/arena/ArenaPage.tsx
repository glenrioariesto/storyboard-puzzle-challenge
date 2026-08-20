import React, { useState, useEffect } from 'react';
import { Story, Scene } from '../../types';
import { GuideModal } from '../../components/GuideModal';
import { EvaluationModal } from '../../components/EvaluationModal';
import { SceneCard } from '../../components/SceneCard';
import { AudioToggle } from '../../components/AudioToggle';
import { playSynthesizerNote } from '../../utils/audio';
import arenaBg from '../../../assets/arena-bg.jpg';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface ArenaPageProps {
  currentStoryIndex: number;
  activeStory: Story;
  totalStories: number;
  showFeedback: boolean;
  checked: boolean;
  score: number;
  attempts: number;
  shuffledScenes: Scene[];
  isMuted: boolean;
  onToggleAudio: () => void;
  onMoveCard: (index: number, direction: 'up' | 'down') => void;
  onReorderCard: (fromIndex: number, toIndex: number) => void;
  onCheck: () => void;
  onAdvance: () => void;
}

export function ArenaPage({
  currentStoryIndex,
  activeStory,
  totalStories,
  showFeedback,
  checked,
  score,
  attempts,
  shuffledScenes,
  isMuted,
  onToggleAudio,
  onMoveCard,
  onReorderCard,
  onCheck,
  onAdvance
}: ArenaPageProps) {
  const progressPercentage = (currentStoryIndex / totalStories) * 100;
  
  // Modals state
  const [isGuideOpen, setIsGuideOpen] = useState(true);

  // Drag & drop indexing state
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  // Auto-open guide modal when the storyboard level changes
  useEffect(() => {
    setIsGuideOpen(true);
  }, [activeStory.id]);

  // Drag handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(index));
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggingIndex !== null && draggingIndex !== index) {
      onReorderCard(draggingIndex, index);
      setDraggingIndex(index);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div
      id="arena-page"
      className="min-h-screen w-screen relative bg-amber-50/50 text-slate-800 flex flex-col font-sans overflow-hidden"
    >
      {/* Scenic Atmosphere Background Image - Bright & Warm */}
      <img
        id="arena-bg-image"
        src={arenaBg}
        alt="Arena Background"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none filter blur-[1px] brightness-125 saturate-125"
      />
      {/* Light Clean Overlay for contrast */}
      <div
        id="arena-gradient-overlay"
        className="fixed inset-0 bg-gradient-to-b from-amber-50/40 via-white/50 to-orange-50/60 backdrop-blur-[1px] z-0 pointer-events-none"
      />

      {/* Symmetrical Upper Navigation Header - Fixed/Sticky on top with Glassmorphism blur */}
      <header
        id="arena-header"
        className="sticky top-0 left-0 right-0 z-30 bg-white/75 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-b border-slate-900/10 shrink-0 select-none"
      >
        <div
          id="arena-navbar-container"
          className="h-14 sm:h-16 md:h-18 lg:h-20 2xl:h-24 px-3 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between gap-3"
        >
          {/* Top Left: Logo Pusbuk (Scaled for 2xl) */}
          <div id="arena-logo-container" className="flex items-center shrink-0">
            <img 
              id="arena-logo-image"
              src={logoPusbuk} 
              alt="Logo Pusbuk" 
              className="h-9 sm:h-12 md:h-14 lg:h-16 2xl:h-20 w-auto object-contain drop-shadow-xs"
            />
          </div>

          {/* Center: Mission info & Story Title */}
          <div id="arena-mission-container" className="flex flex-col items-center justify-center min-w-0 px-2 text-center">
            <span
              id="arena-mission-badge"
              className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm 2xl:text-base font-mono text-orange-600 font-bold uppercase tracking-wider"
            >
              Misi {currentStoryIndex + 1}/{totalStories}
            </span>
            <h3
              id="arena-story-title"
              className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-bold font-serif text-slate-900 mt-0.5 truncate max-w-[150px] sm:max-w-xs md:max-w-md lg:max-w-lg 2xl:max-w-2xl"
            >
              {activeStory.title}
            </h3>
          </div>

          {/* Top Right: Guide Button, Score Badge & Mute/Unmute Audio Toggle (Symmetrical Heights) */}
          <div id="arena-header-controls" className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 2xl:gap-4 shrink-0">
            <button
              id="arena-guide-button"
              type="button"
              onClick={() => {
                playSynthesizerNote('pop');
                setIsGuideOpen(true);
              }}
              className="h-9 sm:h-10 md:h-11 lg:h-13 2xl:h-16 px-2.5 sm:px-3.5 lg:px-5 2xl:px-6 inline-flex items-center justify-center gap-1.5 2xl:gap-2.5 text-[11px] sm:text-xs md:text-sm lg:text-base 2xl:text-xl font-mono font-bold text-slate-700 hover:text-orange-700 bg-white/95 hover:bg-orange-50 border-2 2xl:border-3 border-slate-900 hover:border-orange-500 rounded-xl 2xl:rounded-2xl transition-all shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[3px_3px_0px_#0f172a] hover:shadow-[3px_3px_0px_#ea580c] 2xl:hover:shadow-[4px_4px_0px_#ea580c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a] cursor-pointer"
            >
              <span>💡<span className="hidden sm:inline"> Panduan</span></span>
            </button>
            
            <div
              id="arena-score-badge"
              className="h-9 sm:h-10 md:h-11 lg:h-13 2xl:h-16 px-2.5 sm:px-3 lg:px-4 2xl:px-6 inline-flex items-center justify-center gap-1.5 2xl:gap-2.5 bg-orange-50 border-2 2xl:border-3 border-slate-900 rounded-xl 2xl:rounded-2xl shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[3px_3px_0px_#0f172a]"
            >
              <span className="text-[10px] sm:text-xs lg:text-sm 2xl:text-lg font-mono text-slate-500 font-bold hidden sm:inline">Poin:</span>
              <span id="arena-score-value" className="font-mono text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-black text-orange-700">
                {score}
              </span>
            </div>

            <AudioToggle
              id="arena-audio-button"
              isMuted={isMuted}
              onToggle={onToggleAudio}
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-13 lg:w-13 2xl:h-16 2xl:w-16"
            />
          </div>
        </div>

        {/* Progress Bar - Attached seamlessly underneath Header */}
        <div id="arena-progress-bar-container" className="w-full h-1 sm:h-1.5 2xl:h-2 bg-slate-200/80 overflow-hidden border-t border-slate-900/10">
          <div
            id="arena-progress-bar-fill"
            className="h-full bg-orange-500 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* Main Content Arena */}
      <main id="arena-main-content" className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 lg:px-8 2xl:px-12 py-4 sm:py-6 2xl:py-10 gap-4 sm:gap-6 2xl:gap-8 relative z-10">
        
        {/* Action triggers & Evaluation feedback panels */}
        <div id="arena-action-bar-container" className="w-full shrink-0 max-w-4xl 2xl:max-w-6xl mx-auto">
          {/* Main Action Bar */}
          {!showFeedback && (
            <div
              id="arena-action-bar"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-md border-2 2xl:border-3 border-slate-900 p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl shadow-[4px_4px_0px_#0f172a] 2xl:shadow-[6px_6px_0px_#0f172a]"
            >
              <div id="arena-action-text-container" className="flex flex-col gap-0.5 2xl:gap-1.5">
                <p id="arena-action-title" className="text-xs sm:text-sm 2xl:text-lg font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Evaluasi Urutan Storyboard
                </p>
                <p id="arena-action-desc" className="text-[10px] sm:text-xs 2xl:text-base text-slate-500 font-bold leading-normal">
                  Tarik & lepas (drag-and-drop) kartu atau gunakan tombol Geser untuk mengurutkan kejadian dari atas ke bawah.
                </p>
              </div>

              <div id="arena-action-buttons-container" className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 2xl:gap-4 w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                {attempts > 0 && (
                  <span id="arena-attempts-indicator" className="text-xs 2xl:text-base font-mono font-bold text-rose-600 mr-auto sm:mr-0">
                    Salah: {attempts}x
                  </span>
                )}
                <button
                  id="arena-check-button"
                  type="button"
                  onClick={onCheck}
                  className="px-4 sm:px-5 2xl:px-8 py-2 2xl:py-3.5 font-mono text-xs sm:text-sm 2xl:text-lg font-bold uppercase rounded-lg 2xl:rounded-xl border-2 2xl:border-3 transition-all cursor-pointer border-slate-900 text-white bg-orange-600 hover:bg-orange-700 shadow-[3px_3px_0px_#0f172a] 2xl:shadow-[5px_5px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a]"
                >
                  Periksa Cerita
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Storyboard cards board */}
        <div id="arena-cards-list" className="flex flex-col gap-4 2xl:gap-6 py-2 shrink-0 max-w-4xl 2xl:max-w-6xl mx-auto w-full">
          {shuffledScenes.map((scene, idx) => (
            <SceneCard
              key={scene.id}
              scene={scene}
              idx={idx}
              totalScenes={shuffledScenes.length}
              checked={checked}
              showFeedback={showFeedback}
              onMoveCard={onMoveCard}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}
              isDragging={draggingIndex === idx}
            />
          ))}
        </div>
      </main>

      {/* Guide Modals Overlay */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        title={activeStory.title}
        description={activeStory.description}
      />

      {/* Evaluation Feedback Modal Overlay */}
      <EvaluationModal
        isOpen={showFeedback}
        explanation={activeStory.explanation}
        onAdvance={onAdvance}
        currentStoryIndex={currentStoryIndex}
        totalStories={totalStories}
      />
    </div>
  );
}
