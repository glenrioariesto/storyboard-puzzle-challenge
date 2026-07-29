import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Story, Scene } from '../../types';
import { GuideModal } from '../../components/GuideModal';
import { EvaluationModal } from '../../components/EvaluationModal';
import { SceneCard } from '../../components/SceneCard';
import arenaBg from '../../../assets/arena-bg.jpg';

interface ArenaPageProps {
  currentStoryIndex: number;
  activeStory: Story;
  totalStories: number;
  showFeedback: boolean;
  checked: boolean;
  score: number;
  attempts: number;
  shuffledScenes: Scene[];
  onMoveCard: (index: number, direction: 'up' | 'down') => void;
  onReorderCard: (fromIndex: number, toIndex: number) => void;
  onCheck: () => void;
  onAdvance: () => void;
  onBack: () => void;
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
  onMoveCard,
  onReorderCard,
  onCheck,
  onAdvance,
  onBack
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
    <div className="min-h-screen w-screen relative bg-amber-50/50 text-slate-800 flex flex-col font-sans overflow-hidden">
      {/* Scenic Atmosphere Background Image - Bright & Warm */}
      <img
        src={arenaBg}
        alt="Arena Background"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none filter blur-[1px] brightness-125 saturate-125"
      />
      {/* Light Clean Overlay for contrast */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-50/40 via-white/50 to-orange-50/60 backdrop-blur-[1px] z-0 pointer-events-none" />

      {/* Upper Navigation Header - Fixed/Sticky on top with Glassmorphism blur */}
      <header className="sticky top-0 left-0 right-0 bg-white/30 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-between z-30 shrink-0 select-none shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-mono font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900" />
          <span className="hidden sm:inline">Keluar</span>
        </button>

        <div className="flex flex-col items-center min-w-0 px-2">
          <span className="text-[9px] sm:text-[10px] font-mono text-orange-600 font-bold uppercase tracking-wider">
            Misi {currentStoryIndex + 1}/{totalStories}
          </span>
          <h3 className="text-xs sm:text-sm font-bold font-serif text-slate-900 mt-0.5 truncate max-w-[140px] sm:max-w-none">
            {activeStory.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsGuideOpen(true)}
            className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-slate-700 hover:text-orange-700 bg-white/90 hover:bg-orange-50 border-2 border-slate-900 hover:border-orange-500 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg transition-all shadow-[2px_2px_0px_#0f172a] hover:shadow-[3px_3px_0px_#ea580c] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a] cursor-pointer"
          >
            <span>💡<span className="hidden sm:inline"> Panduan</span></span>
          </button>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 font-bold hidden sm:inline">Poin:</span>
            <span className="font-mono text-xs sm:text-sm font-black text-orange-700 bg-orange-50 border-2 border-slate-900 px-1.5 sm:px-2.5 py-0.5 rounded shadow-[1px_1px_0px_#0f172a]">
              {score}
            </span>
          </div>
        </div>
      </header>

      {/* Progress Bar - Sticky below Header */}
      <div className="sticky top-[53px] sm:top-[68px] z-30 w-full h-1 sm:h-1.5 bg-white/30 backdrop-blur-md shrink-0 border-b-2 border-slate-900/80">
        <div
          className="h-full bg-orange-500 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Main Content Arena */}
      <main className="flex-1 flex flex-col overflow-y-auto px-3 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-6 relative z-10">
        
        {/* Action triggers & Evaluation feedback panels */}
        <div className="w-full shrink-0 max-w-4xl mx-auto">
          {/* Main Action Bar */}
          {!showFeedback && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-md border-2 border-slate-900 p-4 rounded-xl shadow-[4px_4px_0px_#0f172a]">
              <div className="flex flex-col gap-0.5">
                <p className="text-xs sm:text-sm font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Evaluasi Urutan Storyboard
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold leading-normal">
                  Tarik & lepas (drag-and-drop) kartu atau gunakan tombol Geser untuk mengurutkan kejadian dari atas ke bawah.
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
                {attempts > 0 && (
                  <span className="text-xs font-mono font-bold text-rose-600 mr-auto sm:mr-0">
                    Salah: {attempts}x
                  </span>
                )}
                <button
                  type="button"
                  onClick={onCheck}
                  className="px-4 sm:px-5 py-2 font-mono text-xs font-bold uppercase rounded-lg border-2 transition-all cursor-pointer border-slate-900 text-white bg-orange-600 hover:bg-orange-700 shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a]"
                >
                  Periksa Cerita
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Storyboard cards board */}
        <div className="flex flex-col gap-4 py-2 shrink-0 max-w-4xl mx-auto w-full">
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
