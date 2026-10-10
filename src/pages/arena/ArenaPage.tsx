import React, { useState, useEffect } from 'react';
import { Target, HelpCircle, Share2 } from 'lucide-react';
import { Story, Scene, StoryAnswer } from '../../types';
import { STORYBOARD_CAMPAIGN } from '../../data/storyboardData';
import { GuideModal } from '../../components/GuideModal';
import { EvaluationModal } from '../../components/EvaluationModal';
import { SceneCard } from '../../components/SceneCard';
import { AudioToggle } from '../../components/AudioToggle';
import { playSynthesizerNote } from '../../utils/audio';
import bgGame from '../../../assets/bg-game.webp';
import logoJenama from '../../../assets/logo-jenama.webp?v2';

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
  onOpenObjectives?: () => void;
  answers: StoryAnswer[];
  onJumpToStory: (storyIndex: number) => void;
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
  onAdvance,
  onOpenObjectives,
  answers,
  onJumpToStory
}: ArenaPageProps) {
  const progressPercentage = (currentStoryIndex / totalStories) * 100;
  
  // Modals state
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  // Drag & drop indexing state
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  // Open guide modal when entering an uncompleted level
  useEffect(() => {
    const isAnswered = answers.some(a => a.storyId === activeStory.id && a.isCorrect);
    if (!isAnswered) {
      setIsGuideOpen(true);
    } else {
      setIsGuideOpen(false);
    }
  }, [activeStory.id]);

  // Share handler
  const handleShare = async () => {
    playSynthesizerNote('pop');
    const shareData = {
      title: 'Storyboard Puzzle Challenge',
      text: 'Ayo susun adegan cerita dan uji alur narasi di Storyboard Puzzle Challenge!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User dismissed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

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

  const allCompleted = totalStories > 0 && answers.filter(a => a.isCorrect).length >= totalStories;

  return (
    <div
      id="arena-page"
      className="min-h-screen w-screen relative bg-slate-900 text-slate-800 flex flex-col font-sans overflow-hidden"
    >
      {/* Scenic Atmosphere Background Image */}
      <img
        id="arena-bg-image"
        src={bgGame}
        alt="In-Game Background"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      {/* Light Clean Overlay for contrast */}
      <div
        id="arena-gradient-overlay"
        className="fixed inset-0 bg-slate-950/25 backdrop-blur-[0.5px] z-0 pointer-events-none"
      />

      {/* Symmetrical Upper Navigation Header - Polosan / No Background */}
      <header
        id="arena-header"
        className="sticky top-0 left-0 right-0 z-30 bg-transparent shrink-0 select-none pointer-events-none"
      >
        {/* Progress Bar - Situated at the very top above the Navbar */}
        <div id="arena-progress-bar-container" className="w-full h-1 sm:h-1.5 2xl:h-2 bg-white/20 overflow-hidden pointer-events-auto">
          <div
            id="arena-progress-bar-fill"
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 shadow-sm"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Navbar Container */}
        <div
          id="arena-navbar-container"
          className="relative h-14 sm:h-16 md:h-18 lg:h-20 2xl:h-24 px-3 sm:px-6 lg:px-8 2xl:px-12 flex items-center justify-between"
        >
          {/* Top Left: Logo Jenama Pusbuk */}
          <div id="arena-logo-container" className="flex items-center shrink-0 pointer-events-auto z-20">
            <img 
              id="arena-logo-image"
              src={logoJenama} 
              alt="Logo Pusbuk" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 2xl:h-16 w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* Center: Mission info & Story Title wrapped in a card, perfectly centered */}
          <div
            id="arena-mission-card"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md border-2 2xl:border-3 border-slate-900 rounded-xl sm:rounded-2xl px-3 sm:px-5 md:px-6 py-1 sm:py-1.5 shadow-[3px_3px_0px_#0f172a] 2xl:shadow-[4px_4px_0px_#0f172a] max-w-[46vw] sm:max-w-xs md:max-w-md lg:max-w-lg select-none pointer-events-auto text-center"
          >
            <span
              id="arena-mission-badge"
              className="text-[9px] sm:text-[10px] md:text-xs font-display text-orange-600 font-extrabold uppercase tracking-wider leading-none"
            >
              Misi {currentStoryIndex + 1}/{totalStories}
            </span>
            <h3
              id="arena-story-title"
              className="text-xs sm:text-sm md:text-base 2xl:text-lg font-bold font-display text-slate-900 mt-0.5 truncate max-w-full leading-tight"
            >
              {activeStory.title}
            </h3>
          </div>

          {/* Top Right: Icon-only Controls (Tujuan, Panduan, Sebarkan/Share, Skor, Audio) */}
          <div id="arena-header-controls" className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 shrink-0 z-20 pointer-events-auto">
            {/* Objectives Button (Icon only) */}
            <button
              id="arena-objectives-button"
              type="button"
              onClick={() => {
                playSynthesizerNote('pop');
                onOpenObjectives?.();
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 2xl:w-13 2xl:h-13 rounded-xl 2xl:rounded-2xl bg-white/95 hover:bg-emerald-50 text-emerald-800 border-2 2xl:border-3 border-slate-900 shadow-[2px_2px_0px_#0f172a] hover:shadow-[3px_3px_0px_#059669] flex items-center justify-center cursor-pointer transition-all active:translate-x-[1px] active:translate-y-[1px]"
              title="Tujuan Pembelajaran (Objektif)"
              aria-label="Tujuan Pembelajaran"
            >
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 stroke-[2.5]" />
            </button>

            {/* Guide Button (Icon only) */}
            <button
              id="arena-guide-button"
              type="button"
              onClick={() => {
                playSynthesizerNote('pop');
                setIsGuideOpen(true);
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 2xl:w-13 2xl:h-13 rounded-xl 2xl:rounded-2xl bg-white/95 hover:bg-orange-50 text-orange-600 border-2 2xl:border-3 border-slate-900 hover:border-orange-500 shadow-[2px_2px_0px_#0f172a] hover:shadow-[3px_3px_0px_#ea580c] flex items-center justify-center cursor-pointer transition-all active:translate-x-[1px] active:translate-y-[1px]"
              title="Panduan Cerita Storyboard"
              aria-label="Panduan Cerita"
            >
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 stroke-[2.5]" />
            </button>

            {/* Sebarkan / Share Button (Icon only) */}
            <button
              id="arena-share-button"
              type="button"
              onClick={handleShare}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 2xl:w-13 2xl:h-13 rounded-xl 2xl:rounded-2xl bg-white/95 hover:bg-indigo-50 text-indigo-700 border-2 2xl:border-3 border-slate-900 hover:border-indigo-600 shadow-[2px_2px_0px_#0f172a] hover:shadow-[3px_3px_0px_#4f46e5] flex items-center justify-center cursor-pointer transition-all active:translate-x-[1px] active:translate-y-[1px]"
              title="Sebarkan / Bagikan Game"
              aria-label="Sebarkan Game"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-700 stroke-[2.5]" />
            </button>

            {/* Compact Score Badge */}
            <div
              id="arena-score-badge"
              className="h-8 sm:h-9 md:h-10 lg:h-11 2xl:h-13 px-2 sm:px-2.5 md:px-3 bg-white/95 border-2 2xl:border-3 border-slate-900 rounded-xl 2xl:rounded-2xl shadow-[2px_2px_0px_#0f172a] flex items-center gap-1 shrink-0"
              title={`Skor Selesai: ${score}/${totalStories}`}
            >
              <span className="text-xs sm:text-sm md:text-base">🏆</span>
              <span id="arena-score-value" className="font-display text-xs sm:text-sm md:text-base 2xl:text-lg font-black text-orange-700">
                {score}
              </span>
            </div>

            {/* Audio Toggle */}
            <AudioToggle
              id="arena-audio-button"
              isMuted={isMuted}
              onToggle={onToggleAudio}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 2xl:w-13 2xl:h-13 bg-white/95 shadow-[2px_2px_0px_#0f172a]"
            />
          </div>
        </div>
      </header>

      {/* Right Side: Level Selector in Brand Red/Orange Card (Level 1 - 5) - Centered Vertically */}
      <div
        id="arena-level-selector"
        className="fixed right-2 sm:right-3 md:right-4 xl:right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1 sm:gap-1.5 bg-gradient-to-b from-[#FA6E00] via-[#E85D00] to-[#C93B00] border-2 border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.45)] rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 md:p-2 select-none pointer-events-auto"
      >
        <div className="text-[7.5px] sm:text-[9px] md:text-[10px] font-display text-white tracking-widest uppercase mb-0.5 flex items-center gap-1 drop-shadow-sm">
          <span>🎬</span>
          <span className="hidden sm:inline font-bold">LEVEL</span>
        </div>

        {Array.from({ length: totalStories }, (_, i) => {
          const storyNum = i + 1;
          const isCurrent = i === currentStoryIndex;
          const story = STORYBOARD_CAMPAIGN[i];
          const answer = answers.find(a => a.storyId === story?.id);
          const isAnswered = !!answer;
          const isCorrect = answer?.isCorrect;

          return (
            <button
              key={storyNum}
              type="button"
              onClick={() => onJumpToStory(i)}
              className={`relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5 rounded-lg sm:rounded-xl font-display text-[11px] sm:text-xs md:text-sm font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isCurrent
                  ? 'bg-white text-[#FA6E00] ring-2 sm:ring-3 ring-white scale-110 shadow-lg font-black z-10'
                  : isAnswered
                  ? isCorrect
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-105 border border-emerald-300 shadow-xs'
                    : 'bg-[#1e2633]/90 text-white/90 hover:bg-[#2a3344] hover:scale-105 border border-white/30 shadow-xs'
                  : 'bg-white/20 text-white hover:bg-white/40 hover:scale-105 border border-white/25 shadow-xs'
              }`}
              title={`Level ${storyNum}: ${story?.title || ''}${
                isAnswered ? (isCorrect ? ' (Selesai Benar)' : ' (Selesai)') : ' (Klik untuk pindah level)'
              }`}
            >
              <span>{storyNum}</span>
              {/* Status Indicator Badge */}
              {isAnswered && (
                <span
                  className={`absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-white ${
                    isCorrect ? 'bg-emerald-400' : 'bg-rose-500'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Content Arena */}
      <main id="arena-main-content" className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 md:px-12 lg:px-16 2xl:px-20 py-4 sm:py-6 2xl:py-10 gap-4 sm:gap-6 2xl:gap-8 relative z-10">
        
        {/* Action triggers & Evaluation feedback panels */}
        <div id="arena-action-bar-container" className="w-full shrink-0 max-w-3xl sm:max-w-4xl 2xl:max-w-6xl mx-auto pr-9 sm:pr-0">
          {/* Main Action Bar */}
          {!showFeedback && (
            <div
              id="arena-action-bar"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-md border-2 2xl:border-3 border-slate-900 p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl shadow-[4px_4px_0px_#0f172a] 2xl:shadow-[6px_6px_0px_#0f172a]"
            >
              <div id="arena-action-text-container" className="flex flex-col gap-0.5 2xl:gap-1.5">
                <p id="arena-action-title" className="text-xs sm:text-sm 2xl:text-lg font-display font-bold text-slate-800 uppercase tracking-wider">
                  Evaluasi Urutan Storyboard
                </p>
                <p id="arena-action-desc" className="text-[10px] sm:text-xs 2xl:text-base text-slate-500 font-bold leading-normal">
                  Tarik & lepas (drag-and-drop) kartu atau gunakan tombol Geser untuk mengurutkan kejadian dari atas ke bawah.
                </p>
              </div>

              <div id="arena-action-buttons-container" className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 2xl:gap-4 w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                {attempts > 0 && (
                  <span id="arena-attempts-indicator" className="text-xs 2xl:text-base font-display font-bold text-rose-600 mr-auto sm:mr-0">
                    Salah: {attempts}x
                  </span>
                )}
                <button
                  id="arena-check-button"
                  type="button"
                  onClick={onCheck}
                  className="px-4 sm:px-5 2xl:px-8 py-2 2xl:py-3.5 font-display text-xs sm:text-sm 2xl:text-lg font-bold uppercase rounded-lg 2xl:rounded-xl border-2 2xl:border-3 transition-all cursor-pointer border-slate-900 text-white bg-orange-600 hover:bg-orange-700 shadow-[3px_3px_0px_#0f172a] 2xl:shadow-[5px_5px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a]"
                >
                  Periksa Cerita
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Storyboard cards board */}
        <div id="arena-cards-list" className="flex flex-col gap-4 2xl:gap-6 py-2 shrink-0 max-w-3xl sm:max-w-4xl 2xl:max-w-6xl mx-auto w-full pr-9 sm:pr-0">
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

      {/* Toast Notification when link is copied to clipboard */}
      {showShareToast && (
        <div
          id="arena-share-toast"
          className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-white font-sans text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl shadow-2xl border border-white/20 animate-fadeIn pointer-events-none flex items-center gap-2"
        >
          <span>✨</span>
          <span>Tautan game berhasil disalin!</span>
        </div>
      )}

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
        allCompleted={allCompleted}
      />
    </div>
  );
}
