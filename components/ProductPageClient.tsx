'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Product, CartItem } from '@/lib/types';
import { CATEGORIES } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import MobileBottomNav from '@/components/MobileBottomNav';
import DeliveryComplianceModal from '@/components/DeliveryComplianceModal';
import ProductGalleryView from '@/components/ProductGalleryView';
import SearchModal from '@/components/SearchModal';

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const router = useRouter();
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

  const categoryObj = CATEGORIES.find((c) => c.id === product.category || c.slug === product.category);
  const categoryDisplayName = categoryObj?.name || product.category;
  const categoryTargetSlug = categoryObj?.slug || categoryObj?.id || product.category;

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] flex flex-col font-sans selection:bg-[#7A1F2B] selection:text-white pb-16 lg:pb-0">
      {/* Sitewide Header */}
      <Header
        currentView="shop"
        onNavigate={(view, cat) => {
          if (view === 'category' && cat) {
            const categoryMatch = CATEGORIES.find((c) => c.id === cat || c.slug === cat);
            router.push(`/shop/${categoryMatch?.slug || cat}`);
          } else if (view === 'shop') {
            if (cat && cat !== 'all') {
              const categoryMatch = CATEGORIES.find((c) => c.id === cat || c.slug === cat);
              router.push(`/shop/${categoryMatch?.slug || cat}`);
            } else {
              router.push('/shop');
            }
          } else if (view === 'home') {
            router.push('/');
          } else {
            router.push(`/${view}`);
          }
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

      {/* Breadcrumb Header & Easy Back Navigation */}
      <div className="bg-[#151515] text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-[#C7903E]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#E2B766] flex-wrap min-w-0">
            <Link href="/" className="hover:underline flex items-center gap-1 shrink-0">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:underline shrink-0">Shop</Link>
            <span>/</span>
            <Link href={`/shop/${categoryTargetSlug}`} className="hover:underline shrink-0 text-[#E2B766] font-semibold">
              {categoryDisplayName}
            </Link>
            <span>/</span>
            <span className="text-stone-300 truncate max-w-[200px] sm:max-w-md">{product.name}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined' && window.history.length > 1) {
                window.history.back();
              } else {
                router.push(`/shop/${categoryTargetSlug}`);
              }
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-white/10 hover:bg-[#7A1F2B] text-[#E2B766] hover:text-white transition-colors shrink-0 text-[11px] font-bold uppercase tracking-wider cursor-pointer"
            title="Navigate to previous page"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Previous</span>
          </button>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
          <Link
            href={`/shop/${categoryTargetSlug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A1F2B] hover:text-[#5F1721] hover:underline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {categoryDisplayName} Department</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined' && window.history.length > 1) {
                window.history.back();
              } else {
                router.push(`/shop/${categoryTargetSlug}`);
              }
            }}
            className="text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors hidden sm:inline-flex items-center gap-1 cursor-pointer"
          >
            <span>← Previous page</span>
          </button>
        </div>

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
          if (view === 'category' && cat) {
            const categoryMatch = CATEGORIES.find((c) => c.id === cat || c.slug === cat);
            router.push(`/shop/${categoryMatch?.slug || cat}`);
          } else if (view === 'shop') {
            router.push(cat && cat !== 'all' ? `/shop/${cat}` : '/shop');
          } else if (view === 'home') {
            router.push('/');
          } else {
            router.push(`/${view}`);
          }
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
