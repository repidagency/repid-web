"use client";

import { useEffect, useMemo, useState } from "react";
import { NICHES, findNiche, type Niche } from "./niches";

type Lang = "uz" | "ru";
type Tariff = "starter" | "growth" | "pro";

// organicShare — доля месячного поиска, которую тариф забирает органикой (SEO),
//   выходит на эти значения к 4-6 месяцу работы; Starter без SEO = 0.
// landingMul — лендинг/сайт в тарифе поднимает конверсию клика в лид.
// qualityMul — аналитика и скрипты продаж поднимают конверсию лида в клиента.
const TARIFFS: Record<
  Tariff,
  {
    nameUz: string;
    nameRu: string;
    descUz: string;
    descRu: string;
    fee: number;
    organicShare: number;
    landingMul: number;
    qualityMul: number;
  }
> = {
  starter: {
    nameUz: "Starter",
    nameRu: "Starter",
    descUz: "Faqat Google Ads, oddiy landing",
    descRu: "Только Google Ads, простая посадочная",
    fee: 300,
    organicShare: 0,
    landingMul: 1.0,
    qualityMul: 1.0,
  },
  growth: {
    nameUz: "Growth",
    nameRu: "Growth",
    descUz: "Ads + SEO + landing",
    descRu: "Ads + SEO + лендинг",
    fee: 600,
    organicShare: 0.02,
    landingMul: 1.1,
    qualityMul: 1.15,
  },
  pro: {
    nameUz: "Pro",
    nameRu: "Pro",
    descUz: "Ads + SEO + sayt + analitika + skriptlar",
    descRu: "Ads + SEO + сайт + аналитика + скрипты",
    fee: 1000,
    organicShare: 0.035,
    landingMul: 1.2,
    qualityMul: 1.3,
  },
};

const tt = (uz: string, ru: string, lang: Lang) => (lang === "uz" ? uz : ru);

