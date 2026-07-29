import type { Metadata } from "next";
import SeoCasesView from "../../../../views/SeoCasesView";
import { pageMetadata } from "../../../../i18n";

export const metadata: Metadata = pageMetadata({
  lang: "ru",
  path: "/service/seo",
  title: "SEO-продвижение в Ташкенте — результаты 24 проектов | Repid Agency",
  description:
    "Органический SEO и Google Ads в Ташкенте: реальные цифры по 24 проектам — трафик, заявки, CPC и ROI. Бесплатный стратегический созвон.",
});

export default function Page() {
  return <SeoCasesView lang="ru" />;
}
