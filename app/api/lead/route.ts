// Lead capture → Telegram bot.
// Env: LEAD_BOT_TOKEN, LEAD_CHAT_ID (обязательные), LEAD_CHAT_ID_BACKUP (необязательный).
// Правило: заявка не должна теряться. Если доставка не сработала — пишем заявку
// в лог сервера (Vercel → Logs), чтобы её можно было достать руками.
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type Field = { label?: string; value?: string };

async function sendToTelegram(
  token: string,
  chatId: string,
  text: string,
): Promise<{ ok: boolean; description?: string }> {
  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Без parse_mode: символы вроде _ * [ ] в имени или комментарии ломают
    // разбор разметки, и Telegram отклоняет заявку целиком.
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });
  return r.json().catch(() => ({ ok: false, description: 'bad telegram response' }));
}

export async function POST(req: NextRequest) {
  let body: { source?: string; lang?: string; fields?: Field[] } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad JSON' }, { status: 400 });
  }

  const fields = (body.fields || []).filter(f => f && f.value);
  if (fields.length === 0) {
    return NextResponse.json({ error: 'Empty lead' }, { status: 400 });
  }

  const ts = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });
  const source = String(body.source || '').slice(0, 60);
  const lang = String(body.lang || '').slice(0, 5);

  const lines = ['🆕 Новая заявка с сайта Repid (SEO/Google Ads)'];
  lines.push('🕒 ' + ts + (lang ? '  ·  ' + lang.toUpperCase() : '') + (source ? '  ·  ' + source : ''));
  lines.push('————————————');
  for (const f of fields.slice(0, 12)) {
    const label = String(f.label || '').slice(0, 60).trim();
    const value = String(f.value || '').slice(0, 600).trim();
    if (value) lines.push((label ? label + ': ' : '') + value);
  }
  const text = lines.join('\n');

  const token = process.env.LEAD_BOT_TOKEN;
  const chatId = process.env.LEAD_CHAT_ID;
  if (!token || !chatId) {
    console.error('[LEAD:NOT_CONFIGURED]\n' + text);
    return NextResponse.json({ error: 'Lead delivery not configured' }, { status: 500 });
  }

  const targets = [chatId, process.env.LEAD_CHAT_ID_BACKUP].filter(Boolean) as string[];
  let lastError = 'unknown';

  for (const target of targets) {
    // Две попытки на адресата: сеть до Telegram иногда даёт разовый сбой.
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const data = await sendToTelegram(token, target, text);
        if (data.ok) return NextResponse.json({ ok: true });
        lastError = data.description || 'telegram rejected';
        // Отказ по правам или разметке повтором не лечится — идём к следующему адресату.
        break;
      } catch {
        lastError = 'network error';
      }
    }
  }

  console.error('[LEAD:DELIVERY_FAILED:' + lastError + ']\n' + text);
  return NextResponse.json({ error: 'Telegram error', detail: lastError }, { status: 502 });
}
