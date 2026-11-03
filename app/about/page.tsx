'use client';

import SiteLayout from '@/components/SiteLayout';
import AboutView from '@/components/AboutView';

export default function AboutPage() {
  return (
    <SiteLayout
      currentView="about"
      breadcrumbs={[{ label: 'About Us' }]}
      backFallbackHref="/"
      backFallbackLabel="Back to Home"
      showBackBar={true}
    >
      <AboutView
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
