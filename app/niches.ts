// Realistic niche data — Uzbekistan SEO/Google Ads market, 2026.
// Calibrated against Repid Agency cases (e.g. Hilol Med: $150 budget → ~1150 clicks,
// $400 budget → 153 leads → ~5% click-to-lead).
// We keep numbers deliberately conservative so the calculator is believable, not hyped.
export type Niche = {
  slug: string;
  nameUz: string;
  nameRu: string;
  avgCpc: number;          // $ per click
  monthlySearch: number;   // monthly search volume, country level
  clickToLead: number;     // % of clicks → leads (typical landing page 2-7%)
  leadToCustomer: number;  // % of leads → paying customers
  avgCheck: number;        // $ average customer value (single transaction)
  ltvMonths: number;       // typical customer lifetime in months
  competition: 'low' | 'medium' | 'high';
};

export const NICHES: Niche[] = [
  { slug: 'clinic',      nameUz: 'Xususiy klinika · Tibbiyot',      nameRu: 'Частная клиника · Медицина',        avgCpc: 0.18, monthlySearch: 22000, clickToLead: 5,   leadToCustomer: 28, avgCheck: 75,   ltvMonths: 6,  competition: 'high'   },
  { slug: 'dentistry',   nameUz: 'Stomatologiya',                   nameRu: 'Стоматология',                       avgCpc: 0.22, monthlySearch: 14500, clickToLead: 5,   leadToCustomer: 26, avgCheck: 120,  ltvMonths: 6,  competition: 'high'   },
  { slug: 'beauty',      nameUz: 'Beauty · Salon · Kosmetologiya',  nameRu: 'Beauty · Салон · Косметология',      avgCpc: 0.20, monthlySearch: 12000, clickToLead: 6,   leadToCustomer: 24, avgCheck: 50,   ltvMonths: 12, competition: 'high'   },
  { slug: 'realestate',  nameUz: 'Ko‘chmas mulk',                   nameRu: 'Недвижимость',                        avgCpc: 0.45, monthlySearch: 35000, clickToLead: 2.5, leadToCustomer: 7,  avgCheck: 2500, ltvMonths: 1,  competition: 'high'   },
  { slug: 'restaurant',  nameUz: 'Restoran · Kafe · Yetkazib berish',nameRu:'Ресторан · Кафе · Доставка',          avgCpc: 0.16, monthlySearch: 9500,  clickToLead: 4,   leadToCustomer: 30, avgCheck: 12,   ltvMonths: 12, competition: 'medium' },
  { slug: 'education',   nameUz: 'Ta’lim · Kurslar · IT akademiya', nameRu: 'Образование · Курсы · IT-академия', avgCpc: 0.25, monthlySearch: 18000, clickToLead: 4,   leadToCustomer: 18, avgCheck: 350,  ltvMonths: 6,  competition: 'high'   },
  { slug: 'ecommerce',   nameUz: 'Onlayn do‘kon',                   nameRu: 'Онлайн-магазин',                      avgCpc: 0.18, monthlySearch: 25000, clickToLead: 2,   leadToCustomer: 22, avgCheck: 65,   ltvMonths: 6,  competition: 'high'   },
  { slug: 'autoservice', nameUz: 'Avto-servis · Shinalar · Ta’mir', nameRu: 'Авто-сервис · Шины · Ремонт',        avgCpc: 0.19, monthlySearch: 11000, clickToLead: 5,   leadToCustomer: 28, avgCheck: 95,   ltvMonths: 12, competition: 'medium' },
  { slug: 'legal',       nameUz: 'Yuridik xizmatlar · Advokat',     nameRu: 'Юр. услуги · Адвокат',                avgCpc: 0.40, monthlySearch: 6500,  clickToLead: 4,   leadToCustomer: 22, avgCheck: 350,  ltvMonths: 3,  competition: 'medium' },
  { slug: 'patent',      nameUz: 'Patent · Tovarbelgi',             nameRu: 'Патенты · Товарные знаки',           avgCpc: 0.35, monthlySearch: 3800,  clickToLead: 6,   leadToCustomer: 28, avgCheck: 600,  ltvMonths: 1,  competition: 'low'    },
  { slug: 'erp',         nameUz: 'ERP / SAP / 1C integratsiya',     nameRu: 'ERP / SAP / 1С интеграция',          avgCpc: 0.30, monthlySearch: 2800,  clickToLead: 3,   leadToCustomer: 18, avgCheck: 4500, ltvMonths: 24, competition: 'low'    },
  { slug: 'crm',         nameUz: 'CRM tizimlari · Avtomatlashtirish',nameRu:'CRM-системы · Автоматизация',        avgCpc: 0.28, monthlySearch: 3200,  clickToLead: 4,   leadToCustomer: 20, avgCheck: 1500, ltvMonths: 18, competition: 'low'    },
  { slug: 'web',         nameUz: 'Veb-sayt va landing yaratish',    nameRu: 'Веб-сайты и лендинги',               avgCpc: 0.32, monthlySearch: 8000,  clickToLead: 5,   leadToCustomer: 18, avgCheck: 1200, ltvMonths: 1,  competition: 'high'   },
  { slug: 'logistics',   nameUz: 'Logistika · Yetkazib berish',     nameRu: 'Логистика · Доставка',                avgCpc: 0.22, monthlySearch: 6500,  clickToLead: 3,   leadToCustomer: 22, avgCheck: 800,  ltvMonths: 12, competition: 'medium' },
  { slug: 'travel',      nameUz: 'Sayyohlik · Umra · Aviabilet',    nameRu: 'Туризм · Умра · Авиабилеты',         avgCpc: 0.30, monthlySearch: 14000, clickToLead: 3,   leadToCustomer: 16, avgCheck: 950,  ltvMonths: 2,  competition: 'high'   },
  { slug: 'construction',nameUz: 'Qurilish · Ta’mirlash',           nameRu: 'Строительство · Ремонт',              avgCpc: 0.28, monthlySearch: 19000, clickToLead: 3,   leadToCustomer: 13, avgCheck: 3500, ltvMonths: 1,  competition: 'high'   },
  { slug: 'furniture',   nameUz: 'Mebel · Office / Uy',             nameRu: 'Мебель · Office / Дом',               avgCpc: 0.20, monthlySearch: 10000, clickToLead: 3.5, leadToCustomer: 18, avgCheck: 850,  ltvMonths: 1,  competition: 'medium' },
  { slug: 'manufacture', nameUz: 'Ishlab chiqarish · Zavod B2B',    nameRu: 'Производство · Завод B2B',            avgCpc: 0.26, monthlySearch: 3500,  clickToLead: 3,   leadToCustomer: 18, avgCheck: 5500, ltvMonths: 24, competition: 'low'    },
  { slug: 'fitness',     nameUz: 'Fitness · Sport zal',             nameRu: 'Фитнес · Спортзал',                   avgCpc: 0.18, monthlySearch: 8000,  clickToLead: 5,   leadToCustomer: 24, avgCheck: 35,   ltvMonths: 8,  competition: 'medium' },
  { slug: 'water',       nameUz: 'Suv filtri · Eko-tizim',          nameRu: 'Фильтры воды · Эко-системы',          avgCpc: 0.24, monthlySearch: 5500,  clickToLead: 4,   leadToCustomer: 22, avgCheck: 450,  ltvMonths: 6,  competition: 'low'    },
];

export function findNiche(slug: string): Niche | undefined {
  return NICHES.find(n => n.slug === slug);
}
