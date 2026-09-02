'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { tr, type Locale } from '@/lib/translations';

const CONSENT_KEY = 'ptnext-analytics-consent';

type Consent = 'accepted' | 'declined' | null;

function readConsent(): Consent {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === 'accepted' || value === 'declined') return value;
  } catch {
    /* ignore */
  }
  return null;
}

/*
 * GA4 gated on NEXT_PUBLIC_GA_ID and explicit visitor consent.
 * No analytics scripts load until the user accepts.
 */
export function Analytics({ locale }: { locale: Locale }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const T = tr(locale);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  if (!gaId) return null;

  const saveConsent = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
  };

  return (
    <>
      {consent === 'accepted' && <GoogleAnalytics gaId={gaId} />}
      {ready && consent === null && (
        <div
          className="consent-banner"
          role="dialog"
          aria-labelledby="consent-banner-title"
          aria-describedby="consent-banner-desc"
        >
          <div className="consent-banner-inner">
            <p id="consent-banner-title" className="consent-banner-title">
              {T('Analytics cookies')}
            </p>
            <p id="consent-banner-desc" className="consent-banner-desc">
              {T('We use analytics cookies to understand how visitors use our site. You can accept or decline — the site works either way.')}
            </p>
            <div className="consent-banner-actions">
              <button type="button" className="consent-btn consent-btn-decline f-orange2" onClick={() => saveConsent('declined')}>
                {T('Decline')}
              </button>
              <button type="button" className="consent-btn consent-btn-accept f-white2" onClick={() => saveConsent('accepted')}>
                {T('Accept')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
