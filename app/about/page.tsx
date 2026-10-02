'use client';

import AboutView from '@/components/AboutView';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515]">
      <AboutView
        onNavigate={(view) => {
          if (typeof window !== 'undefined') {
            window.location.href = view === 'home' ? '/' : `/${view}`;
          }
        }}
        onOpenCompliance={() => {}}
      />
    </div>
  );
}
