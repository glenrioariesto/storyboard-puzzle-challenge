import React, { useState } from 'react';
import { Award, RotateCcw, Check, BookOpen, X, ChevronRight } from 'lucide-react';
import { StoryAnswer, Story } from '../../types';
import { STORYBOARD_CAMPAIGN } from '../../data/storyboardData';

interface ResultPageProps {
  score: number;
  answers: StoryAnswer[];
  onRestart: () => void;
  getRank: (score: number) => { title: string; desc: string; color: string };
}

export function ResultPage({ score, answers, onRestart, getRank }: ResultPageProps) {
  const rank = getRank(score);
  const accuracy = Math.round((score / STORYBOARD_CAMPAIGN.length) * 100);

  // Rekap modal & selected story states
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <div className="min-h-screen w-screen bg-transparent relative flex flex-col items-center justify-start sm:justify-center p-2.5 sm:p-6 text-slate-800 overflow-y-auto">
      <div className="z-10 max-w-4xl w-full flex flex-col items-center py-2 sm:py-8 select-none animate-fadeIn">
        
        {/* Headings */}
        <h2 className="text-lg sm:text-3xl font-black font-serif mb-3 sm:mb-6 text-center uppercase tracking-wide text-slate-900">
          Hasil Evaluasi Storyboarding
        </h2>

        {/* Rank & Score Dashboard Card - Strictly Flex Row Across All Devices */}
        <div className="flex flex-row items-stretch gap-2 sm:gap-6 w-full mb-3 sm:mb-8">
          {/* Circular Score Circle */}
          <div className="w-5/12 sm:w-1/3 brutalist-card rounded-xl sm:rounded-2xl p-2 sm:p-5 flex flex-col items-center justify-center text-center bg-white shrink-0">
            <span className="text-[7.5px] sm:text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1 sm:mb-3">
              Akurasi Struktur
            </span>
            <div className="relative w-14 h-14 sm:w-28 sm:h-28 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-slate-200"></div>
              <div 
                className="absolute inset-0 rounded-full border-2 sm:border-4 border-orange-600"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-2xl font-black font-serif text-slate-900">{accuracy}%</span>
                <span className="text-[6.5px] sm:text-[8px] font-mono text-orange-700 uppercase font-bold mt-0.5">
                  {score}/{STORYBOARD_CAMPAIGN.length} Selesai
                </span>
              </div>
            </div>
          </div>

          {/* Rank Badge description */}
          <div className="w-7/12 sm:w-2/3 brutalist-card rounded-xl sm:rounded-2xl p-2.5 sm:p-5 flex flex-col justify-between bg-white relative overflow-hidden">
            <div>
              <span className="text-[7.5px] sm:text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Kategori Kemahiran
              </span>
              
              <div className={`inline-flex self-start px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-mono font-bold mb-1 sm:mb-2 ${rank.color}`}>
                {rank.title}
              </div>

              <p className="text-slate-700 text-[9.5px] sm:text-xs leading-tight sm:leading-relaxed max-w-lg mb-1.5 sm:mb-3 font-medium line-clamp-3 sm:line-clamp-none">
                {rank.desc}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-4 text-[7.5px] sm:text-xs font-mono text-slate-500 font-bold border-t border-slate-100 pt-1.5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 border border-slate-900"></div>
                <span>Tersusun: {score}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500 border border-slate-900"></div>
                <span>Evaluasi: {STORYBOARD_CAMPAIGN.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Left (Rekap Level) and Right (Ulangi) - Flex Fit Container */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-md mb-4">
          <button
            type="button"
            onClick={() => setIsRekapOpen(true)}
            className="flex-1 brutalist-button px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold font-mono text-[11px] sm:text-sm tracking-wider uppercase flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer bg-slate-900 text-white border-2 border-slate-900 shadow-[3px_3px_0px_#ea580c] sm:shadow-[4px_4px_0px_#ea580c] hover:bg-slate-800 active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#ea580c]"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 stroke-[2.5]" />
            <span className="whitespace-nowrap">Rekap Level</span>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="flex-1 brutalist-button px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold font-mono text-[11px] sm:text-sm tracking-wider uppercase flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer bg-orange-600 hover:bg-orange-500 text-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] sm:shadow-[4px_4px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a]"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 stroke-[2.5]" />
            <span className="whitespace-nowrap">Ulangi</span>
          </button>
        </div>
      </div>

      {/* Story Detail Compact Modal (vh 95) */}
      {selectedStory && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className="absolute inset-0 cursor-default" onClick={() => setSelectedStory(null)} />
          <div className="relative w-full max-w-lg h-[95vh] brutalist-card bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between z-10 select-none shadow-[6px_6px_0px_#000000]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3 shrink-0">
              <div className="flex items-center gap-2 text-orange-700 min-w-0 pr-2">
                <BookOpen className="w-5 h-5 shrink-0" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider truncate">
                  Ulasan #{selectedStory.id}: {selectedStory.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="p-1 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer shrink-0"
              >
                <X className="w-4 h-4 text-slate-800" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 py-4 flex flex-col gap-4 overflow-y-auto">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Struktur & Analisis Alur Narasi:
                </span>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-sans text-justify font-medium bg-slate-50 border-2 border-slate-900 p-4 rounded-xl shadow-[2px_2px_0px_#000000]">
                  {selectedStory.explanation}
                </p>
              </div>

              {/* Adegan Preview Mini List */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Urutan Kronologis Adegan:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedStory.scenes.map((s, idx) => (
                    <div key={s.id} className="p-2 border border-slate-900 rounded-lg bg-slate-50 flex items-center gap-2">
                      <img src={s.imageUrl} alt={s.title} className="w-10 h-10 object-contain rounded bg-slate-950 border border-slate-900 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[8px] font-mono font-bold text-orange-600 block">Slot #{idx + 1}</span>
                        <p className="text-[10px] font-bold font-serif text-slate-900 truncate">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t-2 border-slate-900 pt-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1 shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
              >
                <span>Tutup Ulasan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Rekapitulasi & Ulasan Level List Modal (vh 95) */}
      {isRekapOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className="absolute inset-0 cursor-default" onClick={() => setIsRekapOpen(false)} />
          <div className="relative w-full max-w-xl h-[95vh] brutalist-card bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between z-10 select-none shadow-[6px_6px_0px_#000000]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3 shrink-0">
              <div className="flex items-center gap-2 text-orange-700">
                <BookOpen className="w-5 h-5 shrink-0" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider">
                  Rekapitulasi Level & Ulasan
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsRekapOpen(false)}
                className="p-1 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer shrink-0"
              >
                <X className="w-4 h-4 text-slate-800" />
              </button>
            </div>

            {/* Level List inside Modal */}
            <div className="flex-1 py-4 flex flex-col gap-3 overflow-y-auto">
              <p className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider">
                Pilih level di bawah untuk membuka ulasan narasi:
              </p>
              {STORYBOARD_CAMPAIGN.map((c) => {
                const ans = answers.find(a => a.storyId === c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setSelectedStory(c);
                    }}
                    className="w-full p-4 border-2 border-slate-900 bg-slate-50 hover:bg-orange-50 rounded-xl flex items-center justify-between shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a] transition-all cursor-pointer text-left"
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-slate-900 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                          #0{c.id}
                        </span>
                        <span className="text-sm font-bold font-serif text-slate-900 truncate">
                          {c.title}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 truncate">
                        {ans ? `${ans.attemptsCount}x Cek` : 'Selesai'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 text-orange-600 font-bold text-xs font-mono bg-white border border-orange-300 px-3 py-1.5 rounded-lg shadow-xs">
                      <span>Buka Ulasan</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="border-t-2 border-slate-900 pt-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsRekapOpen(false)}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 border-2 border-slate-900 text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1 shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000000] cursor-pointer"
              >
                <span>Tutup Rekap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
