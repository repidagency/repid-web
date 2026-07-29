import type { MetadataRoute } from "next";
import { ARTICLES } from "./blog/articles";
import { SITE_URL, href } from "./i18n";

/**
 * Sitemap — har sahifa ikkala tilda ro‘yxatda, hreflang bilan bog‘langan.
 * Ilgari sayt umuman sitemap’siz edi (/sitemap.xml → 404).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/service/seo", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    ...ARTICLES.map((a) => ({
      path: `/blog/${a.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];

  const lastModified = new Date();

  return paths.flatMap(({ path, priority, changeFrequency }) =>
    (["uz", "ru"] as const).map((lang) => ({
      url: `${SITE_URL}${href(lang, path)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "uz-UZ": `${SITE_URL}${href("uz", path)}`,
          "ru-RU": `${SITE_URL}${href("ru", path)}`,
        },
      },
    })),
  );
}
