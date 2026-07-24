import type { Metadata } from "next";
import BlogListView from "../../../views/BlogListView";
import { pageMetadata } from "../../../i18n";

export const metadata: Metadata = pageMetadata({
  lang: "ru",
  path: "/blog",
  title: "Блог — SEO, Google Ads и сайты | Repid Agency",
  description:
    "Блог Repid Agency: практические статьи о видимости в Google, органическом SEO, контекстной рекламе и конверсии сайта.",
});

export default function Page() {
  return <BlogListView lang="ru" />;
}
