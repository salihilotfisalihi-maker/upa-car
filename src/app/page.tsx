'use client';

import React, { useState } from 'react';
import { Lang } from '@/lib/i18n';
import { Vehicle } from '@/lib/fleet';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Fleet } from '@/components/Fleet';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorks } from '@/components/HowItWorks';
import { Reviews } from '@/components/Reviews';
import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { BookingModal } from '@/components/BookingModal';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleOpenBooking = () => {
    setSelectedVehicle(null);
    setIsBookingOpen(true);
  };

  const handleSelectVehicleForBooking = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingOpen(true);
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        onSelectLang={setLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Fleet Section with filters */}
      <Fleet
        lang={lang}
        onSelectVehicle={handleSelectVehicleForBooking}
      />

      {/* Services Section */}
      <Services lang={lang} />

      {/* Why Choose Us Section */}
      <WhyChooseUs lang={lang} />

      {/* How It Works Step-by-Step */}
      <HowItWorks lang={lang} />

      {/* Reviews Carousel/Grid */}
      <Reviews lang={lang} />

      {/* About Section */}
      <About lang={lang} />

      {/* FAQ Section */}
      <FAQ lang={lang} />

      {/* Contact Section */}
      <Contact lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Action Buttons (WhatsApp, Phone Call, Scroll to Top) */}
      <FloatingButtons />

      {/* WhatsApp Booking Modal */}
      <BookingModal
        lang={lang}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedVehicle={selectedVehicle}
      />
    </main>
  );
}
