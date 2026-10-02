'use client';

import ShopCatalog from '@/components/ShopCatalog';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515]">
      <ShopCatalog
        initialCategory="all"
        onSelectProduct={(product) => {
          if (typeof window !== 'undefined') {
            window.location.href = `/product/${product.id}`;
          }
        }}
        onAddToCart={() => {}}
        onOpenCompliance={() => {}}
      />
    </div>
  );
}
