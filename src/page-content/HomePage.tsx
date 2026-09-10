import { tr, type Locale } from '@/lib/translations';
import { href } from '@/lib/routes';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PedigreeStrip } from '@/components/PedigreeStrip';
import { ContactSection } from '@/components/ContactSection';
import { JsonLd } from '@/components/JsonLd';

/* Ported from PT Next Home.dc.html — September 2026 redesign */

function PilotStep({
  num, title, body, last,
}: { num: string; title: string; body: string; last?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 18, paddingBottom: last ? 0 : 24, position: 'relative' }}>
      {!last && (
        <div style={{ position: 'absolute', left: 17, top: 36, bottom: 0, width: 1, background: 'var(--border-2)' }} />
      )}
      <div
        style={{
          width: 36, height: 36, flex: '0 0 auto', borderRadius: '50%', background: 'var(--bg)',
          border: '1px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 15, color: 'var(--orange)',
          position: 'relative', zIndex: 1,
        }}
      >
        {num}
      </div>
      <div style={{ paddingTop: 5 }}>
        <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 600 }}>{title}</h4>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginTop: 6 }}>{body}</p>
      </div>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const T = tr(locale);

  return (
    <div className="page">
      <JsonLd />
      <Nav locale={locale} active="home" pageKey="home" />

      {/* HERO — always-dark photo band */}
      <section style={{ position: 'relative', minHeight: 660, display: 'flex', alignItems: 'center', padding: '0 64px', overflow: 'hidden' }}>
        <img
          src="/images/home-hero.png"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(14,14,15,.94) 0%,rgba(14,14,15,.78) 42%,rgba(14,14,15,.28) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 680, padding: '80px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <div style={{ width: 30, height: 1, background: '#E87722' }} />
            <span style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: '#c99a5b', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>Argos</span> by PT Next
            </span>
          </div>
          <h1 className="hero-h1" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 72, lineHeight: 1.04, letterSpacing: '.005em', color: '#faf8f5' }}>
            {T('The operating system for high-value jewelry boutiques and events.')}
          </h1>
          <p style={{ fontSize: 18, color: '#c9c4bc', lineHeight: 1.7, maxWidth: 520, marginTop: 30, fontWeight: 300 }}>
            {T('Every piece accounted for. Every presentation measured.')}
          </p>
          <p style={{ fontSize: 14, color: '#a29d94', lineHeight: 1.8, maxWidth: 500, marginTop: 18 }}>
            {T("PT Next brings real-time inventory visibility to the world's leading watch and jewelry houses. Built on the heritage of PAC Team Group, a trusted partner in the luxury industry for over 70 years, we develop solutions that give teams a live, continuous view of every piece in their care.")}
          </p>
          <div style={{ display: 'flex', gap: 22, marginTop: 42, alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:info@ptnext.com?subject=Pilot%20Request"
              className="f-white2"
              style={{ fontSize: 15, color: '#0e0e0f', background: '#E87722', padding: '15px 30px', letterSpacing: '.02em', fontWeight: 500, borderRadius: 1, textDecoration: 'none' }}
            >
              {T('Request a pilot')}
            </a>
            <a
              href={href(locale, 'platform')}
              className="f-orange3"
              style={{ fontSize: 15, color: '#faf8f5', letterSpacing: '.02em', borderBottom: '1px solid #4a4843', paddingBottom: 3, textDecoration: 'none' }}
            >
              {T('See Argos in action')}
            </a>
          </div>
        </div>
      </section>

      {/* PROOF TEASER */}
      <section style={{ padding: '100px 64px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 44 }}>
          {T('Proof')}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 36, lineHeight: 1.3, fontStyle: 'italic', color: 'var(--warm-2)' }}>
              {T('Every product movement logged, automatically.')}
            </p>
            <p style={{ fontSize: 13, color: 'var(--muted-2)', marginTop: 24, letterSpacing: '.04em' }}>
              {T('Real-time location on every piece, plus the presentation and conversion data maisons previously had no way to measure.')}
            </p>
            <a
              href={href(locale, 'proof')}
              className="f-orange3"
              style={{ fontSize: 14, color: 'var(--text)', borderBottom: '1px solid var(--divider)', paddingBottom: 3, display: 'inline-block', marginTop: 36, textDecoration: 'none' }}
            >
              {T('Read the case study →')}
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderLeft: '1px solid var(--border)', justifyContent: 'center' }}>
            <div style={{ padding: '22px 0 22px 32px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: 'var(--orange)', fontWeight: 600, lineHeight: 1.25 }}>
                {T('Chosen by the top maisons for their boutiques and top-tier jewelry events')}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted-2)', letterSpacing: '.06em', marginTop: 6 }}>
                {T('Across the US, trusted for the highest security and discretion requirements')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / PILOT MOTIONS */}
      <section style={{ padding: '56px 64px 90px', background: 'var(--bg)', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 22, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
          {T('Pricing')}
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 40, lineHeight: 1.1 }}>
          {T('Two ways to start.')}
        </h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', marginTop: 16, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          {T('No long-term contract, either way.')}
        </p>
        <div style={{ maxWidth: 1280, margin: '48px auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border-2)', border: '1px solid var(--border-2)' }}>
          <div id="event-pilot" style={{ background: 'var(--bg)', padding: '44px 40px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 12, color: 'var(--gold)', letterSpacing: '.14em', textTransform: 'uppercase' }}>{T('Start with an event')}</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, marginTop: 14 }}>{T('High Jewelry Event Pilot')}</h3>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: 'var(--orange)', fontWeight: 600, marginTop: 12 }}>{T('Under $10,000')}</div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginTop: 16 }}>
              {T('Trial Argos during a single event. Real-time visibility and presentation tracking, without a long-term contract.')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 34, textAlign: 'left', flex: '1 0 auto' }}>
              <PilotStep num="1" title={T('We set up ahead of time')} body={T('Our team gets Argos running before doors open. No change to how pieces are handled or displayed.')} />
              <PilotStep num="2" title={T('You present, as always')} body={T('Argos runs quietly in the background. Your team focuses on the client, not the technology.')} />
              <PilotStep num="3" title={T('We share what we saw')} body={T('A short readout after the event: what was shown, for how long, and what it tells you.')} last />
            </div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border-2)', fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: 'var(--warm)' }}>
              {T('Zero long-term commitment.')}
            </div>
          </div>
          <div id="boutique-pilot" style={{ background: 'var(--bg)', padding: '44px 40px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 12, color: 'var(--gold)', letterSpacing: '.14em', textTransform: 'uppercase' }}>{T('Start with a boutique')}</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, marginTop: 14 }}>{T('3-Month Boutique Pilot')}</h3>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: 'var(--orange)', fontWeight: 600, marginTop: 12 }}>{T('Under $15,000')}</div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginTop: 16 }}>
              {T('A 90-day pilot in one boutique. Validate staff time savings and ROI before scaling.')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 34, textAlign: 'left', flex: '1 0 auto' }}>
              <PilotStep num="1" title={T('We tag your inventory')} body={T('Done on-site, outside business hours. No disruption to daily service.')} />
              <PilotStep num="2" title={T('Your team keeps working')} body={T('Argos runs alongside existing routines. Nothing new to learn on day one.')} />
              <PilotStep num="3" title={T('We check in along the way')} body={T('Brief progress check-ins, not a formal review process.')} />
              <PilotStep num="4" title={T('We review results together')} body={T('At 90 days, a clear picture of time saved and what scaling would look like.')} last />
            </div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border-2)', fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: 'var(--warm)' }}>
              {T('A 90-day pilot. No long-term contract.')}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section style={{ padding: '70px 64px', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 22, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 36, textAlign: 'center' }}>
          {T('Trusted partners')}
        </div>
        <div className="partner-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 44, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img className="logo-dark" src="/images/accenture-color-dark.png" alt="Accenture" style={{ height: 34, width: 'auto' }} />
            <img className="logo-light" src="/images/accenture-color.png" alt="Accenture" style={{ height: 34, width: 'auto' }} />
          </span>
          <span className="partner-dot" style={{ width: 4, height: 4, background: 'var(--border-2)', borderRadius: '50%' }} />
          <img src="/images/lowry-logo.svg" alt="Lowry Solutions" style={{ height: 62, width: 'auto', display: 'block' }} />
          <span className="partner-dot" style={{ width: 4, height: 4, background: 'var(--border-2)', borderRadius: '50%' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img className="logo-dark" src="/images/keonn-color-dark.png" alt="Keonn Technologies" style={{ height: 34, width: 'auto' }} />
            <img className="logo-light" src="/images/keonn-color.png" alt="Keonn Technologies" style={{ height: 34, width: 'auto' }} />
          </span>
          <span className="partner-dot" style={{ width: 4, height: 4, background: 'var(--border-2)', borderRadius: '50%' }} />
          <img src="/images/asreader-color.png" alt="ASReader" style={{ height: 28, width: 'auto', display: 'block' }} />
        </div>
      </section>

      <PedigreeStrip locale={locale} borderTop={false} />

      <ContactSection
        locale={locale}
        heading="Ready when you are."
        subheading="Tell us which path fits your next event or boutique."
        inputBg="var(--bg-alt)"
        linkHref={href(locale, 'platform')}
        linkLabel="Explore the platform"
      />

      <Footer locale={locale} />
    </div>
  );
}
