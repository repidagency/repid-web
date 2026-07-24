import LangSwitch from "./LangSwitch";
import { Lang as LangFilter, href, type Lang } from "./i18n";

export default function Nav({ lang, path }: { lang: Lang; path: string }) {
  return (
    <LangFilter lang={lang}>
      <nav className="nav">
        <div className="wrap">
          <a href={href(lang, "/")} className="logo">
            <span className="dot">R</span>Repid
          </a>
          <div className="nav-r">
            <div className="nav-links">
              <a href={href(lang, "/#tariffs")}>
                <span data-uz>Xizmatlar</span>
                <span data-ru>Услуги</span>
              </a>
              <a href={href(lang, "/#calc")}>
                <span data-uz>Kalkulyator</span>
                <span data-ru>Калькулятор</span>
              </a>
              <a href={href(lang, "/#cases")}>
                <span data-uz>Natijalar</span>
                <span data-ru>Результаты</span>
              </a>
              <a href={href(lang, "/service/seo")}>
                14 <span data-uz>loyiha</span>
                <span data-ru>проектов</span>
              </a>
              <a href={href(lang, "/blog")}>Blog</a>
              <a href={href(lang, "/#contact")}>
                <span data-uz>Kontakt</span>
                <span data-ru>Контакты</span>
              </a>
            </div>
            <LangSwitch lang={lang} path={path} />
            <a
              href={href(lang, "/#contact")}
              className="btn btn-p"
              style={{ padding: "9px 18px", fontSize: 14 }}
            >
              <span data-uz>Bepul suhbat</span>
              <span data-ru>Бесплатный созвон</span>
            </a>
          </div>
        </div>
      </nav>
    </LangFilter>
  );
}
