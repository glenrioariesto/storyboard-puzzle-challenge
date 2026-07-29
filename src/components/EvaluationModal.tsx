import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EvaluationModalProps {
  isOpen: boolean;
  explanation: string;
  onAdvance: () => void;
  currentStoryIndex: number;
  totalStories: number;
}

export function EvaluationModal({
  isOpen,
  explanation,
  onAdvance,
  currentStoryIndex,
  totalStories
}: EvaluationModalProps) {
  // Trigger festive confetti animation when modal opens
  useEffect(() => {
    if (isOpen) {
      // Fire confetti burst from left and right sides
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#10b981', '#f59e0b', '#3b82f6', '#ec4899']
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ea580c', '#10b981', '#f59e0b']
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ea580c', '#10b981', '#f59e0b']
        });
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isLastStory = currentStoryIndex === totalStories - 1;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      {/* Modal Container - Compact for Mobile */}
      <div className="relative w-full max-w-md sm:max-w-lg brutalist-card bg-emerald-50 border-emerald-700 rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 z-10 select-none shadow-[4px_4px_0px_#047857] sm:shadow-[6px_6px_0px_#047857] max-h-[85vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center gap-2 border-b-2 pb-2.5 border-slate-900 shrink-0">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700 shrink-0 animate-bounce" />
          <h4 className="font-mono text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wider">
            STORYBOARD SEJAJAR BENAR (+1)
          </h4>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 py-1">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-emerald-800 font-bold uppercase">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 shrink-0" />
            <span>Ulasan Alur Cerita</span>
          </div>
          <p className="text-slate-700 leading-relaxed font-sans text-justify text-xs sm:text-[13px] font-medium sm:font-semibold bg-white/80 border-2 border-slate-900 p-3 sm:p-4 rounded-xl shadow-[2px_2px_0px_#0f172a] overflow-y-auto max-h-[40vh]">
            {explanation}
          </p>
        </div>

        {/* Actions */}
        <button
          type="button"
          onClick={onAdvance}
          className="w-full py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center justify-center gap-2 shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer shrink-0 mt-1"
        >
          <span>{isLastStory ? 'Lihat Hasil Evaluasi' : 'Lanjut ke Storyboard Berikutnya'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
