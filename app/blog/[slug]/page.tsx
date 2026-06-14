import { notFound } from 'next/navigation';
import Nav from '../../Nav';
import Footer from '../../Footer';
import LeadForm from '../../LeadForm';
import { ARTICLES, getArticle } from '../articles';

export function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return {
    title: a ? `${a.titleUz} — Repid Blog` : 'Repid Blog',
    description: a?.leadUz?.slice(0, 160),
  };
}

const TG = 'https://t.me/Oybek_0487';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const idx = ARTICLES.findIndex(x => x.slug === a.slug);
  const prev = idx > 0 ? ARTICLES[idx - 1] : null;
  const next = idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null;

  return (
    <>
      <Nav />

      <section className="cases-hero" style={{ paddingTop: 100, paddingBottom: 60 }}>
        <div className="wrap" style={{ maxWidth: 820, textAlign: 'left' }}>
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#A78BFF', fontSize: 13.5, fontWeight: 600, marginBottom: 22, textDecoration: 'none' }}>← <span data-uz>Bloglarga qaytish</span><span data-ru>Назад к блогу</span></a>
          <span className="eyebrow" style={{ color: '#A78BFF' }}><span className="ln" style={{ background: '#A78BFF' }} />Repid Blog · № {String(a.n).padStart(2, '0')}</span>
          <h1 style={{ fontSize: 'clamp(32px,4.6vw,52px)', textAlign: 'left', marginBottom: 18 }}>
            <span data-uz>{a.titleUz}</span><span data-ru>{a.titleRu}</span>
          </h1>
          <p className="lead" style={{ textAlign: 'left', maxWidth: 'none' }}>
            <span data-uz>{a.leadUz}</span><span data-ru>{a.leadRu}</span>
          </p>
        </div>
      </section>

      <article style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 760, padding: '80px 24px' }}>
          <div data-uz style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink)' }}>
            {a.bodyUz.map((p, i) => <p key={i} style={{ marginBottom: 22 }}>{p}</p>)}
          </div>
          <div data-ru style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink)' }}>
            {a.bodyRu.map((p, i) => <p key={i} style={{ marginBottom: 22 }}>{p}</p>)}
          </div>

          <div style={{ marginTop: 50, padding: '28px 30px', borderRadius: 18, background: 'linear-gradient(160deg,#0F1320,#0A0D17)', color: '#fff' }}>
            <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
              <span data-uz>Maqola foydali bo‘ldimi?</span><span data-ru>Полезно?</span>
            </div>
            <p style={{ color: '#9099AB', fontSize: 15, lineHeight: 1.6, marginBottom: 18 }}>
              <span data-uz>Bepul strategik suhbatda biznesingiz uchun aniq plan beramiz. Sohangizdagi raqamlar, raqobat, lead prognozi.</span>
              <span data-ru>На бесплатном созвоне дадим точный план для вашего бизнеса: цифры по нише, конкуренция, прогноз лидов.</span>
            </p>
            <a href="/#contact" className="btn btn-p"><span data-uz>Bepul suhbatga yozilish →</span><span data-ru>Записаться на созвон →</span></a>
          </div>

          {/* prev / next */}
          <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {prev ? (
              <a href={`/blog/${prev.slug}`} style={{ padding: '20px 22px', border: '1px solid var(--line)', borderRadius: 14, color: 'var(--ink)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: 6 }}>← <span data-uz>Oldingi</span><span data-ru>Назад</span></div>
                <div style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.4 }}><span data-uz>{prev.titleUz}</span><span data-ru>{prev.titleRu}</span></div>
              </a>
            ) : <div />}
            {next ? (
              <a href={`/blog/${next.slug}`} style={{ padding: '20px 22px', border: '1px solid var(--line)', borderRadius: 14, color: 'var(--ink)', textAlign: 'right' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: 6 }}><span data-uz>Keyingi</span><span data-ru>Далее</span> →</div>
                <div style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.4 }}><span data-uz>{next.titleUz}</span><span data-ru>{next.titleRu}</span></div>
              </a>
            ) : <div />}
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
