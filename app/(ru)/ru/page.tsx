import type { Metadata } from "next";
import HomeView from "../../views/HomeView";
import { pageMetadata } from "../../i18n";

export const metadata: Metadata = pageMetadata({
  lang: "ru",
  path: "/",
  title: "Repid Agency — открываем поток клиентов из Google",
  description:
    "Органический SEO, Google Ads и сайт под ключ. Бесплатный стратегический созвон, ежедневный отчёт, реальные результаты 24 проектов.",
});

export default function Page() {
  return <HomeView lang="ru" />;
}
