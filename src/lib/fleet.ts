export interface Vehicle {
  id: string;
  name: string;
  category: 'economy' | 'compact' | 'sedan' | 'suv' | 'luxury' | '4x4';
  priceMad: number;
  transmission: 'manual' | 'automatic';
  fuel: 'diesel' | 'petrol';
  seats: number;
  ac: boolean;
  image: string;
  badge?: string;
  popular?: boolean;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'economy-sedan',
    name: 'Dacia Logan / Duster Eco',
    category: 'economy',
    priceMad: 250,
    transmission: 'manual',
    fuel: 'diesel',
    seats: 5,
    ac: true,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
    badge: 'Economy',
    popular: true,
  },
  {
    id: 'compact-hatch',
    name: 'Renault Clio 5 / Peugeot 208',
    category: 'compact',
    priceMad: 280,
    transmission: 'manual',
    fuel: 'diesel',
    seats: 5,
    ac: true,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    badge: 'Compact',
  },
  {
    id: 'sedan-comfort',
    name: 'Hyundai Elantra / Peugeot 301',
    category: 'sedan',
    priceMad: 350,
    transmission: 'manual',
    fuel: 'diesel',
    seats: 5,
    ac: true,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    badge: 'Sedan',
  },
  {
    id: 'suv-family',
    name: 'Hyundai Tucson / Kia Sportage',
    category: 'suv',
    priceMad: 650,
    transmission: 'automatic',
    fuel: 'diesel',
    seats: 5,
    ac: true,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    badge: 'SUV',
    popular: true,
  },
  {
    id: '4x4-offroad',
    name: 'Toyota Prado 4x4 / Mitsubishi Pajero',
    category: '4x4',
    priceMad: 1200,
    transmission: 'automatic',
    fuel: 'diesel',
    seats: 7,
    ac: true,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    badge: '4x4 Desert',
    popular: true,
  },
  {
    id: 'luxury-suv',
    name: 'Range Rover Velar / Mercedes GLE',
    category: 'luxury',
    priceMad: 2500,
    transmission: 'automatic',
    fuel: 'diesel',
    seats: 5,
    ac: true,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    badge: 'Luxury',
  },
];
