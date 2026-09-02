import { pageMetadata } from '@/lib/seo';
import { ProofPage } from '@/page-content/ProofPage';

export const metadata = pageMetadata('proof', 'fr');
export default function Page() {
  return <ProofPage locale="fr" />;
}
