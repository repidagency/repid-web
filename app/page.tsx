import LeadForm from "./LeadForm";
import Nav from "./Nav";
import Footer from "./Footer";
import Calculator from "./Calculator";

const TG = "https://t.me/Oybek_0487";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO DARK */}
      <header className="hero hero-dark">
        <div className="hero-top">
          <span className="eyebrow">
            <span className="ln" />
            Repid Agency · SEO · Google Ads · Web
          </span>
          <h1>
            <span data-uz>
              Saytingizga Google’dan <span className="hl">real mijoz</span>{" "}
              oqimini ochamiz
            </span>
            <span data-ru>
              Открываем поток <span className="hl">реальных клиентов</span> из
              Google
            </span>
          </h1>
          <p className="lead">
            <span data-uz>
              Sayt, Google Ads va organik SEO — bitta jamoa, bitta strategiya.
              Natijani har kuni 00:00 da hisobotda ko‘rasiz.
            </span>
            <span data-ru>
              Сайт, Google Ads и органический SEO — одна команда, одна
              стратегия. Результат — в ежедневном отчёте.
            </span>
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-p btn-lg">
              <span data-uz>Bepul strategik suhbat →</span>
              <span data-ru>Бесплатный созвон →</span>
            </a>
            <a href="#cases" className="btn btn-g">
              <span data-uz>Real natijalar</span>
              <span data-ru>Реальные кейсы</span>
            </a>
          </div>
          <div className="hero-trust">
            <div>
              <span className="ck">✓</span>
              <span data-uz>Har kuni 00:00 da hisobot</span>
              <span data-ru>Ежедневный отчёт в 00:00</span>
            </div>
            <div>
              <span className="ck">✓</span>
              <span data-uz>Bir nishada — bitta mijoz</span>
              <span data-ru>Один клиент на нишу</span>
            </div>
            <div>
              <span className="ck">✓</span>
              <span data-uz>24 loyiha · har xil soha</span>
              <span data-ru>24 проектов · разные ниши</span>
            </div>
          </div>
        </div>

        {/* custom dashboard mockup */}
        <div className="kv-stage">
          <div className="kv-main">
            <div className="kv-head">
              <div className="t">
                <span className="dot" />
                Repid · Real-time analytics
              </div>
              <div className="live">Live</div>
            </div>
            <div className="kv-tiles">
              <div className="kv-tile">
                <div className="lbl">Impressions</div>
                <div className="val">
                  18 800<span className="up">↑ 34%</span>
                </div>
              </div>
              <div className="kv-tile">
                <div className="lbl">CTR</div>
                <div className="val">
                  7.59<span className="up">%</span>
                </div>
              </div>
              <div className="kv-tile">
                <div className="lbl">Cost / click</div>
                <div className="val">$0.13</div>
              </div>
            </div>
            <div className="kv-chart">
              <svg viewBox="0 0 600 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,82 50,72 100,76 150,58 200,62 250,42 300,46 350,28 400,32 450,18 500,14 550,10 600,8"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points="0,82 50,72 100,76 150,58 200,62 250,42 300,46 350,28 400,32 450,18 500,14 550,10 600,8 600,100 0,100"
                  fill="url(#ga)"
                />
                <polyline
                  points="0,92 50,86 100,84 150,72 200,76 250,64 300,66 350,52 400,56 450,42 500,38 550,32 600,30"
                  fill="none"
                  stroke="#22D3A5"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="kv-float kv-f-tl">
            <div className="ic purple">
              <svg viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="v">#1</div>
              <div className="t">Google · TOP</div>
            </div>
          </div>
          <div className="kv-float kv-f-tr">
            <div className="ic green">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="v">$2.6</div>
              <div className="t">1 lead</div>
            </div>
          </div>
          <div className="kv-float kv-f-bl">
            <div className="ic blue">
              <svg viewBox="0 0 24 24">
                <path
                  d="M3 17l6-6 4 4 7-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 6h6v6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="v">+50.9%</div>
              <div className="t">Organic growth</div>
            </div>
          </div>
          <div className="kv-float kv-f-br">
            <div className="ic amber">
              <svg viewBox="0 0 24 24">
                <circle
                  cx="9"
                  cy="8"
                  r="3.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M3 20c0-3 2.5-5 6-5s6 2 6 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="17"
                  cy="9"
                  r="2.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 15c2.5.5 4 2 4 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div className="v">153</div>
              <div className="t">Leads / oy</div>
            </div>
          </div>
        </div>
      </header>

      {/* IDEA / 4 facts */}
      <section className="bg-w-to-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>G‘oya</span>
              <span data-ru>Идея</span>
            </span>
            <h2>
              <span data-uz>
                Mijoz xariddan oldin <span className="hl">Google’ga</span>{" "}
                kiradi
              </span>
              <span data-ru>
                Перед покупкой клиент идёт в <span className="hl">Google</span>
              </span>
            </h2>
            <p className="lead">
              <span data-uz>
                So‘raydi → tekshiradi → solishtiradi → Google. U yerga kirgan —
                issiq mijoz. Unga faqat ishonch kerak.
              </span>
              <span data-ru>
                Спрашивает → проверяет → сравнивает → Google. Кто там — горячий
                клиент. Ему нужно одно: доверие.
              </span>
            </p>
          </div>
          <div className="facts-grid">
            <div className="fact">
              <div className="n">4</div>
              <div className="t">
                <span data-uz>
                  Google’da pullik o‘rin. Ular uchun 15–100 firma kurashadi.
                </span>
                <span data-ru>
                  Платных мест в Google. За них борются 15–100 компаний.
                </span>
              </div>
            </div>
            <div className="fact">
              <div className="n">
                28<s>%</s>
              </div>
              <div className="t">
                <span data-uz>kliklarni 1-o‘rin oladi. Lekin top ≠ sotuv.</span>
                <span data-ru>
                  кликов забирает 1-е место. Но топ ≠ продажа.
                </span>
              </div>
            </div>
            <div className="fact">
              <div className="n">
                64<s>%</s>
              </div>
              <div className="t">
                <span data-uz>klikga bosmasdan ketadi. CTR muhim.</span>
                <span data-ru>уходят без клика. Решает CTR.</span>
              </div>
            </div>
            <div className="fact">
              <div className="n">
                9<s>%</s>
              </div>
              <div className="t">
                <span data-uz>
                  2-sahifaga o‘tadi. TOP-10 ga chiqmaslik — bozorni o‘tkazib
                  yuborish.
                </span>
                <span data-ru>
                  заходят на 2-ю страницу. Не попасть в TOP-10 = пропустить
                  рынок.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Tanish muammo</span>
              <span data-ru>Знакомая проблема</span>
            </span>
            <h2>
              <span data-uz>
                Sayt bor, lekin <span className="hl">mijoz yo‘q</span>?
              </span>
              <span data-ru>
                Сайт есть, а <span className="hl">клиентов нет</span>?
              </span>
            </h2>
          </div>
          <div className="cards3">
            <div className="card">
              <div className="ic">🔍</div>
              <h3>
                <span data-uz>Google’da ko‘rinmaysiz</span>
                <span data-ru>Не видно в Google</span>
              </h3>
              <p>
                <span data-uz>Xaridga tayyor mijoz raqibingizni topadi.</span>
                <span data-ru>Готовый клиент находит конкурента.</span>
              </p>
            </div>
            <div className="card">
              <div className="ic">💸</div>
              <h3>
                <span data-uz>Reklama puli yonadi</span>
                <span data-ru>Деньги «горят»</span>
              </h3>
              <p>
                <span data-uz>
                  Noto‘g‘ri kalit so‘z, zaif sayt — klik bor, mijoz yo‘q.
                </span>
                <span data-ru>
                  Не те ключи, слабый сайт — клики есть, клиентов нет.
                </span>
              </p>
            </div>
            <div className="card">
              <div className="ic">📱</div>
              <h3>
                <span data-uz>Faqat Instagram</span>
                <span data-ru>Только Instagram</span>
              </h3>
              <p>
                <span data-uz>
                  Bitta kanal — xavf. Google qidiruv mijozi sifatliroq.
                </span>
                <span data-ru>
                  Один канал — риск. Клиент из Google качественнее.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="system" className="bg-soft-to-w">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Bizning tizim</span>
              <span data-ru>Наша система</span>
            </span>
            <h2>
              <span data-uz>
                Sayt → Reklama → <span className="hl">SEO</span>
              </span>
              <span data-ru>
                Сайт → Реклама → <span className="hl">SEO</span>
              </span>
            </h2>
            <p className="lead">
              <span data-uz>
                Aniq ketma-ketlik. Maqsad — reklama pulini sarflash emas,
                mijozga aylantirish.
              </span>
              <span data-ru>
                Чёткая последовательность. Не сжечь рекламу, а превратить её в
                клиентов.
              </span>
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">01 · POYDEVOR</div>
              <h3>
                <span data-uz>Sayt konversiya uchun</span>
                <span data-ru>Сайт под конверсию</span>
              </h3>
              <p>
                <span data-uz>
                  Tushunarli, tez, ishonchli va aniq taklifli.
                </span>
                <span data-ru>Понятный, быстрый, с чётким оффером.</span>
              </p>
            </div>
            <div className="step">
              <div className="num">02 · TEZ MIJOZ</div>
              <h3>
                <span data-uz>Google Ads</span>
                <span data-ru>Google Ads</span>
              </h3>
              <p>
                <span data-uz>
                  Kalit so‘zlar, e’lon, optimizatsiya. Reklama yoqilgan zahoti
                  issiq mijoz.
                </span>
                <span data-ru>
                  Ключи, объявления, оптимизация. Включили — горячий клиент
                  пошёл.
                </span>
              </p>
            </div>
            <div className="step">
              <div className="num">03 · BARQARORLIK</div>
              <h3>
                <span data-uz>Organik SEO</span>
                <span data-ru>Органика SEO</span>
              </h3>
              <p>
                <span data-uz>3 oydan keyin reklamasiz barqaror oqim.</span>
                <span data-ru>
                  Через 3 месяца — стабильный поток без рекламы.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK STATS */}
      <section className="bg-dark stats">
        <div className="wrap">
          <div className="stat">
            <div className="n">
              24<s>+</s>
            </div>
            <div className="t">
              <span data-uz>Bir vaqtdagi loyiha</span>
              <span data-ru>Проектов в работе</span>
            </div>
          </div>
          <div className="stat">
            <div className="n">$2.6</div>
            <div className="t">
              <span data-uz>1 lid (keysda)</span>
              <span data-ru>1 лид (в кейсе)</span>
            </div>
          </div>
          <div className="stat">
            <div className="n">592</div>
            <div className="t">
              <span data-uz>Telefonga $150 byudjet bilan</span>
              <span data-ru>Кликов на телефон · бюджет $150</span>
            </div>
          </div>
          <div className="stat">
            <div className="n">
              100<s>%</s>
            </div>
            <div className="t">
              <span data-uz>Mijoz ushlab qolish</span>
              <span data-ru>Удержание клиентов</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR — live, interactive */}
      <Calculator />

      {/* CASES PREVIEW */}
      <section id="cases">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Real natijalar</span>
              <span data-ru>Реальные результаты</span>
            </span>
            <h2>
              <span data-uz>
                Va’da emas — <span className="hl">raqamlar</span>
              </span>
              <span data-ru>
                Не обещания — <span className="hl">цифры</span>
              </span>
            </h2>
            <p className="lead">
              <span data-uz>Mijozlarning haqiqiy panellaridan.</span>
              <span data-ru>Из реальных панелей наших клиентов.</span>
            </p>
          </div>
          <div className="proof-grid">
            <div className="proof">
              <div className="img">
                <img src="/proof/ch_237.jpg" alt="Google Ads" />
              </div>
              <div className="body">
                <h3>
                  <span data-uz>Hilol Med — klinika</span>
                  <span data-ru>Hilol Med — клиника</span>
                </h3>
                <p>
                  <span data-uz>1 oy · $150 byudjet.</span>
                  <span data-ru>1 месяц · $150 бюджет.</span>
                </p>
                <div className="metrics">
                  <div>
                    <b>18 800</b>
                    <span data-uz>ko‘rsatish</span>
                    <span data-ru>показов</span>
                  </div>
                  <div>
                    <b>7.59%</b>CTR
                  </div>
                  <div>
                    <b>$0.13</b>
                    <span data-uz>klik</span>
                    <span data-ru>клик</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="proof">
              <div className="img">
                <img src="/proof/ch_239.jpg" alt="GA4" />
              </div>
              <div className="body">
                <h3>
                  <span data-uz>SEO reklamani ortda qoldirdi</span>
                  <span data-ru>SEO обогнал рекламу</span>
                </h3>
                <p>
                  <span data-uz>
                    6 oydan keyin Google saytni o‘zi tavsiya qiladi.
                  </span>
                  <span data-ru>Через 6 мес Google рекомендует сайт сам.</span>
                </p>
                <div className="metrics">
                  <div>
                    <b>50.9%</b>
                    <span data-uz>organik</span>
                    <span data-ru>органика</span>
                  </div>
                  <div>
                    <b>2 777</b>
                    <span data-uz>sessiya</span>
                    <span data-ru>сессий</span>
                  </div>
                  <div>
                    <b>#1</b>
                    <span data-uz>kanal</span>
                    <span data-ru>канал</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="proof">
              <div className="img">
                <img src="/proof/ch_243.jpg" alt="153 leads" />
              </div>
              <div className="body">
                <h3>
                  <span data-uz>153 ta real lead</span>
                  <span data-ru>153 реальных лида</span>
                </h3>
                <p>
                  <span data-uz>Ads 140 + SEO 12 + ChatGPT 1.</span>
                  <span data-ru>Ads 140 + SEO 12 + ChatGPT 1.</span>
                </p>
                <div className="metrics">
                  <div>
                    <b>153</b>lead
                  </div>
                  <div>
                    <b>$2.6</b>
                    <span data-uz>narx</span>
                    <span data-ru>цена</span>
                  </div>
                  <div>
                    <b>19.73%</b>CTR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="proof-cta">
            <a href="/service/seo" className="btn btn-d">
              <span data-uz>Barcha 24 ta loyihani ko‘rish →</span>
              <span data-ru>Смотреть все 24 проектов →</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES — 4 cards, no prices */}
      <section id="tariffs" className="bg-w-to-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Xizmatlar</span>
              <span data-ru>Услуги</span>
            </span>
            <h2>
              <span data-uz>
                Saytdan <span className="hl">mijoz oqimigacha</span> — bitta
                jamoada
              </span>
              <span data-ru>
                От сайта до <span className="hl">потока клиентов</span> — в
                одной команде
              </span>
            </h2>
            <p className="lead">
              <span data-uz>
                4 ta xizmat birga ishlaydi. Birga olsangiz — kompleks chegirma.
              </span>
              <span data-ru>
                4 услуги работают вместе. Берёте в пакете — комплексная скидка.
              </span>
            </p>
          </div>
          <div className="svc-grid">
            <div className="svc">
              <div className="ic">🌐</div>
              <h3>
                <span data-uz>Veb-sayt</span>
                <span data-ru>Веб-сайт</span>
              </h3>
              <p>
                <span data-uz>
                  Konversiyaga sozlangan zamonaviy sayt. 1C integratsiyasi. 1 oy
                  bepul SEO sovg‘a.
                </span>
                <span data-ru>
                  Современный сайт под конверсию. Интеграция с 1С. 1 месяц SEO
                  бесплатно.
                </span>
              </p>
            </div>
            <div className="svc">
              <div className="ic">📈</div>
              <h3>
                <span data-uz>Organik SEO</span>
                <span data-ru>Органический SEO</span>
              </h3>
              <p>
                <span data-uz>
                  Google TOP-10 ga olib chiqamiz. Semantik yadro, kontent,
                  on-page, backlinklar. AI yordamida.
                </span>
                <span data-ru>
                  Поднимаем в TOP-10 Google. Семантическое ядро, контент,
                  on-page, бэклинки. С AI.
                </span>
              </p>
            </div>
            <div className="svc">
              <div className="ic">🎯</div>
              <h3>Google Ads</h3>
              <p>
                <span data-uz>
                  Tez mijoz oqimi. Kalit so‘z tahlili, kampaniya, doimiy
                  optimizatsiya. Har kuni 00:00 da hisobot.
                </span>
                <span data-ru>
                  Быстрый поток клиентов. Анализ ключей, кампании, оптимизация.
                  Ежедневный отчёт в 00:00.
                </span>
              </p>
            </div>
            <div className="svc">
              <div className="ic">🧰</div>
              <h3>
                <span data-uz>CRM tizimlari</span>
                <span data-ru>CRM-системы</span>
              </h3>
              <p>
                <span data-uz>
                  Biznesni avtomatlashtiruvchi maxsus yechimlar. 1 oy bepul
                  qo‘llab-quvvatlash.
                </span>
                <span data-ru>
                  Кастомные решения для автоматизации бизнеса. 1 месяц поддержки
                  бесплатно.
                </span>
              </p>
            </div>
            <div className="svc svc-accent">
              <div className="ic">🧮</div>
              <h3>
                <span data-uz>ROI kalkulyator · Audit</span>
                <span data-ru>ROI калькулятор · Аудит</span>
              </h3>
              <p>
                <span data-uz>
                  Sohangiz uchun raqamlar va shaxsiy bepul audit. Byudjet, lid,
                  mijoz va daromad — Google ma’lumotlari asosida.
                </span>
                <span data-ru>
                  Цифры по вашей нише и индивидуальный бесплатный аудит. Бюджет,
                  лиды, клиенты и выручка — на данных Google.
                </span>
              </p>
              <a href="#calc" className="svc-link">
                <span data-uz>Hisoblash →</span>
                <span data-ru>Посчитать →</span>
              </a>
            </div>
          </div>
          {/* combo */}
          <div className="combo" style={{ marginTop: 36 }}>
            <div>
              <h3>
                <span data-uz>Paket: sayt + reklama + SEO + CRM</span>
                <span data-ru>Пакет: сайт + реклама + SEO + CRM</span>
              </h3>
              <p>
                <span data-uz>
                  Bitta jamoada hammasi. Ads tez mijoz beradi, SEO uni
                  barqarorga aylantiradi, sayt va CRM sotuvni yopadi. Eng kuchli
                  kompleks.
                </span>
                <span data-ru>
                  Всё в одной команде. Ads приводит клиента, SEO делает поток
                  стабильным, сайт и CRM закрывают продажу. Сильнейший комплекс.
                </span>
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="save">
                <span data-uz>Paketda chegirma · Suhbatda muhokama</span>
                <span data-ru>Скидка в пакете · обсудим на созвоне</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <a
                  href="#contact"
                  className="btn btn-w"
                  style={{ background: "#fff", color: "var(--ink)" }}
                >
                  <span data-uz>Suhbatga yozilish →</span>
                  <span data-ru>Записаться на созвон →</span>
                </a>
              </div>
            </div>
          </div>
          <p
            className="lead"
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "34px auto 0",
              fontSize: 16,
            }}
          >
            <span data-uz>
              $5000 Instagram = 800 ta lid, $200 Google = 90 ta sifatli lid.
              Byudjet ikkinchi o‘rinda, to‘g‘ri tizim muhim.
            </span>
            <span data-ru>
              $5000 в Instagram = 800 лидов, $200 в Google = 90 качественных.
              Дело не в бюджете, а в правильном механизме.
            </span>
          </p>
        </div>
      </section>

      {/* WHAT'S ON CALL + FORM */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Bepul strategik suhbat</span>
              <span data-ru>Бесплатный созвон</span>
            </span>
            <h2>
              <span data-uz>Suhbatda nima olasiz</span>
              <span data-ru>Что вы получаете на созвоне</span>
            </h2>
            <p className="lead">
              <span data-uz>
                30 daqiqa. Hech qanday majburiyat. Real raqamlar va aniq plan.
              </span>
              <span data-ru>
                30 минут. Без обязательств. Реальные цифры и план.
              </span>
            </p>
          </div>
          <div className="call-block">
            <div>
              <ol className="call-list">
                <li>
                  <div className="n">1</div>
                  <div>
                    <h4>
                      <span data-uz>Sohangizning Google tahlili</span>
                      <span data-ru>Анализ вашей ниши в Google</span>
                    </h4>
                    <p>
                      <span data-uz>
                        Oyiga nechta odam qidiradi, raqobat darajasi, real
                        raqamlar.
                      </span>
                      <span data-ru>
                        Сколько ищут в месяц, конкуренция, реальные цифры.
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="n">2</div>
                  <div>
                    <h4>
                      <span data-uz>Saytingiz auditi</span>
                      <span data-ru>Аудит вашего сайта</span>
                    </h4>
                    <p>
                      <span data-uz>
                        Konversiyaga to‘sqinlik qiladigan eng katta 3 muammo.
                      </span>
                      <span data-ru>Топ-3 проблемы, мешающие конверсии.</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="n">3</div>
                  <div>
                    <h4>
                      <span data-uz>Lead prognozi va byudjet</span>
                      <span data-ru>Прогноз лидов и бюджет</span>
                    </h4>
                    <p>
                      <span data-uz>
                        Qancha mijoz olishingiz va shuning uchun qancha byudjet
                        kerakligi.
                      </span>
                      <span data-ru>
                        Сколько клиентов и какой бюджет нужен.
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="n">4</div>
                  <div>
                    <h4>
                      <span data-uz>3 oylik aniq plan</span>
                      <span data-ru>План на 3 месяца</span>
                    </h4>
                    <p>
                      <span data-uz>
                        Qaysi oyda nima qilamiz: sayt → Ads → SEO
                        ketma-ketligida.
                      </span>
                      <span data-ru>Что в каком месяце: сайт → Ads → SEO.</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="n">5</div>
                  <div>
                    <h4>
                      <span data-uz>O‘xshash keys</span>
                      <span data-ru>Похожий кейс</span>
                    </h4>
                    <p>
                      <span data-uz>
                        Sizning nishangizdagi panel-skrinlari va natijalar.
                      </span>
                      <span data-ru>
                        Скриншоты панелей и результаты из вашей ниши.
                      </span>
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="form-block">
              <h2 style={{ fontSize: 28 }}>
                <span data-uz>Suhbat band qiling</span>
                <span data-ru>Запишитесь на созвон</span>
              </h2>
              <p className="lead" style={{ fontSize: 15 }}>
                <span data-uz>
                  Oyiga atigi 5 ta bepul suhbat — bir nishada bitta mijoz
                  tamoyili.
                </span>
                <span data-ru>5 созвонов в месяц — «один клиент на нишу».</span>
              </p>
              <LeadForm source="call-block" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Nega aynan biz</span>
              <span data-ru>Почему мы</span>
            </span>
            <h2>
              <span data-uz>
                Tizim, tajriba va <span className="hl">shaffoflik</span>
              </span>
              <span data-ru>
                Система, опыт и <span className="hl">прозрачность</span>
              </span>
            </h2>
          </div>
          <div className="why-grid">
            <div className="wrow">
              <div className="ic">📊</div>
              <h3>
                <span data-uz>Kunlik hisobot 00:00</span>
                <span data-ru>Отчёт каждый день в 00:00</span>
              </h3>
              <p>
                <span data-uz>Har kuni faktlar — to‘liq shaffoflik.</span>
                <span data-ru>Каждый день — факты, полная прозрачность.</span>
              </p>
            </div>
            <div className="wrow">
              <div className="ic">🛡️</div>
              <h3>
                <span data-uz>1 nisha — 1 mijoz</span>
                <span data-ru>Один клиент на нишу</span>
              </h3>
              <p>
                <span data-uz>Raqobatchilaringiz bilan ishlamaymiz.</span>
                <span data-ru>С вашими конкурентами не работаем.</span>
              </p>
            </div>
            <div className="wrow">
              <div className="ic">🧩</div>
              <h3>
                <span data-uz>Sayt + Ads + SEO + CRM</span>
                <span data-ru>Сайт + Ads + SEO + CRM</span>
              </h3>
              <p>
                <span data-uz>Bitta javobgar jamoa.</span>
                <span data-ru>Одна ответственная команда.</span>
              </p>
            </div>
            <div className="wrow">
              <div className="ic">🚀</div>
              <h3>
                <span data-uz>24 ta soha</span>
                <span data-ru>24 ниш</span>
              </h3>
              <p>
                <span data-uz>Klinikadan ERP/SAP gacha — tizim universal.</span>
                <span data-ru>
                  От клиники до ERP/SAP — система универсальна.
                </span>
              </p>
            </div>
            <div className="wrow">
              <div className="ic">📈</div>
              <h3>
                <span data-uz>Real panellar</span>
                <span data-ru>Реальные панели</span>
              </h3>
              <p>
                <span data-uz>Google Ads va GA4 skrinlari sizga.</span>
                <span data-ru>Скриншоты Google Ads и GA4 — для вас.</span>
              </p>
            </div>
            <div className="wrow">
              <div className="ic">🤝</div>
              <h3>
                <span data-uz>Uzoq hamkorlik</span>
                <span data-ru>Долгое партнёрство</span>
              </h3>
              <p>
                <span data-uz>Noyabrdan 8 loyiha — 100% bizda qoldi.</span>
                <span data-ru>С ноября 8 проектов — удержание 100%.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Repid jamoasi</span>
              <span data-ru>Команда Repid</span>
            </span>
            <h2>
              <span data-uz>Natija uchun javobgar yuzlar</span>
              <span data-ru>Лица, отвечающие за результат</span>
            </h2>
          </div>
          <div className="founder-grid">
            <div className="founder">
              <div className="ph">
                <img src="/images/toj.jpg" alt="Oybek Tojiyev" />
              </div>
              <div>
                <h3>Oybek Tojiyev</h3>
                <div className="role">
                  Repid Agency · <span data-uz>Asoschi</span>
                  <span data-ru>Основатель</span>
                </div>
                <p>
                  <span data-uz>
                    SEO va Google Ads mutaxassisi. 14 ta loyihani Google’da
                    topga olib chiqyapman. Men uchun eng muhimi — natija:
                    reyting, trafik va sotuv o‘smasa, ishning qadri yo‘q.
                  </span>
                  <span data-ru>
                    Специалист по SEO и Google Ads. Поднимаю 14 проектов в TOP
                    Google. Главное — результат: если рейтинг, трафик и продажи
                    не растут, работа ничего не стоит.
                  </span>
                </p>
              </div>
            </div>
            <div className="founder">
              <div className="ph">
                <img src="/founders/umid.jpg" alt="Umid Ikromboev" />
              </div>
              <div>
                <h3>Umid Ikromboev</h3>
                <div className="role">
                  <span data-uz>Sayt · CRM · AI-integratsiya</span>
                  <span data-ru>Сайты · CRM · AI</span>
                </div>
                <p>
                  <span data-uz>
                    Sotuvchi saytlar, CRM va AI-yordamchilar. Repid bilan birga
                    «sayt + trafik» bitta jamoada — mijozda bitta natijaviy
                    jamoa bo‘ladi.
                  </span>
                  <span data-ru>
                    Продающие сайты, CRM и AI-ассистенты. С Repid связка «сайт +
                    трафик» в одной команде — у клиента один результативный
                    коллектив.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              FAQ
            </span>
            <h2>
              <span data-uz>Sizning savol va shubhalaringiz</span>
              <span data-ru>Ваши вопросы и сомнения</span>
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq">
              <summary>
                <span data-uz>Qancha turadi?</span>
                <span data-ru>Сколько стоит?</span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Bepul suhbatda biznesingizning ehtiyojini ko‘ramiz va aniq
                  narxni beramiz. Narx loyihangizning ko‘lami va xizmatlar
                  to‘plamiga bog‘liq. Paketda — chegirma.
                </span>
                <span data-ru>
                  На бесплатном созвоне смотрим под ваш бизнес и даём точную
                  цену. Зависит от масштаба и набора услуг. В пакете — скидка.
                </span>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span data-uz>SEO juda sekin emasmi? 3 oy juda uzoq.</span>
                <span data-ru>
                  SEO разве не слишком медленно? 3 месяца — это долго.
                </span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Birinchi signal va pozitsiyalar 4-6 hafta ichida. Aynan shu
                  sabab biz Ads + SEO ni birga taklif qilamiz: Ads tez mijoz
                  beradi, SEO esa fundament quradi.
                </span>
                <span data-ru>
                  Первые сигналы и позиции — за 4-6 недель. Поэтому Ads + SEO
                  предлагаем вместе: Ads даёт клиента сразу, SEO строит
                  фундамент.
                </span>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span data-uz>
                  Mening soham juda murakkab, uni Google’dan qidirmaydi.
                </span>
                <span data-ru>Моя ниша сложная, в Google её не ищут.</span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Bizda ERP/SAP integratorlari bilan tajriba bor — 423+ kalit
                  so‘z faqat O‘zbekistonda. 14 ta turli sohada ishladik.
                  Suhbatda real raqamlar bilan ko‘rsatamiz.
                </span>
                <span data-ru>
                  У нас опыт с ERP/SAP — 423+ ключей только в Узбекистане. 14
                  разных ниш. На созвоне покажем реальные цифры.
                </span>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span data-uz>Kafolat bormi?</span>
                <span data-ru>Есть ли гарантия?</span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Bizning kafolatimiz — sizning kirishingiz Google Ads va GA4
                  panellariga. Har kuni 00:00 da hisobot.
                </span>
                <span data-ru>
                  Наша гарантия — ваш прямой доступ к Google Ads и GA4. Каждый
                  день в 00:00 — отчёт.
                </span>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span data-uz>Faqat bittasini olsam bo‘ladimi?</span>
                <span data-ru>Можно взять только один тариф?</span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Ha. Ads, SEO, sayt va CRM alohida ham. Lekin paketda sezilarli
                  chegirma va kuchli ta’sir.
                </span>
                <span data-ru>
                  Да. Ads, SEO, сайт и CRM — отдельно. В пакете заметная скидка
                  и сильнее эффект.
                </span>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span data-uz>Raqobatchim bilan ham ishlaysizmi?</span>
                <span data-ru>А с моим конкурентом тоже работаете?</span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Yo‘q. Bir nishada faqat bitta mijoz bilan ishlaymiz.
                </span>
                <span data-ru>Нет. Один клиент на нишу.</span>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span data-uz>Sayt bo‘lmasa nima qilamiz?</span>
                <span data-ru>А если сайта нет?</span>
              </summary>
              <div className="ans">
                <span data-uz>
                  Umid sherigim saytni qiladi (1C va CRM integratsiyasi bilan).
                  «Sayt + trafik» bitta jamoada.
                </span>
                <span data-ru>
                  Партнёр Умид сделает сайт (с 1С и CRM). «Сайт + трафик» в
                  одной команде.
                </span>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              <span data-uz>Bizning kontaktlar</span>
              <span data-ru>Наши контакты</span>
            </span>
            <h2>
              <span data-uz>Bog‘lanish</span>
              <span data-ru>Связаться</span>
            </h2>
          </div>
          <div className="contact-grid">
            <a className="contact-tile" href="tel:+998977700487">
              <div className="lbl">
                <span data-uz>Telefon</span>
                <span data-ru>Телефон</span>
              </div>
              <div className="val">+998 (97) 770-04-87</div>
              <div className="sub">+998 (97) 101-66-00</div>
            </a>
            <a className="contact-tile" href="mailto:repidagency@gmail.com">
              <div className="lbl">Email</div>
              <div className="val">repidagency@gmail.com</div>
              <div className="sub">
                <span data-uz>24 soat ichida javob</span>
                <span data-ru>Ответим в течение 24ч</span>
              </div>
            </a>
            <div className="contact-tile">
              <div className="lbl">
                <span data-uz>Manzil</span>
                <span data-ru>Адрес</span>
              </div>
              <div className="val">
                <span data-uz>Toshkent shahri</span>
                <span data-ru>г. Ташкент</span>
              </div>
              <div className="sub">
                <span data-uz>Olmazor kichik halqa yo‘li 19A</span>
                <span data-ru>Олмазор, малая кольцевая 19A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT FORM */}
      <section id="contact" className="bg-soft-to-w">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="form-block">
            <h2 style={{ textAlign: "center" }}>
              <span data-uz>
                Biznesingiz uchun{" "}
                <span className="hl" style={{ color: "#4ed1ff" }}>
                  bepul suhbat
                </span>
              </span>
              <span data-ru>
                Для вашего бизнеса —{" "}
                <span className="hl" style={{ color: "#4ed1ff" }}>
                  бесплатный созвон
                </span>
              </span>
            </h2>
            <p className="lead" style={{ textAlign: "center" }}>
              <span data-uz>
                30 daqiqa. Real raqamlar. Majburiyatsiz. Bir nishada — bitta
                mijoz tamoyili.
              </span>
              <span data-ru>
                30 минут. Реальные цифры. Без обязательств. «Один клиент на
                нишу».
              </span>
            </p>
            <LeadForm source="final" />
          </div>
          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              fontSize: 14,
              color: "var(--sub)",
            }}
          >
            <span data-uz>Yoki to‘g‘ridan-to‘g‘ri: </span>
            <span data-ru>Или напрямую: </span>
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
