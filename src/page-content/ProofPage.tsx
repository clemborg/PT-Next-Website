import { tr, type Locale } from '@/lib/translations';
import { href } from '@/lib/routes';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PedigreeStrip } from '@/components/PedigreeStrip';
import { ContactSection } from '@/components/ContactSection';

/* Ported from PT Next Proof.dc.html */

export function ProofPage({ locale }: { locale: Locale }) {
  const T = tr(locale);
  const cellLabel: React.CSSProperties = {
    fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#8f897f', marginBottom: 16,
  };
  const cellLabelGold: React.CSSProperties = { ...cellLabel, color: '#c99a5b' };

  return (
    <div style={{ background: '#0e0e0f', fontFamily: 'Inter,sans-serif', color: '#faf8f5', minHeight: '100vh' }}>
      <Nav locale={locale} active="proof" pageKey="proof" />

      {/* HERO */}
      <section style={{ padding: '110px 64px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: '#c99a5b', marginBottom: 20 }}>{T('Proof')}</div>
        <div style={{ width: 42, height: 1, background: '#E87722', marginBottom: 28 }} />
        <h1 className="hero-h1" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 56, lineHeight: 1.1, maxWidth: 760 }}>
          {T("Trusted inside the world's leading jewelry maisons.")}
        </h1>
        <p style={{ fontSize: 17, color: '#a29d94', lineHeight: 1.8, marginTop: 24, maxWidth: 600, fontWeight: 300 }}>
          {T('A flagship boutique. A global high jewelry events program. Same platform on both floors.')}
        </p>
      </section>

      {/* CASE STUDY 1: FLAGSHIP */}
      <section style={{ padding: '0 64px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ aspectRatio: '21/9', borderRadius: 3, overflow: 'hidden', marginBottom: 40, border: '1px solid #26262a' }}>
            <img
              src="/images/proof-flagship-v2.png"
              alt="Multi-level flagship boutique interior with glass display cases, a floating staircase, and a lounge seating area"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#c99a5b' }}>{T('Case study: flagship boutique')}</div>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 32, lineHeight: 1.2, marginBottom: 36 }}>
            {T('White-glove service for every presentation.')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#1e1e21', border: '1px solid #1e1e21' }}>
            <div style={{ background: '#141416', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={cellLabel}>{T('The challenge: inventory control')}</div>
              <p style={{ fontSize: '14.5px', color: '#cabfa8', lineHeight: 1.8, flex: 1 }}>
                {T('A multi-level flagship holds thousands of pieces across display cases, back-of-house storage, and the vault. When a client asks for a specific piece, it might be out for service, in a photo shoot, or with another advisor. Locating it meant calling around and searching floor by floor while the client waited.')}
              </p>
            </div>
            <div style={{ background: '#141416', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={cellLabel}>{T('The solution: integrated intelligence')}</div>
              <p style={{ fontSize: '14.5px', color: '#cabfa8', lineHeight: 1.8, marginBottom: 14 }}>
                {T('PT Next deployed a unified boutique operations platform for:')}
              </p>
              <ul style={{ fontSize: '14.5px', color: '#cabfa8', lineHeight: 1.8, paddingLeft: 18, flex: 1 }}>
                <li>{T('Real-time, passive product tracking')}</li>
                <li>{T('Presentation tracking and conversion reporting')}</li>
                <li>{T('Supplies and consumables tracking for automated reorders')}</li>
              </ul>
            </div>
            <div style={{ background: '#151317', padding: '40px 32px', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 2px 0 #E87722' }}>
              <div style={cellLabelGold}>{T('The impact: a new daily routine')}</div>
              <p style={{ fontSize: '14.5px', color: '#d3c8ac', lineHeight: 1.8, flex: 1 }}>
                {T("Advisors now check a piece's live location on a phone or computer before leaving the client, and retrieve it directly. Weekly counts that took a full day finish in about an hour. Presentation and conversion data flows to the maison's intelligence team, figures they previously had no way to measure.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section style={{ padding: '0 64px 100px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 32, lineHeight: 1.35, fontStyle: 'italic', color: '#e6e2db' }}>
              {T('"Weekly counts went from a full day to about an hour."')}
            </p>
            <p style={{ fontSize: 13, color: '#8f897f', marginTop: 22, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              {T('Inventory Manager, Hamilton Jewelers')}
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 32, lineHeight: 1.35, fontStyle: 'italic', color: '#e6e2db' }}>
              {T('"The more we can do with Argos, the better."')}
            </p>
            <p style={{ fontSize: 13, color: '#8f897f', marginTop: 22, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              {T('5th Ave Flagship Security Manager')}
            </p>
          </div>
        </div>
      </section>

      {/* HARD METRIC + CONTEXT */}
      <section style={{ padding: '80px 64px 100px', background: '#141416', borderTop: '1px solid #1e1e21', borderBottom: '1px solid #1e1e21', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: '#E87722', fontWeight: 300, lineHeight: 1.15 }}>
            {T('Immediate product retrieval')}
          </div>
          <div style={{ fontSize: 13, color: '#a29d94', letterSpacing: '.03em', marginTop: 14, lineHeight: 1.6 }}>
            {T('Every piece reaches the client table without a back-room search.')}
          </div>
        </div>
      </section>

      {/* CASE STUDY 2: HIGH JEWELRY EVENTS */}
      <section style={{ padding: '0 64px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ aspectRatio: '21/9', borderRadius: 3, overflow: 'hidden', marginBottom: 40, border: '1px solid #26262a' }}>
            <img
              src="/images/proof-event.png"
              alt="Private high jewelry event space with an exhibition room, a secured safe room, and a VIP viewing room"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#c99a5b', marginBottom: 8 }}>
            {T('Case study: high jewelry events')}
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 32, lineHeight: 1.2, marginBottom: 36 }}>
            {T('Real-time visibility for every masterpiece.')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: '#1e1e21', border: '1px solid #1e1e21' }}>
            <div style={{ background: '#141416', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={cellLabel}>{T('The challenge: event location accuracy')}</div>
              <p style={{ fontSize: '14.5px', color: '#cabfa8', lineHeight: 1.8, flex: 1 }}>
                {T('High jewelry events run in temporary venues: an exhibition space, a safe room, private viewing salons. Pieces move between rooms constantly as clients request them. The maison tracked that movement with manual logs and radio calls, and locating a single piece could stall a presentation while the team searched.')}
              </p>
            </div>
            <div style={{ background: '#141416', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={cellLabel}>{T('The solution: PT Next intelligence')}</div>
              <p style={{ fontSize: '14.5px', color: '#cabfa8', lineHeight: 1.8, marginBottom: 14 }}>
                {T('PT Next deployed a turnkey event operations platform to provide:')}
              </p>
              <ul style={{ fontSize: '14.5px', color: '#cabfa8', lineHeight: 1.8, paddingLeft: 18, flex: 1 }}>
                <li>{T('Real-time, passive location tracking')}</li>
                <li>{T('Immediate product retrieval for client presentations')}</li>
                <li>{T('Presentation tracking and conversion reporting')}</li>
              </ul>
            </div>
            <div style={{ background: '#151317', padding: '40px 32px', display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 2px 0 #E87722', gap: 18 }}>
              <div>
                <div style={{ ...cellLabelGold, marginBottom: 10 }}>{T('The impact: client experience')}</div>
                <p style={{ fontSize: '14.5px', color: '#d3c8ac', lineHeight: 1.8 }}>
                  {T('Staff located pieces on demand throughout the event. No presentation was delayed by a search.')}
                </p>
              </div>
              <div>
                <div style={{ ...cellLabelGold, marginBottom: 10 }}>{T('The impact: security')}</div>
                <p style={{ fontSize: '14.5px', color: '#d3c8ac', lineHeight: 1.8 }}>
                  {T('Every movement left a timestamped record, replacing handwritten logs and end-of-night reconciliation.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PedigreeStrip locale={locale} borderTop={false} />

      <ContactSection
        locale={locale}
        heading="See what this looks like on your floor."
        subheading="Start with a single event, or a 3-month boutique pilot."
        inputBg="#0e0e0f"
        linkHref={href(locale, 'howitworks')}
        linkLabel="See how a pilot works"
      />

      <Footer locale={locale} />
    </div>
  );
}
