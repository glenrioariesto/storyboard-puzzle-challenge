import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

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
  if (!isOpen) return null;

  const isLastStory = currentStoryIndex === totalStories - 1;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg brutalist-card bg-emerald-50 border-emerald-700 rounded-2xl p-6 flex flex-col gap-4 z-10 select-none shadow-[6px_6px_0px_#047857]">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 border-b-2 pb-3 border-slate-900">
          <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 animate-pulse" />
          <h4 className="font-mono text-sm font-bold text-emerald-800 uppercase tracking-widest">
            STORYBOARD SEJAJAR BENAR (+1)
          </h4>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-800 font-bold uppercase">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span>Ulasan Alur Cerita</span>
          </div>
          <p className="text-slate-700 leading-relaxed font-sans text-justify text-[13px] font-semibold bg-white/70 border-2 border-slate-900 p-4 rounded-xl shadow-[2px_2px_0px_#0f172a]">
            {explanation}
          </p>
        </div>

        {/* Actions */}
        <button
          type="button"
          onClick={onAdvance}
          className="w-full py-3 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer mt-2"
        >
          <span>{isLastStory ? 'Lihat Hasil Evaluasi' : 'Lanjut ke Storyboard Berikutnya'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
