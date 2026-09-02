import { tr, type Locale } from '@/lib/translations';

/* "Backed by Pac Team Group · 75+ years in luxury" strip (all pages) */
export function PedigreeStrip({
  locale,
  altBackground = false,
  borderTop = true,
  borderBottom = true,
}: {
  locale: Locale;
  altBackground?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
}) {
  const T = tr(locale);
  return (
    <div
      className="pedigree-strip"
      style={{
        padding: '20px 64px',
        background: altBackground ? 'var(--bg-alt)' : 'var(--bg)',
        ...(borderTop ? { borderTop: '1px solid var(--border)' } : {}),
        ...(borderBottom ? { borderBottom: '1px solid var(--border)' } : {}),
        display: 'flex', justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 14, maxWidth: 600 }}>
        <span style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>
          {T('Backed by Pac Team Group')}
        </span>
        <span style={{ width: 4, height: 4, background: 'var(--orange)', borderRadius: '50%' }} />
        <span style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>
          {T('75+ years in luxury')}
        </span>
      </div>
    </div>
  );
}
