'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { Star, ShieldCheck, Clock, MapPin, CheckCircle, ArrowRight, Car } from 'lucide-react';

interface HeroProps {
  lang: Lang;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const rtl = isRTL(lang);

  const trustBadges = [
    { text: t(lang, 'trust.rating'), icon: Star },
    { text: t(lang, 'trust.customers'), icon: CheckCircle },
    { text: t(lang, 'trust.hours'), icon: Clock },
    { text: t(lang, 'trust.airport'), icon: MapPin },
    { text: t(lang, 'trust.hotel'), icon: MapPin },
    { text: t(lang, 'trust.fees'), icon: ShieldCheck },
    { text: t(lang, 'trust.insurance'), icon: ShieldCheck },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-black" dir={rtl ? 'rtl' : 'ltr'}>
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1600&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Glow Orbs */}
      <div className="emerald-orb top-1/4 -right-32 opacity-40 blur-3xl pointer-events-none" />
      <div className="emerald-orb bottom-10 left-10 opacity-20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-emerald" />
            <span>{t(lang, 'hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
            {t(lang, 'hero.title1')}{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
              {t(lang, 'hero.title2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
            {t(lang, 'hero.subtitle')}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>{t(lang, 'hero.cta1')}</span>
              <ArrowRight className={`w-4 h-4 ${rtl ? 'rotate-180' : ''}`} />
            </button>

            <a
              href="#fleet"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-emerald-500/50 flex items-center gap-2"
            >
              <Car className="w-4 h-4 text-emerald-400" />
              <span>{t(lang, 'hero.cta2')}</span>
            </a>
          </div>

          {/* Trust Badges Chips */}
          <div className="flex flex-wrap gap-2.5 max-w-3xl pt-2">
            {trustBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-sm hover:border-emerald-500/30 transition-all"
                >
                  <IconComp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="glass-panel p-5 rounded-2xl border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">
              {t(lang, 'hero.badge1.num')}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              {t(lang, 'hero.badge1.label')}
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
              {t(lang, 'hero.badge2.num')}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              {t(lang, 'hero.badge2.label')}
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">
              {t(lang, 'hero.badge3.num')}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              {t(lang, 'hero.badge3.label')}
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
              {t(lang, 'hero.badge4.num')}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              {t(lang, 'hero.badge4.label')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
