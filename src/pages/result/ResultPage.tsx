import React from 'react';
import { Award, RotateCcw, Check, BookOpen } from 'lucide-react';
import { StoryAnswer } from '../../types';
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

  return (
    <div className="min-h-screen w-screen bg-transparent relative flex flex-col items-center justify-center p-6 text-slate-800 overflow-y-auto">
      <div className="z-10 max-w-4xl w-full flex flex-col items-center py-8 select-none animate-fadeIn">
        {/* Leaderboard icon */}
        <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center mb-4 shadow-[4px_4px_0px_#0f172a]">
          <Award className="w-8 h-8 text-orange-600" />
        </div>

        {/* Headings */}
        <h2 className="text-2xl md:text-3xl font-black font-serif mb-1 text-center uppercase tracking-wide text-slate-900">
          Hasil Evaluasi Storyboarding
        </h2>
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-6 font-bold">
          Laporan Kemampuan Skenario Selesai
        </p>

        {/* Rank & Score Dashboard Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-8">
          {/* Circular Score Circle */}
          <div className="md:col-span-4 brutalist-card rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-white">
            <span className="text-[9px] font-mono font-bold text-slate-550 uppercase tracking-widest mb-4">
              Akurasi Struktur
            </span>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-orange-650"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black font-serif text-slate-900">{accuracy}%</span>
                <span className="text-[8px] font-mono text-orange-700 uppercase font-bold mt-1">
                  {score} / {STORYBOARD_CAMPAIGN.length} Selesai
                </span>
              </div>
            </div>
          </div>

          {/* Rank Badge description */}
          <div className="md:col-span-8 brutalist-card rounded-2xl p-6 flex flex-col justify-center bg-white relative overflow-hidden">
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
              Kategori Kemahiran
            </span>
            
            <div className={`inline-flex self-start px-3 py-1.5 rounded-lg text-xs font-mono font-bold mb-3 ${rank.color}`}>
              {rank.title}
            </div>

            <p className="text-slate-700 text-xs leading-relaxed max-w-lg mb-4 font-medium">
              {rank.desc}
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 font-bold">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900"></div>
                <span>Tersusun: {score} Cerita</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 border border-slate-900"></div>
                <span>Batas Evaluasi: {STORYBOARD_CAMPAIGN.length} Kasus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case-by-case details log table */}
        <div className="w-full brutalist-card rounded-2xl p-6 bg-white mb-8">
          <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-3 mb-4">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              Rekapitulasi Penyusunan Skenario
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-650 pb-2">
                  <th className="pb-2 font-bold uppercase tracking-wider w-12 text-center">Kasus</th>
                  <th className="pb-2 font-bold uppercase tracking-wider">Judul Storyboard</th>
                  <th className="pb-2 font-bold uppercase tracking-wider">Kategori Cerita</th>
                  <th className="pb-2 font-bold uppercase tracking-wider text-center w-24">Jumlah Cek</th>
                  <th className="pb-2 font-bold uppercase tracking-wider text-center w-24">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {STORYBOARD_CAMPAIGN.map((c) => {
                  const ans = answers.find(a => a.storyId === c.id);
                  return (
                    <tr key={c.id} className="hover:bg-slate-50">
                      <td className="py-3 text-center text-slate-500 font-bold">#0{c.id}</td>
                      <td className="py-3 font-sans">
                        <div className="font-bold text-slate-800">{c.title}</div>
                      </td>
                      <td className="py-3 font-sans text-slate-500 font-semibold">
                        {c.category}
                      </td>
                      <td className="py-3 text-center text-slate-650 font-bold">
                        {ans ? `${ans.attemptsCount}x Cek` : '-'}
                      </td>
                      <td className="py-3 text-center">
                        <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 border-2 border-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold animate-pulse">
                          <Check className="w-3 h-3" /> Sukses
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onRestart}
          className="brutalist-button px-8 py-3.5 rounded-xl font-bold font-mono text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-white" />
          Mulai Ulang Penyusunan
        </button>
      </div>
    </div>
  );
}
