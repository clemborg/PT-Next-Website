import type { Locale } from './translations';

/*
 * Canonical page registry. French slugs follow SEO_METADATA.md
 * (proposed slugs, confirmed against the handoff sitemap.xml).
 */

export type PageKey =
  | 'home'
  | 'platform'
  | 'deployments'
  | 'proof'
  | 'company'
  | 'faq'
  | 'thankyou'
  | 'howitworks'
  | 'usecases';

export const SITE_ORIGIN = 'https://ptnext.com';

interface PageDef {
  path: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const pages: Record<PageKey, PageDef> = {
  home: {
    path: { en: '/', fr: '/fr/' },
    title: {
      en: 'PT Next | Presentation and Conversion Intelligence for High Jewelry',
      fr: "PT Next | L'intelligence de présentation pour la haute joaillerie",
    },
    description: {
      en: 'Argos gives high jewelry maisons real-time certainty over thousands of pieces, and turns every client presentation into measurable data.',
      fr: 'Argos offre aux maisons de haute joaillerie une certitude en temps réel sur des milliers de pièces, et transforme chaque présentation client en données mesurables.',
    },
  },
  platform: {
    path: { en: '/platform/', fr: '/fr/plateforme/' },
    title: { en: 'Platform | PT Next', fr: 'Plateforme | PT Next' },
    description: {
      en: 'Argos: one continuous view of the boutique floor. Passive tracking, runner optimization, operational integrity, and conversion intelligence in a single platform.',
      fr: "Argos : une vue continue de la boutique. Suivi passif, optimisation des runners, intégrité opérationnelle et intelligence de conversion réunis dans une seule plateforme.",
    },
  },
  deployments: {
    path: { en: '/deployments/', fr: '/fr/deploiements/' },
    title: { en: 'Use Cases | PT Next', fr: "Cas d'usage | PT Next" },
    description: {
      en: 'One platform, wherever a piece needs to be tracked. Boutiques, high jewelry events, and repair centers — permanent or event-only coverage, fitted to the room.',
      fr: 'Une seule plateforme, partout où une pièce doit être suivie. Boutiques, événements de haute joaillerie et centres de réparation — couverture permanente ou événementielle.',
    },
  },
  proof: {
    path: { en: '/proof/', fr: '/fr/preuves/' },
    title: { en: 'Proof | PT Next', fr: 'Preuves | PT Next' },
    description: {
      en: "Trusted inside the world's leading jewelry maisons. Case studies from a flagship boutique and a global high jewelry events program — same platform on both floors.",
      fr: "Adopté par les plus grandes maisons de joaillerie. Études de cas d'une boutique phare et d'un programme international d'événements de haute joaillerie.",
    },
  },
  company: {
    path: { en: '/company/', fr: '/fr/societe/' },
    title: { en: 'Company | PT Next', fr: 'Société | PT Next' },
    description: {
      en: 'PT Next is the software company behind Argos, built inside Pac Team Group. 75+ years of luxury display, packaging, and event expertise, now in software.',
      fr: "PT Next est la société de logiciels derrière Argos, née au sein du groupe Pac Team. Plus de 75 ans d'expertise du luxe — display, packaging, événements — désormais en logiciel.",
    },
  },
  faq: {
    path: { en: '/faq/', fr: '/fr/faq/' },
    title: { en: 'FAQ | PT Next', fr: 'FAQ | PT Next' },
    description: {
      en: 'Technical details behind Argos: hardware, network, integrations, data, and access, for IT and ops teams evaluating a pilot.',
      fr: "Détails techniques sur Argos : matériel, réseau, intégrations, données et accès, pour les équipes informatiques et opérationnelles qui évaluent un pilote.",
    },
  },
  thankyou: {
    path: { en: '/thank-you/', fr: '/fr/merci/' },
    title: { en: 'Thank You | PT Next', fr: 'Merci | PT Next' },
    description: {
      en: "Thank you. Someone from PT Next will reach out within one business day.",
      fr: 'Merci. Un membre de PT Next vous contactera sous un jour ouvré.',
    },
  },
  /* Legacy URLs — redirect targets; excluded from sitemap */
  howitworks: {
    path: { en: '/how-it-works/', fr: '/fr/fonctionnement/' },
    title: { en: 'How It Works | PT Next', fr: 'Fonctionnement | PT Next' },
    description: {
      en: 'Two ways to start, both simple: a single high jewelry event or a 3-month boutique pilot.',
      fr: "Deux façons de commencer, toutes deux simples : un événement de haute joaillerie unique ou un pilote boutique de 3 mois.",
    },
  },
  usecases: {
    path: { en: '/use-cases/', fr: '/fr/cas-dusage/' },
    title: { en: 'Use Cases | PT Next', fr: "Cas d'usage | PT Next" },
    description: {
      en: 'One platform, wherever a piece needs to be tracked.',
      fr: 'Une seule plateforme, partout où une pièce doit être suivie.',
    },
  },
};

/** Locale-aware href for internal links, e.g. href('fr', 'platform') → /fr/plateforme */
export function href(locale: Locale, key: PageKey, hash?: string): string {
  return pages[key].path[locale] + (hash ? `#${hash}` : '');
}

/** Pages included in sitemap.xml (excludes thank-you and legacy redirects). */
export const SITEMAP_KEYS: PageKey[] = ['home', 'platform', 'deployments', 'proof', 'company', 'faq'];
