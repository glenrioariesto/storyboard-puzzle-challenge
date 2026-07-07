import React, { useState, useEffect } from 'react';
import { X, BookOpen, Lightbulb, ArrowRight, ArrowLeft } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description: string;
}

export function GuideModal({ isOpen, onClose, title, category, description }: GuideModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide index when modal is opened/closed
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md brutalist-card bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[380px] z-10 select-none shadow-[6px_6px_0px_#000000]">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
          <div className="flex items-center gap-2 text-orange-700">
            <BookOpen className="w-5 h-5 shrink-0" />
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider">
              Panduan Storyboard {currentSlide + 1}/2
            </h4>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <X className="w-4 h-4 text-slate-800" />
          </button>
        </div>

        {/* Content Slides */}
        <div className="flex-1 py-4 flex flex-col justify-center">
          {currentSlide === 0 ? (
            <div className="flex flex-col gap-3 animate-fadeIn">
              <div>
                <span className="text-[9px] font-mono font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded border-2 border-slate-900">
                  {category}
                </span>
                <h3 className="text-lg font-bold font-serif text-slate-900 mt-2.5">
                  {title}
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                {description}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 animate-fadeIn">
              {/* Quick Tutorial */}
              <div className="bg-slate-50 border-2 border-slate-900 p-4 rounded-xl flex gap-3 items-start shadow-[3px_3px_0px_#000000]">
                <Lightbulb className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 font-mono uppercase tracking-wider text-[11px]">
                    Cara Bermain:
                  </span>
                  <p>
                    1. <strong>Tarik & Lepas (Drag & Drop)</strong> kartu cerita untuk memindahkan posisinya secara langsung.
                  </p>
                  <p>
                    2. Atau gunakan tombol <strong>Geser Kiri / Kanan</strong> di bagian bawah kartu untuk menggeser.
                  </p>
                  <p>
                    3. Urutkan seluruh adegan secara kronologis dari kiri ke kanan, lalu klik <strong>Periksa Cerita</strong> untuk mengecek hasil Anda.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col gap-3 border-t-2 border-slate-900 pt-4 mt-auto">
          {/* Progress dots */}
          <div className="flex justify-center gap-1.5 mb-1">
            <span 
              onClick={() => setCurrentSlide(0)}
              className={`w-2.5 h-2.5 rounded-full border border-slate-900 cursor-pointer transition-all ${
                currentSlide === 0 ? 'bg-orange-600 scale-110 shadow-sm' : 'bg-slate-200'
              }`}
            />
            <span 
              onClick={() => setCurrentSlide(1)}
              className={`w-2.5 h-2.5 rounded-full border border-slate-900 cursor-pointer transition-all ${
                currentSlide === 1 ? 'bg-orange-600 scale-110 shadow-sm' : 'bg-slate-200'
              }`}
            />
          </div>

          <div className="flex items-center gap-2">
            {currentSlide === 1 && (
              <button
                type="button"
                onClick={() => setCurrentSlide(0)}
                className="px-4 py-2.5 border-2 border-slate-900 hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer animate-fadeIn"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>
            )}
            
            {currentSlide === 0 ? (
              <button
                type="button"
                onClick={() => setCurrentSlide(1)}
                className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
              >
                <span>Lanjut Cara Bermain</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
              >
                <span>Mulai Menyusun!</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
