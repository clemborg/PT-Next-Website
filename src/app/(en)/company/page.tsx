import { pageMetadata } from '@/lib/seo';
import { CompanyPage } from '@/page-content/CompanyPage';

export const metadata = pageMetadata('company', 'en');
export default function Page() {
  return <CompanyPage locale="en" />;
}
