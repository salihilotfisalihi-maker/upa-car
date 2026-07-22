'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { Plane, Hotel, MapPin, Sparkles, Car, Users, Compass, Calendar, ShieldCheck, Headphones } from 'lucide-react';

interface ServicesProps {
  lang: Lang;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  const services = [
    {
      icon: Plane,
      title: t(lang, 'services.airport.title'),
      desc: t(lang, 'services.airport.desc'),
    },
    {
      icon: Hotel,
      title: t(lang, 'services.hotel.title'),
      desc: t(lang, 'services.hotel.desc'),
    },
    {
      icon: MapPin,
      title: t(lang, 'services.city.title'),
      desc: t(lang, 'services.city.desc'),
    },
    {
      icon: Sparkles,
      title: t(lang, 'services.luxury.title'),
      desc: t(lang, 'services.luxury.desc'),
    },
    {
      icon: Car,
      title: t(lang, 'services.economy.title'),
      desc: t(lang, 'services.economy.desc'),
    },
    {
      icon: Users,
      title: t(lang, 'services.family.title'),
      desc: t(lang, 'services.family.desc'),
    },
    {
      icon: Compass,
      title: t(lang, 'services.suv.title'),
      desc: t(lang, 'services.suv.desc'),
    },
    {
      icon: Calendar,
      title: t(lang, 'services.longterm.title'),
      desc: t(lang, 'services.longterm.desc'),
    },
    {
      icon: ShieldCheck,
      title: t(lang, 'services.insurance.title'),
      desc: t(lang, 'services.insurance.desc'),
    },
    {
      icon: Headphones,
      title: t(lang, 'services.support.title'),
      desc: t(lang, 'services.support.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            {t(lang, 'services.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            {t(lang, 'services.title')}
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base font-light">
            {t(lang, 'services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={idx}
                className="group relative glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Emerald accent top border line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {srv.desc}
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
