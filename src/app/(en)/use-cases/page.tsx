import { pageMetadata } from '@/lib/seo';
import { Redirect } from '@/components/Redirect';
import { href } from '@/lib/routes';

export const metadata = pageMetadata('usecases', 'en', { noindex: true });
export default function Page() {
  return <Redirect to={href('en', 'deployments')} />;
}
