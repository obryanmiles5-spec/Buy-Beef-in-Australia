'use client';

import BlogSection from '@/components/BlogSection';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] py-12">
      <BlogSection onNavigate={(view) => {
        if (typeof window !== 'undefined') {
          window.location.href = view === 'home' ? '/' : `/${view}`;
        }
      }} />
    </div>
  );
}
