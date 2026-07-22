'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { REVIEWS_DATA } from '@/lib/reviews';
import { Star, Quote } from 'lucide-react';

interface ReviewsProps {
  lang: Lang;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  return (
    <section id="reviews" className="py-24 bg-neutral-950 relative overflow-hidden" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
              {t(lang, 'reviews.eyebrow')}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              {t(lang, 'reviews.title')}
            </h2>
            <div className="w-16 h-0.5 bg-emerald-500 mt-4" />
          </div>

          {/* Rating Badge */}
          <div className="glass-panel p-5 rounded-2xl border-emerald-500/30 flex items-center gap-4 shrink-0">
            <div className="font-display text-4xl font-bold text-emerald-400">5.0</div>
            <div>
              <div className="flex text-amber-400 gap-1 text-sm mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">55+ {t(lang, 'reviews.google')}s</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="relative glass-panel p-8 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex text-amber-400 gap-1 text-sm mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-sm leading-relaxed italic font-light mb-6">
                  &ldquo;{rev.comment[lang] || rev.comment.en}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-display text-lg font-bold text-emerald-400">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                    {rev.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
