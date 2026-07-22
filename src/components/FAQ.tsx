'use client';

import React, { useState } from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  lang: Lang;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const rtl = isRTL(lang);

  const faqs = [
    { q: t(lang, 'faq.q1'), a: t(lang, 'faq.a1') },
    { q: t(lang, 'faq.q2'), a: t(lang, 'faq.a2') },
    { q: t(lang, 'faq.q3'), a: t(lang, 'faq.a3') },
    { q: t(lang, 'faq.q4'), a: t(lang, 'faq.a4') },
    { q: t(lang, 'faq.q5'), a: t(lang, 'faq.a5') },
    { q: t(lang, 'faq.q6'), a: t(lang, 'faq.a6') },
    { q: t(lang, 'faq.q7'), a: t(lang, 'faq.a7') },
    { q: t(lang, 'faq.q8'), a: t(lang, 'faq.a8') },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-950 relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            {t(lang, 'faq.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            {t(lang, 'faq.title')}
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base font-light">
            {t(lang, 'faq.subtitle')}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-lg font-bold text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-300 text-sm font-light leading-relaxed border-t border-white/5 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
