'use client';

import { useState } from 'react';
import { ShoppingBag, Eye, Truck, Check } from 'lucide-react';
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
      className="py-16 sm:py-24 bg-[#F8F5EF] text-[#151515] border-b border-[#EAE6DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A1F2B] block mb-2">
            Prime Australian Beef &amp; Carcass Shares
          </span>
          <h2
            id="featured-products-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight mb-3"
          >
            Featured Beef Cuts &amp; Carcass Shares
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Artisan Australian Black Angus and F1 Wagyu beef portions, bulk carcass shares, and butcher prime cuts, packed in temperature-controlled cold-chain insulation.
          </p>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURED_PRODUCTS.map((product) => {
            const currentWeight = selectedWeights[product.id] || product.weightOptions[0].weight;
            const isJustAdded = addedNotice === product.id;

            return (
              <article
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-sm overflow-hidden border border-[#EAE6DF] hover:border-[#C7903E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Badge (1:1 Aspect Ratio) */}
                <div className="relative aspect-square bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={`${product.name} - Fresh Australian meat cut`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-[#7A1F2B] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  {/* Stock Status Placeholder */}
                  <span className="absolute top-2.5 right-2.5 bg-[#151515]/85 backdrop-blur-sm text-[#F8F5EF] text-[9px] font-mono px-2 py-0.5 rounded-sm border border-stone-700">
                    {product.stockStatus}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category / Cut Tag */}
                    <p className="text-[10px] font-bold text-[#C7903E] uppercase tracking-widest mb-1">
                      {product.subCategory || product.category}
                    </p>

                    {/* Product Title */}
                    <h3
                      className="font-serif text-base sm:text-lg font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors cursor-pointer line-clamp-1 mb-1.5"
                      onClick={() => onSelectProduct(product)}
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-stone-600 line-clamp-2 mb-3 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Weight Selector */}
                    <div className="mb-3">
                      <label
                        htmlFor={`weight-select-${product.id}`}
                        className="block text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1"
                      >
                        Pack Portion:
                      </label>
                      <select
                        id={`weight-select-${product.id}`}
                        value={currentWeight}
                        onChange={(e) => handleWeightChange(product.id, e.target.value)}
                        className="w-full bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm py-1.5 px-2 text-xs text-stone-800 font-medium focus:ring-1 focus:ring-[#7A1F2B] focus:border-[#7A1F2B] transition-colors"
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
                    <div className="flex items-baseline justify-between pt-2 border-t border-[#EAE6DF] mb-3">
                      <div>
                        <span className="text-[10px] text-stone-500 block leading-none mb-0.5">Price:</span>
                        <p className="font-serif text-lg font-bold text-[#151515]">
                          From ${product.defaultPrice}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenCompliance('delivery-info')}
                        className="text-[10px] text-[#2E6B4D] font-medium hover:underline flex items-center gap-1"
                        title="View Cold-Chain Delivery Information"
                      >
                        <Truck className="w-3 h-3" />
                        <span>Chilled Delivery</span>
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        id={`view-btn-${product.id}`}
                        onClick={() => onSelectProduct(product)}
                        className="w-full bg-white hover:bg-[#F8F5EF] text-stone-800 text-[11px] font-bold uppercase tracking-wider py-2 px-2 rounded-sm border border-[#EAE6DF] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>

                      <button
                        type="button"
                        id={`add-btn-${product.id}`}
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
      </div>
    </section>
  );
}
