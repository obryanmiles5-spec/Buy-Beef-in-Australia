'use client';

import { useState, useEffect } from 'react';
import { Product, CartItem } from '@/lib/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import MobileBottomNav from '@/components/MobileBottomNav';
import DeliveryComplianceModal from '@/components/DeliveryComplianceModal';
import ProductGalleryView from '@/components/ProductGalleryView';
import SearchModal from '@/components/SearchModal';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pt_cart_items');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
      }
    }
    return [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [complianceModalOpen, setComplianceModalOpen] = useState(false);
  const [complianceSection, setComplianceSection] = useState('delivery-info');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pt_cart_items', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleAddToCart = (prod: Product, weight: string, qty: number) => {
    const option = prod.weightOptions.find(w => w.weight === weight) || prod.weightOptions[0];
    const unitPrice = option.pricePlaceholder || prod.defaultPrice;

    setCartItems(prev => {
      const existing = prev.findIndex(item => item.product.id === prod.id && item.selectedWeight === weight);
      if (existing > -1) {
        const copy = [...prev];
        copy[existing].quantity += qty;
        return copy;
      }
      return [...prev, { product: prod, selectedWeight: weight, quantity: qty, pricePerUnit: unitPrice }];
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setCartItems(prev => {
      if (newQty <= 0) return prev.filter((_, i) => i !== index);
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] flex flex-col font-sans selection:bg-[#7A1F2B] selection:text-white pb-16 lg:pb-0">
      {/* Sitewide Header */}
      <Header
        currentView="shop"
        onNavigate={(view, cat) => {
          window.location.href = view === 'shop' && cat ? `/shop/${cat}` : `/${view === 'home' ? '' : view}`;
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setCartOpen(true)}
        onOpenCompliance={(sec) => {
          setComplianceSection(sec || 'delivery-info');
          setComplianceModalOpen(true);
        }}
        onOpenBlueprint={() => {}}
      />

      {/* Breadcrumb Header */}
      <div className="bg-stone-900 text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-[#C7903E]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-[#E2B766]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:underline capitalize">{product.category}</Link>
          <span>/</span>
          <span className="text-stone-300 truncate">{product.name}</span>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <Link
          href={`/shop/${product.category}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A1F2B] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {product.category} Department</span>
        </Link>

        {/* WooCommerce Single Product Gallery & Cart Component */}
        <ProductGalleryView 
          product={product} 
          onAddToCart={handleAddToCart}
          onOpenCart={() => setCartOpen(true)}
          onOpenCompliance={(sec) => {
            setComplianceSection(sec || 'delivery-info');
            setComplianceModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={(view, cat) => {
          window.location.href = view === 'shop' && cat ? `/shop/${cat}` : `/${view === 'home' ? '' : view}`;
        }}
        onOpenCompliance={(sec) => {
          setComplianceSection(sec || 'delivery-info');
          setComplianceModalOpen(true);
        }} 
        onOpenBlueprint={() => {}}
      />

      {/* Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenCompliance={(sec) => {
          setComplianceSection(sec || 'delivery-info');
          setComplianceModalOpen(true);
        }}
      />

      {/* Compliance Modal */}
      {complianceModalOpen && (
        <DeliveryComplianceModal
          initialSectionId={complianceSection}
          onClose={() => setComplianceModalOpen(false)}
        />
      )}

      {/* Dynamic Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        currentView="shop"
        selectedCategory={product.category}
        onNavigate={(view, cat) => {
          window.location.href = view === 'shop' && cat ? `/shop/${cat}` : `/${view === 'home' ? '' : view}`;
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />
    </div>
  );
}
