'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ShoppingBag, ArrowRight, ShieldCheck, Check, Sparkles, Filter } from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '@/lib/data';
import { Product } from '@/lib/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
  onAddToCart?: (product: Product, weight: string, quantity: number) => void;
  onNavigateToShop?: (searchTerm?: string, category?: string) => void;
}

const POPULAR_SEARCH_TERMS = [
  'Ribeye Steak',
  '1/4 Beef Share',
  'F1 Wagyu Brisket',
  'Lamb Cutlets',
  'Grass-Fed Mince',
  'BBQ Sausages',
  'Pork Belly',
  'Carcass Share',
];

const SEARCH_CATEGORIES = [
  { id: 'all', label: 'All Cuts' },
  { id: 'beef', label: 'Beef & Wagyu' },
  { id: 'lamb', label: 'Pasture Lamb' },
  { id: 'pork', label: 'Free-Range Pork' },
  { id: 'chicken', label: 'Poultry' },
  { id: 'fish', label: 'Wild Fish' },
  { id: 'packs', label: 'Freezer Packs' },
];

export default function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart,
  onNavigateToShop,
}: SearchModalProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens & lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Dynamic real-time product filtering as user types
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const terms = query ? query.split(/\s+/).filter(Boolean) : [];

    return ALL_PRODUCTS.filter((product) => {
      // 1. Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'beef' && product.category !== 'beef') return false;
        if (selectedCategory === 'lamb' && product.category !== 'lamb') return false;
        if (selectedCategory === 'pork' && product.category !== 'pork') return false;
        if (selectedCategory === 'chicken' && product.category !== 'chicken') return false;
        if (selectedCategory === 'fish' && product.category !== 'fish' && product.category !== 'seafood') return false;
        if (selectedCategory === 'packs' && product.category !== 'packs') return false;
      }

      // 2. Query search across multiple fields
      if (terms.length === 0) return true;

      const searchableText = [
        product.name,
        product.subCategory || '',
        product.category,
        product.shortDescription || '',
        product.cutInformation || '',
        product.originPlaceholder || '',
        product.badge || '',
      ]
        .join(' ')
        .toLowerCase();

      return terms.every((term) => searchableText.includes(term));
    });
  }, [searchQuery, selectedCategory]);

  const handleProductClick = (product: Product) => {
    onClose();
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      router.push(`/product/${product.id}`);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const defaultWeight = product.weightOptions?.[0]?.weight || '1 Pack';
    if (onAddToCart) {
      onAddToCart(product, defaultWeight, 1);
      setAddedProductId(product.id);
      setTimeout(() => {
        setAddedProductId(null);
      }, 1500);
    }
  };

  const handleViewAllInShop = () => {
    onClose();
    if (onNavigateToShop) {
      onNavigateToShop(searchQuery.trim(), selectedCategory !== 'all' ? selectedCategory : undefined);
    } else {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set('q', searchQuery.trim());
      if (selectedCategory !== 'all') params.set('cat', selectedCategory);
      router.push(`/shop?${params.toString()}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Meat Cuts and Carcass Shares"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-3 sm:p-4 md:p-6 pt-12 sm:pt-16 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] w-full max-w-5xl rounded-lg shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh] text-[#151515]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input & Controls */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#EAE6DF] space-y-3.5 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A1F2B]" />
              <h2 className="font-serif text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                Search Australian Cuts &amp; Shares
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                ESC to close
              </span>
              <button
                type="button"
                id="search-modal-close-btn"
                onClick={onClose}
                aria-label="Close search"
                className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-black hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Box Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              id="search-modal-dynamic-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to filter steaks, brisket, wagyu, quarter carcass, lamb cutlets, sausages..."
              className="w-full pl-11 pr-10 py-3 bg-[#F8F5EF] border border-[#D5CFC4] focus:border-[#7A1F2B] focus:bg-white rounded-md text-sm text-[#151515] placeholder:text-stone-400 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  inputRef.current?.focus();
                }}
                title="Clear search"
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-600 font-bold shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#7A1F2B]" />
              Filter:
            </span>
            {SEARCH_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`search-cat-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-sm text-xs font-medium whitespace-nowrap transition-colors border ${
                    isActive
                      ? 'bg-[#7A1F2B] text-white border-[#7A1F2B] shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info & Count Bar */}
        <div className="px-4 sm:px-5 py-2.5 bg-[#F1EEE7] border-b border-[#EAE6DF] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-600 shrink-0">
          <div className="flex items-center gap-2">
            <span>
              {searchQuery.trim() ? (
                <>
                  Found <strong className="text-[#151515] font-bold">{filteredProducts.length}</strong> cuts matching{' '}
                  <span className="text-[#7A1F2B] font-semibold">&ldquo;{searchQuery}&rdquo;</span>
                </>
              ) : (
                <>
                  Showing <strong className="text-[#151515] font-bold">{filteredProducts.length}</strong> cuts in{' '}
                  <span className="text-stone-900 font-semibold">
                    {SEARCH_CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'All'}
                  </span>
                </>
              )}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#2E6B4D] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>NSW 2642 Cold-Chain Guaranteed</span>
          </div>
        </div>

        {/* Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {/* Quick Popular Searches if query is empty */}
          {!searchQuery.trim() && (
            <div className="mb-4 pb-4 border-b border-[#EAE6DF]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-bold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C7903E]" />
                <span>Popular Search Queries:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_SEARCH_TERMS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setSearchQuery(term)}
                    className="px-2.5 py-1 bg-white hover:bg-[#7A1F2B] hover:text-white rounded-sm text-xs text-stone-700 border border-stone-200 transition-colors shadow-xs"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grid Layout of Filtered Results */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredProducts.map((product) => {
                const defaultWeight = product.weightOptions?.[0]?.weight || 'Standard';
                const isJustAdded = addedProductId === product.id;

                return (
                  <div
                    key={product.id}
                    id={`search-result-${product.id}`}
                    onClick={() => handleProductClick(product)}
                    className="group bg-white rounded-md border border-[#EAE6DF] hover:border-[#7A1F2B] transition-all hover:shadow-md overflow-hidden flex flex-col justify-between cursor-pointer text-left"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {product.badge && (
                          <span className="absolute top-2 left-2 bg-[#7A1F2B] text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shadow-xs">
                            {product.badge}
                          </span>
                        )}
                        <span className="absolute top-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                          {product.stockStatus || 'In Stock'}
                        </span>
                      </div>

                      {/* Content Details */}
                      <div className="p-3">
                        <div className="flex items-center justify-between text-[10px] text-stone-600 font-mono uppercase tracking-wider mb-1">
                          <span className="text-[#7A1F2B] font-bold truncate max-w-[65%]">
                            {product.subCategory || product.category}
                          </span>
                          <span className="text-stone-600 truncate">
                            NSW Sourced
                          </span>
                        </div>

                        <h3 className="font-serif text-sm font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors line-clamp-1 mb-1">
                          {product.name}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-2 leading-snug mb-2 font-sans">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row: Price & Actions */}
                    <div className="px-3 pb-3 pt-2 border-t border-[#F1EEE7] bg-[#FAF9F5] flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-stone-600 block">From</span>
                        <div className="text-sm font-bold text-[#151515]">
                          ${product.defaultPrice}{' '}
                          <span className="text-[10px] font-normal font-mono text-stone-600">AUD</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {onAddToCart && (
                          <button
                            type="button"
                            id={`search-add-btn-${product.id}`}
                            onClick={(e) => handleQuickAdd(e, product)}
                            className={`px-2.5 py-1.5 text-xs font-bold rounded transition-colors flex items-center gap-1 shadow-xs cursor-pointer ${
                              isJustAdded
                                ? 'bg-[#2E6B4D] text-white'
                                : 'bg-stone-100 hover:bg-[#7A1F2B] text-stone-700 hover:text-white border border-stone-200'
                            }`}
                            title={`Add ${defaultWeight} to cart`}
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
                        )}
                        <span className="text-xs font-medium text-[#7A1F2B] group-hover:underline flex items-center">
                          View &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* No Results Found State */
            <div className="py-12 px-4 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900 mb-1">
                No matching meat cuts found
              </h3>
              <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                We couldn&apos;t find any cuts matching &ldquo;{searchQuery}&rdquo; in the selected category.
                Try adjusting your search terms or view our full meat catalog.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-3.5 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded transition-colors"
                >
                  Clear Filters
                </button>
                <button
                  type="button"
                  onClick={handleViewAllInShop}
                  className="px-3.5 py-1.5 bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-xs font-medium rounded transition-colors flex items-center gap-1.5"
                >
                  <span>Browse Full Shop Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Strip */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] text-stone-500 font-sans text-center sm:text-left">
            Need custom whole beast primal cut sheets? Contact our butcher desk at{' '}
            <strong className="text-stone-700">1300 000 632</strong>
          </p>
          <button
            type="button"
            id="search-view-all-shop-btn"
            onClick={handleViewAllInShop}
            className="w-full sm:w-auto px-4 py-2 bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <span>View All in Shop Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
