'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, Check, Sparkles } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import { Category, Product } from '@/lib/types';
import { CATEGORIES } from '@/lib/data';

interface CategoryPageClientProps {
  category: Category;
  products: Product[];
  categorySlug: string;
}

export default function CategoryPageClient({
  category,
  products,
  categorySlug,
}: CategoryPageClientProps) {
  const [addedCutId, setAddedCutId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    const defaultOption = product.weightOptions[0];
    const unitPrice = defaultOption?.pricePlaceholder || product.defaultPrice;
    const weight = defaultOption?.weight || 'Default Pack';

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
        currentItems[existingIndex].quantity += 1;
      } else {
        currentItems.push({
          product,
          selectedWeight: weight,
          quantity: 1,
          pricePerUnit: unitPrice,
        });
      }

      localStorage.setItem('pt_cart_items', JSON.stringify(currentItems));
      window.dispatchEvent(new Event('pt_cart_updated'));

      setAddedCutId(product.id);
      setTimeout(() => setAddedCutId(null), 1800);
    }
  };

  const breadcrumbs = [
    { label: 'Shop Departments', href: '/shop' },
    { label: category.name },
  ];

  return (
    <SiteLayout
      currentView="shop"
      breadcrumbs={breadcrumbs}
      backFallbackHref="/shop"
      backFallbackLabel="All Departments"
      showBackBar={true}
    >
      {/* 1. Category Quick-Switcher Tabs / Carousel */}
      <div className="bg-white border-b border-[#EAE6DF] sticky top-16 sm:top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <Link
              href="/shop"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-colors bg-stone-100 text-stone-700 hover:bg-stone-200"
            >
              All Cuts
            </Link>
            {CATEGORIES.filter((c) => c.id !== 'wholesale').map((cat) => {
              const isActive = (cat.slug || cat.id) === categorySlug || cat.id === category.id;
              const href = `/shop/${cat.slug || cat.id}`;

              return (
                <Link
                  key={cat.id}
                  href={href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#7A1F2B] text-white shadow-xs'
                      : 'bg-[#F8F5EF] text-stone-700 hover:bg-[#EAE6DF] hover:text-[#151515]'
                  }`}
                >
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Department Header & Introduction */}
      <div className="bg-[#151515] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#C7903E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#E2B766] mb-3">
            <span className="bg-[#C7903E]/20 text-[#E2B766] px-2.5 py-0.5 rounded border border-[#C7903E]/30 uppercase tracking-widest font-bold text-[10px]">
              NSW 2642 Pastoral Sourcing
            </span>
            <span className="text-stone-400">•</span>
            <span>{products.length} Cuts & Shares Available</span>
            <span className="text-stone-400">•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Cold-Chain Certified
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#F8F5EF]">
            {category.h1 || category.name}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed mb-6 font-sans">
            {category.introCopy || category.shortDescription}
          </p>

          {/* Subcategories quick filter pills if available */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                Department Cuts:
              </span>
              {category.subcategories.map((sub, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono text-stone-300 bg-stone-800/80 px-2.5 py-0.5 rounded border border-stone-700"
                >
                  {sub}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3. Products Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        {/* Navigation Bar & Results Count */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE6DF]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {category.name} Selection
            </h2>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              Vacuum-sealed in puncture-proof barrier cryovac • Dispatched chilled in thermal cartons
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined' && window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = '/shop';
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#7A1F2B] px-3 py-1.5 bg-white border border-stone-200 rounded-sm hover:border-[#7A1F2B] transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Previous</span>
            </button>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A1F2B] hover:underline"
            >
              <span>All Departments →</span>
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-stone-200 p-8">
            <p className="font-serif text-xl font-bold text-stone-900 mb-2">
              No items currently listed under this category
            </p>
            <p className="text-xs text-stone-500 mb-6">
              Please check our other fresh meat departments or contact master butcher dispatch.
            </p>
            <Link
              href="/shop"
              className="inline-block px-5 py-2.5 bg-[#7A1F2B] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#5F1721] transition-colors shadow-xs"
            >
              Browse All Meat Departments
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {products.map((product) => {
              const isAdded = addedCutId === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-md border border-[#EAE6DF] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C7903E] transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Product Image */}
                    <Link href={`/product/${product.id}`} className="block relative aspect-[16/10] overflow-hidden bg-stone-100 cursor-pointer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={`${product.name} - Fresh Australian meat cut`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#7A1F2B] text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs z-10">
                          {product.badge}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono px-2 py-0.5 rounded-xs border border-white/10 z-10">
                        {product.stockStatus || 'In Stock'}
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7903E] font-bold block mb-1">
                        {product.subCategory || category.name}
                      </span>
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#7A1F2B] transition-colors line-clamp-2 mb-2">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>

                      {/* Cut Sourcing Info Tag */}
                      <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-stone-500 mb-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{product.originPlaceholder || 'NSW 2642 Pastoral Stations'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Order CTAs */}
                  <div className="p-5 pt-0 flex flex-col gap-3 border-t border-stone-100 mt-auto bg-stone-50/50">
                    <div className="flex items-baseline justify-between pt-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-stone-500 block">From</span>
                        <span className="font-mono text-xl font-bold text-[#7A1F2B]">
                          ${product.defaultPrice} <span className="text-xs text-stone-500 font-normal">AUD</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-stone-500">
                        {product.weightOptions[0]?.weight}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/product/${product.id}`}
                        className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-xs font-semibold py-2.5 px-3 rounded-xs text-center transition-colors shadow-xs"
                      >
                        View Cut
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleQuickAdd(product)}
                        className={`text-xs font-bold py-2.5 px-3 rounded-xs transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#7A1F2B] hover:bg-[#5F1721] text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Quick Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 4. Category FAQ Section */}
        {category.faqSuggestions && category.faqSuggestions.length > 0 && (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-12">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions: {category.name}
            </h3>
            <div className="space-y-5 divide-y divide-stone-100">
              {category.faqSuggestions.map((faq, i) => (
                <div key={i} className={i === 0 ? '' : 'pt-5'}>
                  <h4 className="font-bold text-stone-900 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7903E]" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed pl-3.5">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Bottom Navigation Helper */}
        <div className="p-6 bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              Looking for other cuts or custom carcass breakdowns?
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Explore all 10 departments, artisan sausage links, or commercial wholesale shares.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined' && window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = '/shop';
                }
              }}
              className="px-4 py-2 bg-white border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider rounded-sm hover:border-[#7A1F2B] hover:text-[#7A1F2B] transition-colors"
            >
              ← Previous Page
            </button>
            <Link
              href="/shop"
              className="px-4 py-2 bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-xs"
            >
              All Departments →
            </Link>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
