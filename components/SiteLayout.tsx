'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import DeliveryComplianceModal from '@/components/DeliveryComplianceModal';
import BlueprintCenterModal from '@/components/BlueprintCenterModal';
import MobileBottomNav from '@/components/MobileBottomNav';
import { Product, CartItem } from '@/lib/types';
import { CATEGORIES } from '@/lib/data';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SiteLayoutProps {
  children: React.ReactNode;
  currentView?: string;
  breadcrumbs?: BreadcrumbItem[];
  backFallbackHref?: string;
  backFallbackLabel?: string;
  showBackBar?: boolean;
}

export default function SiteLayout({
  children,
  currentView = 'shop',
  breadcrumbs,
  backFallbackHref,
  backFallbackLabel,
  showBackBar = false,
}: SiteLayoutProps) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pt_cart_items');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore error
        }
      }
    }
    return [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [complianceModalOpen, setComplianceModalOpen] = useState(false);
  const [complianceSection, setComplianceSection] = useState('delivery-info');
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);

  // Sync cart with localStorage and custom cross-component events
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('pt_cart_items');
      if (saved) {
        try {
          setCartItems(JSON.parse(saved));
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('pt_cart_updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('pt_cart_updated', handleStorage);
    };
  }, []);

  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pt_cart_items', JSON.stringify(items));
      window.dispatchEvent(new Event('pt_cart_updated'));
    }
  };

  const handleAddToCart = (product: Product, weight: string, quantity: number) => {
    const option = product.weightOptions.find((w) => w.weight === weight) || product.weightOptions[0];
    const unitPrice = option?.pricePlaceholder || product.defaultPrice;

    setCartItems((prev) => {
      const existing = prev.findIndex((item) => item.product.id === product.id && item.selectedWeight === weight);
      let updated: CartItem[];
      if (existing > -1) {
        updated = [...prev];
        updated[existing].quantity += quantity;
      } else {
        updated = [...prev, { product, selectedWeight: weight, quantity, pricePerUnit: unitPrice }];
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('pt_cart_items', JSON.stringify(updated));
        window.dispatchEvent(new Event('pt_cart_updated'));
      }
      return updated;
    });

    setCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setCartItems((prev) => {
      let updated: CartItem[];
      if (newQty <= 0) {
        updated = prev.filter((_, i) => i !== index);
      } else {
        updated = [...prev];
        updated[index].quantity = newQty;
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('pt_cart_items', JSON.stringify(updated));
        window.dispatchEvent(new Event('pt_cart_updated'));
      }
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (typeof window !== 'undefined') {
        localStorage.setItem('pt_cart_items', JSON.stringify(updated));
        window.dispatchEvent(new Event('pt_cart_updated'));
      }
      return updated;
    });
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (view: string, categoryId?: string) => {
    if (view === 'category' && categoryId) {
      const cat = CATEGORIES.find((c) => c.id === categoryId || c.slug === categoryId);
      router.push(`/shop/${cat?.slug || categoryId}`);
    } else if (view === 'shop') {
      if (categoryId && categoryId !== 'all') {
        const cat = CATEGORIES.find((c) => c.id === categoryId || c.slug === categoryId);
        router.push(`/shop/${cat?.slug || categoryId}`);
      } else {
        router.push('/shop');
      }
    } else if (view === 'home') {
      router.push('/');
    } else {
      router.push(`/${view}`);
    }
  };

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      if (window.history.length > 1) {
        window.history.back();
      } else if (backFallbackHref) {
        router.push(backFallbackHref);
      } else {
        router.push('/shop');
      }
    }
  };

  const hasBackBar = showBackBar || (breadcrumbs && breadcrumbs.length > 0) || Boolean(backFallbackHref);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] flex flex-col font-sans selection:bg-[#7A1F2B] selection:text-white pb-16 lg:pb-0">
      {/* Sitewide Global Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setCartOpen(true)}
        onOpenCompliance={(sec) => {
          setComplianceSection(sec || 'delivery-info');
          setComplianceModalOpen(true);
        }}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* Navigation Breadcrumb & Back Bar */}
      {hasBackBar && (
        <div className="bg-[#151515] text-white py-3.5 px-4 sm:px-6 lg:px-8 border-b border-[#C7903E]/40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#E2B766] flex-wrap min-w-0">
              <Link href="/" className="hover:underline flex items-center gap-1 shrink-0">
                <span>Home</span>
              </Link>
              {breadcrumbs?.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-2 min-w-0">
                  <span className="text-stone-500">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:underline text-[#E2B766] truncate">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-stone-300 font-semibold truncate">{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-white/10 hover:bg-[#7A1F2B] text-[#E2B766] hover:text-white transition-colors shrink-0 text-[11px] font-bold uppercase tracking-wider cursor-pointer"
              title="Navigate to previous page"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{backFallbackLabel || 'Back'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="flex-1 w-full">{children}</div>

      {/* Sitewide Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCompliance={(sec) => {
          setComplianceSection(sec || 'delivery-info');
          setComplianceModalOpen(true);
        }}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* Cart Drawer */}
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

      {/* Quick Search Modal with dynamic filtering & grid layout */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(prod) => {
          window.location.href = `/product/${prod.id}`;
        }}
        onAddToCart={handleAddToCart}
        onNavigateToShop={(term, catId) => {
          if (catId && catId !== 'all') {
            window.location.href = `/shop/${catId}`;
          } else {
            window.location.href = '/shop';
          }
        }}
      />

      {/* Delivery Compliance Modal */}
      {complianceModalOpen && (
        <DeliveryComplianceModal
          initialSectionId={complianceSection}
          onClose={() => setComplianceModalOpen(false)}
        />
      )}

      {/* Blueprint Center Modal */}
      {blueprintModalOpen && (
        <BlueprintCenterModal
          isOpen={blueprintModalOpen}
          onClose={() => setBlueprintModalOpen(false)}
        />
      )}

      {/* Mobile Sticky Bottom Nav */}
      <MobileBottomNav
        currentView={currentView}
        selectedCategory="all"
        cartCount={totalCartCount}
        onNavigate={handleNavigate}
        onOpenCart={() => setCartOpen(true)}
      />
    </div>
  );
}
