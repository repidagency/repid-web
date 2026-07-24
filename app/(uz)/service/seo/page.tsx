import type { Metadata } from "next";
import SeoCasesView from "../../../views/SeoCasesView";
import { pageMetadata } from "../../../i18n";

export const metadata: Metadata = pageMetadata({
  lang: "uz",
  path: "/service/seo",
  title: "SEO xizmati Toshkent — 24 loyiha natijasi | Repid Agency",
  description:
    "Toshkentda organik SEO va Google Ads: 24 loyiha bo‘yicha real raqamlar — trafik, arizalar, CPC va ROI. Bepul strategik suhbat.",
});

export default function Page() {
  return <SeoCasesView lang="uz" />;
}
