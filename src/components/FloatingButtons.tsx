'use client';

import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-none">
      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black border border-white/20 text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Phone Call Button */}
      <a
        href={`tel:${WHATSAPP_DISPLAY.replace(/\s+/g, '')}`}
        className="pointer-events-auto w-12 h-12 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-xl hover:bg-emerald-500 hover:text-black transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Call UPA CAR"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-black" />
        <span className="absolute right-16 bg-black/90 backdrop-blur-md border border-emerald-500/30 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Chat on WhatsApp 💬
        </span>
      </a>
    </div>
  );
};
