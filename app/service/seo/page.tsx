import fs from "fs";
import path from "path";
import LeadForm from "../../LeadForm";
import Nav from "../../Nav";
import Footer from "../../Footer";

const TG = "https://t.me/Oybek_0487";

type Case = {
  slug: string;
  niche: string;
  nicheRu: string;
  name: string;
  url: string;
  descUz?: string;
  descRu?: string;
  resultUz?: string;
  resultRu?: string;
};

const TOP3: {
  slug: string;
  nicheUz: string;
  nicheRu: string;
  name: string;
  url: string;
  descUz: string;
  descRu: string;
  pills: string[];
}[] = [
  {
    slug: "hilol-med",
    nicheUz: "Klinika · Toshkent",
    nicheRu: "Клиника · Ташкент",
    name: "Hilol Med",
    url: "https://hilol-med.uz/",
    descUz:
      "Atigi $150 qidiruv reklama byudjeti bilan 11 000+ ko‘rsatish hamda 592 ta maqsadli harakat (qo‘ng‘iroq va ariza) olib keldik. 6 oy ichida puxta tuzilgan SEO matnlarimiz sabab Google saytni o‘zi organik ravishda birinchi o‘rinlarga chiqara boshladi. Bugungi kunda sayt oqimining 50.9% qismi mutlaqo bepul (organik) trafik hisobiga to‘g‘ri kelmoqda!",
    descRu:
      "С бюджетом на поисковую рекламу всего в $150 мы получили более 11 000 показов и 592 целевых действия (звонки и заявки). За 6 месяцев благодаря грамотно составленным SEO-текстам Google начал автоматически выводить сайт на первые позиции в органической выдаче. На сегодняшний день 50,9% всего трафика сайта приходится на абсолютно бесплатный (органический) поток!",
    pills: ["$150 → 592", "CTR 7.59%", "CPC $0.13", "50.9% organic"],
  },
  {
    slug: "fenitec",
    nicheUz: "Ishlab chiqarish · Emallangan sim",
    nicheRu: "Производство · Эмальпровод",
    name: "Fenitec",
    url: "https://fenitec.uz/",
    descUz:
      "6 oylik kompleks SEO-strategiya natijasida loyihani Google’ning yuqori o‘rinlariga (TOP) olib chiqdik. Eng muhimi — natijalar va B2B savdolar o‘sishi uzoq kuttirmasdan, birinchi oyning o‘zidayoq boshlandi! Chuqur texnik optimallashtirish va to‘g‘ri kalit so‘zlar bazasi evaziga 20+ dan ortiq sanoat iboralari TOP-10 ga kirdi va zavod uchun ulgurji xaridorlar oqimi shakllantirildi.",
    descRu:
      "В результате 6-месячной комплексной SEO-стратегии мы вывели проект в ТОП поисковой выдачи Google. Что самое важное — результаты и рост B2B-продаж не заставили себя ждать и начались уже с первого месяца! Благодаря глубокой технической оптимизации и правильно подобранному семантическому ядру более 20 промышленных запросов вошли в ТОП-10, что сформировало стабильный поток оптовых покупателей для завода.",
    pills: ["6 oy → 1 oyda", "20+ TOP", "B2B"],
  },
  {
    slug: "patent-markazi",
    nicheUz: "Patent xizmatlari",
    nicheRu: "Патентные услуги",
    name: "Patent Markazi",
    url: "https://patent-markazi.uz/",
    descUz:
      "6 oydan beri to‘xtovsiz stabil ravishda oyiga 100+ ta sifatli lead oqimi! Huquqiy xizmatlar sohasida yuqori raqobatga qaramasdan, SEO va Google Ads sinergiyasi orqali barqaror va prognozli natija ta'minlandi. Google Ads reklamamizda 20.05% rekord CTR natijasiga erishilib, har 7-8 soatda yangi mijoz kelishi yo‘lga qo‘yildi.",
    descRu:
      "Уже 6 месяцев мы непрерывно и стабильно получаем 100+ качественных лидов в месяц! Несмотря на высокую конкуренцию в сфере юридических услуг, синергия SEO и Google Ads обеспечила устойчивый и прогнозируемый результат. В рекламе Google Ads мы достигли рекордного CTR в 20,05%, наладив приток нового клиента каждые 7–8 часов.",
    pills: ["100+/oy", "6 oy stabil", "~7h/lead"],
  },
];

