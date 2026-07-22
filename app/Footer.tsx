export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-col ft-brand">
            <div className="ft-logo">
              <span className="ft-logo-dot">R</span>
              Repid Agency
            </div>
            <p className="ft-tagline">
              <span data-uz>
                Saytdan mijoz oqimigacha — bitta jamoa, bitta natija. Organik
                SEO, Google Ads, web va CRM tizimlari.
              </span>
              <span data-ru>
                От сайта до потока клиентов — одна команда, один результат.
                Органический SEO, Google Ads, web и CRM-системы.
              </span>
            </p>
          </div>
          <div className="ft-col">
            <h5>
              <span data-uz>Xizmatlar</span>
              <span data-ru>Услуги</span>
            </h5>
            <ul>
              <li>
                <a href="/#tariffs">
                  <span data-uz>Veb-sayt</span>
                  <span data-ru>Веб-сайт</span>
                </a>
              </li>
              <li>
                <a href="/#tariffs">Organik SEO</a>
              </li>
              <li>
                <a href="/#tariffs">Google Ads</a>
              </li>
            </ul>
          </div>
          <div className="ft-col">
            <h5>
              <span data-uz>Sayt</span>
              <span data-ru>Сайт</span>
            </h5>
            <ul>
              <li>
                <a href="/cases">
                  <span data-uz>24 loyiha</span>
                  <span data-ru>24 проектов</span>
                </a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/#calc">
                  <span data-uz>Kalkulyator</span>
                  <span data-ru>Калькулятор</span>
                </a>
              </li>
              <li>
                <a href="/#contact">
                  <span data-uz>Kontakt</span>
                  <span data-ru>Контакты</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="ft-col ft-contact">
            <h5>
              <span data-uz>Aloqa</span>
              <span data-ru>Связь</span>
            </h5>
            <a href="tel:+998977700487" className="ft-phone">
              +998 97 770-04-87
            </a>
            <a href="tel:+998971016600">+998 97 101-66-00</a>
            <a href="mailto:repidagency@gmail.com">repidagency@gmail.com</a>
            <a href="https://t.me/Oybek_0487" target="_blank" rel="noopener">
              @Oybek_0487
            </a>
            <div className="ft-addr">
              <span data-uz>Toshkent, Olmazor 19A</span>
              <span data-ru>Ташкент, Олмазор 19A</span>
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <div>
            © 2026 Repid Agency ·{" "}
            <span data-uz>Barcha huquqlar himoyalangan</span>
            <span data-ru>Все права защищены</span>
          </div>
          <div>UZ · RU</div>
        </div>
      </div>
    </footer>
  );
}
