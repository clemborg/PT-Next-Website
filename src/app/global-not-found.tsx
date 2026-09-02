import type { Metadata } from 'next';
import './globals.css';
import { FontLinks } from '@/components/FontLinks';
import { Analytics } from '@/components/Analytics';
import { NotFoundPage } from '@/page-content/NotFoundPage';

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
      <body>
        <FontLinks />
        <NotFoundPage locale="en" />
        <Analytics locale="en" />
      </body>
    </html>
  );
}
