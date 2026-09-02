import type { Metadata } from 'next';
import type { Locale } from './translations';
import { pages, type PageKey, SITE_ORIGIN } from './routes';

/*
 * Per-page metadata: unique title/description per page/locale
 * (SEO_METADATA.md), self-referencing canonical, reciprocal hreflang
 * (en / fr / x-default → EN), shared Open Graph fields, and a shared
 * branded 1200×630 share image (public/og-image.png).
 */
const OG_IMAGE = {
  url: `${SITE_ORIGIN}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'PT Next — Presentation & Conversion Intelligence for High Jewelry',
};

export function pageMetadata(key: PageKey, locale: Locale, opts?: { noindex?: boolean }): Metadata {
  const page = pages[key];
  const canonical = SITE_ORIGIN + page.path[locale];

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: page.title[locale],
    description: page.description[locale],
    alternates: {
      canonical,
      languages: {
        en: SITE_ORIGIN + page.path.en,
        fr: SITE_ORIGIN + page.path.fr,
        'x-default': SITE_ORIGIN + page.path.en,
      },
    },
    openGraph: {
      siteName: 'PT Next',
      type: 'website',
      url: canonical,
      title: page.title[locale],
      description: page.description[locale],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? 'en_US' : 'fr_FR',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title[locale],
      description: page.description[locale],
      images: [OG_IMAGE.url],
    },
    ...(opts?.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
