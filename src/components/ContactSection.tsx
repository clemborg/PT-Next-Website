import { tr, type Locale } from '@/lib/translations';
import { href } from '@/lib/routes';
import { ContactForm } from './ContactForm';

/*
 * Server wrapper: resolves all locale strings at build time and passes them
 * to the client ContactForm, so the translation dictionary never ships to
 * the browser.
 */
export function ContactSection({
  locale,
  heading,
  headingSize,
  subheading,
  inputBg,
  linkHref,
  linkLabel,
}: {
  locale: Locale;
  heading: string;       // exact English copy string (translated here)
  headingSize?: number;
  subheading: string;    // exact English copy string
  inputBg: string;
  linkHref: string;      // already locale-resolved path
  linkLabel: string;     // exact English copy string
}) {
  const T = tr(locale);
  return (
    <ContactForm
      heading={T(heading)}
      headingSize={headingSize}
      subheading={T(subheading)}
      inputBg={inputBg}
      linkHref={linkHref}
      linkLabel={T(linkLabel)}
      thankYouHref={href(locale, 'thankyou')}
      labels={{
        name: T('Name'),
        email: T('Email'),
        message: T('Tell us about your boutique or event'),
        submit: T('Request a pilot'),
        sending: T('Sending…'),
        error: T('Something went wrong. Please email us directly at info@ptnext.com.'),
      }}
    />
  );
}
