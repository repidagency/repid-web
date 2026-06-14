import LangSwitch from "./LangSwitch";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <a href="/" className="logo">
          <span className="dot">R</span>Repid
        </a>
        <div className="nav-r">
          <div className="nav-links">
            <a href="/#tariffs">
              <span data-uz>Xizmatlar</span>
              <span data-ru>Услуги</span>
            </a>
            <a href="/#calc">
              <span data-uz>Kalkulyator</span>
              <span data-ru>Калькулятор</span>
            </a>
            <a href="/#cases">
              <span data-uz>Natijalar</span>
              <span data-ru>Результаты</span>
            </a>
            <a href="/service/seo">
              14 <span data-uz>loyiha</span>
              <span data-ru>проектов</span>
            </a>
            <a href="/blog">Blog</a>
            <a href="/#contact">
              <span data-uz>Kontakt</span>
              <span data-ru>Контакты</span>
            </a>
          </div>
          <LangSwitch />
          <a
            href="/#contact"
            className="btn btn-p"
            style={{ padding: "9px 18px", fontSize: 14 }}
          >
            <span data-uz>Bepul suhbat</span>
            <span data-ru>Бесплатный созвон</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
