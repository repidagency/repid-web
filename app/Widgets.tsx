'use client';
import { useState } from 'react';
import LeadForm from './LeadForm';

export default function Widgets() {
  const [open, setOpen] = useState<'none' | 'menu' | 'form' | 'chat'>('none');
  const [lang, setLang] = useState<'uz' | 'ru'>('uz');
  // sync with html attr
  if (typeof document !== 'undefined') {
    const cur = (document.documentElement.getAttribute('data-lang') as 'uz' | 'ru') || 'uz';
    if (cur !== lang) setLang(cur);
  }
  const t = (uz: string, ru: string) => (lang === 'uz' ? uz : ru);

  return (
    <>
      {/* FAB cluster */}
      <div className="fab-stack" aria-hidden={open === 'form'}>
        <button className="fab fab-tg" onClick={() => setOpen('chat')} title={t('Telegram chat', 'Чат в Telegram')} aria-label="Telegram">
          <svg viewBox="0 0 24 24" width="24" height="24"><path d="M21 4L2 11l6 2 2 7 4-5 6 5z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /></svg>
        </button>
        <a className="fab fab-tel" href="tel:+998977700487" title={t('Qo‘ng‘iroq', 'Позвонить')} aria-label="Call">
          <svg viewBox="0 0 24 24" width="22" height="22"><path d="M5 4h4l2 5-3 2c1.5 3 4 5.5 7 7l2-3 5 2v4a2 2 0 0 1-2 2C10 23 1 14 1 6a2 2 0 0 1 2-2z" fill="#fff" /></svg>
        </a>
        <button className="fab fab-form" onClick={() => setOpen('form')} title={t('Ariza qoldirish', 'Оставить заявку')} aria-label="Form">
          <svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 4h16v3H4zM4 10h16v3H4zM4 16h10v3H4z" fill="#fff" /></svg>
        </button>
      </div>

      {/* Telegram chat popup */}
      {open === 'chat' && (
        <div className="fab-pop" role="dialog">
          <div className="fab-pop-head">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', overflow: 'hidden', background: '#7B5CFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                <img src="/founders/oybek.jpg" alt="Oybek" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Oybek Tojiyev</div>
                <div style={{ fontSize: 11.5, color: '#22D3A5' }}>● {t('online', 'онлайн')}</div>
              </div>
            </div>
            <button className="fab-x" onClick={() => setOpen('none')} aria-label="Close">×</button>
          </div>
          <div className="fab-pop-body">
            <div className="fab-msg"><span data-uz>Assalomu alaykum. Savolingizni Telegramda yozing — javob beraman.</span><span data-ru>Здравствуйте. Напишите вопрос в Telegram — отвечу.</span></div>
            <a href="https://t.me/Oybek_0487" target="_blank" rel="noopener" className="btn btn-p" style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}>
              <span data-uz>Telegramda yozish</span><span data-ru>Написать в Telegram</span>
            </a>
            <a href="tel:+998977700487" className="btn btn-g" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
              <span data-uz>Qo‘ng‘iroq +998 97 770-04-87</span><span data-ru>Позвонить +998 97 770-04-87</span></a>
          </div>
        </div>
      )}

      {/* Lead form modal */}
      {open === 'form' && (
        <div className="fab-modal" onClick={(e) => { if (e.target === e.currentTarget) setOpen('none'); }}>
          <div className="fab-modal-inner">
            <button className="fab-x" onClick={() => setOpen('none')} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16 }}>×</button>
            <h3 style={{ marginBottom: 8 }}><span data-uz>Bepul suhbatga yozilish</span><span data-ru>Записаться на созвон</span></h3>
            <p style={{ fontSize: 14, color: '#9099AB', marginBottom: 16 }}><span data-uz>30 daqiqa. Majburiyatsiz. 24 soat ichida bog‘lanamiz.</span><span data-ru>30 минут. Без обязательств. Ответим за 24 часа.</span></p>
            <LeadForm source="widget" />
          </div>
        </div>
      )}
    </>
  );
}
