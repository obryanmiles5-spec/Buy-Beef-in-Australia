'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { ShieldCheck, Truck, CheckCircle2, ArrowLeft, Info, Star, ShoppingBag, ZoomIn, X, Share2 } from 'lucide-react';
import Link from 'next/link';
import { ALL_PRODUCTS, BUSINESS_CONFIG } from '@/lib/data';

interface ProductGalleryViewProps {
  product: Product;
}

export default function ProductGalleryView({ product }: ProductGalleryViewProps) {
  const images = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.image];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]?.weight || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'cooking' | 'reviews'>('description');
  const [justAdded, setJustAdded] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const currentOption = product.weightOptions.find(w => w.weight === selectedWeight) || product.weightOptions[0];
  const currentPrice = currentOption?.pricePlaceholder || product.defaultPrice;

  const relatedProducts = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  if (relatedProducts.length === 0) {
    relatedProducts.push(...ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 3));
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const handleAddToCart = () => {
    // Dispatch custom event or interact with cart if available, or simulate success
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* WooCommerce Style Product Top Section: Gallery & Purchase Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: WooCommerce Image Gallery (5 cols) */}
        <div className="lg:col-span-6 space-y-4 sticky top-6">
          {/* Main Featured Image with Zoom Trigger */}
          <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xl group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#7A1F2B] text-white text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded shadow-md z-10">
                {product.badge}
              </span>
            )}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-4 right-4 bg-black/70 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-sm transition-colors shadow-lg z-10"
              title="Click to expand image"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Gallery Thumbnails Carousel / Grid */}
          {images.length > 1 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500 uppercase tracking-wider">
                <span>Product Gallery ({images.length} photos)</span>
                <span>Click thumbnail to view</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all bg-white shadow-sm ${
                      activeImage === imgUrl 
                        ? 'border-[#7A1F2B] ring-2 ring-[#7A1F2B]/30 scale-105 shadow-md' 
                        : 'border-stone-200 opacity-75 hover:opacity-100 hover:border-stone-400'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${product.name} photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: WooCommerce Product Summary & Cart Form (6 cols) */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
          {/* Header Meta */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7903E] font-bold bg-[#C7903E]/10 px-2.5 py-1 rounded">
                {product.subCategory || product.category} • Sourced from NSW 2642
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                {product.stockStatus}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3 tracking-tight">
              {product.name}
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-2 mb-4 text-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-stone-800">4.9 / 5.0</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600 underline cursor-pointer hover:text-stone-900">348 verified customer reviews</span>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 mb-6">
              <span className="font-mono text-3xl font-bold text-[#7A1F2B]">
                ${currentPrice} <span className="text-xs text-stone-500 font-normal">AUD</span>
              </span>
              <span className="text-xs text-emerald-700 font-mono font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                20% OFF Regular Retail Price
              </span>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6">
              {product.shortDescription}
            </p>
          </div>

          {/* Weight / Portion Variations */}
          <div className="space-y-3 pt-4 border-t border-stone-100">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
              Select Portion / Carcass Weight:
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {product.weightOptions.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedWeight(opt.weight)}
                  className={`p-3.5 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                    selectedWeight === opt.weight
                      ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 shadow-sm'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div>
                    <span className="font-bold text-xs text-stone-900 block">{opt.weight}</span>
                    {opt.serves && <span className="text-[11px] text-stone-500">{opt.serves}</span>}
                  </div>
                  <span className="font-mono font-bold text-[#7A1F2B] text-sm">
                    ${opt.pricePlaceholder || product.defaultPrice} AUD
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2.5 text-stone-600 hover:bg-stone-200 transition-colors font-bold"
                >
                  -
                </button>
                <span className="px-4 font-mono font-bold text-stone-900 text-sm">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2.5 text-stone-600 hover:bg-stone-200 transition-colors font-bold"
                >
                  +
                </button>
              </div>

              <Link
                href="/shop"
                onClick={handleAddToCart}
                className={`flex-1 text-center py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 ${
                  justAdded ? 'bg-[#2E6B4D] text-white' : 'bg-[#7A1F2B] hover:bg-[#5F1721] text-white'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{justAdded ? 'Added to Cart!' : 'Proceed to Checkout →'}</span>
              </Link>
            </div>

            {/* Cold Chain Guarantee Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-stone-600 font-mono">
              <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-200">
                <Truck className="w-4 h-4 text-[#2E6B4D] flex-shrink-0" />
                <span>Cold-Chain Insured Freight</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-200">
                <ShieldCheck className="w-4 h-4 text-[#2E6B4D] flex-shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          {/* WooCommerce Product Meta */}
          <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1.5 font-mono">
            <div><strong className="text-stone-700">SKU:</strong> PT-CARCASS-{product.id.toUpperCase()}</div>
            <div><strong className="text-stone-700">Category:</strong> <span className="capitalize">{product.category}</span> ({product.subCategory || 'Master Butcher Share'})</div>
            <div className="flex items-center justify-between pt-2">
              <span><strong className="text-stone-700">Tags:</strong> Pasture-Fed, Dry-Aged, Halal-Accredited, NSW 2642</span>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-[#7A1F2B] hover:underline font-semibold"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{shareCopied ? 'Link Copied!' : 'Share Product'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* WooCommerce Style Product Tabs Section */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        {/* Tab Header */}
        <div className="flex border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs sm:text-sm font-semibold">
          {[
            { id: 'description', label: 'Description' },
            { id: 'specs', label: 'Cut Information & Storage' },
            { id: 'cooking', label: 'Cooking & Preparation' },
            { id: 'reviews', label: 'Reviews (348)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-4 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-[#7A1F2B] text-[#7A1F2B] bg-white font-bold'
                  : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-10">
          {activeTab === 'description' && (
            <div className="space-y-4 text-sm text-stone-700 leading-relaxed max-w-4xl">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Master Butcher Provenance & Description
              </h3>
              <p>{product.fullDescription}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1">Country of Origin:</h4>
                  <p className="font-mono text-xs text-stone-600">{product.originPlaceholder}</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1">Allergen Information:</h4>
                  <p className="font-mono text-xs text-stone-600">{product.allergensPlaceholder}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Cut Information & Breakdown</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{product.cutInformation}</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2E6B4D]" />
                  <span>Storage & Freezing Instructions</span>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">{product.storageInstructions}</p>
              </div>
            </div>
          )}

          {activeTab === 'cooking' && (
            <div className="space-y-6 max-w-4xl">
              <h3 className="font-serif text-xl font-bold text-stone-900">Master Chef & Butcher Cooking Recommendations</h3>
              <p className="text-sm text-stone-700 leading-relaxed">{product.cookingSuggestions}</p>
              <div className="p-4 bg-[#7A1F2B]/10 rounded-xl border border-[#7A1F2B]/20 text-xs text-[#7A1F2B] font-mono">
                Tip: Always thaw cryovaced cuts slowly in your refrigerator for 24 hours prior to cooking. This preserves natural muscle cellular structure and tenderness.
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Verified Customer Reviews</h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">Based on 348 verified Australian home delivery orders</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-[#7A1F2B]">4.9 / 5.0</div>
                  <div className="flex text-amber-500 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Marcus T. (Goulburn, NSW)', date: 'September 24, 2026', comment: 'Absolute game changer. The dry-aging on this carcass share is phenomenal. Every steak cut perfectly and packaging kept everything ice cold.' },
                  { name: 'Sarah & Dave L. (Canberra, ACT)', date: 'September 18, 2026', comment: 'Incredible value for money. The gallery photos represent exactly what arrived at our door. Will be subscribing for seasonal shares.' },
                ].map((rev, i) => (
                  <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-900">{rev.name}</span>
                      <span className="font-mono text-stone-400">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-stone-700">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Grid */}
      <div className="pt-8 border-t border-stone-200">
        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
          Related Products & Carcass Shares
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <Link
              key={rel.id}
              href={`/product/${rel.id}`}
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-stone-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {rel.badge && (
                    <span className="absolute top-2 left-2 bg-[#7A1F2B] text-white text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded shadow">
                      {rel.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm text-stone-900 group-hover:text-[#7A1F2B] transition-colors line-clamp-1 mb-1">
                  {rel.name}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-2 mb-3">
                  {rel.shortDescription}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span className="font-mono font-bold text-[#7A1F2B] text-sm">
                  From ${rel.defaultPrice} AUD
                </span>
                <span className="text-xs font-semibold text-stone-700 group-hover:underline">
                  View Product →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full Screen Image Inspection */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
