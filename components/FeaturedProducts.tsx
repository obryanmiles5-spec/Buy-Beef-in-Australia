'use client';

import { useState } from 'react';
import { ShoppingBag, Eye, Truck, Check, ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types';
import { FEATURED_PRODUCTS } from '@/lib/data';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, weight: string, quantity: number) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function FeaturedProducts({
  onSelectProduct,
  onAddToCart,
  onOpenCompliance,
}: FeaturedProductsProps) {
  // Store selected weight option per product
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    FEATURED_PRODUCTS.forEach((p) => {
      initial[p.id] = p.weightOptions[0]?.weight || '';
    });
    return initial;
  });

  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleWeightChange = (productId: string, weight: string) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleAdd = (product: Product) => {
    const weight = selectedWeights[product.id] || product.weightOptions[0].weight;
    onAddToCart(product, weight, 1);
    setAddedNotice(product.id);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2000);
  };

  return (
    <section
      id="featured-products-section"
      aria-labelledby="featured-products-heading"
      className="relative z-20 py-16 sm:py-24 lg:py-28 bg-[#F8F5EF] text-[#151515] border-b border-[#EAE6DF]"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-4 pb-4 border-b border-[#EAE6DF]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#7A1F2B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A1F2B]">
                Farm-Direct Carcass Shares &amp; Master Butcher Portions
              </span>
            </div>
            <h2
              id="featured-products-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[#151515] font-bold"
            >
              1/4, 1/2 &amp; Full Carcass Shares
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex text-[11px] font-mono text-stone-500 uppercase">
              Ethically Sourced • Vacuum Packed
            </span>
            <button
              type="button"
              id="featured-products-view-catalog-btn"
              onClick={() => onOpenCompliance('food-safety')}
              className="text-[11px] font-bold uppercase tracking-widest text-[#7A1F2B] hover:text-[#5A1720] border-b border-[#7A1F2B] pb-1 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <span>Cold-Chain Packaging Info</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 8 Product Cards Grid - Full Width & Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => {
            const currentWeight = selectedWeights[product.id] || product.weightOptions[0].weight;
            const isJustAdded = addedNotice === product.id;

            return (
              <article
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-sm overflow-hidden border border-[#EAE6DF] hover:border-[#C7903E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Badge (1:1 Aspect Ratio) */}
                <div 
                  className="relative aspect-square bg-stone-100 overflow-hidden cursor-pointer" 
                  onClick={() => onSelectProduct(product)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={`${product.name} - Fresh Australian meat cut`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
                  
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#7A1F2B] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-md">
                      {product.badge}
                    </span>
                  )}
                  {/* Stock Status Placeholder */}
                  <span className="absolute top-3 right-3 bg-[#151515]/85 backdrop-blur-xs text-[#F8F5EF] text-[9px] font-mono px-2.5 py-1 rounded-sm border border-stone-700">
                    {product.stockStatus}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category / Cut Tag */}
                    <p className="text-[10px] font-bold text-[#C7903E] uppercase tracking-widest mb-1.5 font-mono">
                      {product.subCategory || product.category}
                    </p>

                    {/* Product Title */}
                    <h3
                      className="font-serif text-lg sm:text-xl font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors cursor-pointer line-clamp-1 mb-2"
                      onClick={() => onSelectProduct(product)}
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Weight Selector */}
                    <div className="mb-4">
                      <label
                        htmlFor={`weight-select-${product.id}`}
                        className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 font-mono"
                      >
                        Portion / Share Size:
                      </label>
                      <select
                        id={`weight-select-${product.id}`}
                        value={currentWeight}
                        onChange={(e) => handleWeightChange(product.id, e.target.value)}
                        className="w-full bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm py-2 px-2.5 text-xs text-stone-800 font-medium focus:ring-1 focus:ring-[#7A1F2B] focus:border-[#7A1F2B] transition-colors cursor-pointer min-h-[38px]"
                      >
                        {product.weightOptions.map((opt) => (
                          <option key={opt.weight} value={opt.weight}>
                            {opt.weight} ({opt.serves})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Price & Delivery Link */}
                  <div>
                    <div className="flex items-baseline justify-between pt-3 border-t border-[#EAE6DF] mb-3">
                      <div>
                        <span className="text-[10px] text-stone-500 block leading-none mb-0.5 font-mono">Starting At:</span>
                        <p className="font-serif text-xl font-bold text-[#151515]">
                          ${product.defaultPrice}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCompliance('delivery-info')}
                        className="text-[10px] text-[#2E6B4D] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                        title="View Cold-Chain Delivery Information"
                      >
                        <Truck className="w-3.5 h-3.5 text-[#2E6B4D]" />
                        <span>Chilled Delivery</span>
                      </button>
                    </div>

                    {/* Action Buttons - Touch friendly on mobile (min 44px height) */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        id={`view-btn-${product.id}`}
                        onClick={() => onSelectProduct(product)}
                        className="w-full min-h-[44px] bg-white hover:bg-[#F8F5EF] text-stone-800 text-[11px] font-bold uppercase tracking-wider py-2.5 px-2 rounded-sm border border-[#EAE6DF] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      <button
                        type="button"
                        id={`add-btn-${product.id}`}
                        onClick={() => handleAdd(product)}
                        className={`w-full min-h-[44px] text-[11px] font-bold uppercase tracking-wider py-2.5 px-2 rounded-sm shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
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
                            <span>Add to Cart</span>
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
      </div>
    </section>
  );
}