const ALL: Case[] = [
  {
    slug: "hilol-med",
    niche: "Klinika",
    nicheRu: "Клиника",
    name: "Hilol Med",
    url: "https://hilol-med.uz/",
    descUz:
      "Atigi $150 qidiruv reklama byudjeti bilan 11 000+ ko‘rsatish hamda 592 ta maqsadli harakat (qo‘ng‘iroq va ariza) olib keldik. 6 oy ichida puxta tuzilgan SEO matnlarimiz sabab Google saytni o‘zi organik ravishda birinchi o‘rinlarga chiqara boshladi. Bugungi kunda sayt oqimining 50.9% qismi mutlaqo bepul (organik) trafik hisobiga to‘g‘ri kelmoqda!",
    descRu:
      "С бюджетом на поисковую рекламу всего в $150 мы получили более 11 000 показов и 592 целевых действия (звонки и заявки). За 6 месяцев благодаря грамотно составленным SEO-текстам Google начал автоматически выводить сайт на первые позиции в органической выдаче. На сегодняшний день 50,9% всего трафика сайта приходится на абсолютно бесплатный (органический) поток!",
    resultUz: "$150 → 592 telefon · 50.9% organika",
    resultRu: "$150 → 592 звонка · 50.9% органики",
  },
  {
    slug: "patent-markazi",
    niche: "Patent",
    nicheRu: "Патенты",
    name: "Patent Markazi",
    url: "https://patent-markazi.uz/",
    descUz:
      "6 oydan beri to‘xtovsiz stabil ravishda oyiga 100+ ta sifatli lead oqimi! Huquqiy xizmatlar sohasida yuqori raqobatga qaramasdan, SEO va Google Ads sinergiyasi orqali barqaror va prognozli natija ta'minlandi. Google Ads reklamamizda 20.05% rekord CTR natijasiga erishilib, har 7-8 soatda yangi mijoz kelishi yo‘lga qo‘yildi.",
    descRu:
      "Уже 6 месяцев мы непрерывно и стабильно получаем 100+ качественных лидов в месяц! Несмотря на высокую конкуренцию в сфере юридических услуг, синергия SEO и Google Ads обеспечила устойчивый и прогнозируемый результат. В рекламе Google Ads мы достигли рекордного CTR в 20,05%, наладив приток нового клиента каждые 7–8 часов.",
    resultUz: "100+ lead/oy · 6 oy barqaror",
    resultRu: "100+ лидов/мес · стабильно 6 мес",
  },
  {
    slug: "fenitec",
    niche: "Ishlab chiqarish",
    nicheRu: "Производство",
    name: "Fenitec",
    url: "https://fenitec.uz/",
    descUz:
      "6 oylik kompleks SEO-strategiya natijasida loyihani Google’ning yuqori o‘rinlariga (TOP) olib chiqdik. Eng muhimi — natijalar va B2B savdolar o‘sishi uzoq kuttirmasdan, birinchi oyning o‘zidayoq boshlandi! Chuqur texnik optimallashtirish va to‘g‘ri kalit so‘zlar bazasi evaziga 20+ dan ortiq sanoat iboralari TOP-10 ga kirdi va zavod uchun ulgurji xaridorlar oqimi shakllantirildi.",
    descRu:
      "В результате 6-месячной комплексной SEO-стратегии мы вывели проект в ТОП поисковой выдачи Google. Что самое важное — результаты и рост B2B-продаж не заставили себя ждать и начались уже с первого месяца! Благодаря глубокой технической оптимизации и правильно подобранному семантическому ядру более 20 промышленных запросов вошли в ТОП-10, что сформировало стабильный поток оптовых покупателей для завода.",
    resultUz: "6 oylik maqsad 1 oyda · 20+ TOP",
    resultRu: "План 6 мес — за 1 мес · 20+ TOP",
  },
  {
    slug: "meraki",
    niche: "Marketing",
    nicheRu: "Маркетинг",
    name: "Meraki",
    url: "https://meraki.uz/",
    descUz: `Organik Trafik: Sayt trafigining 40% ulushi Google tabiiy qidiruvi (SEO) orqali shakllantirildi.Sinergiya va Natija: SEO va Google Ads sinergiyasi hisobiga har bir maqsadli mijozni jalb qilish narxi (CAC) maksimal darajada pasaytirildi.`,
    descRu: `Органический трафик: 40% трафика сайта было сформировано через естественный поиск Google (SEO).Синергия и результат: За счет синергии SEO и Google Ads стоимость привлечения одного целевого клиента (CAC) была максимально снижена.`,
    resultUz: "YouTuber agentligi · Ads + SEO",
    resultRu: "Агентство YouTuber-а · Ads + SEO",
  },
  {
    slug: "hayatkabel",
    niche: "Kabel",
    nicheRu: "Кабель",
    name: "Hayat Kabel",
    url: "https://hayatkabel.uz/",
    descUz:
      "Yangi ishga tushirilgan B2B ishlab chiqaruvchi saytini 3 ta tilda (UZ/RU/EN) 0 dan to'liq SEO-optimizatsiya qildik. Katalogdagi murakkab kabel markalarini (GOST/IEC) tartibga solib, qidiruv tizimlari uchun 100% to'g'ri indekslanadigan holatga keltirdik va maqsadli B2B trafikni yo'naltirdik.",
    descRu:
      "Мы провели полную SEO-оптимизацию с нуля для нового B2B-сайта производителя на 3 языках (UZ/RU/EN). Упорядочили сложные марки кабельной продукции в каталоге по стандартам ГОСТ/IEC, обеспечили 100% правильную индексацию для поисковых систем и направили целевой B2B-трафик.",
    resultUz: "Organik SEO · yangi sayt",
    resultRu: "Органика · новый сайт",
  },
  {
    slug: "bis-pro",
    niche: "IT · ERP/SAP",
    nicheRu: "IT · ERP/SAP",
    name: "bis-pro",
    url: "https://www.bis-pro.com/",
    descUz: `B2B va ERP sohasidagi o‘ta raqobatli bozorda yangi saytni noldan optimizatsiya qildik. Dastlabki 2 oyda "SAP Business One kursi", "Партнёр SAP Uzbekistan" va "SAP ERP tizimi" kabi eng qimmatli tijoriy kalit so‘zlarni Google'da 1-o‘ringa (TOP-1) olib chiqdik. Organik trafigimizning 76% qismi aynan maqsadli va faol foydalanuvchilardan tashkil topdi.`,
    descRu: `В условиях жесткой конкуренции в сфере B2B и ERP мы оптимизировали новый сайт с нуля. За первые 2 месяца вывели в ТОП-1 Google самые ценные коммерческие ключевые слова, такие как "Курсы SAP Business One", "Партнёр SAP Uzbekistan" и "Система SAP ERP". При этом 76% нашего органического трафика составили именно целевые и активные пользователи.`,
    resultUz: "423+ kalit · past raqobat",
    resultRu: "423+ ключей · низкая конкуренция",
  },
  {
    slug: "fleetdispatch",
    niche: "Logistika · US",
    nicheRu: "Логистика · US",
    name: "Fleet Dispatch",
    url: "https://fleetdispatchservice.com/",
    descUz: `Amerikalik owner-operatorlar va carrier'lar ishonchini qozonadigan korporativ Veb-sayt va chuqur SEO optimizatsiya. Amazon Freight, ELD Compliance va Dedicated Lanes kabi yuqori qiymatli kalit so‘zlar bo‘yicha organik trafik yo‘lga qo‘yildi va tayyor B2B leadlar oqimi shakllantirildi.`,
    descRu: `Корпоративный веб-сайт и глубокая SEO-оптимизация, завоевавшие доверие американских owner-operator'ов и carrier'ов. Мы настроили органический трафик по таким высокоценным ключевым словам, как Amazon Freight, ELD Compliance и Dedicated Lanes, а также сформировали стабильный поток готовых B2B-лидов.`,
    resultUz: "US truck biznesi · sayt + Ads",
    resultRu: "US truck-бизнес · сайт + Ads",
  },
  {
    slug: "fitodiabetic",
    niche: "Bolalar vitaminlari",
    nicheRu: "Детские витамины",
    name: "Actimed Kids",
    url: "https://fitodiabetic.uz/en",
    descUz: `Real xalqona so‘rovlar ("sahirni tushirish", "ko‘z xiralashishi") bo‘yicha yozilgan maqolalar orqali organik trafikda 53.09% faollik darajasi qayd etildi.Birinchi oyning o‘zidayoq sayt orqali 16 ta faol xarid arizalari va to‘g‘ri-dan-to‘g‘ri qo‘ng‘iroqlar olindi.`,
    descRu: `Благодаря статьям, написанным под реальные народные запросы ("снижение сахара", "помутнение в глазах"), мы зафиксировали уровень активности в органическом трафике на уровне 53,09%. Уже в первый месяц через сайт было получено 16 активных заявок на покупку и прямых звонков.`,
    resultUz: "500K+ mijoz · Brending + SEO",
    resultRu: "500K+ клиентов · Брендинг + SEO",
  },
  {
    slug: "realdreams",
    niche: "Umra · aviabilet",
    nicheRu: "Умра · авиабилеты",
    name: "Real Dreams",
    url: "https://realdreamsuz.com/",
    descUz: `Real xalqona so‘rovlar ("sahirni tushirish", "ko‘z xiralashishi") bo‘yicha yozilgan maqolalar orqali organik trafikda 53.09% faollik darajasi qayd etildi.Birinchi oyning o‘zidayoq sayt orqali 16 ta faol xarid arizalari va to‘g‘ri-dan-to‘g‘ri qo‘ng‘iroqlar olindi.`,
    descRu: `Мы реализовали продуманную SEO-стратегию по самым популярным направлениям паломничества Умра и авиабилетов в поисковых системах. По итогам первого месяца позиции сайта выросли, а количество органических посещений увеличилось в 1,5 раза.`,
    resultUz: "Trafik ×1.5 bir oyda",
    resultRu: "Трафик ×1.5 за месяц",
  },
  {
    slug: "inturist",
    niche: "Ichki turizm",
    nicheRu: "Внутренний туризм",
    name: "In-Turist",
    url: "https://in-turist.uz/",
    descUz: `Yuqori konversiyali SEO strategiyasi evaziga organik biznes-trafik bir necha barobarga oshirildi.​*Ishonch ko‘rsatkich: First-month natijalardan so‘ng mijoz shartnomani 11 oyga uzaytirdi.`,
    descRu: `Благодаря высококонверсионной SEO-стратегии органический бизнес-трафик вырос в несколько раз.*Показатель доверия: По результатам первого месяца клиент продлил контракт на 11 месяцев.`,
    resultUz: "Avto/avtobus ijarasi · Ads",
    resultRu: "Аренда авто/автобусов · Ads",
  },
  {
    slug: "dentista",
    niche: "Stomatologiya",
    nicheRu: "Стоматология",
    name: "Dentista",
    url: "https://www.dentista-denta.uz/",
    resultUz: "Ads + SEO · Toshkent",
    resultRu: "Ads + SEO · Ташкент",
  },

  {
    slug: "onepc",
    niche: "Texnika",
    nicheRu: "Техника",
    name: "OnePc",
    url: "https://www.onepc.uz/ru",
    resultUz: "Notebook va PC savdosi",
    resultRu: "Ноутбуки и ПК",
  },

  {
    slug: "mehau",
    niche: "Laboratoriya mebellari",
    nicheRu: "Лабораторная мебель",
    name: "Mehau",
    url: "https://mehau.uz/uz/home-uz",
    resultUz: "Organik SEO · ilk leadlar",
    resultRu: "Органика · первые лиды",
  },

  {
    slug: "decopol",
    niche: "Premium dekor",
    nicheRu: "Премиум декор",
    name: "Decopol",
    url: "https://decopol.net/",
    resultUz: "Premium interyer · SEO",
    resultRu: "Премиум интерьер · SEO",
  },
  {
    slug: "teplovik",
    niche: "Suv filtri · BWT",
    nicheRu: "Фильтры воды · BWT",
    name: "Teplovik",
    url: "https://suv-tizimlari.tilda.ws/",
    resultUz: "BWT hamkori · sayt + SEO",
    resultRu: "Партнёр BWT · сайт + SEO",
  },
];

