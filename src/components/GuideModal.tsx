import React, { useState, useEffect } from 'react';
import { X, BookOpen, Lightbulb, ArrowRight, ArrowLeft, MoveVertical, CheckCircle2 } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export function GuideModal({ isOpen, onClose, title, description }: GuideModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Reset slide index when modal is opened/closed
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />
      
      {/* Compact Modal Container */}
      <div className="relative w-full max-w-md brutalist-card bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between z-10 select-none shadow-[6px_6px_0px_#000000]">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5 shrink-0">
          <div className="flex items-center gap-2 text-orange-700">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider">
              Panduan Level ({currentSlide + 1}/{totalSlides})
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

        {/* Content Slides (Compact height, no scrolling required) */}
        <div className="py-4 flex flex-col justify-center min-h-[160px] sm:min-h-[180px]">
          {currentSlide === 0 && (
            <div className="flex flex-col gap-2.5 animate-fadeIn">
              <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 leading-snug">
                {title}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          )}

          {currentSlide === 1 && (
            <div className="flex flex-col gap-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-xs uppercase tracking-wider">
                <MoveVertical className="w-4 h-4 text-orange-600" />
                <span>Cara Mengurutkan Adegan:</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-900 p-3 rounded-xl flex flex-col gap-2 text-xs text-slate-700 font-medium shadow-[2px_2px_0px_#000000]">
                <p className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 shrink-0">1.</span>
                  <span><strong>Tarik & Lepas (Drag & Drop):</strong> Geser langsung kartu cerita ke atas atau ke bawah.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 shrink-0">2.</span>
                  <span><strong>Tombol Geser Atas / Bawah:</strong> Gunakan tombol di bagian bawah setiap kartu untuk menukar posisi.</span>
                </p>
              </div>
            </div>
          )}

          {currentSlide === 2 && (
            <div className="flex flex-col gap-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-mono text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pemeriksaan Cerita & Skor:</span>
              </div>
              <div className="bg-emerald-50/60 border-2 border-slate-900 p-3 rounded-xl flex flex-col gap-2 text-xs text-slate-700 font-medium shadow-[2px_2px_0px_#000000]">
                <p className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700 shrink-0">✓</span>
                  <span>Susun adegan kronologis dari <strong>Slot #1 (Atas)</strong> hingga <strong>Slot Terakhir (Bawah)</strong>.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700 shrink-0">✓</span>
                  <span>Klik tombol <strong>Periksa Cerita</strong> jika urutan sudah sesuai untuk mendapat skor penuh.</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col gap-2.5 border-t-2 border-slate-900 pt-3 shrink-0">
          {/* Progress indicators */}
          <div className="flex justify-center gap-1.5 mb-0.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full border border-slate-900 cursor-pointer transition-all ${
                  currentSlide === idx ? 'bg-orange-600 scale-110 shadow-xs' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {currentSlide > 0 && (
              <button
                type="button"
                onClick={() => setCurrentSlide(prev => prev - 1)}
                className="px-3.5 py-2 border-2 border-slate-900 hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
            )}
            
            {currentSlide < totalSlides - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentSlide(prev => prev + 1)}
                className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
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
