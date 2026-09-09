'use client';

import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Eye, 
  Truck, 
  Check, 
  ChevronRight,
  SlidersHorizontal,
  X,
  ShieldCheck,
  Star,
  ExternalLink,
  MapPin,
  RotateCcw,
  Layers
} from 'lucide-react';
import { Product } from '@/lib/types';
import { ALL_PRODUCTS, CATEGORIES, BUSINESS_CONFIG } from '@/lib/data';

interface ShopCatalogProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, weight: string, quantity: number) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function ShopCatalog({
  initialCategory = 'all',
  onSelectProduct,
  onAddToCart,
  onOpenCompliance,
}: ShopCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [prevInitialCategory, setPrevInitialCategory] = useState(initialCategory);
  if (initialCategory !== prevInitialCategory) {
    setPrevInitialCategory(initialCategory);
    setSelectedCategory(initialCategory);
    setSelectedSubcategory('all');
  }
  const [searchQuery, setSearchQuery] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'in_stock'>('all');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under30' | '30to60' | '60to150' | 'over150'>('all');
  const [sortBy, setSortBy] = useState<'popularity' | 'price_asc' | 'price_desc' | 'name'>('popularity');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Selected weight per product
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    ALL_PRODUCTS.forEach((p) => {
      initial[p.id] = p.weightOptions[0]?.weight || '';
    });
    return initial;
  });

  const activeCategoryInfo = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  // Calculate product counts per category for the sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ALL_PRODUCTS.length };
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = ALL_PRODUCTS.filter((p) => p.category === cat.id).length;
    });
    return counts;
  }, []);

  // Helper to extract numeric price
  const parsePrice = (priceStr: string): number => {
    const clean = priceStr.replace(/[^0-9.]/g, '');
    const val = parseFloat(clean);
    return isNaN(val) ? 0 : val;
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // 1. Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Subcategory filter
      if (selectedSubcategory !== 'all') {
        const subLow = selectedSubcategory.toLowerCase();
        const prodSub = (product.subCategory || '').toLowerCase();
        const prodName = product.name.toLowerCase();
        if (!prodSub.includes(subLow) && !prodName.includes(subLow)) {
          return false;
        }
      }

      // 3. Search query filter (Key Term Search)
      if (searchQuery.trim()) {
        const terms = searchQuery.toLowerCase().trim().split(/\s+/);
        const searchableText = [
          product.name,
          product.shortDescription,
          product.fullDescription || '',
          product.subCategory || '',
          product.category,
          product.cutInformation || '',
          product.badge || ''
        ].join(' ').toLowerCase();

        // Every term should match somewhere in the text
        const matchesAllTerms = terms.every((t) => searchableText.includes(t));
        if (!matchesAllTerms) return false;
      }

      // 4. Availability filter
      if (availabilityFilter === 'in_stock') {
        const status = (product.stockStatus || '').toLowerCase();
        if (status.includes('out of stock')) return false;
      }

      // 5. Price filter
      if (priceFilter !== 'all') {
        const p = parsePrice(product.defaultPrice);
        if (priceFilter === 'under30' && p >= 30) return false;
        if (priceFilter === '30to60' && (p < 30 || p > 60)) return false;
        if (priceFilter === '60to150' && (p < 60 || p > 150)) return false;
        if (priceFilter === 'over150' && p < 150) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price_asc') return parsePrice(a.defaultPrice) - parsePrice(b.defaultPrice);
      if (sortBy === 'price_desc') return parsePrice(b.defaultPrice) - parsePrice(a.defaultPrice);
      return 0; // default popularity/order
    });
  }, [selectedCategory, selectedSubcategory, searchQuery, availabilityFilter, priceFilter, sortBy]);

  // Subcategories list available for current category or global
  const availableSubcategories = useMemo(() => {
    if (activeCategoryInfo && activeCategoryInfo.subcategories.length > 0) {
      return activeCategoryInfo.subcategories;
    }
    // Global popular cuts
    return [
      'Steaks',
      'Mince',
      'Roasts',
      'Ribs',
      'Brisket',
      'Fillets',
      'Cutlets',
      'Sausages',
      'Packs',
      'Bones'
    ];
  }, [activeCategoryInfo]);

  // Suggested quick search terms
  const POPULAR_SEARCH_TAGS = [
    'Ribeye',
    'Wagyu',
    'Mince',
    'Brisket',
    'Rump',
    'Chicken',
    'Salmon',
    'Pork Belly',
    'Lamb Cutlets',
    'Sausages',
    'Marrow Bones'
  ];

  const handleWeightChange = (productId: string, weight: string) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleAdd = (product: Product) => {
    const weight = selectedWeights[product.id] || product.weightOptions[0].weight;
    onAddToCart(product, weight, 1);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSearchQuery('');
    setAvailabilityFilter('all');
    setPriceFilter('all');
    setSortBy('popularity');
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedSubcategory !== 'all' || 
    searchQuery.trim() !== '' || 
    availabilityFilter !== 'all' || 
    priceFilter !== 'all';

  // Helper to get selected weight price if available
  const getProductPrice = (product: Product) => {
    const selectedWeight = selectedWeights[product.id];
    if (selectedWeight) {
      const match = product.weightOptions.find((o) => o.weight === selectedWeight);
      if (match && match.pricePlaceholder && match.pricePlaceholder !== '[PRICE]') {
        return match.pricePlaceholder;
      }
    }
    return product.defaultPrice;
  };

  return (
    <div id="shop-catalog-view" className="py-8 sm:py-10 bg-[#F8F5EF] text-[#151515] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-stone-500 font-mono">
          <button 
            type="button" 
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSubcategory('all');
              setSearchQuery('');
            }} 
            className="hover:text-[#7A1F2B] transition-colors"
          >
            Shop All
          </button>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-bold uppercase tracking-wider">
            {activeCategoryInfo ? activeCategoryInfo.name : 'All Butcher Departments'}
          </span>
          {searchQuery.trim() && (
            <>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <span className="text-[#7A1F2B] font-semibold truncate max-w-[140px]">
                Search: &ldquo;{searchQuery}&rdquo;
              </span>
            </>
          )}
        </nav>

        {/* SEO Header Banner */}
        <div className="bg-white rounded-sm p-5 sm:p-7 border border-[#EAE6DF] shadow-xs mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A1F2B] block mb-1.5 font-mono">
                {activeCategoryInfo ? 'Butcher Department Guide' : 'Australian Online Butcher & Cold-Chain Meat'}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515] mb-2 tracking-tight">
                {activeCategoryInfo ? activeCategoryInfo.h1 : 'Buy Fresh Australian Meat Online | Cold-Chain Delivery'}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {activeCategoryInfo
                  ? activeCategoryInfo.introCopy
                  : 'Order prime Australian beef steaks, free-range poultry, ocean fish fillets, crackling pork roasts, French trimmed lamb cutlets, and family meat packs. Prepared by skilled butchers and dispatched cold-chain from NSW 2642.'}
              </p>
            </div>

            {/* Quick Trust Badges in Header */}
            <div className="flex md:flex-col items-center md:items-end gap-2 text-right flex-shrink-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2E6B4D]/10 border border-[#2E6B4D]/30 rounded-sm text-[11px] font-mono text-[#2E6B4D]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Australian Butcher</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#00b67a]/10 border border-[#00b67a]/30 rounded-sm text-[11px] font-bold text-[#008257]">
                <Star className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
                <span>4.9 / 5 Rated Excellent (348+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle & Quick Horizontal Category Scroller */}
        <div className="lg:hidden mb-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cuts (e.g. Ribeye, Mince, Pork)..."
                className="w-full pl-9 pr-8 py-2.5 text-xs bg-white border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className={`flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm border transition-colors ${
                hasActiveFilters
                  ? 'bg-[#7A1F2B] text-white border-[#7A1F2B]'
                  : 'bg-white text-stone-800 border-[#EAE6DF]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-[#C7903E]"></span>
              )}
            </button>
          </div>

          {/* Quick Category Chips for Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
              }}
              className={`px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider whitespace-nowrap border transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#151515] text-white border-[#151515]'
                  : 'bg-white text-stone-700 border-[#EAE6DF]'
              }`}
            >
              All Cuts ({categoryCounts.all})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSubcategory('all');
                }}
                className={`px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider whitespace-nowrap border transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#7A1F2B] text-white border-[#7A1F2B]'
                    : 'bg-white text-stone-700 border-[#EAE6DF]'
                }`}
              >
                {cat.name} ({categoryCounts[cat.id] || 0})
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid Layout: LEFT SIDEBAR + RIGHT MAIN CATALOG */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* =========================================================================
              LEFT SIDEBAR: Categories, Cut Types, Search, Availability, & Verification
              ========================================================================= */}
          <aside 
            id="shop-sidebar"
            aria-label="Shop Catalog Filter Sidebar"
            className={`${
              mobileFiltersOpen ? 'block' : 'hidden lg:block'
            } bg-white border border-[#EAE6DF] rounded-sm p-5 space-y-6 shadow-xs lg:sticky lg:top-24 z-10`}
          >
            {/* Sidebar Header & Active Filters Indicator */}
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#7A1F2B]" />
                <h2 className="font-serif text-base font-bold text-[#151515] uppercase tracking-wider">
                  Filter Cuts
                </h2>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-[10px] font-mono text-[#7A1F2B] hover:underline flex items-center gap-1 font-bold"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* 1. Keyword Search in Sidebar */}
            <div className="space-y-2">
              <label 
                htmlFor="sidebar-search-input"
                className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider"
              >
                Search Meat & Cuts
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="sidebar-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="E.g., Ribeye, Wagyu, Mince..."
                  className="w-full pl-8 pr-7 py-2 text-xs bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
                    title="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Popular Search Suggestions */}
              <div className="pt-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                  Popular Key Terms:
                </span>
                <div className="flex flex-wrap gap-1">
                  {POPULAR_SEARCH_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className={`text-[10px] px-2 py-0.5 rounded-sm transition-colors border ${
                        searchQuery.toLowerCase() === tag.toLowerCase()
                          ? 'bg-[#7A1F2B] text-white border-[#7A1F2B]'
                          : 'bg-[#F8F5EF] text-stone-600 hover:bg-stone-200 border-[#EAE6DF]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. All Categories List */}
            <div className="space-y-2 pt-2 border-t border-[#EAE6DF]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                  All Categories
                </span>
                <span className="text-[10px] font-mono text-stone-400">
                  {CATEGORIES.length + 1} Departments
                </span>
              </div>

              <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
                {/* All Cuts Button */}
                <button
                  type="button"
                  id="category-filter-all"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('all');
                  }}
                  className={`w-full text-left px-3 py-2 rounded-sm text-xs font-medium flex items-center justify-between transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-[#7A1F2B] text-white font-bold shadow-xs'
                      : 'hover:bg-[#F8F5EF] text-stone-700'
                  }`}
                >
                  <span className="truncate pr-2">All Butcher Departments</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                      selectedCategory === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {categoryCounts.all}
                  </span>
                </button>

                {/* Individual Categories */}
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = categoryCounts[cat.id] || 0;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      id={`category-filter-${cat.id}`}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubcategory('all');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-sm text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#7A1F2B] text-white font-bold shadow-xs'
                          : 'hover:bg-[#F8F5EF] text-stone-700'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono flex-shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white font-bold'
                            : 'bg-stone-100 text-stone-500'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Subcategory / Specific Cut Type */}
            <div className="space-y-2 pt-2 border-t border-[#EAE6DF]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                  Cut Type & Cuts
                </span>
                {selectedSubcategory !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setSelectedSubcategory('all')}
                    className="text-[10px] text-[#7A1F2B] hover:underline font-mono"
                  >
                    Clear Cut
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory('all')}
                  className={`text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider border transition-colors ${
                    selectedSubcategory === 'all'
                      ? 'bg-[#C7903E] text-stone-900 font-bold border-[#C7903E]'
                      : 'bg-[#F8F5EF] text-stone-600 border-[#EAE6DF] hover:border-stone-400'
                  }`}
                >
                  All Cuts
                </button>

                {availableSubcategories.map((sub) => {
                  const isSelected = selectedSubcategory.toLowerCase() === sub.toLowerCase();
                  return (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider border transition-colors ${
                        isSelected
                          ? 'bg-[#C7903E] text-stone-900 font-bold border-[#C7903E]'
                          : 'bg-white text-stone-600 border-[#EAE6DF] hover:border-stone-400'
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Price Filter */}
            <div className="space-y-2 pt-2 border-t border-[#EAE6DF]">
              <span className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                Price Range
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under30', label: 'Under $30' },
                  { id: '30to60', label: '$30 – $60' },
                  { id: '60to150', label: '$60 – $150' },
                  { id: 'over150', label: '$150+ (Bulk)' }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPriceFilter(p.id as any)}
                    className={`py-1.5 px-2 text-[10px] font-medium rounded-sm border text-left transition-colors ${
                      priceFilter === p.id
                        ? 'bg-[#151515] text-white border-[#151515] font-bold'
                        : 'bg-[#F8F5EF] text-stone-700 border-[#EAE6DF] hover:bg-stone-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Availability Filter */}
            <div className="space-y-2 pt-2 border-t border-[#EAE6DF]">
              <span className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider">
                Stock Availability
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setAvailabilityFilter('all')}
                  className={`flex-1 py-1.5 px-2 text-[10px] font-medium rounded-sm border text-center transition-colors ${
                    availabilityFilter === 'all'
                      ? 'bg-[#151515] text-white border-[#151515] font-bold'
                      : 'bg-[#F8F5EF] text-stone-700 border-[#EAE6DF]'
                  }`}
                >
                  All Items
                </button>
                <button
                  type="button"
                  onClick={() => setAvailabilityFilter('in_stock')}
                  className={`flex-1 py-1.5 px-2 text-[10px] font-medium rounded-sm border text-center transition-colors ${
                    availabilityFilter === 'in_stock'
                      ? 'bg-[#2E6B4D] text-white border-[#2E6B4D] font-bold'
                      : 'bg-[#F8F5EF] text-stone-700 border-[#EAE6DF]'
                  }`}
                >
                  In Stock Only
                </button>
              </div>
            </div>

            {/* 6. Sidebar Trust & Official Verification Widget */}
            <div className="pt-4 border-t border-[#EAE6DF] space-y-3">
              {/* Australian Butcher Guarantee Card */}
              <div className="p-3 bg-[#2E6B4D]/5 border border-[#2E6B4D]/30 rounded-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2E6B4D] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Australian Butcher</span>
                </div>
                <p className="text-[11px] text-stone-600 mb-1 font-mono">
                  Cold-Chain Chilled Dispatch
                </p>
                <div className="text-[10px] text-stone-500 mb-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#7A1F2B]" />
                  <span>Location: {BUSINESS_CONFIG.location}</span>
                </div>
                <div className="w-full inline-flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider py-1.5 px-2 bg-white text-[#2E6B4D] border border-[#2E6B4D]/40 rounded-sm">
                  <span>100% Farm-Direct Freshness</span>
                </div>
              </div>

              {/* Trustpilot Sidebar Badge */}
              <div className="p-3 bg-[#00b67a]/5 border border-[#00b67a]/30 rounded-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-[#00b67a] text-[#00b67a]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#008257]">4.9 / 5</span>
                </div>
                <p className="text-[11px] font-bold text-[#151515] mb-1">
                  Rated Excellent on Trustpilot
                </p>
                <p className="text-[10px] text-stone-500 mb-2">
                  348+ verified Australian reviews
                </p>
                <div className="w-full inline-flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider py-1.5 px-2 bg-white text-[#008257] border border-[#00b67a]/40 rounded-sm">
                  <span>100% Verified Customer Reviews</span>
                </div>
              </div>
            </div>
          </aside>

          {/* =========================================================================
              RIGHT MAIN SECTION: Active Filter Chips, Sort Controls, & Product Grid
              ========================================================================= */}
          <main className="min-w-0 space-y-5">
            {/* Top Toolbar: Results count, Active Filters Bar, and Sort Dropdown */}
            <div className="bg-white border border-[#EAE6DF] rounded-sm p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-[#151515]">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'Cut' : 'Cuts'}
                </span>
                {searchQuery.trim() && (
                  <span className="text-xs text-stone-500 ml-1">
                    matching &ldquo;<strong className="text-stone-800">{searchQuery}</strong>&rdquo;
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="text-xs text-stone-500 ml-1">
                    in <strong className="text-stone-800">{activeCategoryInfo?.name || selectedCategory}</strong>
                  </span>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="catalog-sort" className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Sort:
                </label>
                <select
                  id="catalog-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm py-1.5 px-3 text-xs text-stone-800 font-medium outline-none focus:ring-1 focus:ring-[#7A1F2B]"
                >
                  <option value="popularity">Most Popular Cuts</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="name">Cut Name (A to Z)</option>
                </select>
              </div>
            </div>

            {/* Active Filter Badges Row */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 p-3 bg-white border border-[#EAE6DF] rounded-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-mono mr-1">
                  Active Filters:
                </span>

                {/* Category Chip */}
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#7A1F2B]/10 border border-[#7A1F2B]/30 text-[#7A1F2B] text-xs rounded-sm">
                    <span>Dept: {activeCategoryInfo?.name || selectedCategory}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedSubcategory('all');
                      }}
                      className="hover:text-stone-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {/* Subcategory Chip */}
                {selectedSubcategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#C7903E]/15 border border-[#C7903E]/40 text-stone-800 text-xs rounded-sm">
                    <span>Cut: {selectedSubcategory}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedSubcategory('all')}
                      className="hover:text-stone-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {/* Search Query Chip */}
                {searchQuery.trim() && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 border border-stone-300 text-stone-800 text-xs rounded-sm">
                    <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="hover:text-stone-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {/* Price Chip */}
                {priceFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 border border-stone-300 text-stone-800 text-xs rounded-sm">
                    <span>Price: {priceFilter}</span>
                    <button
                      type="button"
                      onClick={() => setPriceFilter('all')}
                      className="hover:text-stone-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {/* Availability Chip */}
                {availabilityFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#2E6B4D]/10 border border-[#2E6B4D]/30 text-[#2E6B4D] text-xs rounded-sm">
                    <span>In Stock Only</span>
                    <button
                      type="button"
                      onClick={() => setAvailabilityFilter('all')}
                      className="hover:text-stone-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {/* Clear All Button */}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[#7A1F2B] hover:underline font-bold ml-auto"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Product Cards Grid / Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-sm p-10 sm:p-14 text-center border border-[#EAE6DF] shadow-xs">
                <div className="w-12 h-12 bg-[#F8F5EF] text-stone-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">
                  No matching meat cuts found
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mb-6">
                  {selectedCategory !== 'all' && searchQuery.trim()
                    ? `No cuts match "${searchQuery}" inside the "${activeCategoryInfo?.name || selectedCategory}" category. Try searching across all departments.`
                    : 'Try checking for spelling errors, adjusting price limits, or clearing the search terms.'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {selectedCategory !== 'all' && searchQuery.trim() && (
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('all')}
                      className="px-4 py-2.5 bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      Search &ldquo;{searchQuery}&rdquo; in All Categories
                    </button>
                  )}

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      Clear Search Term
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="px-4 py-2.5 bg-white border border-[#EAE6DF] hover:bg-stone-50 text-stone-700 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product) => {
                  const currentWeight =
                    selectedWeights[product.id] || product.weightOptions[0].weight;
                  const isJustAdded = addedProductId === product.id;
                  const displayPrice = getProductPrice(product);

                  return (
                    <article
                      key={product.id}
                      id={`catalog-product-${product.id}`}
                      className="bg-white rounded-sm overflow-hidden border border-[#EAE6DF] hover:border-[#C7903E] hover:shadow-lg transition-all flex flex-col justify-between group"
                    >
                      {/* Product Image Box (1:1 Aspect Ratio) */}
                      <div
                        className="relative aspect-square bg-stone-100 overflow-hidden cursor-pointer"
                        onClick={() => onSelectProduct(product)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt={`${product.name} - Fresh Australian meat cut`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.badge && (
                          <span className="absolute top-2.5 left-2.5 bg-[#7A1F2B] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
                            {product.badge}
                          </span>
                        )}
                        <span className="absolute top-2.5 right-2.5 bg-[#151515]/85 backdrop-blur-sm text-[#F8F5EF] text-[9px] font-mono px-2 py-0.5 rounded-sm border border-stone-700">
                          {product.stockStatus}
                        </span>
                      </div>

                      {/* Product Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-[#C7903E] uppercase tracking-widest truncate">
                              {product.subCategory || product.category}
                            </span>
                            <span className="text-[9px] font-mono text-stone-400 uppercase">
                              NSW 2642 Sourced
                            </span>
                          </div>

                          <h3
                            className="font-serif text-base font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors cursor-pointer line-clamp-1 mb-1.5"
                            onClick={() => onSelectProduct(product)}
                          >
                            {product.name}
                          </h3>

                          <p className="text-xs text-stone-600 line-clamp-2 mb-3 leading-relaxed">
                            {product.shortDescription}
                          </p>

                          {/* Portion Dropdown Selector */}
                          <div className="mb-3">
                            <label
                              htmlFor={`cat-weight-${product.id}`}
                              className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1"
                            >
                              Pack Portion:
                            </label>
                            <select
                              id={`cat-weight-${product.id}`}
                              value={currentWeight}
                              onChange={(e) => handleWeightChange(product.id, e.target.value)}
                              className="w-full bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm py-1.5 px-2 text-xs text-stone-800 font-medium focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                            >
                              {product.weightOptions.map((opt) => (
                                <option key={opt.weight} value={opt.weight}>
                                  {opt.weight} ({opt.serves}) {opt.pricePlaceholder && opt.pricePlaceholder !== '[PRICE]' ? `— $${opt.pricePlaceholder}` : ''}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Price & Action Buttons */}
                        <div>
                          <div className="flex items-baseline justify-between pt-2 border-t border-[#EAE6DF] mb-3">
                            <div>
                              <span className="text-[10px] text-stone-500 block leading-none mb-0.5">Price:</span>
                              <p className="font-serif text-lg font-bold text-[#151515]">
                                {displayPrice === '[PRICE]' ? '$' + product.defaultPrice : '$' + displayPrice}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => onOpenCompliance('delivery-info')}
                              className="text-[10px] text-[#2E6B4D] font-medium hover:underline flex items-center gap-1"
                            >
                              <Truck className="w-3 h-3" />
                              <span>Cold-Chain NSW</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => onSelectProduct(product)}
                              className="w-full bg-white hover:bg-[#F8F5EF] text-stone-800 text-[11px] font-bold uppercase tracking-wider py-2 px-2 rounded-sm border border-[#EAE6DF] transition-colors flex items-center justify-center gap-1.5"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Details</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleAdd(product)}
                              className={`w-full text-[11px] font-bold uppercase tracking-wider py-2 px-2 rounded-sm shadow-xs transition-all flex items-center justify-center gap-1.5 ${
                                isJustAdded
                                  ? 'bg-[#2E6B4D] text-white'
                                  : 'bg-[#7A1F2B] hover:bg-[#5A1720] text-white'
                              }`}
                            >
                              {isJustAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <ShoppingBag className="w-3.5 h-3.5" />
                                  <span>Add</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
