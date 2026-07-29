import { href, type Lang } from "./i18n";

/**
 * Til almashtirgich — endi haqiqiy havolalar (ilgari localStorage’li tugmalar
 * edi). Shu sababli Google ikkinchi tildagi versiyani topa oladi va tanlangan
 * til manzilning o‘zida saqlanadi.
 */
export default function LangSwitch({
  lang,
  path,
}: {
  lang: Lang;
  path: string;
}) {
  return (
    <div className="lang">
      <a
        href={href("uz", path)}
        hrefLang="uz-UZ"
        data-lang="uz"
        className={lang === "uz" ? "on" : ""}
        aria-current={lang === "uz" ? "true" : undefined}
      >
        UZ
      </a>
      <a
        href={href("ru", path)}
        hrefLang="ru-RU"
        data-lang="ru"
        className={lang === "ru" ? "on" : ""}
        aria-current={lang === "ru" ? "true" : undefined}
      >
        RU
      </a>
    </div>
  );
}
