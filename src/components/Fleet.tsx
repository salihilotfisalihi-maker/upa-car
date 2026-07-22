'use client';

import React, { useState } from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { FLEET_DATA, Vehicle } from '@/lib/fleet';
import { Fuel, Gauge, Users, Snowflake, Check, ArrowRight } from 'lucide-react';

interface FleetProps {
  lang: Lang;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const Fleet: React.FC<FleetProps> = ({ lang, onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const rtl = isRTL(lang);

  const categories = [
    { key: 'all', label: t(lang, 'fleet.filter.all') },
    { key: 'economy', label: t(lang, 'fleet.filter.economy') },
    { key: 'compact', label: t(lang, 'fleet.filter.compact') },
    { key: 'sedan', label: t(lang, 'fleet.filter.sedan') },
    { key: 'suv', label: t(lang, 'fleet.filter.suv') },
    { key: 'luxury', label: t(lang, 'fleet.filter.luxury') },
    { key: '4x4', label: t(lang, 'fleet.filter.4x4') },
  ];

  const filteredVehicles =
    activeCategory === 'all'
      ? FLEET_DATA
      : FLEET_DATA.filter((v) => v.category === activeCategory);

  return (
    <section id="fleet" className="py-24 bg-neutral-950 relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            {t(lang, 'fleet.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            {t(lang, 'fleet.title')}
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base font-light">
            {t(lang, 'fleet.subtitle')}
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-emerald-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/40"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                      {vehicle.badge}
                    </div>
                  )}

                  {/* Price overlay bottom right */}
                  <div className="absolute bottom-3 right-3 text-right bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                    <span className="text-[10px] uppercase text-gray-400 font-semibold block -mb-1">
                      {t(lang, 'fleet.from')}
                    </span>
                    <span className="font-display text-2xl font-bold text-emerald-400">
                      {vehicle.priceMad} <span className="text-xs text-gray-300 font-sans font-normal">MAD{t(lang, 'fleet.perday')}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {vehicle.name}
                  </h3>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 mb-6 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{vehicle.transmission === 'automatic' ? t(lang, 'fleet.automatic') : t(lang, 'fleet.manual')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{vehicle.fuel === 'diesel' ? t(lang, 'fleet.diesel') : t(lang, 'fleet.petrol')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{vehicle.seats} {t(lang, 'fleet.seats')}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t(lang, 'fleet.ac')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onSelectVehicle(vehicle)}
                  className="w-full py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group-hover:shadow-emerald-500/20"
                >
                  <span>{t(lang, 'fleet.reserve')}</span>
                  <ArrowRight className={`w-4 h-4 ${rtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
