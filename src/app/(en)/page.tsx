import { pageMetadata } from '@/lib/seo';
import { HomePage } from '@/page-content/HomePage';

export const metadata = pageMetadata('home', 'en');
export default function Page() {
  return <HomePage locale="en" />;
}
