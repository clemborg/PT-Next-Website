import { pageMetadata } from '@/lib/seo';
import { FaqPage } from '@/page-content/FaqPage';

export const metadata = pageMetadata('faq', 'en');
export default function Page() {
  return <FaqPage locale="en" />;
}
