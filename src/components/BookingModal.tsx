'use client';

import React, { useState, useEffect } from 'react';
import { Lang, isRTL, t } from '@/lib/i18n';
import { Vehicle, FLEET_DATA } from '@/lib/fleet';
import { buildWhatsAppUrl, BookingData } from '@/lib/whatsapp';
import { X, Calendar, Clock, MapPin, User, Phone, Globe, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: Vehicle | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  lang,
  isOpen,
  onClose,
  selectedVehicle,
}) => {
  const rtl = isRTL(lang);

  // Helper for current date/time string in YYYY-MM-DD & HH:MM
  const getTodayStr = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getCurrentTimeStr = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const todayStr = getTodayStr();

  // Form State
  const [vehicleName, setVehicleName] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [pickupDate, setPickupDate] = useState<string>(todayStr);
  const [pickupTime, setPickupTime] = useState<string>('10:00');
  const [returnLocation, setReturnLocation] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>(todayStr);
  const [returnTime, setReturnTime] = useState<string>('18:00');
  const [request, setRequest] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');

  // Update vehicle selection when modal opens or prop changes
  useEffect(() => {
    if (selectedVehicle) {
      setVehicleName(selectedVehicle.name);
    } else if (FLEET_DATA.length > 0) {
      setVehicleName(FLEET_DATA[0].name);
    }
  }, [selectedVehicle, isOpen]);

  // Keep return date >= pickup date
  useEffect(() => {
    if (returnDate < pickupDate) {
      setReturnDate(pickupDate);
    }
  }, [pickupDate]);

  if (!isOpen) return null;

  const locations = [
    { value: t(lang, 'modal.location.airport'), label: t(lang, 'modal.location.airport') },
    { value: t(lang, 'modal.location.hotel'), label: t(lang, 'modal.location.hotel') },
    { value: t(lang, 'modal.location.office'), label: t(lang, 'modal.location.office') },
    { value: t(lang, 'modal.location.marrakech'), label: t(lang, 'modal.location.marrakech') },
    { value: t(lang, 'modal.location.agadir'), label: t(lang, 'modal.location.agadir') },
    { value: t(lang, 'modal.location.other'), label: t(lang, 'modal.location.other') },
  ];

  // Validation function
  const validateForm = (): boolean => {
    setErrorMessage('');

    if (!name.trim() || !phone.trim() || !nationality.trim() || !pickupLocation || !returnLocation || !vehicleName) {
      setErrorMessage(t(lang, 'modal.required'));
      return false;
    }

    // 1. Pickup date cannot be before today
    if (pickupDate < todayStr) {
      setErrorMessage(t(lang, 'modal.err.pickup.past'));
      return false;
    }

    // 2. If pickup date is today, pickup time cannot be in past
    if (pickupDate === todayStr) {
      const nowTime = getCurrentTimeStr();
      if (pickupTime < nowTime) {
        setErrorMessage(t(lang, 'modal.err.pickup.time'));
        return false;
      }
    }

    // 3. Return date cannot be before pickup date
    if (returnDate < pickupDate) {
      setErrorMessage(t(lang, 'modal.err.return.before'));
      return false;
    }

    // 4. If return date equals pickup date, return time must be after pickup time
    if (returnDate === pickupDate) {
      if (returnTime <= pickupTime) {
        setErrorMessage(t(lang, 'modal.err.return.time'));
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data: BookingData = {
      vehicleName,
      pickupLocation,
      pickupDate,
      pickupTime,
      returnLocation,
      returnDate,
      returnTime,
      name,
      phone,
      nationality,
      request,
    };

    const waUrl = buildWhatsAppUrl(data, lang);
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8"
        dir={rtl ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6 pr-8">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] block mb-1">
            UPA CAR • WhatsApp Reservation
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {t(lang, 'modal.title')}
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            {t(lang, 'modal.subtitle')}
          </p>
        </div>

        {/* Validation Error Box */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Vehicle Category Selection */}
          <div>
            <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              {t(lang, 'modal.vehicle')} *
            </label>
            <select
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              {FLEET_DATA.map((v) => (
                <option key={v.id} value={v.name} className="bg-neutral-900 text-white">
                  {v.name} ({v.priceMad} MAD/day)
                </option>
              ))}
            </select>
          </div>

          {/* User Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                {t(lang, 'modal.name')} *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder={t(lang, 'modal.name.placeholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                {t(lang, 'modal.phone')} *
              </label>
              <input
                type="tel"
                required
                placeholder={t(lang, 'modal.phone.placeholder')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                {t(lang, 'modal.nationality')} *
              </label>
              <input
                type="text"
                required
                placeholder={t(lang, 'modal.nationality.placeholder')}
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Pickup Details Row */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block">
              📍 Pickup Details
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-400 mb-1 text-[10px] uppercase font-medium">
                  {t(lang, 'modal.pickup.location')} *
                </label>
                <select
                  required
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="">-- {t(lang, 'modal.pickup.location.placeholder')} --</option>
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value} className="bg-neutral-900">
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-1 text-[10px] uppercase font-medium">
                  {t(lang, 'modal.pickup.date')} *
                </label>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1 text-[10px] uppercase font-medium">
                  {t(lang, 'modal.pickup.time')} *
                </label>
                <input
                  type="time"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Return Details Row */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block">
              🔄 Return Details
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-400 mb-1 text-[10px] uppercase font-medium">
                  {t(lang, 'modal.return.location')} *
                </label>
                <select
                  required
                  value={returnLocation}
                  onChange={(e) => setReturnLocation(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="">-- {t(lang, 'modal.return.location.placeholder')} --</option>
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value} className="bg-neutral-900">
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-1 text-[10px] uppercase font-medium">
                  {t(lang, 'modal.return.date')} *
                </label>
                <input
                  type="date"
                  required
                  min={pickupDate}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1 text-[10px] uppercase font-medium">
                  {t(lang, 'modal.return.time')} *
                </label>
                <input
                  type="time"
                  required
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Special Request */}
          <div>
            <label className="block text-gray-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              {t(lang, 'modal.request')}
            </label>
            <textarea
              rows={2}
              placeholder={t(lang, 'modal.request.placeholder')}
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              className="w-full bg-neutral-950 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t(lang, 'modal.submit')}</span>
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-2 font-light">
              🔒 No reservation data is stored on this site. You will be redirected directly to WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
