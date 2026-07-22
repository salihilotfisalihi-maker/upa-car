'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { MapPin, Compass, ShieldCheck, Award } from 'lucide-react';

interface AboutProps {
  lang: Lang;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  const destinations = [
    'Ouarzazate City & Kasbah Taourirt',
    'Aït Ben Haddou (UNESCO World Heritage)',
    'Dades Valley & Rose Valley',
    'Todra Gorges & Tinghir',
    'Sahara Desert (Merzouga & Zagora)',
    'Atlas Mountains & Tizi n\'Tichka Pass',
  ];

  return (
    <section id="about" className="py-24 bg-black relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              {t(lang, 'about.eyebrow')}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {t(lang, 'about.title')}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              {t(lang, 'about.p1')}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
              {t(lang, 'about.p2')}
            </p>

            {/* Destinations List */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>{t(lang, 'about.destinations')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{dest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image Composition & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
                alt="Aït Ben Haddou Kasbah Ouarzazate"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Stats Box */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 glass-panel p-6 rounded-2xl border-emerald-500/30 shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-display text-3xl font-bold text-white block leading-none">
                    5.0 ★
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block mt-1 font-semibold">
                    Top Rated in Ouarzazate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
