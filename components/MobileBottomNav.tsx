'use client';

import { ShoppingBag, Home, Phone, Layers, Store } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface MobileBottomNavProps {
  currentView: string;
  selectedCategory: string;
  cartCount: number;
  onNavigate: (view: string, categoryId?: string) => void;
  onOpenCart: () => void;
}

export default function MobileBottomNav({
  currentView,
  selectedCategory,
  cartCount,
  onNavigate,
  onOpenCart,
}: MobileBottomNavProps) {
  return (
    <nav
      id="mobile-bottom-navigation"
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EAE6DF] lg:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)] safe-area-bottom font-sans"
    >
      <div className="grid grid-cols-5 items-center justify-between h-15 px-1 max-w-lg mx-auto">
        {/* 1. Home */}
        <button
          type="button"
          id="mobile-bottom-home-btn"
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center py-1 min-h-[48px] rounded-sm transition-colors ${
            currentView === 'home'
              ? 'text-[#7A1F2B] font-bold'
              : 'text-stone-500 hover:text-[#151515]'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight leading-none">Home</span>
        </button>

        {/* 2. Shop / Catalog */}
        <button
          type="button"
          id="mobile-bottom-shop-btn"
          onClick={() => onNavigate('shop', 'all')}
          className={`flex flex-col items-center justify-center py-1 min-h-[48px] rounded-sm transition-colors ${
            currentView === 'shop' && selectedCategory === 'all'
              ? 'text-[#7A1F2B] font-bold'
              : 'text-stone-500 hover:text-[#151515]'
          }`}
          aria-label="Shop All Cuts"
        >
          <Store className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight leading-none">Shop</span>
        </button>

        {/* 3. Carcase Shares (Direct Feature) */}
        <button
          type="button"
          id="mobile-bottom-shares-btn"
          onClick={() => onNavigate('shop', 'beef')}
          className={`flex flex-col items-center justify-center py-1 min-h-[48px] rounded-sm transition-colors ${
            currentView === 'shop' && selectedCategory === 'beef'
              ? 'text-[#7A1F2B] font-bold'
              : 'text-stone-500 hover:text-[#7A1F2B]'
          }`}
          aria-label="1/4, 1/2 and Full Shares"
        >
          <div className="relative">
            <Layers className="w-5 h-5 mb-0.5 text-[#C7903E]" />
            <span className="absolute -top-1 -right-2 bg-[#7A1F2B] text-white text-[7px] font-bold px-1 rounded-full uppercase leading-tight">
              1/4
            </span>
          </div>
          <span className="text-[10px] tracking-tight leading-none text-[#C7903E] font-medium">Shares</span>
        </button>

        {/* 4. Call Master Butcher */}
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex flex-col items-center justify-center py-1 min-h-[48px] rounded-sm text-stone-500 hover:text-[#2E6B4D] transition-colors"
          aria-label={`Call Butcher on ${BUSINESS_CONFIG.phone}`}
        >
          <Phone className="w-5 h-5 mb-0.5 text-[#2E6B4D]" />
          <span className="text-[10px] tracking-tight leading-none">Call</span>
        </a>

        {/* 5. Cart */}
        <button
          type="button"
          id="mobile-bottom-cart-btn"
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center py-1 min-h-[48px] rounded-sm text-stone-700 hover:text-[#7A1F2B] relative transition-colors"
          aria-label={`Cart with ${cartCount} items`}
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 mb-0.5 text-[#7A1F2B]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#7A1F2B] text-white text-[9px] font-bold min-w-[16px] h-4 flex items-center justify-center px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight leading-none font-semibold">Cart</span>
        </button>
      </div>
    </nav>
  );
}
