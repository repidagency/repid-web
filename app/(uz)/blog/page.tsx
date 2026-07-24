import type { Metadata } from "next";
import BlogListView from "../../views/BlogListView";
import { pageMetadata } from "../../i18n";

export const metadata: Metadata = pageMetadata({
  lang: "uz",
  path: "/blog",
  title: "Blog — SEO, Google Ads va sayt haqida | Repid Agency",
  description:
    "Repid Agency blogi: Google’da ko‘rinish, organik SEO, kontekst reklama va sayt konversiyasi haqida amaliy maqolalar.",
});

export default function Page() {
  return <BlogListView lang="uz" />;
}
