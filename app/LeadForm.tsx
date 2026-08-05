"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "./i18n";

const t = (uz: string, ru: string, lang: Lang) => (lang === "uz" ? uz : ru);

// Telegram Bot va Chat ID ma'lumotlari
const BOT_TOKEN = "7923365092:AAER9qijpXSM0kULfbY95PnWJSRC3TYu5n8";
const CHAT_ID = "-1002822086175";

export default function LeadForm({
  source = "main",
  lang,
}: {
  source?: string;
  lang: Lang;
}) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Maydonlarni yig'ish
    const fields = [
      {
        label: t("Ism", "Имя", lang),
        value: String(form.get("name") || "").trim(),
      },
      {
        label: t("Telefon", "Телефон", lang),
        value: String(form.get("phone") || "").trim(),
      },
      {
        label: t("Soha", "Ниша/сайт", lang),
        value: String(form.get("niche") || "").trim(),
      },
      {
        label: t("Tarif", "Тариф", lang),
        value: String(form.get("tariff") || "").trim(),
      },
      {
        label: t("Izoh", "Комментарий", lang),
        value: String(form.get("comment") || "").trim(),
      },
    ].filter((f) => f.value);

    // Ism va telefon kiritilganini tekshirish
    const hasName = String(form.get("name") || "").trim();
    const hasPhone = String(form.get("phone") || "").trim();

    if (!hasName || !hasPhone) {
      setErr(t("Ism va telefon zarur", "Имя и телефон обязательны", lang));
      setState("err");
      return;
    }

    setState("loading");
    setErr("");

    // Telegram uchun xabar matnini tayyorlash
    const ts = new Date().toLocaleString("ru-RU", {
      timeZone: "Asia/Tashkent",
    });
    const lines = ["🆕 Новая заявка с сайта Repid (SEO/Google Ads)"];
    lines.push(
      "🕒 " +
        ts +
        (lang ? "  ·  " + String(lang).toUpperCase() : "") +
        (source ? "  ·  " + String(source).slice(0, 60) : ""),
    );
    lines.push("————————————");

    for (const f of fields.slice(0, 12)) {
      const label = String(f.label || "")
        .slice(0, 60)
        .trim();
      const value = String(f.value || "")
        .slice(0, 600)
        .trim();
      if (value) lines.push((label ? label + ": " : "") + value);
    }

    // To'g'ridan-to'g'ri Telegram Bot API ga yuborish
    try {
      const r = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: lines.join("\n"),
            disable_web_page_preview: true,
          }),
        },
      );

      const resData = await r.json();

      if (!r.ok || !resData.ok) {
        throw new Error(resData.description || "Telegram send failed");
      }

      setState("ok");
      (e.target as HTMLFormElement).reset();

      // Tanlangan tilga qarab thank-you sahifasiga yo'naltirish
      const thankYouUrl = lang === "ru" ? "/ru/thank-you" : "/thank-you";
      router.push(thankYouUrl);
    } catch (x: unknown) {
      setErr(
        t(
          "Yuborishda xato. Iltimos, to‘g‘ridan-to‘g‘ri yozing: +998 97 770-04-87 yoki Telegram @Oybek_0487",
          "Ошибка отправки. Напишите напрямую: +998 97 770-04-87 или Telegram @Oybek_0487",
          lang,
        ),
      );
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <div className="form">
        <div className="success">
          ✓{" "}
          {t(
            "Arizangiz qabul qilindi. 24 soat ichida bog‘lanamiz.",
            "Заявка принята. Свяжемся в течение 24 часов.",
            lang,
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {state === "err" && err && <div className="err">{err}</div>}
      <div className="row two">
        <div>
          <label>{t("Ism", "Имя", lang)}</label>
          <input
            name="name"
            type="text"
            required
            placeholder={t("Ismingiz", "Ваше имя", lang)}
          />
        </div>
        <div>
          <label>{t("Telefon", "Телефон", lang)}</label>
          <input name="phone" type="tel" required placeholder="+998" />
        </div>
      </div>
      <div className="row">
        <label>{t("Soha / sayt", "Ниша / сайт", lang)}</label>
        <input
          name="niche"
          type="text"
          placeholder={t(
            "Masalan: stomatologiya, dentista.uz",
            "Например: стоматология, dentista.uz",
            lang,
          )}
        />
      </div>
      <div className="row">
        <label>{t("Qaysi tarif qiziq", "Какой тариф интересен", lang)}</label>
        <select name="tariff" defaultValue="">
          <option value="">
            {t("Tanlang (ixtiyoriy)", "Выбрать (необязательно)", lang)}
          </option>
          <option>Google Ads — $300/oy</option>
          <option>Organik SEO — $300/oy</option>
          <option>
            {t("Ikkalasi — $450/oy", "Оба тарифа — $450/мес", lang)}
          </option>
          <option>
            {t("Hali aniq emas, suhbat kerak", "Не уверен, нужен созвон", lang)}
          </option>
        </select>
      </div>
      <div className="row">
        <label>{t("Izoh", "Комментарий", lang)}</label>
        <textarea
          name="comment"
          placeholder={t("Qisqacha biznes haqida", "Кратко о бизнесе", lang)}
        />
      </div>
      <button type="submit" className="submit" disabled={state === "loading"}>
        {state === "loading"
          ? t("Yuborilmoqda...", "Отправляем...", lang)
          : t(
              "Bepul strategik suhbatga yozilish",
              "Записаться на бесплатный созвон",
              lang,
            )}
      </button>
      <div className="note">
        {t(
          "Majburiyatsiz. Spam yo‘q. 24 soat ichida bog‘lanamiz.",
          "Без обязательств. Без спама. Ответим в течение 24 часов.",
          lang,
        )}
      </div>
    </form>
  );
}
