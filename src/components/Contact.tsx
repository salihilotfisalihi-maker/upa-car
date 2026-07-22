'use client';

import React, { useState } from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { MapPin, Phone, Clock, MessageSquare, Send } from 'lucide-react';

interface ContactProps {
  lang: Lang;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const rtl = isRTL(lang);

  const [msgName, setMsgName] = useState('');
  const [msgPhone, setMsgPhone] = useState('');
  const [msgBody, setMsgBody] = useState('');

  const handleSendQuickWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName || !msgBody) return;

    const text = `Hello UPA CAR,\n\nName: ${msgName}\nPhone: ${msgPhone || '-'}\nMessage: ${msgBody}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-black relative" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            {t(lang, 'contact.eyebrow')}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            {t(lang, 'contact.title')}
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base font-light">
            {t(lang, 'contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Cards & Main WhatsApp Button */}
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                    {t(lang, 'contact.address.label')}
                  </span>
                  <p className="text-white text-base font-medium">
                    {t(lang, 'contact.address.value')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                    {t(lang, 'contact.phone.label')}
                  </span>
                  <p className="text-white text-lg font-bold">
                    {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                    {t(lang, 'contact.hours.label')}
                  </span>
                  <p className="text-white text-base font-medium">
                    {t(lang, 'contact.hours.value')}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t(lang, 'contact.whatsapp')}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-[280px] bg-neutral-900">
              <iframe
                title="UPA CAR Ouarzazate Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13636.196587640248!2d-6.9038!3d30.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbb0bc23b20756d%3A0x289bf6efc25ad21c!2sOuarzazate%2045000%2C%20Morocco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Send a Quick Message
            </h3>
            <p className="text-gray-400 text-xs font-light mb-6">
              Fill out this form and click send to open a WhatsApp chat immediately.
            </p>

            <form onSubmit={handleSendQuickWA} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ahmed Benali"
                  value={msgName}
                  onChange={(e) => setMsgName(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+212 6XX XXX XXX"
                  value={msgPhone}
                  onChange={(e) => setMsgPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="I would like to inquire about car rental for..."
                  value={msgBody}
                  onChange={(e) => setMsgBody(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black border border-white/15 hover:border-emerald-500 text-white font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-xs shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp ↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
