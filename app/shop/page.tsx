'use client';

import { useState } from 'react';
import SiteLayout from '@/components/SiteLayout';
import ShopCatalog from '@/components/ShopCatalog';
import { Product } from '@/lib/types';

export default function ShopPage() {
  const [complianceModalOpen, setComplianceModalOpen] = useState(false);
  const [complianceSection, setComplianceSection] = useState('delivery-info');

  const handleAddToCart = (product: Product, weight: string, quantity: number) => {
    const option = product.weightOptions.find((w) => w.weight === weight) || product.weightOptions[0];
    const unitPrice = option?.pricePlaceholder || product.defaultPrice;

    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pt_cart_items');
      let currentItems: { product: Product; selectedWeight: string; quantity: number; pricePerUnit: string }[] = [];
      if (saved) {
        try {
          currentItems = JSON.parse(saved);
        } catch {
          // ignore
        }
      }

      const existingIndex = currentItems.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );

      if (existingIndex > -1) {
        currentItems[existingIndex].quantity += quantity;
      } else {
        currentItems.push({
          product,
          selectedWeight: weight,
          quantity,
          pricePerUnit: unitPrice,
        });
      }

      localStorage.setItem('pt_cart_items', JSON.stringify(currentItems));
      window.dispatchEvent(new Event('pt_cart_updated'));
    }
  };

  return (
    <SiteLayout
      currentView="shop"
      breadcrumbs={[{ label: 'Shop All Departments' }]}
      backFallbackHref="/"
      backFallbackLabel="Back to Home"
      showBackBar={true}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ShopCatalog
          initialCategory="all"
          onSelectProduct={(product) => {
            if (typeof window !== 'undefined') {
              window.location.href = `/product/${product.id}`;
            }
          }}
          onAddToCart={handleAddToCart}
          onOpenCompliance={(sec) => {
            setComplianceSection(sec || 'delivery-info');
            setComplianceModalOpen(true);
          }}
        />
      </div>
    </SiteLayout>
  );
}
