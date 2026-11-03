'use client';

import SiteLayout from '@/components/SiteLayout';
import ContactView from '@/components/ContactView';

export default function ContactPage() {
  return (
    <SiteLayout
      currentView="contact"
      breadcrumbs={[{ label: 'Contact Us' }]}
      backFallbackHref="/"
      backFallbackLabel="Back to Home"
      showBackBar={true}
    >
      <ContactView
        onNavigate={(view) => {
          if (typeof window !== 'undefined') {
            window.location.href = view === 'home' ? '/' : `/${view}`;
          }
        }}
        onOpenCompliance={() => {}}
      />
    </SiteLayout>
  );
}
