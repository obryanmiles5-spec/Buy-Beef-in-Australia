'use client';

import SiteLayout from '@/components/SiteLayout';
import BlogSection from '@/components/BlogSection';

export default function BlogPage() {
  return (
    <SiteLayout
      currentView="blog"
      breadcrumbs={[{ label: 'Butcher Guides & Recipes' }]}
      backFallbackHref="/"
      backFallbackLabel="Back to Home"
      showBackBar={true}
    >
      <div className="py-6">
        <BlogSection
          onNavigate={(view) => {
            if (typeof window !== 'undefined') {
              window.location.href = view === 'home' ? '/' : `/${view}`;
            }
          }}
        />
      </div>
    </SiteLayout>
  );
}
