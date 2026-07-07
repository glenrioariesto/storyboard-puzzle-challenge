import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Scene } from '../types';

interface SceneCardProps {
  scene: Scene;
  idx: number;
  totalScenes: number;
  checked: boolean;
  showFeedback: boolean;
  onMoveCard: (index: number, direction: 'left' | 'right') => void;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
  onDragEnd: () => void;
  isDragging: boolean;
}

export function SceneCard({
  scene,
  idx,
  totalScenes,
  checked,
  showFeedback,
  onMoveCard,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging
}: SceneCardProps) {
  const isPosCorrect = scene.id === idx;

  // Compute border and badge colors based on validation state
  let cardClass = 'brutalist-card bg-white';
  if (checked) {
    cardClass = isPosCorrect 
      ? 'border-2 border-emerald-600 bg-emerald-50/50 shadow-[4px_4px_0px_#059669]' 
      : 'border-2 border-rose-600 bg-rose-50/50 shadow-[4px_4px_0px_#e11d48]';
  }

  // Adjust card appearance when dragging
  if (isDragging) {
    cardClass = 'border-2 border-dashed border-orange-500 bg-orange-50/10 opacity-30 scale-95 shadow-none transition-all';
  }

  return (
    <div
      draggable={!showFeedback}
      onDragStart={(e) => onDragStart(e, idx)}
      onDragOver={(e) => onDragOver(e, idx)}
      onDrop={(e) => onDrop(e, idx)}
      onDragEnd={onDragEnd}
      className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-200 relative group overflow-hidden cursor-grab active:cursor-grabbing ${cardClass}`}
    >
      {/* Positional Index Tag on top */}
      <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 z-10 bg-slate-900 border-2 border-slate-900 text-[8px] sm:text-[10px] font-mono text-white font-bold px-1.5 sm:px-2 py-0.5 rounded-md">
        Slot #{idx + 1}
      </div>

      {/* Validation Positional indicators */}
      {checked && (
        <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 z-10">
          {isPosCorrect ? (
            <span className="inline-flex items-center gap-0.5 bg-emerald-100 border-2 border-emerald-700 text-[8px] sm:text-[9px] font-mono font-bold text-emerald-800 px-1 sm:px-1.5 py-0.5 rounded-md">
              ✓ OK
            </span>
          ) : (
            <span className="inline-flex items-center gap-0.5 bg-rose-100 border-2 border-rose-700 text-[8px] sm:text-[9px] font-mono font-bold text-rose-800 px-1 sm:px-1.5 py-0.5 rounded-md">
              ✗ Salah
            </span>
          )}
        </div>
      )}

      {/* Scene image rendering */}
      <div className="w-full h-28 sm:h-32 rounded-lg sm:rounded-xl overflow-hidden mb-2.5 sm:mb-3.5 bg-slate-200 relative border-2 border-slate-900 pointer-events-none">
        <img
          src={scene.imageUrl}
          alt={scene.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
        <h4 className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 text-[10px] sm:text-xs font-bold text-white font-serif bg-slate-900/60 px-1.5 sm:px-2 py-0.5 rounded">
          {scene.title}
        </h4>
      </div>

      {/* Narrative description snippet */}
      <p className="text-slate-700 text-[11px] sm:text-xs leading-relaxed font-sans text-justify mb-3 sm:mb-4 min-h-[60px] sm:min-h-[84px] font-medium pointer-events-none">
        {scene.narrative}
      </p>

      {/* Card Controls Panel */}
      <div className="flex flex-col gap-2 sm:gap-3 border-t-2 border-slate-900 pt-2.5 sm:pt-3.5 mt-auto">
        {/* Card shift controls */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
          <button
            type="button"
            disabled={idx === 0 || showFeedback}
            onClick={(e) => {
              e.stopPropagation();
              onMoveCard(idx, 'left');
            }}
            className={`flex-1 py-1 flex items-center justify-center rounded-lg border-2 text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
              idx === 0 || showFeedback
                ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a]'
            }`}
          >
            <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Geser </span><span>Kiri</span>
          </button>
          <button
            type="button"
            disabled={idx === totalScenes - 1 || showFeedback}
            onClick={(e) => {
              e.stopPropagation();
              onMoveCard(idx, 'right');
            }}
            className={`flex-1 py-1 flex items-center justify-center rounded-lg border-2 text-[10px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
              idx === totalScenes - 1 || showFeedback
                ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a]'
            }`}
          >
            <span className="hidden sm:inline">Geser </span><span>Kanan</span>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
