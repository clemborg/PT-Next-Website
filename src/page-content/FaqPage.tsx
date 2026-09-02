import { tr, type Locale } from '@/lib/translations';
import { href } from '@/lib/routes';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PedigreeStrip } from '@/components/PedigreeStrip';
import { ContactSection } from '@/components/ContactSection';

/* Ported from PT Next FAQ.dc.html — September 2026 */

function FaqSummary({ title }: { title: string }) {
  return (
    <summary style={{ padding: '32px 0', display: 'flex', gap: 14, alignItems: 'baseline' }}>
      <span style={{ width: 6, height: 6, background: 'var(--orange)', flex: '0 0 auto', marginBottom: 2 }} />
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 24, lineHeight: 1.4, flex: 1, color: 'var(--warm)' }}>{title}</h2>
      <span className="faq-plus" style={{ fontSize: 22, color: 'var(--muted-2)', flex: '0 0 auto', lineHeight: 1, fontWeight: 300 }}>+</span>
    </summary>
  );
}

export function FaqPage({ locale }: { locale: Locale }) {
  const T = tr(locale);

  const roleCards = [
    ['01', 'Sales associate · runner', 'Find any piece instantly.', 'Argos already knows where every piece is, even mid-presentation.'],
    ['02', 'Boutique manager', 'See how the boutique is really performing.', 'Sell-through, presentation activity, and shrinkage in one view, updated in real time instead of pieced together at count time.'],
    ['03', 'HQ · data team', 'One view of every boutique.', 'Compare presentation and conversion across every boutique, side by side.'],
    ['04', 'IT · Security', 'Deploy without adding risk.', 'Runs alongside your existing network and access controls.'],
  ] as const;

  return (
    <div className="page">
      <Nav locale={locale} active="faq" pageKey="faq" />

      <section style={{ padding: '110px 64px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>{T('FAQ')}</div>
        <div style={{ width: 42, height: 1, background: 'var(--orange)', marginBottom: 28 }} />
        <h1 className="hero-h1" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 52, lineHeight: 1.1, maxWidth: 720 }}>
          {T('Everything you need to know.')}
        </h1>
        <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginTop: 24, maxWidth: 600, fontWeight: 300 }}>
          {T('What Argos runs on, connects to, and how it handles your data.')}
        </p>
      </section>

      <section style={{ padding: '0 64px 90px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <details className="faq-item" style={{ borderTop: '1px solid var(--border)' }}>
            <FaqSummary title={T('Argos Overview')} />
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, paddingBottom: 32, marginLeft: 20, maxWidth: 640 }}>
              {T('Argos is the RFID-based inventory and presentation platform behind PT Next. RFID readers automatically track tagged pieces as they move through cases, back-of-house areas, the vault, VIP rooms, and presentation zones. This gives staff real-time visibility into where every item is located while providing HQ with measurable data on how and when pieces are presented to clients.')}
            </p>
          </details>

          <details className="faq-item" style={{ borderTop: '1px solid var(--border)' }}>
            <FaqSummary title={T('What hardware does it require?')} />
            <div style={{ paddingBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, marginLeft: 20, maxWidth: 640 }}>
                {T('Passive RFID tags and readers sized to the case and the room, installed without altering the space clients see.')}
              </p>
              <div style={{ marginTop: 32, marginLeft: 20, background: 'var(--bg-alt)', border: '1px solid var(--border-2)', padding: '40px 44px 36px' }}>
                <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 16 }}>{T('What setup requires')}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 28, lineHeight: 1.2 }}>{T('Minimal change to your existing process.')}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginTop: 12, maxWidth: 520 }}>
                  {T('Replace your existing label printer with an RFID-enabled printer and your current tags with RFID tags. From there, tag your pieces just as you do today. The readers already installed throughout the boutique handle the rest.')}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 44 }} data-grid-mobile="keep">
                  {[
                    ['Printer', 'Prints each item\'s tag on the spot.'],
                    ['Tag', 'Attached once, discreetly, to the piece.'],
                    ['Readers', 'Already in place at your capture points.'],
                  ].map(([label, desc]) => (
                    <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{T(label)}</div>
                      <p style={{ fontSize: 12, color: 'var(--muted-2)', lineHeight: 1.6, marginTop: 6 }}>{T(desc)}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: 32 }}>
                  <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{T('Argos Dashboard')}</div>
                  <p style={{ fontSize: 12, color: 'var(--muted-2)', lineHeight: 1.6, marginTop: 6, maxWidth: 420 }}>
                    {T('Available online. Location, alerts, and reports from any browser, anytime.')}
                  </p>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item" style={{ borderTop: '1px solid var(--border)' }}>
            <FaqSummary title={T('What infrastructure is required?')} />
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, paddingBottom: 32, marginLeft: 20, maxWidth: 640 }}>
              {T("RFID readers communicate using the boutique's existing network and Wi-Fi infrastructure. No dedicated network or additional cabling is typically required.")}
            </p>
          </details>

          <details className="faq-item" style={{ borderTop: '1px solid var(--border)' }}>
            <FaqSummary title={T('Does it work with our POS and ERP systems?')} />
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, paddingBottom: 32, marginLeft: 20, maxWidth: 640 }}>
              {T('Built to work alongside existing point-of-sale and inventory systems rather than replace them.')}
            </p>
          </details>

          <details className="faq-item" style={{ borderTop: '1px solid var(--border)' }}>
            <FaqSummary title={T('What integrations are available?')} />
            <div style={{ paddingBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, marginLeft: 20, maxWidth: 640 }}>
                {T("PT Next builds integrations directly with clients' IT and software teams. Recent examples include:")}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 40, rowGap: 16, marginTop: 22, marginLeft: 20 }}>
                {[
                  'ERP and catalog data integration, allowing Argos to associate RFID-tracked pieces with your existing product and inventory data.',
                  'Custom RFID tag printing that fits your existing printing process.',
                  'Automated discrepancy reporting between RFID counts and ERP records.',
                  'API access to real-time and historical RFID read data.',
                ].map((body) => (
                  <div key={body} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 6, height: 6, background: 'var(--orange)', flex: '0 0 auto', marginTop: 8 }} />
                    <p style={{ fontSize: 14, color: 'var(--warm)', lineHeight: 1.7 }}>{T(body)}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>

          <details className="faq-item" style={{ borderTop: '1px solid var(--border)' }}>
            <FaqSummary title={T('How does the audit trail work?')} />
            <div style={{ paddingBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, marginLeft: 20, maxWidth: 640 }}>
                {T('Each tag read creates a timestamped record of what moved, when, and where, the same audit trail flagship stores already keep by hand, now generated automatically.')}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border-2)', border: '1px solid var(--border-2)', marginTop: 26, marginLeft: 20 }}>
                <div style={{ background: 'var(--bg-alt)', padding: '26px 24px' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600 }}>{T('Timestamped movement log')}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, lineHeight: 1.7 }}>{T('Every read is logged automatically, replacing handwritten counts and end-of-night reconciliation.')}</p>
                </div>
                <div style={{ background: 'var(--bg-alt)', padding: '26px 24px' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600 }}>{T('Your data, your systems')}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, lineHeight: 1.7 }}>{T('Inventory and presentation data stays with your team. Nothing is shared or pooled across accounts.')}</p>
                </div>
              </div>
            </div>
          </details>

          <details className="faq-item" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <FaqSummary title={T('Who can access the data?')} />
            <div style={{ paddingBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginTop: 0, marginLeft: 20, maxWidth: 640 }}>
                {T('Access is role-based. Boutique staff, managers, and HQ each see only what\'s relevant to their role, no shared logins, no pooled views.')}
              </p>
            </div>
          </details>
        </div>
      </section>

      <section style={{ padding: '0 64px 90px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 28 }}>{T('Benefits by role')}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }} data-grid-mobile="2">
            {roleCards.map(([num, role, title, body]) => (
              <div key={num} style={{ background: 'var(--bg-alt)', padding: '30px 26px', borderTop: '2px solid var(--orange)' }}>
                <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 12 }}>
                  <span style={{ color: 'var(--orange)' }}>{num}</span> · {T(role)}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, lineHeight: 1.2 }}>{T(title)}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 10, lineHeight: 1.7 }}>{T(body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PedigreeStrip locale={locale} altBackground />

      <ContactSection
        locale={locale}
        heading="Have a question we didn't cover?"
        subheading="Talk to us about your team's specific requirements."
        inputBg="var(--bg-alt)"
        linkHref={href(locale, 'platform')}
        linkLabel="Explore the platform"
      />

      <Footer locale={locale} />
    </div>
  );
}
