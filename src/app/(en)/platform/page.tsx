import { pageMetadata } from '@/lib/seo';
import { PlatformPage } from '@/page-content/PlatformPage';

export const metadata = pageMetadata('platform', 'en');
export default function Page() {
  return <PlatformPage locale="en" />;
}
