import type { Metadata } from "next";
import ArticleView from "../../../views/ArticleView";
import { ARTICLES, getArticle } from "../../../blog/articles";
import { pageMetadata } from "../../../i18n";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Repid Blog" };
  return pageMetadata({
    lang: "uz",
    path: `/blog/${a.slug}`,
    title: `${a.titleUz} — Repid Blog`,
    description: a.leadUz.slice(0, 160),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleView lang="uz" slug={slug} />;
}
