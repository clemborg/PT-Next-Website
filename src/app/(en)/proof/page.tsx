import { pageMetadata } from '@/lib/seo';
import { ProofPage } from '@/page-content/ProofPage';

export const metadata = pageMetadata('proof', 'en');
export default function Page() {
  return <ProofPage locale="en" />;
}
