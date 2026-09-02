import { pageMetadata } from '@/lib/seo';
import { Redirect } from '@/components/Redirect';
import { href } from '@/lib/routes';

export const metadata = pageMetadata('howitworks', 'fr', { noindex: true });
export default function Page() {
  return <Redirect to={href('fr', 'home', 'event-pilot')} />;
}
