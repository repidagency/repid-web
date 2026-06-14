import './globals.css';
import type { Metadata } from 'next';
import Widgets from './Widgets';

export const metadata: Metadata = {
  title: 'Repid Agency — Saytingizga Google’dan mijoz oqimini ochamiz',
  description:
    'Organik SEO, Google Ads, web va CRM. Bepul strategik suhbat, kunlik hisobot, 14 loyiha real natijalari.',
};

const initLang = `(function(){try{var s=localStorage.getItem('repid_lang');var l=(s==='ru'||s==='uz')?s:'uz';document.documentElement.setAttribute('data-lang',l);}catch(e){document.documentElement.setAttribute('data-lang','uz');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" data-lang="uz">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initLang }} />
      </head>
      <body>
        {children}
        <Widgets />
      </body>
    </html>
  );
}
