"use client";

import { useRef, useState, useEffect } from "react";
import Script from "next/script";
// import emailjs from '@emailjs/browser';

const Contact = ({ t }) => {
  // const form = useRef()
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_r959fyi', 'template_ug32o44', form.current, {
  //       publicKey: 've18C5tdoLpUN-wje',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };
  // console.log('HAS_SECRET?', !!process.env.TURNSTILE_SECRET_KEY);

  const formRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (formRef.current && !formRef.current.dataset.startedAt) {
      formRef.current.dataset.startedAt = String(Date.now());
    }
    window.onTurnstileSuccess = () => setReady(true);
    window.onTurnstileExpired = () => setReady(false);
    return () => {
      delete window.onTurnstileSuccess;
      delete window.onTurnstileExpired;
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    // must have a token
    const tokenInput = formRef.current?.querySelector(
      'input[name="cf-turnstile-response"]'
    );
    if (!tokenInput || !tokenInput.value) {
      setMsg("Captcha not ready.");
      return;
    }

    // tiny anti-bot: require ~1.2s on page
    const started = Number(formRef.current?.dataset.startedAt || Date.now());
    if (Date.now() - started < 1200) {
      setMsg("Too fast.");
      return;
    }

    setSubmitting(true);
    setMsg("");
    try {
      const fd = new FormData(formRef.current);
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (data.previewUrl) console.log("Ethereal preview:", data.previewUrl); // dev only
      setMsg(res.ok ? "Sent. Thanks!" : `Failed: ${data.error || res.status}`);
      if (res.ok) formRef.current.reset();
    } catch (e) {
      setMsg("Failed. Try again.");
    } finally {
      setSubmitting(false);
      if (window.turnstile?.reset) {
        const w = formRef.current.querySelector(".cf-turnstile");
        if (w) window.turnstile.reset(w);
        setReady(false);
      }
    }
  };

  return (
    <div className="rounded-lg p-4 pt-0 m-auto">
      {/* Load Turnstile widget script once */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col gap-[2rem] w-[60%] m-auto mt-10"
      >
        {/* <p class="text-sm text-gray-500">I’ll get back to you within 24h.</p> */}
        <div className="flex flex-col">
          <label className="" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="h-[2rem] border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="h-[2rem] border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">{t.main.contact.form.subject}</label>
          <input
            type="text"
            className="h-[2rem] border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
            id="title"
            name="title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">{t.main.contact.form.message}</label>
          <textarea
            type="text"
            rows={4}
            cols={50}
            className="border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
            id="message"
            name="message"
          />
        </div>
        {/* <button className="w-full bg-white text-[#e2cbd0] mr-auto  p-2 rounded-xl border border-[0.5px] border-[#e2cbd0] hover:bg-[#e2cbd0] hover:text-white hover:border-white cursor-pointer">
          Send
        </button> */}
        {/* <button class="inline-flex items-center justify-center cursor-pointer px-5 h-11 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
          Send
          
        </button> */}
        {/* Honeypot (hidden from humans; bots often fill everything) */}
        <input
          name="company"
          tabIndex={-1}
          className="absolute left-[-9999px] top-[-9999px]"
          autoComplete="off"
        />

        {/* Turnstile widget (uses your public site key) */}
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-callback="onTurnstileSuccess"
          data-expired-callback="onTurnstileExpired"
        />

        <button
          disabled={!ready || submitting}
          className="rounded px-4 py-2 border font-medium hover:opacity-90 disabled:opacity-50"
        >
          {submitting ? "Sending…" : ready ? "Send" : "Loading…"}
        </button>

        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
};

export default Contact;
