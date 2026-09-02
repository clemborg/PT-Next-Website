'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/*
 * Contact section, visually ported from PT Next ContactForm.dc.html.
 *
 * Submit logic per the production spec (replaces the design file's mailto
 * action): POST to Formspree with a honeypot spam field, loading/error
 * states, and redirect to the locale's Thank You page on success.
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojooqbl';

export interface ContactFormProps {
  heading: string;
  headingSize?: number;
  subheading: string;
  inputBg: string;
  linkHref: string;
  linkLabel: string;
  thankYouHref: string;
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    error: string;
  };
}

export function ContactForm({
  heading,
  headingSize = 50,
  subheading,
  inputBg,
  linkHref,
  linkLabel,
  thankYouHref,
  labels,
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const fieldStyle: React.CSSProperties = {
    width: '100%', border: '1px solid #26262a', color: '#faf8f5',
    fontFamily: 'Inter,sans-serif', fontSize: 14, padding: '13px 16px',
    borderRadius: 1, background: inputBg,
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        router.push(thankYouHref);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" style={{ padding: '120px 64px', background: '#0e0e0f', textAlign: 'center' }}>
      <div style={{ width: 42, height: 1, background: '#E87722', margin: '0 auto 32px' }} />
      <h2
        style={{
          fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: headingSize,
          lineHeight: 1.08, maxWidth: 640, margin: '0 auto', color: '#faf8f5',
        }}
      >
        {heading}
      </h2>
      <p style={{ fontSize: 16, color: '#a29d94', lineHeight: 1.7, maxWidth: 440, margin: '22px auto 0', fontWeight: 300 }}>
        {subheading}
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 440, margin: '38px auto 0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 18 }}
      >
        <div>
          <label
            htmlFor="contact-name"
            style={{ display: 'block', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8f897f', marginBottom: 8 }}
          >
            {labels.name}
          </label>
          <input id="contact-name" name="Name" type="text" required className="f-input" style={fieldStyle} />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            style={{ display: 'block', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8f897f', marginBottom: 8 }}
          >
            {labels.email}
          </label>
          <input id="contact-email" name="Email" type="email" required className="f-input" style={fieldStyle} />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            style={{ display: 'block', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8f897f', marginBottom: 8 }}
          >
            {labels.message}
          </label>
          <textarea id="contact-message" name="Message" rows={4} className="f-input" style={{ ...fieldStyle, resize: 'vertical' }} />
        </div>
        {/* Honeypot: hidden from humans, bots fill it and Formspree drops the submission */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="f-white2"
          style={{
            fontSize: 15, color: '#0e0e0f', background: '#E87722', padding: '15px 32px',
            letterSpacing: '.02em', fontWeight: 500, borderRadius: 1, border: 'none',
            fontFamily: 'Inter,sans-serif', cursor: status === 'sending' ? 'default' : 'pointer',
            alignSelf: 'center', opacity: status === 'sending' ? 0.7 : 1,
          }}
        >
          {status === 'sending' ? labels.sending : labels.submit}
        </button>
        {status === 'error' && (
          <p role="alert" style={{ fontSize: 13, color: '#E87722', lineHeight: 1.6, textAlign: 'center', margin: 0 }}>
            {labels.error}
          </p>
        )}
      </form>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30, flexWrap: 'wrap' }}>
        <a
          href={linkHref}
          className="f-orange3"
          style={{
            fontSize: 15, color: '#faf8f5', letterSpacing: '.02em',
            borderBottom: '1px solid #4a4843', paddingBottom: 3, textDecoration: 'none',
          }}
        >
          {linkLabel}
        </a>
        <a href="mailto:info@ptnext.com" className="f-orange3" style={{ fontSize: 15, color: '#faf8f5', letterSpacing: '.02em', textDecoration: 'none' }}>
          info@ptnext.com
        </a>
      </div>
    </section>
  );
}
