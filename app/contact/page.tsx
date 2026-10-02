'use client';

import ContactView from '@/components/ContactView';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515]">
      <ContactView
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
