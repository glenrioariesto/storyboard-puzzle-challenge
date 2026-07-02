import React from 'react';
import { Sparkles, Columns } from 'lucide-react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen relative flex flex-col items-center justify-center p-6 text-slate-800">
      {/* Pusbuk Logo on Absolute Top Left - Responsive Size */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-50 shrink-0 animate-fadeIn">
        <img 
          src={logoPusbuk} 
          alt="Logo Pusbuk" 
          className="h-10 sm:h-14 md:h-16 w-auto object-contain"
        />
      </div>

      <div className="z-10 max-w-2xl w-full flex flex-col items-center text-center select-none animate-fadeIn">
        {/* Sub-tag */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-orange-100 border-2 border-slate-900 text-orange-700 rounded-full text-xs font-mono font-bold mb-6 uppercase tracking-wider shadow-[2px_2px_0px_#0f172a]">
          <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
          <span>Simulasi Alur Narasi</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black font-serif mb-2 select-none uppercase text-slate-900 tracking-tight">
          PUZZLE STORYBOARD
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xs md:text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest font-bold">
          Susun Alur & Identifikasi Struktur Cerita
        </h2>

        {/* Dossier Card */}
        <div className="w-full brutalist-card rounded-2xl p-6 md:p-8 text-left mb-10 relative overflow-hidden">
          {/* Notebook rings simulation */}
          <div className="notebook-rings absolute top-0 left-0 right-0"></div>
          
          <div className="pt-5 flex items-center gap-3 border-b-2 border-slate-900 pb-4 mb-4">
            <Columns className="w-6 h-6 text-orange-600" />
            <h3 className="font-mono text-sm font-bold text-slate-900 uppercase tracking-wider">
              MATERI PEMBELAJARAN: STRUKTUR NARASI
            </h3>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Sebuah cerita yang baik memiliki alur yang teratur and logis. Dalam penulisan skenario atau pembuatan komik/film, <strong>storyboard</strong> digunakan untuk memetakan rangkaian adegan secara visual sebelum diproduksi.
          </p>
          <p className="text-slate-750 text-sm leading-relaxed mb-6 font-semibold">
            Misi Anda adalah menata kembali storyboard acak menjadi urutan yang benar, sekaligus mencocokkan struktur elemen berikut:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-orange-50/50 p-3 rounded-xl border-2 border-slate-900">
              <span className="font-mono font-bold text-orange-700 uppercase block mb-1">1. Pengenalan (Exposition)</span>
              <p className="text-slate-600 leading-relaxed">Mengintroduksi tokoh, latar tempat, waktu, serta suasana awal cerita.</p>
            </div>
            <div className="bg-indigo-50/50 p-3 rounded-xl border-2 border-slate-900">
              <span className="font-mono font-bold text-indigo-700 uppercase block mb-1">2. Awal Konflik (Rising Action)</span>
              <p className="text-slate-600 leading-relaxed">Munculnya masalah awal atau rintangan yang memicu reaksi tokoh.</p>
            </div>
            <div className="bg-rose-50/50 p-3 rounded-xl border-2 border-slate-900">
              <span className="font-mono font-bold text-rose-700 uppercase block mb-1">3. Klimaks (Climax)</span>
              <p className="text-slate-600 leading-relaxed">Puncak ketegangan masalah di mana konflik harus segera dipecahkan.</p>
            </div>
            <div className="bg-emerald-50/50 p-3 rounded-xl border-2 border-slate-900">
              <span className="font-mono font-bold text-emerald-700 uppercase block mb-1">4. Resolusi (Resolution)</span>
              <p className="text-slate-600 leading-relaxed">Jalan keluar dari konflik serta kondisi akhir dari para tokoh cerita.</p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="brutalist-button px-8 py-4 rounded-xl font-bold font-mono text-sm tracking-wider uppercase flex items-center gap-2 cursor-pointer"
        >
          Mulai Menyusun
          <span className="font-sans">→</span>
        </button>
      </div>
    </div>
  );
}
