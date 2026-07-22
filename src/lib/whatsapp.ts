import { Lang, t } from './i18n';

export interface BookingData {
  vehicleName: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnLocation: string;
  returnDate: string;
  returnTime: string;
  name: string;
  phone: string;
  nationality: string;
  request?: string;
}

export const WHATSAPP_NUMBER = '212661136002';
export const WHATSAPP_DISPLAY = '+212 661 13 60 02';

export function buildWhatsAppUrl(data: BookingData, lang: Lang = 'en'): string {
  const template = t(lang, 'wa.hello');

  const text = template
    .replace('{vehicle}', data.vehicleName || 'General Inquiry')
    .replace('{pickupLocation}', data.pickupLocation || '-')
    .replace('{pickupDate}', data.pickupDate || '-')
    .replace('{pickupTime}', data.pickupTime || '-')
    .replace('{returnLocation}', data.returnLocation || '-')
    .replace('{returnDate}', data.returnDate || '-')
    .replace('{returnTime}', data.returnTime || '-')
    .replace('{name}', data.name || '-')
    .replace('{phone}', data.phone || '-')
    .replace('{nationality}', data.nationality || '-')
    .replace('{request}', data.request && data.request.trim() ? data.request : 'None');

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
