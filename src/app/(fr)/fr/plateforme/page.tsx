import { pageMetadata } from '@/lib/seo';
import { PlatformPage } from '@/page-content/PlatformPage';

export const metadata = pageMetadata('platform', 'fr');
export default function Page() {
  return <PlatformPage locale="fr" />;
}
