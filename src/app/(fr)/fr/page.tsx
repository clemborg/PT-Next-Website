import { pageMetadata } from '@/lib/seo';
import { HomePage } from '@/page-content/HomePage';

export const metadata = pageMetadata('home', 'fr');
export default function Page() {
  return <HomePage locale="fr" />;
}
