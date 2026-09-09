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
  PhoneCall, 
  ArrowRight
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile Menu Toggle & Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-sm text-[#151515] hover:bg-[#F8F5EF] focus:outline-none focus:ring-1 focus:ring-[#7A1F2B]"
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
                className="text-left group flex items-center"
              >
                <div className="w-8 h-8 bg-[#7A1F2B] mr-2.5 flex items-center justify-center text-white text-sm font-serif italic rounded-sm shadow-sm flex-shrink-0">
                  B
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tighter text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-tight">
                    {BUSINESS_CONFIG.businessName}
                  </span>
                  <span className="text-[9px] tracking-[0.15em] uppercase font-mono text-[#706E6B] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4D]"></span>
                    NSW 2642 • AUSTRALIA
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
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search Icon */}
              <button
                type="button"
                id="header-search-btn"
                onClick={onOpenSearch}
                className="p-1.5 text-stone-500 hover:text-[#151515] transition-colors focus:outline-none"
                aria-label="Search meat cuts and products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Icon */}
              <button
                type="button"
                id="header-account-btn"
                onClick={onOpenAccount}
                className="p-1.5 text-stone-500 hover:text-[#151515] transition-colors focus:outline-none"
                aria-label="Customer Account and Login"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart Icon with Natural Tones Oxblood Badge */}
              <div className="flex items-center gap-4 border-l border-[#EAE6DF] pl-4">
                <button
                  type="button"
                  id="header-cart-btn"
                  onClick={onOpenCart}
                  className="relative p-1.5 text-stone-700 hover:text-[#151515] transition-colors focus:outline-none"
                  aria-label={`Shopping cart with ${cartCount} items`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-[#7A1F2B] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                  </span>
                </button>

                {/* Clear Order Now Call-To-Action Button (Natural Tones Button) */}
                <button
                  type="button"
                  id="header-order-now-btn"
                  onClick={() => onNavigate('shop')}
                  className="bg-[#7A1F2B] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] rounded-sm hover:bg-[#5A1720] transition-colors shadow-sm"
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
          className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex animate-fade-in"
        >
          <div className="w-5/6 max-w-sm bg-[#F8F5EF] text-[#151515] h-full overflow-y-auto flex flex-col justify-between shadow-2xl border-r border-[#EAE6DF]">
            <div>
              {/* Mobile Drawer Header */}
              <div className="p-4 border-b border-[#EAE6DF] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#7A1F2B] flex items-center justify-center text-white text-xs font-serif italic rounded-sm shadow-sm">
                    B
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#151515] leading-none">
                      {BUSINESS_CONFIG.businessName}
                    </h3>
                    <p className="text-[9px] text-[#706E6B] uppercase font-mono tracking-widest mt-0.5">Australian Butcher</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-sm text-stone-500 hover:text-stone-900 hover:bg-[#F8F5EF]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-4 space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('home');
                  }}
                  className={`w-full text-left py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-wider ${
                    currentView === 'home' ? 'bg-[#7A1F2B] text-white' : 'text-[#4A4A4A] hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  Home
                </button>

                {/* Shop Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileShopAccordionOpen(!mobileShopAccordionOpen)}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-wider text-[#4A4A4A] hover:bg-[#EAE6DF]/60"
                  >
                    <span>Shop</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileShopAccordionOpen ? 'rotate-180 text-[#7A1F2B]' : ''}`}
                    />
                  </button>

                  {mobileShopAccordionOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-1 bg-white border border-[#EAE6DF] rounded-sm my-1">
                      {SHOP_DROPDOWN_ITEMS.map((dept) => (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onNavigate('category', dept.id);
                          }}
                          className="w-full text-left py-2 px-2.5 rounded-sm text-xs text-stone-800 hover:text-[#7A1F2B] hover:bg-[#F8F5EF] flex items-center justify-between font-medium"
                        >
                          <span className="font-serif font-bold text-sm text-[#151515]">{dept.name}</span>
                          <span className="text-[10px] text-stone-400 font-mono">→</span>
                        </button>
                      ))}
                      <div className="pt-2 border-t border-[#EAE6DF] mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            onNavigate('shop');
                          }}
                          className="w-full text-left py-1.5 px-2.5 text-[11px] font-bold uppercase tracking-wider text-[#7A1F2B] hover:underline"
                        >
                          → View Complete Catalog
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-[#EAE6DF] my-2"></div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('wholesale');
                  }}
                  className={`w-full text-left py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-wider ${
                    currentView === 'wholesale' ? 'bg-[#7A1F2B] text-white' : 'text-[#C7903E] hover:bg-[#EAE6DF]/60'
                  }`}
                >
                  Wholesale Meat Supply
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('about');
                  }}
                  className="w-full text-left py-2 px-3 rounded-sm text-xs text-stone-700 hover:bg-[#EAE6DF]/60 font-medium"
                >
                  About Us
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('contact');
                  }}
                  className="w-full text-left py-2 px-3 rounded-sm text-xs text-stone-700 hover:bg-[#EAE6DF]/60 font-medium"
                >
                  Contact Us
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('blog');
                  }}
                  className="w-full text-left py-2 px-3 rounded-sm text-xs text-stone-700 hover:bg-[#EAE6DF]/60 font-medium"
                >
                  Blog & Cooking Guides
                </button>
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-4 border-t border-[#EAE6DF] bg-white space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('shop');
                }}
                className="w-full bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-[11px] font-bold uppercase tracking-widest py-3 px-4 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Order Meat Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-stone-500 text-center font-mono pt-1">
                {BUSINESS_CONFIG.location} • Premium Australian Butcher
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
