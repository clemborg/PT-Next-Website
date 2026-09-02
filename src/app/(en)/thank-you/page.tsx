import { pageMetadata } from '@/lib/seo';
import { ThankYouPage } from '@/page-content/ThankYouPage';

export const metadata = pageMetadata('thankyou', 'en', { noindex: true });
export default function Page() {
  return <ThankYouPage locale="en" />;
}
