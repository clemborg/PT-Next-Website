import type { Metadata } from 'next';
import '../globals.css';
import { FontLinks } from '@/components/FontLinks';
import { Analytics } from '@/components/Analytics';
import { ThemeInit } from '@/components/ThemeInit';

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-180.png', sizes: '180x180' }],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><ThemeInit /></head>
      <body>
        <FontLinks />
        {children}
        <Analytics locale="en" />
      </body>
    </html>
  );
}
