// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// import { NextResponse } from 'next/server';

// export async function GET() {
//   console.log('[CONTACT] GET hit');
//   return NextResponse.json({ ok: true, method: 'GET' });
// }

// export async function POST(req) {
//   console.log('[CONTACT] POST hit');
//   // If you’re sending FormData, this will work:
//   const form = await req.formData().catch(() => null);
//   const token = form?.get('cf-turnstile-response') || null;

//   return NextResponse.json({ ok: true, method: 'POST', hasToken: !!token });
// }

// // Some environments send a preflight
// export async function OPTIONS() {
//   return NextResponse.json({}, { status: 200 });
// }

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const form = await req.formData();
    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();
    const company = (form.get('company') || '').toString().trim(); // honeypot
    const token = (form.get('cf-turnstile-response') || '').toString().trim();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
    }
    if (company) {
      // Honeypot tripped: pretend success (don’t send)
      return NextResponse.json({ ok: true });
    }

    // Verify Turnstile
    if (!token) {
      return NextResponse.json({ ok: false, error: 'missing_token' }, { status: 400 });
    }
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || '',
        response: token,
      }),
    });
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      // Useful errors: missing-input-secret, invalid-input-secret, missing-input-response, invalid-input-response, timeout-or-duplicate
      return NextResponse.json(
        { ok: false, error: 'captcha_failed', details: verifyJson['error-codes'] || verifyJson },
        { status: 403 }
      );
    }

    // Simple anti-link spam (optional)
    const linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 3) {
      // Silently accept but drop
      return NextResponse.json({ ok: true });
    }

    // SMTP transport (SendGrid example via Nodemailer)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      text: message,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (e) {
    // Don’t leak internals in prod; you can log to a monitoring service
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
