import { pageMetadata } from '@/lib/seo';
import { Redirect } from '@/components/Redirect';
import { href } from '@/lib/routes';

export const metadata = pageMetadata('howitworks', 'en', { noindex: true });
export default function Page() {
  return <Redirect to={href('en', 'home', 'event-pilot')} />;
}
