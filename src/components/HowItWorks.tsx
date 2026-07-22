'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { Car, Calendar, UserCheck, MessageSquare, CheckCircle2, Key } from 'lucide-react';

interface HowItWorksProps {
  lang: Lang;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  const steps = [
    { num: '1', icon: Car, title: t(lang, 'how.1.title'), desc: t(lang, 'how.1.desc') },
    { num: '2', icon: Calendar, title: t(lang, 'how.2.title'), desc: t(lang, 'how.2.desc') },
    { num: '3', icon: UserCheck, title: t(lang, 'how.3.title'), desc: t(lang, 'how.3.desc') },
    { num: '4', icon: MessageSquare, title: t(lang, 'how.4.title'), desc: t(lang, 'how.4.desc') },
    { num: '5', icon: CheckCircle2, title: t(lang, 'how.5.title'), desc: t(lang, 'how.5.desc') },
    { num: '6', icon: Key, title: t(lang, 'how.6.title'), desc: t(lang, 'how.6.desc') },
  ];

  return (
    <section id="how" className="py-24 bg-black relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            {t(lang, 'how.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            {t(lang, 'how.title')}
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base font-light">
            {t(lang, 'how.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="relative glass-panel p-8 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-gray-700 group-hover:text-emerald-400 transition-colors">
                    0{step.num}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
