
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

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const IS_DEBUG = process.env.DEBUG_CONTACT === '1';

function json(data, status = 200) {
  // In debug we return details; in prod we keep it minimal.
  if (!IS_DEBUG && data?.details) delete data.details;
  return NextResponse.json(data, { status });
}

export async function POST(req) {
  try {
    // --- 0) Check required envs early ---
    const required = [
      'TURNSTILE_SECRET_KEY',
      'SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS',
      'CONTACT_TO','CONTACT_FROM'
    ];
    const missing = required.filter(k => !process.env[k] || String(process.env[k]).trim() === '');
    if (missing.length) {
      return json({ ok:false, error:'missing_env', details:{ missing } }, 500);
    }

    // --- 1) Read form ---
    const form = await req.formData();
    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();
    const company = (form.get('company') || '').toString().trim();
    const token = (form.get('cf-turnstile-response') || '').toString().trim();

    if (!name || !email || !message) {
      return json({ ok:false, error:'bad_request' }, 400);
    }
    if (company) {
      // Honeypot ⇒ pretend success
      return json({ ok:true });
    }

    // --- 2) Verify Turnstile ---
    if (!token) return json({ ok:false, error:'missing_token' }, 400);

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return json(
        { ok:false, error:'captcha_failed', details: verifyJson['error-codes'] || verifyJson },
        403
      );
    }

    // --- 3) Build transporter (SMTP) ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,   // true for 465, false otherwise
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      logger: IS_DEBUG,     // verbose logs in Vercel function logs
      debug: IS_DEBUG,
    });

    // Optional: verify connection/auth. This throws helpful errors.
    try {
      await transporter.verify();
    } catch (e) {
      return json({
        ok:false,
        error:'smtp_verify_failed',
        details:{ message: e.message, code: e.code }
      }, 500);
    }

    // --- 4) Send mail ---
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      text: message,
    });

    return json({ ok:true, id: info.messageId });
  } catch (e) {
    // In debug, show the exact error. Otherwise keep it generic.
    return json({
      ok:false,
      error: IS_DEBUG ? 'server_error_debug' : 'server_error',
      details: IS_DEBUG ? { message: e.message, stack: e.stack } : undefined
    }, 500);
  }
}

export async function GET() {
  return NextResponse.json({ ok:true });
}
