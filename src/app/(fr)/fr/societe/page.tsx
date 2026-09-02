import { pageMetadata } from '@/lib/seo';
import { CompanyPage } from '@/page-content/CompanyPage';

export const metadata = pageMetadata('company', 'fr');
export default function Page() {
  return <CompanyPage locale="fr" />;
}
