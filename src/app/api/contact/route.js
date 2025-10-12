
// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   try {
//     const form = await req.formData();
//     const name = (form.get('name') || '').toString().trim();
//     const email = (form.get('email') || '').toString().trim();
//     const message = (form.get('message') || '').toString().trim();
//     const company = (form.get('company') || '').toString().trim(); // honeypot
//     const token = (form.get('cf-turnstile-response') || '').toString().trim();

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
//     }
//     if (company) {
//       // Honeypot tripped: pretend success (don’t send)
//       return NextResponse.json({ ok: true });
//     }

//     // Verify Turnstile
//     if (!token) {
//       return NextResponse.json({ ok: false, error: 'missing_token' }, { status: 400 });
//     }
//     const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
//       method: 'POST',
//       body: new URLSearchParams({
//         secret: process.env.TURNSTILE_SECRET_KEY || '',
//         response: token,
//       }),
//     });
//     const verifyJson = await verifyRes.json();
//     if (!verifyJson.success) {
//       // Useful errors: missing-input-secret, invalid-input-secret, missing-input-response, invalid-input-response, timeout-or-duplicate
//       return NextResponse.json(
//         { ok: false, error: 'captcha_failed', details: verifyJson['error-codes'] || verifyJson },
//         { status: 403 }
//       );
//     }

//     // Simple anti-link spam (optional)
//     const linkCount = (message.match(/https?:\/\//gi) || []).length;
//     if (linkCount > 3) {
//       // Silently accept but drop
//       return NextResponse.json({ ok: true });
//     }

//     // SMTP transport (SendGrid example via Nodemailer)
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT || 587),
//       secure: Number(process.env.SMTP_PORT) === 465,
//       auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
//     });

//     const info = await transporter.sendMail({
//       from: `"${name}" <${process.env.CONTACT_FROM}>`,
//       to: process.env.CONTACT_TO,
//       replyTo: email,
//       subject: `Portfolio contact: ${name}`,
//       text: message,
//     });

//     return NextResponse.json({ ok: true, id: info.messageId });
//   } catch (e) {
//     // Don’t leak internals in prod; you can log to a monitoring service
//     return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
//   }
// }

// export async function GET() {
//   return NextResponse.json({ ok: true });
// }

// src/app/api/contact/route.js
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function J(data, status = 200) {
  return NextResponse.json(data, { status });
}

export async function POST(req) {
  try {
    // --- Normalize env (trim accidental spaces/newlines) ---
    const ENV = {
      TURNSTILE_SECRET_KEY: (process.env.TURNSTILE_SECRET_KEY || '').trim(),
      SMTP_HOST: (process.env.SMTP_HOST || '').trim(),
      SMTP_PORT: Number((process.env.SMTP_PORT || '465').trim()),
      SMTP_USER: (process.env.SMTP_USER || '').trim(),
      SMTP_PASS: (process.env.SMTP_PASS || '').replace(/\s+/g, '').trim(), // remove ALL spaces
      CONTACT_FROM: (process.env.CONTACT_FROM || '').trim(),
      CONTACT_TO: (process.env.CONTACT_TO || '').trim(),
    };

    // --- Required env checks ---
    for (const k of [
      'TURNSTILE_SECRET_KEY','SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','CONTACT_FROM','CONTACT_TO'
    ]) if (!ENV[k]) return J({ ok:false, error:'server_misconfig' }, 500);

    // Gmail requirement: from === user
    if (ENV.CONTACT_FROM !== ENV.SMTP_USER) {
      return J({ ok:false, error:'server_misconfig' }, 500);
    }

    // --- Read form data ---
    const form = await req.formData();
    const name = (form.get('name') || '').toString().trim();
    const title = (form.get('title') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();
    const company = (form.get('company') || '').toString().trim(); // honeypot
    const token = (form.get('cf-turnstile-response') || '').toString().trim();

    if (!name || !email || !message) return J({ ok:false, error:'bad_request' }, 400);
    if (company) return J({ ok:true }); // bot → pretend success

    // --- Verify Turnstile token ---
    if (!token) return J({ ok:false, error:'missing_token' }, 400);
    const ver = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: ENV.TURNSTILE_SECRET_KEY, response: token }),
    });
    const verJson = await ver.json();
    if (!verJson.success) return J({ ok:false, error:'captcha_failed' }, 403);

    // --- Simple anti-link spam (optional) ---
    const links = (message.match(/https?:\/\//gi) || []).length;
    if (links > 3) return J({ ok:true });

    // --- SMTP transport (Gmail App Password) ---
    const transporter = nodemailer.createTransport({
      host: ENV.SMTP_HOST,                  // smtp.gmail.com
      port: ENV.SMTP_PORT,                  // 465 recommended
      secure: ENV.SMTP_PORT === 465,        // true for 465, false for 587
      auth: { user: ENV.SMTP_USER, pass: ENV.SMTP_PASS },
    });

    // Optional: comment out if you want to skip a tiny extra roundtrip
    await transporter.verify();

    // --- Send email ---
    const info = await transporter.sendMail({
      from: `"${name}" <${ENV.CONTACT_FROM}>`, // MUST be your Gmail for Gmail SMTP
      to: ENV.CONTACT_TO,
      replyTo: email,                           // replies go to the visitor
      subject: `Subject: ${title}`,
      text: message,
    });

    return J({ ok:true, id: info.messageId });
  } catch {
    return J({ ok:false, error:'server_error' }, 500);
  }
}

export async function GET() {
  return NextResponse.json({ ok:true });
}
