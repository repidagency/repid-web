// Lead capture → Telegram bot.
// Env: LEAD_BOT_TOKEN, LEAD_CHAT_ID.
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type Field = { label?: string; value?: string };

export async function POST(req: NextRequest) {
  const token = process.env.LEAD_BOT_TOKEN;
  const chatId = process.env.LEAD_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json({ error: 'Lead delivery not configured' }, { status: 500 });
  }

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

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: lines.join('\n'), disable_web_page_preview: true }),
    });
    const data = await r.json();
    if (!data.ok) {
      return NextResponse.json({ error: 'Telegram error', detail: data.description }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }
}
