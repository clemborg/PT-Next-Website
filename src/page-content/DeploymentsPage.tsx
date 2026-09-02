import { tr, type Locale } from '@/lib/translations';
import { href } from '@/lib/routes';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PedigreeStrip } from '@/components/PedigreeStrip';
import { ContactSection } from '@/components/ContactSection';

/* Ported from PT Next Deployments.dc.html — nav label "Use Cases" */

export function DeploymentsPage({ locale }: { locale: Locale }) {
  const T = tr(locale);
  const imgBox: React.CSSProperties = {
    aspectRatio: '1536/1024', borderRadius: 8, overflow: 'hidden',
    boxShadow: '0 30px 70px -25px rgba(0,0,0,.4)', border: '1px solid var(--border-2)',
  };
  const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' };
  const ctaStyle: React.CSSProperties = {
    fontSize: 13, color: 'var(--orange)', letterSpacing: '.03em', marginTop: 26, textDecoration: 'none', display: 'inline-block',
  };

  return (
    <div className="page">
      <Nav locale={locale} active="deployments" pageKey="deployments" />

      <section style={{ padding: '110px 64px 90px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>{T('Use Cases')}</div>
        <div style={{ width: 42, height: 1, background: 'var(--orange)', marginBottom: 28 }} />
        <h1 className="hero-h1" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 56, lineHeight: 1.1, maxWidth: 780 }}>
          {T('One platform, wherever a piece needs to be tracked.')}
        </h1>
      </section>

      <section style={{ padding: '70px 64px', background: 'var(--bg-alt)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', borderTop: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{T('Boutiques')}</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 38, lineHeight: 1.12 }}>{T('The everyday operation, made certain.')}</h2>
          <p style={{ fontSize: 15, color: 'var(--warm)', lineHeight: 1.8, marginTop: 20, maxWidth: 440 }}>
            {T('Permanent RFID coverage across storage, display, and back of house. Counts, presentations, and conversion, tracked continuously as part of daily operations.')}
          </p>
          <a href={href(locale, 'home', 'boutique-pilot')} className="f-orange2" style={ctaStyle}>
            {T('The 3-Month Boutique Pilot →')}
          </a>
        </div>
        <div style={imgBox}>
          <img src="/images/deployments-boutique.png" alt="Boutique interior with gold-trimmed glass display cases showing jewelry pieces on velvet stands" style={imgStyle} />
        </div>
      </section>

      <section style={{ padding: '70px 64px', background: 'var(--bg)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div className="mobile-image-last" style={{ ...imgBox, order: 1 }}>
          <img src="/images/deployments-event.png" alt="Two people seated at an intimate table during a private high jewelry event viewing" style={imgStyle} />
        </div>
        <div className="mobile-text-first" style={{ order: 2 }}>
          <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{T('High jewelry events')}</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 38, lineHeight: 1.12 }}>{T('Temporary coverage, full visibility.')}</h2>
          <p style={{ fontSize: 15, color: 'var(--warm)', lineHeight: 1.8, marginTop: 20, maxWidth: 440 }}>
            {T('Rapid deployment for a single, time-contained event. Real-time location and presentation tracking on the pieces that matter most, with the white-glove event capability Pac Team Group already brings to these rooms.')}
          </p>
          <a href={href(locale, 'home', 'event-pilot')} className="f-orange2" style={ctaStyle}>
            {T('The High Jewelry Event Pilot →')}
          </a>
        </div>
      </section>

      <section style={{ padding: '70px 64px', background: 'var(--bg-alt)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{T('Repair centers')}</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 38, lineHeight: 1.12 }}>{T('Custody, never in question.')}</h2>
          <p style={{ fontSize: 15, color: 'var(--warm)', lineHeight: 1.8, marginTop: 20, maxWidth: 440 }}>
            {T('A piece in service is a piece at risk of being unaccounted for. Argos tracks chain of custody from intake to return, across every stage of repair and restoration.')}
          </p>
          <a href="mailto:info@ptnext.com?subject=Repair%20Center%20Coverage" className="f-orange2" style={ctaStyle}>
            {T('Talk to us about repair center coverage →')}
          </a>
        </div>
        <div style={imgBox}>
          <img src="/images/deployments-repair.png" alt="Jewelry repair technicians working at wooden workbenches with precision tools" style={imgStyle} />
        </div>
      </section>

      <PedigreeStrip locale={locale} borderTop={false} />

      <ContactSection
        locale={locale}
        heading="Find the right starting point for your operation."
        subheading="Start with a single event, or a 3-month boutique pilot."
        inputBg="var(--bg-alt)"
        linkHref={href(locale, 'home', 'event-pilot')}
        linkLabel="See how a pilot works"
      />

      <Footer locale={locale} />
    </div>
  );
}
