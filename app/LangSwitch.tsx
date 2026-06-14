'use client';
import { useEffect, useState } from 'react';

export default function LangSwitch() {
  const [lang, setLang] = useState<'uz' | 'ru'>('uz');
  useEffect(() => {
    let saved: 'uz' | 'ru' = 'uz';
    try {
      const s = localStorage.getItem('repid_lang');
      if (s === 'ru' || s === 'uz') saved = s;
    } catch {}
    setLang(saved);
    document.documentElement.setAttribute('data-lang', saved);
  }, []);
  function pick(l: 'uz' | 'ru') {
    setLang(l);
    document.documentElement.setAttribute('data-lang', l);
    try { localStorage.setItem('repid_lang', l); } catch {}
  }
  return (
    <div className="lang">
      <button data-lang="uz" className={lang === 'uz' ? 'on' : ''} onClick={() => pick('uz')}>UZ</button>
      <button data-lang="ru" className={lang === 'ru' ? 'on' : ''} onClick={() => pick('ru')}>RU</button>
    </div>
  );
}
