import { pageMetadata } from '@/lib/seo';
import { DeploymentsPage } from '@/page-content/DeploymentsPage';

export const metadata = pageMetadata('deployments', 'en');
export default function Page() {
  return <DeploymentsPage locale="en" />;
}