function hasImage(slug: string): boolean {
  try {
    const p = path.join(process.cwd(), "public", "cases", `${slug}.jpg`);
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

export default function CasesPage() {
  return (
    <>
      <Nav />

      <section className="cases-hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="ln" />
            <span data-uz>24 loyiha</span>
            <span data-ru>24 проектов</span>
          </span>
          <h1>
            <span data-uz>
              <span className="hl">24 loyiha</span>, har xil soha. Bitta tizim —
              bitta natija
            </span>
            <span data-ru>
              <span className="hl">24 проектов</span>, разные ниши. Одна система
              — один результат
            </span>
          </h1>
          <p className="lead" style={{ maxWidth: 720, margin: "0 auto" }}>
            <span data-uz>
              Klinikadan ERP/SAP integratorigacha, ichki turizmdan kabel
              zavodigacha. Har bir loyiha alohida strategiya — lekin umumiy
              printsip bitta.
            </span>
            <span data-ru>
              От клиники до интегратора ERP/SAP, от внутреннего туризма до
              завода кабеля. У каждого — своя стратегия, но общий принцип один.
            </span>
          </p>
          <div className="cases-stats">
            <div className="stat">
              <div className="n">
                24<s>+</s>
              </div>
              <div className="t">
                <span data-uz>loyihalar</span>
                <span data-ru>проектов</span>
              </div>
            </div>
            <div className="stat">
              <div className="n">15</div>
              <div className="t">
                <span data-uz>noyabrdan · 100% ushlangan</span>
                <span data-ru>с ноября · удержание 100%</span>
              </div>
            </div>
            <div className="stat">
              <div className="n">$2.6</div>
              <div className="t">
                <span data-uz>1 lead (eng yaxshi)</span>
                <span data-ru>1 лид (в лучшем кейсе)</span>
              </div>
            </div>
            <div className="stat">
              <div className="n">
                50<s>%+</s>
              </div>
              <div className="t">
                <span data-uz>organika · Hilol Med</span>
                <span data-ru>органики · Hilol Med</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 14 grid */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Barcha loyihalar</span>
              <span data-ru>Все проекты</span>
            </span>
            <h2>
              <span data-uz>24 soha — bir jamoa</span>
              <span data-ru>24 ниш — одна команда</span>
            </h2>
          </div>
          <div className="cases-grid">
            {ALL.map((c) => (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noopener"
                className="case-card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="shot">
                  {hasImage(c.slug) ? (
                    <img src={`/cases/${c.slug}.jpg`} alt={c.name} />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(135deg,var(--bg2),var(--accent-soft))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 32,
                        color: "var(--accent)",
                        fontWeight: 800,
                      }}
                    >
                      {c.name[0]}
                    </div>
                  )}
                </div>
                <div
                  className="body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div className="niche">
                    <span data-uz>{c.niche}</span>
                    <span data-ru>{c.nicheRu}</span>
                  </div>
                  <h3>{c.name}</h3>
                  <div className="url">
                    {new URL(c.url).hostname.replace(/^www\./, "")}
                  </div>
                  {c.descUz && (
                    <p
                      className="desc"
                      style={{
                        marginTop: 12,
                        marginBottom: 12,
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      <span data-uz>{c.descUz}</span>
                      <span data-ru>{c.descRu}</span>
                    </p>
                  )}
                  {c.resultUz && (
                    <div
                      className="res"
                      style={{
                        marginTop: 8,
                        marginBottom: 16,
                        fontWeight: 600,
                      }}
                    >
                      <span data-uz>{c.resultUz}</span>
                      <span data-ru>{c.resultRu}</span>
                    </div>
                  )}
                  <div className="lnk" style={{ marginTop: "auto" }}>
                    <span data-uz>Saytni ochish →</span>
                    <span data-ru>Открыть сайт →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="contact" className="bg-soft-to-w">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="form-block">
            <h2 style={{ textAlign: "center" }}>
              <span data-uz>
                Sizning keysingiz —{" "}
                <span className="hl" style={{ color: "#4ed1ff" }}>
                  keyingisi
                </span>{" "}
                bo‘lsin
              </span>
              <span data-ru>
                Пусть следующий кейс —{" "}
                <span className="hl" style={{ color: "#4ed1ff" }}>
                  ваш
                </span>
              </span>
            </h2>
            <p className="lead" style={{ textAlign: "center" }}>
              <span data-uz>
                30 daqiqalik bepul strategik suhbatda sohangizning aniq
                raqamlarini ko‘rsatamiz: nechta odam qidiradi, qancha mijoz
                olishingiz mumkin, qancha byudjet kerak.
              </span>
              <span data-ru>
                За 30 минут на бесплатном созвоне покажем точные цифры по вашей
                нише: сколько ищут, сколько клиентов можно получить, какой
                бюджет нужен.
              </span>
            </p>
            <LeadForm source="cases" />
          </div>
          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              fontSize: 14,
              color: "var(--sub)",
            }}
          >
            <span data-uz>Yoki to‘g‘ridan-to‘g‘ri Telegram’da: </span>
            <span data-ru>Или напрямую в Telegram: </span>
            <a href={TG} style={{ fontWeight: 600, color: "var(--ink)" }}>
              @Oybek_0487
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
