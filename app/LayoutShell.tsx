import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Widgets from "./Widgets";
import { SITE_URL, type Lang } from "./i18n";

/**
 * Har ikkala til uchun umumiy qobiq. `<html lang>` endi manzilga qarab
 * belgilanadi: o‘zbekcha — ildizda, ruscha — /ru ostida.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "T0rgMF_8ciWMPcSQ6yNRu-gu_lXI4xvgMF4k6O7s_fw",
  },
  icons: {
    icon: "/images/favicon2.png",
    apple: "/images/favicon2.png",
  },
};

export default function LayoutShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang === "uz" ? "uz" : "ru"} data-lang={lang}>
      <body>
        {children}
        <Widgets lang={lang} />
      </body>
      <GoogleAnalytics gaId="G-6NQ5YTYRTS" />
    </html>
  );
}