function fmtMoney(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}
function fmtNum(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

export default function Calculator() {
  // pick initial lang from html data-lang attr if available
  const [lang, setLang] = useState<Lang>("uz");
  useEffect(() => {
    const cur =
      (document.documentElement.getAttribute("data-lang") as Lang) || "uz";
    setLang(cur);
    const obs = new MutationObserver(() => {
      const l =
        (document.documentElement.getAttribute("data-lang") as Lang) || "uz";
      setLang(l);
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-lang"],
    });
    return () => obs.disconnect();
  }, []);

  const [budget, setBudget] = useState<number>(500);
  const [nicheSlug, setNicheSlug] = useState<string>("clinic");
  const [tariff, setTariff] = useState<Tariff>("growth");

  const niche: Niche = useMemo(
    () => findNiche(nicheSlug) ?? NICHES[0],
    [nicheSlug],
  );
  const t = TARIFFS[tariff];

  // Средний чек и маржа — самые индивидуальные величины, поэтому их можно
  // переопределить руками. По умолчанию берём среднее по нише.
  const [check, setCheck] = useState<number>(niche.avgCheck);
  const [margin, setMargin] = useState<number>(niche.margin);
  useEffect(() => {
    setCheck(niche.avgCheck);
    setMargin(niche.margin);
  }, [niche]);

  // Core formulas (kept transparent, intentionally conservative).
  // Платный трафик ограничен ёмкостью рынка: ~12% месячного поиска максимум,
  // что реально забрать рекламой. Иначе для узких B2B-ниш выходит бессмыслица.
  const rawClicks = budget / niche.avgCpc;
  const marketCap = niche.monthlySearch * 0.12;
  const paidClicks = Math.min(rawClicks, marketCap);
  const capped = rawClicks > marketCap;
  // SEO не покупается бюджетом — он добавляет собственный органический трафик
  // сверх платного потолка (выход на эти цифры к 4-6 месяцу).
  const organicClicks = niche.monthlySearch * t.organicShare;
  const clicks = paidClicks + organicClicks;

  const ctl = Math.min(0.2, (niche.clickToLead / 100) * t.landingMul);
  const leads = clicks * ctl;
  const ltc = Math.min(0.6, (niche.leadToCustomer / 100) * t.qualityMul);
  const customers = leads * ltc;

  const revenue = customers * check;
  // Прибыль считаем от валовой маржи, а не от выручки — иначе цифра врёт.
  const grossProfit = revenue * (margin / 100);
  const totalCost = budget + t.fee;
  const profit = grossProfit - totalCost;
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const ltv = grossProfit * Math.max(1, niche.ltvMonths);

  // Обе цены считаем от полных затрат (бюджет + агентство) — так их сравнивают.
  const cpl = leads > 0 ? totalCost / leads : 0;
  const cac = customers > 0 ? totalCost / customers : 0;

  // Накопительная прибыль: SEO разгоняется на 2-3 месяце (+10% / +20%).
  const profit3 = grossProfit * 3 * 1.1 - totalCost * 3;
  const profit6 = grossProfit * 6 * 1.2 - totalCost * 6;

  // Audit form (no niche match)
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <section id="calc" className="calc-section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">
            <span className="ln" />
            <span data-uz>ROI kalkulyator · BEPUL</span>
            <span data-ru>ROI калькулятор · БЕСПЛАТНО</span>
          </span>
          <h2>
            <span data-uz>
              Byudjetingiz nima beradi?{" "}
              <span className="hl">Aniq raqamlar</span> bilan ko‘ring
            </span>
            <span data-ru>
              Что даст ваш бюджет? <span className="hl">Точные цифры</span> по
              нише
            </span>
          </h2>
          <p className="lead">
            <span data-uz>
              20 ta haqiqiy sohaning Google Ads va SEO statistikasi. Repid
              keyslari va O‘zbekiston bozori asosida — raqamlarni bo‘rttirib
              ko‘rsatmaymiz.
            </span>
            <span data-ru>
              Реальная статистика Google Ads и SEO по 20 нишам. Калибровка по
              кейсам Repid и рынку Узбекистана, без приукрашиваний.
            </span>
          </p>
        </div>

        <div className="calc-grid">
          {/* INPUTS */}
          <div className="calc-panel">
            <h3 className="calc-h3">
              <span data-uz>Sozlamalar</span>
              <span data-ru>Параметры</span>
            </h3>

            <div className="calc-row">
              <label>
                <span data-uz>Soha · yo‘nalish</span>
                <span data-ru>Ниша · направление</span>
              </label>
              <select
                value={nicheSlug}
                onChange={(e) => setNicheSlug(e.target.value)}
              >
                {NICHES.map((n) => (
                  <option key={n.slug} value={n.slug}>
                    {lang === "uz" ? n.nameUz : n.nameRu}
                  </option>
                ))}
              </select>
            </div>

            <div className="calc-row">
              <label>
                <span data-uz>Reklama byudjeti (oyiga, $)</span>
                <span data-ru>Рекламный бюджет (в месяц, $)</span>
              </label>
              <div className="calc-rng-wrap">
                <span className="calc-rng-val">
                  ${budget.toLocaleString("en-US")}
                </span>
                <input
                  className="calc-rng"
                  type="range"
                  min={100}
                  max={10000}
                  step={50}
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                />
                <div className="calc-rng-ticks">
                  <span>$100</span>
                  <span>$2 500</span>
                  <span>$5 000</span>
                  <span>$10 000</span>
                </div>
              </div>
            </div>

            <div className="calc-row two-col">
              <div>
                <label>
                  <span data-uz>Sizning o‘rtacha chekingiz ($)</span>
                  <span data-ru>Ваш средний чек ($)</span>
                </label>
                <input
                  className="calc-num"
                  type="number"
                  min={1}
                  step={1}
                  value={check}
                  onChange={(e) =>
                    setCheck(Math.max(1, Number(e.target.value) || 1))
                  }
                />
              </div>
              <div>
                <label>
                  <span data-uz>Marja (%)</span>
                  <span data-ru>Маржа (%)</span>
                </label>
                <input
                  className="calc-num"
                  type="number"
                  min={1}
                  max={100}
                  step={1}
                  value={margin}
                  onChange={(e) =>
                    setMargin(
                      Math.min(100, Math.max(1, Number(e.target.value) || 1)),
                    )
                  }
                />
              </div>
              <div className="calc-hint">
                <span data-uz>
                  Marja — chekdan tannarx chiqib ketgandan keyin qoladigan ulush.
                  Foyda shundan hisoblanadi.
                </span>
                <span data-ru>
                  Маржа — доля чека, которая остаётся после себестоимости. Прибыль
                  считаем именно от неё.
                </span>
              </div>
            </div>

            <div className="calc-row">
              <label>
                <span data-uz>Hamkorlik formati</span>
                <span data-ru>Формат сотрудничества</span>
              </label>
              <div className="calc-tariffs">
                {(Object.keys(TARIFFS) as Tariff[]).map((k) => (
                  <button
                    key={k}
                    type="button"
                    className={tariff === k ? "on" : ""}
                    onClick={() => setTariff(k)}
                  >
                    {lang === "uz" ? TARIFFS[k].nameUz : TARIFFS[k].nameRu}
                  </button>
                ))}
              </div>
              <div className="calc-tariff-desc">
                <span data-uz>
                  {TARIFFS[tariff].descUz}. Agentlik:{" "}
                  <b>${TARIFFS[tariff].fee}/oy</b>.
                </span>
                <span data-ru>
                  {TARIFFS[tariff].descRu}. Агентство:{" "}
                  <b>${TARIFFS[tariff].fee}/мес</b>.
                </span>
              </div>
            </div>

            <div className="calc-meta">
              <span data-uz>
                <b>{niche.nameUz}</b> · O‘rtacha CPC{" "}
                <b>${niche.avgCpc.toFixed(2)}</b> · oylik qidiruv{" "}
                <b>~{fmtNum(niche.monthlySearch)}</b> · raqobat:{" "}
                {niche.competition === "low"
                  ? "past"
                  : niche.competition === "medium"
                    ? "o‘rta"
                    : "yuqori"}
              </span>
              <span data-ru>
                <b>{niche.nameRu}</b> · средний CPC{" "}
                <b>${niche.avgCpc.toFixed(2)}</b> · поиск{" "}
                <b>~{fmtNum(niche.monthlySearch)}</b>/мес · конкуренция:{" "}
                {niche.competition === "low"
                  ? "низкая"
                  : niche.competition === "medium"
                    ? "средняя"
                    : "высокая"}
              </span>
              {capped && (
                <div className="calc-cap-warn">
                  <span data-uz>
                    ⚠ Bu sohada bunchalik qidiruv yo‘q. Klik chegarasi — bozor
                    sig‘imi (~{fmtNum(marketCap)}/oy). Qo‘shimcha byudjet
                    samarasiz.
                  </span>
                  <span data-ru>
                    ⚠ В этой нише столько запросов нет. Клики ограничены
                    ёмкостью рынка (~{fmtNum(marketCap)}/мес). Добавочный бюджет
                    не сработает.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* RESULTS */}
          <div className="calc-panel">
            <h3 className="calc-h3">
              <span data-uz>1 oylik prognoz</span>
              <span data-ru>Прогноз на 1 месяц</span>
            </h3>

            <div className="calc-kpis">
              <div className="ck">
                <div className="ck-l">
                  <span data-uz>Klik</span>
                  <span data-ru>Клики</span>
                </div>
                <div className="ck-v">{fmtNum(clicks)}</div>
                {organicClicks > 0 && (
                  <div className="ck-sub">
                    <span data-uz>
                      shundan {fmtNum(organicClicks)} — SEO (organika)
                    </span>
                    <span data-ru>
                      из них {fmtNum(organicClicks)} — SEO (органика)
                    </span>
                  </div>
                )}
              </div>
              <div className="ck purple">
                <div className="ck-l">
                  <span data-uz>Lid</span>
                  <span data-ru>Лиды</span>
                </div>
                <div className="ck-v">{fmtNum(leads)}</div>
              </div>
              <div className="ck">
                <div className="ck-l">
                  <span data-uz>Mijoz</span>
                  <span data-ru>Клиенты</span>
                </div>
                <div className="ck-v">{fmtNum(customers)}</div>
              </div>
              <div className="ck big">
                <div className="ck-l">
                  <span data-uz>Daromad / oy</span>
                  <span data-ru>Выручка / мес</span>
                </div>
                <div className="ck-v">{fmtMoney(revenue)}</div>
              </div>
            </div>

            <div className="calc-kpis tight">
              <div className="ck small">
                <div className="ck-l">
                  <span data-uz>1 lid</span>
                  <span data-ru>Цена лида</span>
                </div>
                <div className="ck-v">{fmtMoney(cpl)}</div>
              </div>
              <div className="ck small">
                <div className="ck-l">
                  <span data-uz>1 mijoz</span>
                  <span data-ru>Цена клиента</span>
                </div>
                <div className="ck-v">{fmtMoney(cac)}</div>
              </div>
              <div className="ck small">
                <div className="ck-l">
                  <span data-uz>Foyda · 3 oy</span>
                  <span data-ru>Прибыль · 3 мес</span>
                </div>
                <div
                  className="ck-v"
                  style={{ color: profit3 > 0 ? "#22D3A5" : "#F5A623" }}
                >
                  {fmtMoney(profit3)}
                </div>
              </div>
              <div className="ck small">
                <div className="ck-l">
                  <span data-uz>Foyda · 6 oy</span>
                  <span data-ru>Прибыль · 6 мес</span>
                </div>
                <div
                  className="ck-v"
                  style={{ color: profit6 > 0 ? "#22D3A5" : "#F5A623" }}
                >
                  {fmtMoney(profit6)}
                </div>
              </div>
            </div>

            <div className="calc-summary">
              <div>
                <span data-uz>Umumiy xarajat (byudjet + agentlik):</span>
                <span data-ru>Общие затраты (бюджет + агентство):</span>
                <b> {fmtMoney(totalCost)}</b>
              </div>
              <div>
                <span data-uz>Yalpi marja ({margin}%):</span>
                <span data-ru>Валовая маржа ({margin}%):</span>
                <b> {fmtMoney(grossProfit)}</b>
              </div>
              <div>
                <span data-uz>Sof foyda 1 oyda:</span>
                <span data-ru>Чистая прибыль за 1 месяц:</span>
                <b style={{ color: profit > 0 ? "#22D3A5" : "#F5A623" }}>
                  {" "}
                  {fmtMoney(profit)}
                </b>
              </div>
              <div>
                ROI:{" "}
                <b style={{ color: roi > 0 ? "#22D3A5" : "#F5A623" }}>
                  {roi.toFixed(0)}%
                </b>
                {" · "}
                <span data-uz>
                  LTV foyda (~{niche.ltvMonths} oy):
                </span>
                <span data-ru>LTV по прибыли (~{niche.ltvMonths} мес):</span>
                <b> {fmtMoney(ltv)}</b>
              </div>
              <div className="calc-disclaimer">
                <span data-uz>
                  Bu — prognoz, kafolat emas. Hisob bozor o‘rtachasi va bizning
                  keyslarimiz asosida: chek va marja — sizniki, qolgani — soha
                  statistikasi.
                </span>
                <span data-ru>
                  Это прогноз, а не гарантия. Расчёт по средним данным рынка и
                  нашим кейсам: чек и маржа — ваши, остальное — статистика ниши.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* "DIDN'T FIND YOUR NICHE" → INDIVIDUAL AUDIT */}
        <div className="calc-audit">
          <div className="ca-text">
            <h3>
              <span data-uz>O‘z biznesingizni ro‘yxatdan topmadingizmi?</span>
              <span data-ru>Не нашли свой бизнес в списке?</span>
            </h3>
            <p>
              <span data-uz>
                Sohangiz uchun shaxsiy bepul audit buyurtma qiling. Google
                so‘rovlari, raqobatchilar va real prognoz bo‘yicha sizga shaxsiy
                plan tayyorlaymiz.
              </span>
              <span data-ru>
                Закажите индивидуальный бесплатный аудит. Подготовим
                персональный план по вашим запросам, конкурентам и рынку.
              </span>
            </p>
          </div>
          {auditOpen ? (
            <AuditForm lang={lang} onDone={() => setAuditOpen(false)} />
          ) : (
            <button
              type="button"
              className="ca-btn"
              onClick={() => setAuditOpen(true)}
            >
              <span data-uz>Shaxsiy audit so‘rash →</span>
              <span data-ru>Запросить индивидуальный аудит →</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function AuditForm({ lang, onDone }: { lang: Lang; onDone: () => void }) {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const business = String(form.get("business") || "").trim();
    const desc = String(form.get("desc") || "").trim();
    if (!name || !phone || !business) {
      setErr(
        tt(
          "Ism, telefon va biznes turi zarur",
          "Имя, телефон и тип бизнеса обязательны",
          lang,
        ),
      );
      setState("err");
      return;
    }
    const fields = [
      { label: tt("Ism", "Имя", lang), value: name },
      { label: tt("Telefon", "Телефон", lang), value: phone },
      { label: tt("Biznes turi", "Тип бизнеса", lang), value: business },
      { label: tt("Tavsif", "Описание", lang), value: desc },
    ].filter((f) => f.value);
    setState("loading");
    setErr("");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "calc-home-audit", lang, fields }),
      });
      if (!r.ok) throw new Error("http " + r.status);
      setState("ok");
      setTimeout(onDone, 4000);
    } catch {
      setErr(tt("Yuborishda xato", "Ошибка отправки", lang));
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <div className="ca-ok">
        <div className="ok-ic">✓</div>
        <p>
          <span data-uz>
            Audit so‘rovi qabul qilindi. 24 soat ichida bog‘lanamiz.
          </span>
          <span data-ru>
            Запрос на аудит принят. Свяжемся в течение 24 часов.
          </span>
        </p>
      </div>
    );
  }

  return (
    <form className="ca-form" onSubmit={submit}>
      {state === "err" && err && <div className="cl-err">{err}</div>}
      <div className="cl-row two">
        <div>
          <label>
            <span data-uz>Ism</span>
            <span data-ru>Имя</span>
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder={tt("Ismingiz", "Ваше имя", lang)}
          />
        </div>
        <div>
          <label>
            <span data-uz>Telefon</span>
            <span data-ru>Телефон</span>
          </label>
          <input name="phone" type="tel" required placeholder="+998" />
        </div>
      </div>
      <div className="cl-row">
        <label>
          <span data-uz>Biznes turi</span>
          <span data-ru>Тип бизнеса</span>
        </label>
        <input
          name="business"
          type="text"
          required
          placeholder={tt(
            "Masalan: noutbuk ta’miri, kiyim ulgurji",
            "Например: ремонт ноутбуков, оптовая одежда",
            lang,
          )}
        />
      </div>
      <div className="cl-row">
        <label>
          <span data-uz>Qisqacha tavsif (ixtiyoriy)</span>
          <span data-ru>Краткое описание (необязательно)</span>
        </label>
        <textarea
          name="desc"
          rows={2}
          placeholder={tt(
            "Hozir nima qilyapsiz, qancha mijoz kerak",
            "Что делаете сейчас, сколько клиентов нужно",
            lang,
          )}
        />
      </div>
      <button type="submit" className="cl-btn" disabled={state === "loading"}>
        {state === "loading"
          ? tt("Yuborilmoqda...", "Отправляем...", lang)
          : tt("Auditga ariza yuborish", "Отправить заявку на аудит", lang)}
      </button>
    </form>
  );
}
