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
    resultUz: "$150 → 592 telefon · 50.9% organika",
    resultRu: "$150 → 592 звонка · 50.9% органики",
  },
  {
    slug: "patent-markazi",
    niche: "Patent",
    nicheRu: "Патенты",
    name: "Patent Markazi",
    url: "https://patent-markazi.uz/",
    resultUz: "100+ lead/oy · 2 oy barqaror",
    resultRu: "100+ лидов/мес · стабильно 2 мес",
  },
  {
    slug: "fenitec",
    niche: "Ishlab chiqarish",
    nicheRu: "Производство",
    name: "Fenitec",
    url: "https://fenitec.uz/",
    resultUz: "3 oylik maqsad 1 oyda · 50+ TOP",
    resultRu: "План 3 мес — за 1 мес · 50+ TOP",
  },
  {
    slug: "hayatkabel",
    niche: "Kabel",
    nicheRu: "Кабель",
    name: "Hayat Kabel",
    url: "https://hayatkabel.uz/",
    resultUz: "Organik SEO · yangi sayt",
    resultRu: "Органика · новый сайт",
  },
  {
    slug: "bis-pro",
    niche: "IT · ERP/SAP",
    nicheRu: "IT · ERP/SAP",
    name: "bis-pro",
    url: "https://www.bis-pro.com/",
    resultUz: "423+ kalit · past raqobat",
    resultRu: "423+ ключей · низкая конкуренция",
  },
  {
    slug: "fleetdispatch",
    niche: "Logistika · US",
    nicheRu: "Логистика · US",
    name: "Fleet Dispatch",
    url: "https://fleetdispatchservice.com/",
    resultUz: "US truck biznesi · sayt + Ads",
    resultRu: "US truck-бизнес · сайт + Ads",
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
    slug: "fitodiabetic",
    niche: "Bolalar vitaminlari",
    nicheRu: "Детские витамины",
    name: "Actimed Kids",
    url: "https://fitodiabetic.uz/en",
    resultUz: "500K+ mijoz · Brending + SEO",
    resultRu: "500K+ клиентов · Брендинг + SEO",
  },
  {
    slug: "realdreams",
    niche: "Umra · aviabilet",
    nicheRu: "Умра · авиабилеты",
    name: "Real Dreams",
    url: "https://realdreamsuz.com/",
    resultUz: "Trafik ×1.5 bir oyda",
    resultRu: "Трафик ×1.5 за месяц",
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
    slug: "inturist",
    niche: "Ichki turizm",
    nicheRu: "Внутренний туризм",
    name: "In-Turist",
    url: "https://in-turist.uz/",
    resultUz: "Avto/avtobus ijarasi · Ads",
    resultRu: "Аренда авто/автобусов · Ads",
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
    slug: "meraki",
    niche: "Marketing",
    nicheRu: "Маркетинг",
    name: "Meraki",
    url: "https://meraki.uz/",
    resultUz: "YouTuber agentligi · Ads + SEO",
    resultRu: "Агентство YouTuber-а · Ads + SEO",
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
              <div className="n">8</div>
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

      {/* TOP-3 detailed */}
      <section className="bg-w-to-soft" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Eng yorqin natijalar</span>
              <span data-ru>Лучшие кейсы</span>
            </span>
            <h2>
              <span data-uz>Detal bilan</span>
              <span data-ru>В деталях</span>
            </h2>
          </div>
          {TOP3.map((c, i) => (
            <div
              key={c.slug}
              className={`case-top${i % 2 === 1 ? " rev" : ""}`}
            >
              <div className="case-top-img">
                {hasImage(c.slug) ? (
                  <img src={`/cases/${c.slug}.jpg`} alt={c.name} />
                ) : (
                  <div
                    style={{
                      aspectRatio: "16/10",
                      background:
                        "linear-gradient(135deg,var(--bg2),var(--accent-soft))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 48,
                      color: "var(--accent)",
                      fontWeight: 800,
                    }}
                  >
                    {c.name[0]}
                  </div>
                )}
              </div>
              <div>
                <div className="niche">
                  <span data-uz>{c.nicheUz}</span>
                  <span data-ru>{c.nicheRu}</span>
                </div>
                <h3>{c.name}</h3>
                <p className="desc">
                  <span data-uz>{c.descUz}</span>
                  <span data-ru>{c.descRu}</span>
                </p>
                <div className="res-pills">
                  {c.pills.map((p) => (
                    <span key={p} className="pill">
                      {p}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 18 }}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-g"
                    style={{ fontSize: 14, padding: "10px 22px" }}
                  >
                    <span data-uz>Saytni ko‘rish →</span>
                    <span data-ru>Открыть сайт →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
              <span data-uz>14 soha — bir jamoa</span>
              <span data-ru>14 ниш — одна команда</span>
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
                <div className="body">
                  <div className="niche">
                    <span data-uz>{c.niche}</span>
                    <span data-ru>{c.nicheRu}</span>
                  </div>
                  <h3>{c.name}</h3>
                  <div className="url">
                    {new URL(c.url).hostname.replace(/^www\./, "")}
                  </div>
                  {c.resultUz && (
                    <div className="res">
                      <span data-uz>{c.resultUz}</span>
                      <span data-ru>{c.resultRu}</span>
                    </div>
                  )}
                  <div className="lnk">
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
