import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Scene } from '../types';

interface SceneCardProps {
  scene: Scene;
  idx: number;
  totalScenes: number;
  checked: boolean;
  showFeedback: boolean;
  onMoveCard: (index: number, direction: 'up' | 'down') => void;
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
      className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-row gap-3 sm:gap-4 items-center transition-all duration-200 relative group overflow-hidden cursor-grab active:cursor-grabbing ${cardClass}`}
    >
      {/* Scene image rendering - Image Left */}
      <div className="w-24 h-24 sm:w-40 sm:h-28 rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 relative border-2 border-slate-900 pointer-events-none shrink-0">
        <img
          src={scene.imageUrl}
          alt={scene.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
      </div>

      {/* Narrative & Info content rendering - Text Right */}
      <div className="flex-1 flex flex-col justify-between min-w-0 self-stretch">
        <div>
          {/* Header line with index, title, and validation indicators */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
            <span className="bg-slate-900 border-2 border-slate-900 text-[8px] sm:text-[10px] font-mono text-white font-bold px-1.5 sm:px-2 py-0.5 rounded-md">
              Slot #{idx + 1}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-serif truncate max-w-[150px] sm:max-w-none">
              {scene.title}
            </h4>
            {checked && (
              <span className={`inline-flex items-center gap-0.5 text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md border-2 ${
                isPosCorrect 
                  ? 'bg-emerald-100 border-emerald-700 text-emerald-800' 
                  : 'bg-rose-100 border-rose-700 text-rose-800'
              }`}>
                {isPosCorrect ? '✓ OK' : '✗ Salah'}
              </span>
            )}
          </div>

          {/* Narrative description snippet */}
          <p className="text-slate-700 text-[10px] sm:text-xs leading-relaxed font-sans text-justify mb-2 sm:mb-3 font-medium pointer-events-none line-clamp-3 sm:line-clamp-none">
            {scene.narrative}
          </p>
        </div>

        {/* Card Controls Panel - Atas / Bawah */}
        <div className="flex items-center gap-2 border-t-2 border-slate-900 pt-2 mt-auto">
          <button
            type="button"
            disabled={idx === 0 || showFeedback}
            onClick={(e) => {
              e.stopPropagation();
              onMoveCard(idx, 'up');
            }}
            className={`flex-1 py-1 flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg border-2 text-[9px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
              idx === 0 || showFeedback
                ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a]'
            }`}
          >
            <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Geser Atas</span>
          </button>
          <button
            type="button"
            disabled={idx === totalScenes - 1 || showFeedback}
            onClick={(e) => {
              e.stopPropagation();
              onMoveCard(idx, 'down');
            }}
            className={`flex-1 py-1 flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg border-2 text-[9px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
              idx === totalScenes - 1 || showFeedback
                ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a]'
            }`}
          >
            <span>Geser Bawah</span>
            <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
