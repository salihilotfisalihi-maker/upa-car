import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UPA CAR | Premium Car Rental in Ouarzazate | Airport Delivery & WhatsApp Booking',
  description:
    'Rent a car in Ouarzazate with UPA CAR. Premium vehicles, airport delivery, hotel delivery, flexible pickup and return, full insurance, competitive prices, and fast reservations through WhatsApp.',
  keywords: [
    'Car rental Ouarzazate',
    'Location de voiture Ouarzazate',
    'UPA CAR',
    'Ouarzazate airport car rental',
    '4x4 rental Morocco desert',
    'Aït Ben Haddou car rental',
    'Morocco car rental WhatsApp',
  ],
  authors: [{ name: 'UPA CAR' }],
  openGraph: {
    title: 'UPA CAR | Premium Car Rental in Ouarzazate',
    description:
      'Reliable, modern & fully insured vehicles in Ouarzazate Morocco. Instant WhatsApp booking, airport & hotel delivery.',
    url: 'https://upacar.com',
    siteName: 'UPA CAR',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'UPA CAR Ouarzazate Morocco',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-black text-white antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
