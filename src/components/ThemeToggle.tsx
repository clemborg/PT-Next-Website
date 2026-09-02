'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

function readTheme(): Theme {
  try {
    return localStorage.getItem('ptnext-theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
  try {
    localStorage.setItem('ptnext-theme', theme);
  } catch {
    /* ignore */
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
  };

  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="f-orange2"
      style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: 4,
        display: 'flex', alignItems: 'center', color: 'var(--nav-muted)',
      }}
    >
      {theme === 'light' ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.6M12 18.9v2.6M4.4 4.4l1.85 1.85M17.75 17.75l1.85 1.85M2.5 12h2.6M18.9 12h2.6M4.4 19.6l1.85-1.85M17.75 6.25l1.85-1.85" />
        </svg>
      )}
    </button>
  );
}
