import { pageMetadata } from '@/lib/seo';
import { FaqPage } from '@/page-content/FaqPage';

export const metadata = pageMetadata('faq', 'fr');
export default function Page() {
  return <FaqPage locale="fr" />;
}
