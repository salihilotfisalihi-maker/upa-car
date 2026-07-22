export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  source: string;
  comment: {
    en: string;
    fr: string;
    ar: string;
  };
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Mohamed Alami',
    avatar: 'M',
    rating: 5,
    date: '2025-02-10',
    source: 'Google Review',
    comment: {
      en: 'Excellent service and honest pricing. The car was clean and in perfect condition for our desert trip!',
      fr: 'Service excellent et prix honnêtes. La voiture était propre et en parfait état pour notre voyage au désert !',
      ar: 'خدمة ممتازة وأسعار صريحة. كانت السيارة نظيفة وفي حالة ممتازة لرحلتنا الصحراوية!',
    },
  },
  {
    id: 'rev-2',
    name: 'Sophie Laurent',
    avatar: 'S',
    rating: 5,
    date: '2025-01-28',
    source: 'Google Review',
    comment: {
      en: 'Everything was organized perfectly through WhatsApp. Airport pickup and drop-off were extremely convenient!',
      fr: 'Tout était parfaitement organisé sur WhatsApp. La prise en charge et le retour à l\'aéroport étaient très pratiques !',
      ar: 'تم تنظيم كل شيء بنجاح عبر واتساب. كان الاستلام والتسليم في المطار مريحاً للغاية!',
    },
  },
  {
    id: 'rev-3',
    name: 'Yassine Benjelloun',
    avatar: 'Y',
    rating: 5,
    date: '2025-01-15',
    source: 'Google Review',
    comment: {
      en: 'Clean, modern vehicles in excellent condition. Professional, flexible and friendly local team in Ouarzazate.',
      fr: 'Des véhicules propres et récents en parfait état. Une équipe locale professionnelle, flexible et chaleureuse.',
      ar: 'سيارات نظيفة وحديثة في حالة ممتازة. فريق محلي محترف ومرن وودود في ورزازات.',
    },
  },
  {
    id: 'rev-4',
    name: 'David & Emma Mueller',
    avatar: 'D',
    rating: 5,
    date: '2024-12-20',
    source: 'Google Review',
    comment: {
      en: 'One of the best rental experiences we\'ve ever had in Morocco. We rented a Prado 4x4 to Merzouga — 100% recommended!',
      fr: 'Une des meilleures expériences de location qu\'on ait eues au Maroc. Nous avons loué un Prado 4x4 pour Merzouga — recommandé à 100% !',
      ar: 'من أفضل تجارب التأجير التي حظينا بها في المغرب. استأجرنا تويوتا برادو 4x4 إلى مرزوكة — ننصح به 100%!',
    },
  },
  {
    id: 'rev-5',
    name: 'Karim Tazi',
    avatar: 'K',
    rating: 5,
    date: '2024-11-12',
    source: 'Google Review',
    comment: {
      en: 'No deposit surprises, transparent terms, and available 24/7. UPA CAR is now my go-to agency when in Ouarzazate.',
      fr: 'Pas de mauvaises surprises, des conditions transparentes et disponible 24h/24. UPA CAR est devenue mon agence de référence.',
      ar: 'بدون مفاجآت، شروط شفافة ومتاح 24/7. أصبحت UPA CAR وكالتي المفضلة في ورزازات.',
    },
  },
];
