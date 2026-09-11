'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  Phone, 
  ArrowRight,
  Layers,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import { CATEGORIES, BUSINESS_CONFIG } from '@/lib/data';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, categoryId?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenCompliance: (sectionId?: string) => void;
  onOpenBlueprint: () => void;
}

export default function Header({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onOpenCompliance,
  onOpenBlueprint,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopAccordionOpen, setMobileShopAccordionOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLinkItem {
    label: string;
    view: string;
    hasDropdown?: boolean;
    categoryId?: string;
  }

  const navLinks: NavLinkItem[] = [
    { label: 'Home', view: 'home' },
    { label: 'Shop', view: 'shop', hasDropdown: true },
    { label: 'Wholesale', view: 'wholesale' },
    { label: 'About Us', view: 'about' },
    { label: 'Contact', view: 'contact' },
    { label: 'Blog', view: 'blog' },
  ];

  const SHOP_DROPDOWN_ITEMS = [
    {
      id: 'beef',
      name: 'Beef',
      tagline: 'Black Angus, F1 Wagyu — Quarter 1/4, Half 1/2, Full Carcase cuts, Tomahawks, Ribeye',
    },
    {
      id: 'chicken',
      name: 'Chicken',
      tagline: 'Free-Range Whole, Breast, Thighs, Wings',
    },
    {
      id: 'fish',
      name: 'Fish & Fillets',
      tagline: 'Wild Barramundi, Atlantic Salmon, Snapper',
    },
    {
      id: 'pork',
      name: 'Pork',
      tagline: 'Free-Range Pork Belly, Cutlets, Ribs',
    },
    {
      id: 'lamb',
      name: 'Lamb',
      tagline: 'Grass-Fed Cutlets, Racks, Lamb Shanks, Slow-Cook Packs',
    },
    {
      id: 'seafood',
      name: 'Seafood',
      tagline: 'Tiger Prawns, Scallops, Calamari',
    },
    {
      id: 'pet-food',
      name: 'Pet Food',
      tagline: 'Raw BARF Diet, Marrow Bones, Minces',
    },
    {
      id: 'sausages',
      name: 'Artisan Sausages',
      tagline: 'Gourmet Wagyu, Italian Herb, Gluten-Free',
    },
    {
      id: 'packs',
      name: 'Curated Meat Packs',
      tagline: 'Family Value Box, BBQ Master Box, Carnivore Pack',
    },
    {
      id: 'offal',
      name: 'Beef & Meat Offal / Specialty Cuts',
      tagline: 'Cheeks, Oxtail, Marrow, Liver',
    },
  ];

  return (
    <header className="w-full relative z-30 font-sans">
      {/* 1. Announcement Slider */}
      <AnnouncementBar onOpenCompliance={onOpenCompliance} />

      {/* 2. Main Navigation Bar (Natural Tones Design) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md text-[#151515] shadow-sm border-b border-[#EAE6DF]'
            : 'bg-white text-[#151515] border-b border-[#EAE6DF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Mobile Menu Toggle & Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm text-[#151515] hover:bg-[#F8F5EF] focus:outline-none focus:ring-1 focus:ring-[#7A1F2B]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Text-based Logo with Natural Tones Butcher Stamp */}
              <button
                type="button"
                id="brand-logo-btn"
                onClick={() => onNavigate('home')}
                className="text-left group flex items-center min-w-0 py-1"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#7A1F2B] mr-2 sm:mr-2.5 flex items-center justify-center text-white text-xs sm:text-sm font-serif italic rounded-sm shadow-sm shrink-0">
                  B
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-tight truncate">
                    {BUSINESS_CONFIG.businessName}
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.12em] uppercase font-mono text-[#706E6B] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4D] shrink-0"></span>
                    <span className="truncate">NSW 2642 • AUSTRALIA</span>
                  </span>
                </div>
              </button>
            </div>

            {/* Middle: Desktop Navigation (Main Links) */}
            <nav className="hidden xl:flex items-center space-x-7 text-[11px] font-bold uppercase tracking-wider text-[#4A4A4A]" aria-label="Main Navigation">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setShopDropdownOpen(true)}
                      onMouseLeave={() => setShopDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        id="shop-dropdown-btn"
                        onClick={() => {
                          onNavigate('shop');
                          setShopDropdownOpen(false);
                        }}
                        aria-haspopup="true"
                        aria-expanded={shopDropdownOpen}
                        className={`flex items-center gap-1.5 py-2 transition-colors ${
                          currentView === 'shop' || currentView === 'category'
                            ? 'text-[#7A1F2B] border-b-2 border-[#7A1F2B]'
                            : 'hover:text-[#7A1F2B]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180 text-[#7A1F2B]' : 'text-stone-400 group-hover:text-[#7A1F2B]'}`} />
                      </button>

                      {/* Shop Mega Drop-down (Natural Tones) */}
                      {shopDropdownOpen && (
                        <div
                          className="absolute left-0 top-full pt-1.5 z-50 animate-fade-in"
                          onMouseEnter={() => setShopDropdownOpen(true)}
                          onMouseLeave={() => setShopDropdownOpen(false)}
                        >
                          <div
                            role="menu"
                            aria-label="Shop Departments"
                            className="w-[660px] max-w-[90vw] bg-white border border-[#EAE6DF] rounded-sm shadow-2xl overflow-hidden text-[#151515]"
                          >
                            {/* Department Header */}
                            <div className="px-5 py-3 bg-[#F8F5EF] border-b border-[#EAE6DF] flex items-center justify-between">
                              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A1F2B]">
                                Shop — Australian Master Butcher
                              </span>
                              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                                {SHOP_DROPDOWN_ITEMS.length} Departments
                              </span>
                            </div>

                            {/* 10 Requested Meat Departments in 2-Column Mega Grid */}
                            <div className="grid grid-cols-2 divide-x divide-[#EAE6DF]/60 p-2 gap-y-1">
                              {SHOP_DROPDOWN_ITEMS.map((dept) => {
                                return (
                                  <button
                                    key={dept.id}
                                    role="menuitem"
                                    type="button"
                                    id={`shop-dropdown-${dept.id}`}
                                    onClick={() => {
                                      setShopDropdownOpen(false);
                                      onNavigate('category', dept.id);
                                    }}
                                    className="text-left p-2.5 hover:bg-[#F8F5EF] rounded-sm transition-colors flex items-start justify-between group/item"
                                  >
                                    <div className="flex-1 pr-2">
                                      <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C7903E] opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                                        <span className="font-serif text-sm font-bold text-[#151515] group-hover/item:text-[#7A1F2B] transition-colors">
                                          {dept.name}
                                        </span>
                                      </div>
                                      <p className="text-[10.5px] text-stone-500 pl-3 mt-0.5 leading-snug line-clamp-2 font-sans">
                                        {dept.tagline}
                                      </p>
                                    </div>
                                    <ArrowRight className="w-3 h-3 mt-1 text-stone-300 group-hover/item:text-[#7A1F2B] group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                                  </button>
                                );
                              })}
                            </div>

                            {/* Mega Drop-down Footer: Wholesale & Complete Catalog */}
                            <div className="px-4 py-3 bg-[#F8F5EF] border-t border-[#EAE6DF] flex items-center justify-between gap-3">
                              <button
                                type="button"
                                onClick={() => {
                                  setShopDropdownOpen(false);
                                  onNavigate('wholesale');
                                }}
                                className="text-left flex items-center gap-2 group/ws text-xs font-bold text-stone-700 hover:text-[#7A1F2B]"
                              >
                                <span className="w-2 h-2 rounded-full bg-[#C7903E]" />
                                <span>Wholesale (Butcher & Commercial Food Service)</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#C7903E] group-hover/ws:translate-x-0.5 transition-transform" />
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setShopDropdownOpen(false);
                                  onNavigate('shop');
                                }}
                                className="py-1.5 px-3.5 text-[11px] font-bold uppercase tracking-wider text-[#7A1F2B] hover:text-white hover:bg-[#7A1F2B] rounded-sm transition-colors flex items-center gap-1.5 border border-[#7A1F2B]/30"
                              >
                                <span>All Cuts</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isWholesale = item.view === 'wholesale';

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      if (item.categoryId) {
                        onNavigate(item.view, item.categoryId);
                      } else {
                        onNavigate(item.view);
                      }
                    }}
                    className={`py-2 transition-colors flex items-center gap-1 ${
                      currentView === item.view
                        ? 'text-[#7A1F2B] border-b-2 border-[#7A1F2B]'
                        : isWholesale
                        ? 'text-[#C7903E] hover:text-[#B37F33]'
                        : 'text-[#4A4A4A] hover:text-[#7A1F2B]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Account, Cart, Order Now CTA) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search Icon */}
              <button
                type="button"
                id="header-search-btn"
                onClick={onOpenSearch}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-stone-600 hover:text-[#151515] transition-colors focus:outline-none"
                aria-label="Search meat cuts and products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Icon (Hidden on small mobile to prevent crowding; accessible via mobile menu) */}
              <button
                type="button"
                id="header-account-btn"
                onClick={onOpenAccount}
                className="hidden sm:flex p-2 min-w-[40px] min-h-[40px] items-center justify-center text-stone-600 hover:text-[#151515] transition-colors focus:outline-none"
                aria-label="Customer Account and Login"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart Icon with Natural Tones Oxblood Badge */}
              <div className="flex items-center gap-2 sm:gap-3 border-l border-[#EAE6DF] pl-2 sm:pl-3">
                <button
                  type="button"
                  id="header-cart-btn"
                  onClick={onOpenCart}
                  className="relative p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-700 hover:text-[#151515] transition-colors focus:outline-none"
                  aria-label={`Shopping cart with ${cartCount} items`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute top-1 right-1 bg-[#7A1F2B] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Order Now Call-To-Action Button (Visible on md+ so mobile header fits perfectly) */}
                <button
                  type="button"
                  id="header-order-now-btn"
                  onClick={() => onNavigate('shop')}
                  className="hidden md:inline-flex bg-[#7A1F2B] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] rounded-sm hover:bg-[#5A1720] transition-colors shadow-sm whitespace-nowrap"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Navigation Row for Smaller Desktop Screens */}
        <div className="hidden lg:flex xl:hidden border-t border-[#EAE6DF] bg-[#F8F5EF] py-1.5 px-6 justify-between items-center text-[10px] uppercase tracking-wider font-bold text-[#4A4A4A]">
          <div className="flex gap-4 overflow-x-auto">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  if (item.categoryId) {
                    onNavigate(item.view, item.categoryId);
                  } else {
                    onNavigate(item.view);
                  }
                }}
                className={`whitespace-nowrap hover:text-[#7A1F2B] ${
                  currentView === item.view ? 'text-[#7A1F2B] font-bold' : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Fully Responsive Mobile Navigation Drawer (Natural Tones) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="w-[88vw] max-w-sm bg-[#F8F5EF] text-[#151515] h-full overflow-y-auto flex flex-col justify-between shadow-2xl border-r border-[#EAE6DF]">
            <div className="pb-6">
              {/* Mobile Drawer Header */}
              <div className="p-4 border-b border-[#EAE6DF] flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#7A1F2B] flex items-center justify-center text-white text-sm font-serif italic rounded-sm shadow-sm shrink-0">
                    B
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#151515] leading-tight">
                      {BUSINESS_CONFIG.businessName}
                    </h3>
                    <p className="text-[9px] text-[#706E6B] uppercase font-mono tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4D]" />
                      NSW 2642 • Master Butcher
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  id="mobile-nav-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm text-stone-500 hover:text-stone-900 hover:bg-[#F8F5EF] transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Action Tiles (2x2 Grid) */}
              <div className="p-3 bg-stone-100/70 border-b border-[#EAE6DF]">
                <p className="text-[9px] font-mono uppercase tracking-widest text-stone-500 mb-2 px-1 font-semibold">
                  Quick Access
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {/* Search */}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSearch();
                    }}
                    className="flex items-center gap-2 p-2.5 bg-white rounded-sm border border-[#EAE6DF] hover:border-[#7A1F2B] transition-colors text-left min-h-[44px]"
                  >
                    <div className="w-7 h-7 rounded-sm bg-[#7A1F2B]/10 text-[#7A1F2B] flex items-center justify-center shrink-0">
                      <Search className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#151515] block leading-tight">Search Cuts</span>
                      <span className="text-[9px] text-stone-500">Find products</span>
                    </div>
                  </button>

                  {/* Cart */}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCart();
                    }}
                    className="flex items-center gap-2 p-2.5 bg-white rounded-sm border border-[#EAE6DF] hover:border-[#7A1F2B] transition-colors text-left min-h-[44px]"
                  >
                    <div className="w-7 h-7 rounded-sm bg-[#7A1F2B]/10 text-[#7A1F2B] flex items-center justify-center shrink-0 relative">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-[#7A1F2B] text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                          {cartCount}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#151515] block leading-tight">My Cart</span>
                      <span className="text-[9px] text-[#7A1F2B] font-semibold">{cartCount} items</span>
                    </div>
                  </button>

                  {/* Call Master Butcher */}
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="flex items-center gap-2 p-2.5 bg-white rounded-sm border border-[#EAE6DF] hover:border-[#2E6B4D] transition-colors text-left min-h-[44px]"
                  >
                    <div className="w-7 h-7 rounded-sm bg-[#2E6B4D]/10 text-[#2E6B4D] flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#151515] block leading-tight">Call Butcher</span>
                      <span className="text-[9px] text-[#2E6B4D] font-medium font-mono">{BUSINESS_CONFIG.phone}</span>
                    </div>
                  </a>

                  {/* Customer Portal */}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAccount();
                    }}
                    className="flex items-center gap-2 p-2.5 bg-white rounded-sm border border-[#EAE6DF] hover:border-[#C7903E] transition-colors text-left min-h-[44px]"
                  >
                    <div className="w-7 h-7 rounded-sm bg-[#C7903E]/15 text-[#C7903E] flex items-center justify-center shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#151515] block leading-tight">My Account</span>
                      <span className="text-[9px] text-stone-500">Orders &amp; Log</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Spotlight: Farm-Direct Carcase Shares (1/4, 1/2, Full) */}
              <div className="p-3 mx-3 mt-3 bg-linear-to-r from-[#151515] to-[#252525] text-white rounded-sm border border-[#C7903E]/40 shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest text-[#C7903E] font-bold">
                    <Layers className="w-3 h-3" />
                    Farm-Direct Carcase Shares
                  </span>
                  <span className="text-[8px] bg-[#C7903E] text-[#151515] font-bold px-1.5 py-0.5 rounded-xs uppercase">
                    1/4 • 1/2 • Full
                  </span>
                </div>
                <p className="text-xs font-serif font-bold text-white mb-2">
                  Whole, Half &amp; Quarter Animal Shares
                </p>
                <div className="grid grid-cols-4 gap-1 mb-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('category', 'beef');
                    }}
                    className="py-1 px-1 bg-white/10 hover:bg-[#C7903E] hover:text-[#151515] text-[9px] font-bold rounded-xs text-center transition-colors truncate"
                  >
                    Beef
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('category', 'lamb');
                    }}
                    className="py-1 px-1 bg-white/10 hover:bg-[#C7903E] hover:text-[#151515] text-[9px] font-bold rounded-xs text-center transition-colors truncate"
                  >
                    Lamb
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('category', 'pork');
                    }}
                    className="py-1 px-1 bg-white/10 hover:bg-[#C7903E] hover:text-[#151515] text-[9px] font-bold rounded-xs text-center transition-colors truncate"
                  >
                    Pork
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('category', 'chicken');
                    }}
                    className="py-1 px-1 bg-white/10 hover:bg-[#C7903E] hover:text-[#151515] text-[9px] font-bold rounded-xs text-center transition-colors truncate"
                  >
                    Poultry
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('shop', 'beef');
                  }}
                  className="w-full text-center text-[10px] text-[#C7903E] hover:text-white font-bold tracking-wider uppercase flex items-center justify-center gap-1"
                >
                  <span>Explore All Carcase Shares</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Main Navigation Links */}
              <nav className="p-3 space-y-1">
                {/* Home */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('home');
                  }}
                  className={`w-full text-left py-3 px-3 rounded-sm text-xs font-bold uppercase tracking-wider min-h-[44px] flex items-center transition-colors ${
                    currentView === 'home' ? 'bg-[#7A1F2B] text-white shadow-xs' : 'text-[#4A4A4A] hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  Home
                </button>

                {/* Shop Accordion with All 10 Departments */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileShopAccordionOpen(!mobileShopAccordionOpen)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-sm text-xs font-bold uppercase tracking-wider text-[#4A4A4A] hover:bg-[#EAE6DF]/60 min-h-[44px] transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <span>Shop by Meat Department</span>
                      <span className="text-[10px] text-[#7A1F2B] font-mono">({SHOP_DROPDOWN_ITEMS.length})</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileShopAccordionOpen ? 'rotate-180 text-[#7A1F2B]' : 'text-stone-400'}`}
                    />
                  </button>

                  {mobileShopAccordionOpen && (
                    <div className="pl-2 pr-2 py-2 space-y-1 bg-white border border-[#EAE6DF] rounded-sm my-1">
                      {SHOP_DROPDOWN_ITEMS.map((dept) => (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onNavigate('category', dept.id);
                          }}
                          className="w-full text-left py-2 px-2.5 rounded-sm text-xs text-stone-800 hover:text-[#7A1F2B] hover:bg-[#F8F5EF] flex items-center justify-between font-medium min-h-[40px] transition-colors"
                        >
                          <div className="flex flex-col">
                            <span className="font-serif font-bold text-xs text-[#151515] leading-snug">{dept.name}</span>
                            <span className="text-[9px] text-stone-400 line-clamp-1">{dept.tagline}</span>
                          </div>
                          <span className="text-[10px] text-[#7A1F2B] font-mono font-bold shrink-0 ml-2">Browse →</span>
                        </button>
                      ))}
                      <div className="pt-2 border-t border-[#EAE6DF] mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onNavigate('shop');
                          }}
                          className="w-full text-center py-2 px-2.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#7A1F2B] hover:bg-[#5A1720] rounded-xs transition-colors flex items-center justify-center gap-1.5 min-h-[38px]"
                        >
                          <span>View Complete Catalog (All Cuts)</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-1 border-t border-[#EAE6DF] my-1" />

                {/* Wholesale Supply */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('wholesale');
                  }}
                  className={`w-full text-left py-3 px-3 rounded-sm text-xs font-bold uppercase tracking-wider min-h-[44px] flex items-center justify-between transition-colors ${
                    currentView === 'wholesale' ? 'bg-[#7A1F2B] text-white' : 'text-[#151515] hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  <span className="text-[#C7903E] font-bold">Wholesale Meat Supply</span>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded-xs bg-[#C7903E]/20 text-[#8C6226] font-bold">
                    Commercial
                  </span>
                </button>

                {/* About Us */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('about');
                  }}
                  className={`w-full text-left py-3 px-3 rounded-sm text-xs font-semibold uppercase tracking-wider min-h-[44px] flex items-center transition-colors ${
                    currentView === 'about' ? 'bg-[#7A1F2B] text-white' : 'text-stone-700 hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  About Our Butcher &amp; Farm
                </button>

                {/* Contact Us */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('contact');
                  }}
                  className={`w-full text-left py-3 px-3 rounded-sm text-xs font-semibold uppercase tracking-wider min-h-[44px] flex items-center transition-colors ${
                    currentView === 'contact' ? 'bg-[#7A1F2B] text-white' : 'text-stone-700 hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  Contact Us &amp; Regional Hub
                </button>

                {/* Blog & Cooking Guides */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('blog');
                  }}
                  className={`w-full text-left py-3 px-3 rounded-sm text-xs font-semibold uppercase tracking-wider min-h-[44px] flex items-center transition-colors ${
                    currentView === 'blog' ? 'bg-[#7A1F2B] text-white' : 'text-stone-700 hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  Blog &amp; Butchery Guides
                </button>
              </nav>

              {/* Compliance & Delivery Shortcuts */}
              <div className="px-3 pt-2">
                <div className="bg-white rounded-sm p-3 border border-[#EAE6DF] space-y-2 text-xs">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                    Australian Compliance &amp; Delivery
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCompliance('delivery-info');
                    }}
                    className="w-full text-left flex items-center justify-between text-stone-700 hover:text-[#7A1F2B] py-1 text-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#2E6B4D]" />
                      <span>Delivery &amp; Postcode Checker</span>
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">Check →</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCompliance('cold-chain');
                    }}
                    className="w-full text-left flex items-center justify-between text-stone-700 hover:text-[#7A1F2B] py-1 text-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C7903E]" />
                      <span>Cold-Chain Packaging Info</span>
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">View →</span>
                  </button>
                  <a
                    href={BUSINESS_CONFIG.abnLookupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left flex items-center justify-between text-stone-700 hover:text-[#7A1F2B] py-1 text-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                      <span>ABN: 45 775 613 837 (Verified)</span>
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">ABR ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-4 border-t border-[#EAE6DF] bg-white space-y-2.5 sticky bottom-0 z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
              <button
                type="button"
                id="mobile-menu-order-now-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('shop');
                }}
                className="w-full bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors min-h-[48px]"
              >
                <span>Order Meat Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[10px] text-stone-500 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#7A1F2B]" />
                  <span>NSW 2642 Hub</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2E6B4D]" />
                  <span>Mon-Sat Dispatch</span>
                </span>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="flex-1" 
            onClick={() => setMobileMenuOpen(false)} 
            aria-label="Close menu overlay"
          />
        </div>
      )}
    </header>
  );
}
