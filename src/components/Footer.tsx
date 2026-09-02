import { tr, type Locale } from '@/lib/translations';
import { href } from '@/lib/routes';

/* Ported from PT Next Footer.dc.html */
export function Footer({ locale }: { locale: Locale }) {
  const T = tr(locale);
  return (
    <footer
      style={{
        padding: '32px 64px', background: '#141416', borderTop: '1px solid #1e1e21',
        display: 'flex', flexDirection: 'column', gap: 18,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a
          href={href(locale, 'home')}
          className="f-orange3"
          style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 20, letterSpacing: '.06em',
            color: '#faf8f5', textDecoration: 'none',
          }}
        >
          PT&nbsp;Next
        </a>
        <div style={{ fontSize: 12, color: '#6b665e', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>
          {T('© 2026 PT Next, a Pac Team Group company')}
        </div>
      </div>
      <div
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
          gap: 16, paddingTop: 18, borderTop: '1px solid #1e1e21',
        }}
      >
        <div style={{ fontSize: 12, color: '#6b665e', letterSpacing: '.02em' }}>
          205 Robin Road, Ste 200, Paramus, NJ 07652
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a href="tel:+12015995000" className="f-orange2" style={{ fontSize: 12, color: '#6b665e', letterSpacing: '.02em', textDecoration: 'none' }}>
            +1 201 599 5000
          </a>
          <a href="mailto:info@ptnext.com" className="f-orange2" style={{ fontSize: 12, color: '#6b665e', letterSpacing: '.02em', textDecoration: 'none' }}>
            info@ptnext.com
          </a>
          <a
            href="https://www.linkedin.com/company/pt-next"
            target="_blank"
            rel="noopener"
            className="f-orange2"
            style={{ fontSize: 12, color: '#6b665e', letterSpacing: '.02em', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
