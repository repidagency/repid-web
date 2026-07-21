import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Widgets from "./Widgets";

export const metadata: Metadata = {
  title: "Repid Agency — Saytingizga Google’dan mijoz oqimini ochamiz",
  description:
    "Organik SEO, Google Ads, web sayt. Bepul strategik suhbat, kunlik hisobot, 24 loyiha real natijalari.",
  verification: {
    google: "T0rgMF_8ciWMPcSQ6yNRu-gu_lXI4xvgMF4k6O7s_fw",
  },
  icons: {
    icon: "/images/favicon2.png",
    apple: "/images/favicon2.png", // Apple qurilmalari uchun (ixtiyoriy)
  },
};

const initLang = `(function(){try{var s=localStorage.getItem('repid_lang');var l=(s==='ru'||s==='uz')?s:'uz';document.documentElement.setAttribute('data-lang',l);}catch(e){document.documentElement.setAttribute('data-lang','uz');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" data-lang="uz">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initLang }} />
      </head>
      <body>
        {children}
        <Widgets />
      </body>
      <GoogleAnalytics gaId="G-6NQ5YTYRTS" />
    </html>
  );
}
