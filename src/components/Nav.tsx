import { tr, type Locale } from '@/lib/translations';
import { href, pages, type PageKey } from '@/lib/routes';
import { ThemeToggle } from '@/components/ThemeToggle';

/*
 * Sticky header nav — September 2026 redesign.
 * Five items + FAQ; deployments page labeled "Use Cases".
 */

const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: 'platform', label: 'Platform' },
  { key: 'deployments', label: 'Use Cases' },
  { key: 'proof', label: 'Proof' },
  { key: 'company', label: 'Company' },
  { key: 'faq', label: 'FAQ' },
];

const langBase: React.CSSProperties = {
  fontFamily: 'Inter,sans-serif',
  fontSize: '11.5px',
  letterSpacing: '.08em',
  padding: '4px 2px',
  textDecoration: 'none',
};

export function Nav({ locale, active, pageKey }: { locale: Locale; active: PageKey | ''; pageKey: PageKey | null }) {
  const T = tr(locale);
  const enHref = pageKey ? pages[pageKey].path.en : pages.home.path.en;
  const frHref = pageKey ? pages[pageKey].path.fr : pages.home.path.fr;

  return (
    <>
      <input
        type="checkbox"
        id="navtoggle"
        className="nav-toggle-input"
        aria-label="Toggle menu"
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1, margin: 0, pointerEvents: 'none' }}
      />
      <header
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 40px', background: 'var(--bg)', opacity: 0.97, backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 20, gap: 24,
        }}
      >
        <a
          href={href(locale, 'home')}
          className="f-orange3"
          aria-label="PT Next home"
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}
        >
          <img src="/images/ptnext-logo-dark.png" alt="PT Next" className="logo-dark" style={{ height: 22, display: 'block' }} />
          <img src="/images/ptnext-logo-light.png" alt="PT Next" className="logo-light" style={{ height: 22, display: 'block' }} />
        </a>
        <nav
          className="site-nav"
          style={{ display: 'flex', gap: 32, fontSize: '12.5px', color: 'var(--nav-muted)', letterSpacing: '.02em', flexShrink: 0 }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={href(locale, item.key)}
              className="f-navlink"
              style={{
                whiteSpace: 'nowrap', textDecoration: 'none',
                color: item.key === active ? 'var(--text)' : 'var(--nav-muted)',
              }}
            >
              {T(item.label)}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
          <ThemeToggle />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <a
              href={enHref}
              className="f-orange2"
              lang="en"
              hrefLang="en"
              aria-current={locale === 'en' ? 'true' : undefined}
              style={{ ...langBase, ...(locale === 'en' ? { color: 'var(--text)', fontWeight: 600 } : { color: 'var(--nav-muted)' }) }}
            >
              EN
            </a>
            <span style={{ fontSize: 11, color: 'var(--divider)' }}>|</span>
            <a
              href={frHref}
              className="f-orange2"
              lang="fr"
              hrefLang="fr"
              aria-current={locale === 'fr' ? 'true' : undefined}
              style={{ ...langBase, ...(locale === 'fr' ? { color: 'var(--text)', fontWeight: 600 } : { color: 'var(--nav-muted)' }) }}
            >
              FR
            </a>
          </div>
        </div>
        <label htmlFor="navtoggle" className="nav-toggle-label" aria-label="Open menu">☰</label>
        <a
          href="mailto:info@ptnext.com?subject=Pilot%20Request"
          className="f-white2 nav-cta"
          style={{
            fontSize: '12.5px', color: '#0e0e0f', background: 'var(--orange)', padding: '10px 18px',
            letterSpacing: '.02em', fontWeight: 500, borderRadius: 1, flexShrink: 0,
            whiteSpace: 'nowrap', textDecoration: 'none',
          }}
        >
          {T('Request a pilot')}
        </a>
      </header>
      <nav
        className="mobile-drawer"
        style={{
          display: 'none', flexDirection: 'column', position: 'fixed', top: 73, left: 0, right: 0,
          background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', zIndex: 19, padding: '8px 28px 20px',
        }}
      >
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.key}
            href={href(locale, item.key)}
            style={{
              padding: '14px 0', textDecoration: 'none', fontSize: 15,
              color: item.key === active ? 'var(--text)' : 'var(--nav-muted)',
              ...(i < NAV_ITEMS.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
            }}
          >
            {T(item.label)}
          </a>
        ))}
        <a
          href="mailto:info@ptnext.com?subject=Pilot%20Request"
          className="f-white2"
          style={{
            marginTop: 18, textAlign: 'center', fontSize: 14, color: '#0e0e0f',
            background: 'var(--orange)', padding: '13px 18px', letterSpacing: '.02em',
            fontWeight: 500, borderRadius: 1, textDecoration: 'none',
          }}
        >
          {T('Request a pilot')}
        </a>
      </nav>
    </>
  );
}
