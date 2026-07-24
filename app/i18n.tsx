import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { Metadata } from "next";

export type Lang = "uz" | "ru";

export const LANGS: Lang[] = ["uz", "ru"];

/** Kanonik domen — apex 308 bilan www ga yo‘naltiradi, shuning uchun www. */
export const SITE_URL = "https://www.repid.uz";

/**
 * Til bo‘yicha manzil: o‘zbekcha — ildizda, ruscha — /ru ostida.
 * `/#calc` kabi anchor’lar ham to‘g‘ri ko‘chadi: `/ru#calc`.
 */
export function href(lang: Lang, path: string): string {
  const [rawPath, hash] = path.split("#");
  const base = rawPath === "/" ? "" : rawPath;
  const localized = lang === "ru" ? `/ru${base}` : base || "/";
  return hash ? `${localized}#${hash}` : localized;
}

/** Oddiy matn uchun tanlov. */
export function t(lang: Lang, uz: string, ru: string): string {
  return lang === "uz" ? uz : ru;
}

/**
 * Faqat joriy tildagi razmetkani qoldiradi.
 *
 * Sahifalarda matn `<span data-uz>…</span><span data-ru>…</span>` juftligida
 * yozilgan. Ilgari keraksiz tilni CSS yashirar edi — ya’ni ikkala til ham
 * HTML’da qolar, Google esa aralash matnli bitta hujjatni ko‘rardi.
 * Bu komponent keraksiz tilni render paytida butunlay olib tashlaydi,
 * shu bilan har manzilda faqat bitta til qoladi. Razmetka usuli o‘zgarmaydi.
 */
export function Lang({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}): ReactElement {
  return <>{stripOtherLang(children, lang)}</>;
}

function stripOtherLang(node: ReactNode, lang: Lang): ReactNode {
  if (Array.isArray(node)) {
    return Children.map(node, (child) => stripOtherLang(child, lang));
  }

  if (!isValidElement(node)) return node;

  const props = node.props as { children?: ReactNode } & Record<
    string,
    unknown
  >;
  const dropAttr = lang === "uz" ? "data-ru" : "data-uz";
  if (props[dropAttr] !== undefined) return null;

  if (props.children === undefined) return node;

  return cloneElement(node, undefined, stripOtherLang(props.children, lang));
}

/** Sahifa metama’lumotlari: har til uchun alohida canonical va hreflang. */
export function pageMetadata({
  lang,
  path,
  title,
  description,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${href(lang, path)}`,
      languages: {
        "uz-UZ": `${SITE_URL}${href("uz", path)}`,
        "ru-RU": `${SITE_URL}${href("ru", path)}`,
        "x-default": `${SITE_URL}${href("uz", path)}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${href(lang, path)}`,
      siteName: "Repid Agency",
      locale: lang === "uz" ? "uz_UZ" : "ru_RU",
      type: "website",
    },
  };
}
