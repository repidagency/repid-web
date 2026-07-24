import type { Metadata } from "next";
import HomeView from "../views/HomeView";
import { pageMetadata } from "../i18n";

export const metadata: Metadata = pageMetadata({
  lang: "uz",
  path: "/",
  title: "Repid Agency — Saytingizga Google’dan mijoz oqimini ochamiz",
  description:
    "Organik SEO, Google Ads, web sayt. Bepul strategik suhbat, kunlik hisobot, 24 loyiha real natijalari.",
});

export default function Page() {
  return <HomeView lang="uz" />;
}
