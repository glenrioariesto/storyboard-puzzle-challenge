import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Story, Scene, NarrativeTag } from '../../types';

interface ArenaPageProps {
  currentStoryIndex: number;
  activeStory: Story;
  totalStories: number;
  showFeedback: boolean;
  checked: boolean;
  score: number;
  attempts: number;
  shuffledScenes: Scene[];
  assignedTags: Record<number, NarrativeTag>;
  onMoveCard: (index: number, direction: 'left' | 'right') => void;
  onAssignTag: (sceneId: number, tag: NarrativeTag) => void;
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
  assignedTags,
  onMoveCard,
  onAssignTag,
  onCheck,
  onAdvance,
  onBack
}: ArenaPageProps) {
  const progressPercentage = (currentStoryIndex / totalStories) * 100;
  
  // Verify if all cards have been assigned a narrative tag
  const isAllTagsAssigned = shuffledScenes.every(s => !!assignedTags[s.id]);

  return (
    <div className="min-h-screen w-screen bg-transparent text-slate-800 flex flex-col font-sans">
      {/* Upper Navigation Header */}
      <header className="border-b-2 border-slate-900 bg-white px-6 py-4 flex items-center justify-between z-10 shrink-0 select-none shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-slate-905" />
          <span>Keluar</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-orange-600 font-bold uppercase tracking-wider">
            Misi Storyboard {currentStoryIndex + 1} dari {totalStories}
          </span>
          <h3 className="text-sm font-bold font-serif text-slate-900 mt-0.5">
            {activeStory.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 font-bold">Poin:</span>
          <span className="font-mono text-sm font-black text-orange-700 bg-orange-50 border-2 border-slate-900 px-2.5 py-0.5 rounded shadow-[1px_1px_0px_#0f172a]">
            {score}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-200 relative z-10 shrink-0">
        <div
          className="h-full bg-orange-500 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Main Content Arena */}
      <main className="flex-1 flex flex-col overflow-y-auto p-6 gap-6 max-h-[calc(100vh-68px)]">
        {/* Intro Context Banner */}
        <div className="brutalist-card rounded-xl p-4 shrink-0 relative overflow-hidden bg-white">
          <span className="text-[9px] font-mono font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded border-2 border-slate-900">
            {activeStory.category}
          </span>
          <p className="text-xs text-slate-700 mt-2.5 leading-relaxed font-semibold">
            {activeStory.description}
          </p>
        </div>

        {/* Storyboard grid board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2 shrink-0">
          {shuffledScenes.map((scene, idx) => {
            const tag = assignedTags[scene.id] || '';
            const isPosCorrect = scene.id === idx;
            const isTagCorrect = tag === scene.correctTag;

            // Compute border and badge colors based on validation state
            let cardClass = 'brutalist-card bg-white';
            if (checked) {
              cardClass = (isPosCorrect && isTagCorrect) 
                ? 'border-2 border-emerald-600 bg-emerald-50/50 shadow-[4px_4px_0px_#059669]' 
                : 'border-2 border-rose-600 bg-rose-50/50 shadow-[4px_4px_0px_#e11d48]';
            }

            return (
              <div 
                key={scene.id}
                className={`rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${cardClass}`}
              >
                {/* Positional Index Tag on top */}
                <div className="absolute top-2 left-2 z-10 bg-slate-900 border-2 border-slate-900 text-[10px] font-mono text-white font-bold px-2 py-0.5 rounded-md">
                  Slot #{idx + 1}
                </div>

                {/* Validation Positional indicators */}
                {checked && (
                  <div className="absolute top-2 right-2 z-10">
                    {isPosCorrect ? (
                      <span className="inline-flex items-center gap-0.5 bg-emerald-100 border-2 border-emerald-750 text-[9px] font-mono font-bold text-emerald-800 px-1.5 py-0.5 rounded-md">
                        Posisi OK
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-0.5 bg-rose-100 border-2 border-rose-750 text-[9px] font-mono font-bold text-rose-800 px-1.5 py-0.5 rounded-md">
                        Salah Posisi
                      </span>
                    )}
                  </div>
                )}

                {/* Scene image rendering */}
                <div className="w-full h-32 rounded-xl overflow-hidden mb-3.5 bg-slate-200 relative border-2 border-slate-900">
                  <img
                    src={scene.imageUrl}
                    alt={scene.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
                  <h4 className="absolute bottom-2 left-2 text-xs font-bold text-white font-serif bg-slate-900/60 px-2 py-0.5 rounded">
                    {scene.title}
                  </h4>
                </div>

                {/* Narrative description snippet */}
                <p className="text-slate-700 text-xs leading-relaxed font-sans text-justify mb-4 min-h-[84px] font-medium">
                  {scene.narrative}
                </p>

                {/* Card Controls Panel */}
                <div className="flex flex-col gap-3 border-t-2 border-slate-900 pt-3.5 mt-auto">
                  {/* Narrative tag dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label 
                      htmlFor={`tag-select-${scene.id}`}
                      className="text-[10px] font-mono text-slate-600 font-bold uppercase tracking-wider"
                    >
                      Elemen Narasi:
                    </label>
                    <select
                      id={`tag-select-${scene.id}`}
                      value={tag}
                      disabled={showFeedback}
                      onChange={(e) => onAssignTag(scene.id, e.target.value as NarrativeTag)}
                      className={`w-full bg-white border-2 text-xs px-2 py-1.5 rounded-lg font-mono font-bold focus:outline-none focus:border-orange-500 cursor-pointer ${
                        checked 
                          ? isTagCorrect 
                            ? 'border-emerald-600 text-emerald-800 bg-emerald-50' 
                            : 'border-rose-600 text-rose-800 bg-rose-50'
                          : 'border-slate-900 text-slate-800'
                      }`}
                    >
                      <option value="">Pilih Struktur...</option>
                      <option value="pengenalan">Pengenalan</option>
                      <option value="konflik_awal">Awal Konflik</option>
                      <option value="klimaks">Klimaks</option>
                      <option value="resolusi">Resolusi</option>
                    </select>
                  </div>

                  {/* Card shift controls */}
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <button
                      type="button"
                      disabled={idx === 0 || showFeedback}
                      onClick={() => onMoveCard(idx, 'left')}
                      className={`flex-1 py-1 flex items-center justify-center rounded-lg border-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                        idx === 0 || showFeedback
                          ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                          : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a]'
                      }`}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Geser Kiri</span>
                    </button>
                    <button
                      type="button"
                      disabled={idx === shuffledScenes.length - 1 || showFeedback}
                      onClick={() => onMoveCard(idx, 'right')}
                      className={`flex-1 py-1 flex items-center justify-center rounded-lg border-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                        idx === shuffledScenes.length - 1 || showFeedback
                          ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                          : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#0f172a]'
                      }`}
                    >
                      <span>Geser Kanan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action triggers & Evaluation feedback panels */}
        <div className="flex flex-col gap-4 w-full mt-2 shrink-0">
          {/* Main Action Bar */}
          {!showFeedback && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-2 border-slate-900 p-4 rounded-xl shadow-[4px_4px_0px_#0f172a]">
              <div>
                <p className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Evaluasi Urutan Storyboard
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5 font-bold">
                  Geser kartu ke urutan kronologis yang benar, lalu tentukan elemen narasinya masing-masing.
                </p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                {attempts > 0 && (
                  <span className="text-xs font-mono font-bold text-rose-600">
                    Salah Evaluasi: {attempts}x
                  </span>
                )}
                <button
                  type="button"
                  disabled={!isAllTagsAssigned}
                  onClick={onCheck}
                  className={`w-full sm:w-auto px-6 py-2.5 font-mono text-xs font-bold uppercase rounded-lg border-2 transition-all cursor-pointer ${
                    !isAllTagsAssigned
                      ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                      : 'border-slate-900 text-white bg-orange-650 hover:bg-orange-600 shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a]'
                  }`}
                >
                  Periksa Cerita
                </button>
              </div>
            </div>
          )}

          {/* Success Educational Review explanation */}
          {showFeedback && (
            <div className="border-2 border-emerald-700 bg-emerald-50 p-6 flex flex-col gap-4 rounded-xl shadow-[4px_4px_0px_#047857] transition-all duration-300 animate-fadeIn">
              <div className="flex items-center gap-2.5 border-b-2 pb-3 border-slate-900">
                <CheckCircle2 className="w-5.5 h-5.5 text-emerald-750 shrink-0 animate-pulse" />
                <h4 className="font-mono text-sm font-bold text-emerald-800 uppercase tracking-widest">
                  STORYBOARD SEJAJAR BENAR (+1)
                </h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
                <div className="lg:col-span-8 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-850 font-bold uppercase">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                    <span>Ulasan Struktur Narasi</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-sans text-justify text-[13px] font-semibold">
                    {activeStory.explanation}
                  </p>
                </div>

                <div className="lg:col-span-4 flex items-end justify-end">
                  <button
                    type="button"
                    onClick={onAdvance}
                    className="w-full lg:w-auto px-6 py-3 bg-orange-650 hover:bg-orange-600 border-2 border-slate-900 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer"
                  >
                    <span>{currentStoryIndex === totalStories - 1 ? 'Lihat Hasil Evaluasi' : 'Lanjut ke Storyboard Berikutnya'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
