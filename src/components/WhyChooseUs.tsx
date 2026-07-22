'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { Car, ShieldCheck, Tag, Plane, Hotel, MapPin, CheckCircle, CircleDollarSign, Users, Clock, MessageSquare, Award } from 'lucide-react';

interface WhyChooseUsProps {
  lang: Lang;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  const reasons = [
    { num: '01', icon: Car, title: t(lang, 'why.1.title'), desc: t(lang, 'why.1.desc') },
    { num: '02', icon: ShieldCheck, title: t(lang, 'why.2.title'), desc: t(lang, 'why.2.desc') },
    { num: '03', icon: Tag, title: t(lang, 'why.3.title'), desc: t(lang, 'why.3.desc') },
    { num: '04', icon: Plane, title: t(lang, 'why.4.title'), desc: t(lang, 'why.4.desc') },
    { num: '05', icon: Hotel, title: t(lang, 'why.5.title'), desc: t(lang, 'why.5.desc') },
    { num: '06', icon: MapPin, title: t(lang, 'why.6.title'), desc: t(lang, 'why.6.desc') },
    { num: '07', icon: CheckCircle, title: t(lang, 'why.7.title'), desc: t(lang, 'why.7.desc') },
    { num: '08', icon: CircleDollarSign, title: t(lang, 'why.8.title'), desc: t(lang, 'why.8.desc') },
    { num: '09', icon: Users, title: t(lang, 'why.9.title'), desc: t(lang, 'why.9.desc') },
    { num: '10', icon: Clock, title: t(lang, 'why.10.title'), desc: t(lang, 'why.10.desc') },
    { num: '11', icon: MessageSquare, title: t(lang, 'why.11.title'), desc: t(lang, 'why.11.desc') },
    { num: '12', icon: Award, title: t(lang, 'why.12.title'), desc: t(lang, 'why.12.desc') },
  ];

  return (
    <section id="whyus" className="py-24 bg-neutral-950 relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            {t(lang, 'why.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            {t(lang, 'why.title')}
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-4" />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                className="group glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex items-start gap-5 hover:-translate-y-1"
              >
                {/* Big Number */}
                <span className="font-display text-4xl font-bold text-emerald-500/30 group-hover:text-emerald-400 transition-colors shrink-0">
                  {item.num}
                </span>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <IconComp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
