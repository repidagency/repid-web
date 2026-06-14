import LeadForm from '../LeadForm';
import Nav from '../Nav';
import Footer from '../Footer';
import { ARTICLES } from './articles';

const TG = 'https://t.me/Oybek_0487';

export default function BlogPage() {
  return (
    <>
      <Nav />

      <section className="cases-hero">
        <div className="wrap">
          <span className="eyebrow"><span className="ln" />Blog · Repid Agency</span>
          <h1>
            <span data-uz>Maqolalar: <span className="hl">SEO, Google Ads, sayt</span></span>
            <span data-ru>Статьи: <span className="hl">SEO, Google Ads, сайт</span></span>
          </h1>
          <p className="lead" style={{ maxWidth: 720, margin: '0 auto' }}>
            <span data-uz>Amaliy bilim — bizning loyihalarimiz tajribasidan. Hech qanday «suv», faqat ishlatish mumkin bo‘lgan narsalar.</span>
            <span data-ru>Прикладные знания из опыта наших проектов. Без воды, только то, что работает.</span>
          </p>
        </div>
      </section>

      <section className="bg-w-to-soft" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="blog-grid">
            {ARTICLES.map(p => (
              <a key={p.n} href={`/blog/${p.slug}`} className="blog-card">
                <div className="num">№ {String(p.n).padStart(2, '0')}</div>
                <h3><span data-uz>{p.titleUz}</span><span data-ru>{p.titleRu}</span></h3>
                <p><span data-uz>{p.leadUz}</span><span data-ru>{p.leadRu}</span></p>
                <div className="lnk"><span data-uz>O‘qish →</span><span data-ru>Читать →</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-to-w" style={{ paddingBottom: 120 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="form-block">
            <h2 style={{ textAlign: 'center' }}><span data-uz>Maqola yaxshi — endi <span className="hl" style={{ color: '#4ed1ff' }}>real natija</span></span><span data-ru>Статья — это хорошо. Теперь <span className="hl" style={{ color: '#4ed1ff' }}>реальный результат</span></span></h2>
            <p className="lead" style={{ textAlign: 'center' }}><span data-uz>Bepul strategik suhbatda biznesingiz uchun aniq plan beramiz.</span><span data-ru>На бесплатном созвоне дадим точный план для вашего бизнеса.</span></p>
            <LeadForm source="blog" />
          </div>
          <div style={{ marginTop: 18, textAlign: 'center', fontSize: 14, color: 'var(--sub)' }}>
            <span data-uz>Yoki to‘g‘ridan-to‘g‘ri: </span><span data-ru>Или напрямую: </span>
            <a href={TG} style={{ fontWeight: 600, color: 'var(--ink)' }}>@Oybek_0487</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
