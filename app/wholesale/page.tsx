'use client';

import SiteLayout from '@/components/SiteLayout';
import WholesaleView from '@/components/WholesaleView';

export default function WholesalePage() {
  return (
    <SiteLayout
      currentView="wholesale"
      breadcrumbs={[{ label: 'Commercial Wholesale' }]}
      backFallbackHref="/"
      backFallbackLabel="Back to Home"
      showBackBar={true}
    >
      <WholesaleView onOpenCompliance={() => {}} />
    </SiteLayout>
  );
}
