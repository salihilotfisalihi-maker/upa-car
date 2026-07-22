'use client';

import React, { useState, useEffect } from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { Car, Globe, Menu, X, PhoneCall } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp';

interface NavbarProps {
  lang: Lang;
  onSelectLang: (lang: Lang) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onSelectLang, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rtl = isRTL(lang);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t(lang, 'nav.home'), href: '#home' },
    { label: t(lang, 'nav.fleet'), href: '#fleet' },
    { label: t(lang, 'nav.services'), href: '#services' },
    { label: t(lang, 'nav.about'), href: '#about' },
    { label: t(lang, 'nav.reviews'), href: '#reviews' },
    { label: t(lang, 'nav.faq'), href: '#faq' },
    { label: t(lang, 'nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <span className="font-display text-2xl font-bold tracking-wider text-white flex items-center gap-1">
              UPA <span className="text-emerald-400">CAR</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 block -mt-1 font-semibold">
              Ouarzazate
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-gray-300 hover:text-emerald-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Switcher & Book Now */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs">
            {(['en', 'fr', 'ar'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-2.5 py-1 rounded-full font-bold uppercase transition-all ${
                  lang === l
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Book Now Button */}
          <button
            onClick={onOpenBooking}
            className="relative group px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
          >
            <span>{t(lang, 'nav.booknow')}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[10px]">
            {(['en', 'fr', 'ar'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onSelectLang(l)}
                className={`px-2 py-0.5 rounded-full font-bold uppercase ${
                  lang === l ? 'bg-emerald-500 text-black' : 'text-gray-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-xl border-b border-emerald-500/20 py-6 px-6 shadow-2xl flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-emerald-400 py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-center uppercase tracking-wider text-sm shadow-lg shadow-emerald-500/20"
            >
              {t(lang, 'nav.booknow')}
            </button>
            <a
              href={`tel:${WHATSAPP_DISPLAY.replace(/\s+/g, '')}`}
              className="w-full py-2.5 rounded-xl border border-white/20 text-white font-medium text-center text-xs flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
