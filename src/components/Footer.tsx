'use client';

import React from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { Car, Phone, MapPin, MessageSquare, Share2 } from 'lucide-react';

interface FooterProps {
  lang: Lang;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  return (
    <footer className="bg-neutral-950 text-gray-400 pt-16 pb-12 border-t border-white/10" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  UPA <span className="text-emerald-400">CAR</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 block -mt-1 font-semibold">
                  Ouarzazate • Morocco
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              {t(lang, 'footer.desc')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              {t(lang, 'footer.nav')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.home')}
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.fleet')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.services')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.about')}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.reviews')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.faq')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              {t(lang, 'footer.contact')}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Rue du Marché, Ouarzazate 45000, Morocco</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${WHATSAPP_DISPLAY.replace(/\s+/g, '')}`} className="hover:text-emerald-400">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="hover:text-emerald-400">
                  WhatsApp (Available 24/7)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Hours */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              {t(lang, 'footer.legal')}
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {t(lang, 'footer.terms')}
                </a>
              </li>
            </ul>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <span className="text-emerald-400 font-bold block mb-0.5">🟢 Open 24/7</span>
              <span className="text-[11px] text-gray-400">Airport & Hotel Delivery Service</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>{t(lang, 'footer.copyright')}</div>
          <div>Ouarzazate Car Rental • Premium Service</div>
        </div>
      </div>
    </footer>
  );
};
