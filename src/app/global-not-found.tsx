import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { ThemeInit } from '@/components/ThemeInit';
import { NotFoundPage } from '@/page-content/NotFoundPage';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap';

/*
 * Global 404 (unmatched URLs across both locales). Static hosting serves a
 * single 404 document, so it renders in English — the x-default language —
 * exactly like PT Next 404.dc.html.
 */

export const metadata: Metadata = {
  title: 'Page not found | PT Next',
  robots: { index: false },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180' }],
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <head>
        <ThemeInit />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONTS_URL} rel="stylesheet" />
      </head>
      <body>
        <NotFoundPage locale="en" />
        <Analytics locale="en" />
      </body>
    </html>
  );
}
