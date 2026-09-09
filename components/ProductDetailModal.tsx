'use client';

import { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Check, 
  ChevronRight, 
  Thermometer, 
  Flame, 
  Info, 
  Code, 
  MapPin, 
  Star 
} from 'lucide-react';
import { Product } from '@/lib/types';
import { BUSINESS_CONFIG, ALL_PRODUCTS } from '@/lib/data';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, weight: string, quantity: number) => void;
  onSelectProduct: (product: Product) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onSelectProduct,
  onOpenCompliance,
}: ProductDetailModalProps) {
  const [selectedWeight, setSelectedWeight] = useState(product?.weightOptions[0]?.weight || '');
  const [quantity, setQuantity] = useState(1);
  const [postcode, setPostcode] = useState('');
  const [postcodeResult, setPostcodeResult] = useState<string | null>(null);
  const [showSchema, setShowSchema] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const currentOption =
    product.weightOptions.find((w) => w.weight === selectedWeight) || product.weightOptions[0];

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    setPostcodeResult(
      `Postcode ${postcode} checked: [VERIFIED COLD-CHAIN DELIVERY ROUTE AVAILABLE - INSERT DISPATCH SCHEDULE]`
    );
  };

  const handleAdd = () => {
    onAddToCart(product, selectedWeight, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const relatedProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  // Recommended JSON-LD schema markup
  const jsonLdSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [product.image],
    description: product.fullDescription,
    sku: `SKU-${product.id.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: BUSINESS_CONFIG.businessName,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
      price: '[PRICE]',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: BUSINESS_CONFIG.businessName,
      },
    },
  };

  return (
    <div
      id="product-detail-modal"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 animate-fade-in relative text-[#151515]">
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-100/90 text-stone-700 hover:text-black hover:bg-stone-200 transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Container */}
        <div className="p-6 sm:p-8">
          {/* Breadcrumbs */}
          <nav aria-label="Product Breadcrumbs" className="mb-4 flex items-center gap-1.5 text-xs text-stone-500 font-mono">
            <span>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="capitalize">{product.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-800 font-semibold">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left Column: Image & Alt Strategy (1:1 Aspect Ratio) */}
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200 mb-3 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={`${product.name} - Fresh Australian meat cut carefully portioned and packaged`}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#7A1F2B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded shadow">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[10px] font-mono px-2.5 py-1 rounded">
                  Stock: {product.stockStatus}
                </span>
              </div>

              {/* Alt Text Recommendation Notice for Compliance / SEO */}
              <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200 text-[11px] text-stone-600 font-mono">
                <span className="font-bold text-stone-700">Image Alt Tag:</span>{' '}
                {`"${product.name} - Australian butcher cut, vacuum sealed and cold-chain delivered"`}
              </div>
            </div>

            {/* Right Column: Title, Pricing, Selectors & CTAs */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C7903E] font-bold mb-1">
                  Department: {product.subCategory || product.category}
                </p>
                <h1
                  id="product-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-extrabold text-[#151515] mb-2"
                >
                  {product.name}
                </h1>

                {/* Price Placeholder */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-serif text-3xl font-extrabold text-[#7A1F2B]">
                    From ${product.defaultPrice}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">AUD (Incl. GST if applicable)</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* Weight Selector */}
                <div className="mb-4">
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    Choose Pack Size / Weight:
                  </label>
                  <div className="space-y-2">
                    {product.weightOptions.map((opt) => (
                      <button
                        key={opt.weight}
                        type="button"
                        onClick={() => setSelectedWeight(opt.weight)}
                        className={`w-full p-2.5 rounded-lg text-left text-xs flex items-center justify-between border transition-all ${
                          selectedWeight === opt.weight
                            ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 font-semibold text-stone-900 ring-1 ring-[#7A1F2B]'
                            : 'border-stone-200 hover:border-stone-300 text-stone-700'
                        }`}
                      >
                        <div>
                          <span>{opt.weight}</span>
                          <span className="text-stone-500 text-[11px] ml-2 font-normal">
                            ({opt.serves})
                          </span>
                        </div>
                        <span className="font-mono text-stone-800 font-semibold">
                          ${opt.pricePlaceholder}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector & Add Button */}
                <div className="flex items-center gap-3 pt-2 mb-6">
                  <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-stone-600 hover:bg-stone-200 font-bold text-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-xs font-mono font-bold text-stone-800">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-stone-600 hover:bg-stone-200 font-bold text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`flex-1 text-xs sm:text-sm font-semibold py-3 px-4 rounded-lg shadow transition-all flex items-center justify-center gap-2 ${
                      justAdded
                        ? 'bg-[#2E6B4D] text-white'
                        : 'bg-[#7A1F2B] hover:bg-[#5F1721] text-white'
                    }`}
                  >
                    {justAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart ({selectedWeight})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Delivery Postcode Checker Placeholder */}
              <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2E6B4D]" />
                  <span>Check Cold-Chain Delivery to Your Postcode</span>
                </div>
                <form onSubmit={handlePostcodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Enter AU Postcode (e.g. 2000, 3000)..."
                    maxLength={4}
                    className="flex-1 text-xs px-2.5 py-1.5 bg-white border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors"
                  >
                    Check Postcode
                  </button>
                </form>

                {postcodeResult && (
                  <p className="mt-2 text-[11px] font-mono text-[#2E6B4D] bg-[#2E6B4D]/10 p-2 rounded border border-[#2E6B4D]/20">
                    {postcodeResult}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Product Information Framework & Tabs */}
          <div className="border-t border-stone-200 pt-8 space-y-6">
            <h2 className="font-serif text-xl font-bold text-[#151515]">
              Product Specifications & Food Safety Framework
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
              {/* Full Description & Cut Info */}
              <div className="space-y-3">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-[#7A1F2B]" />
                    <span>Cut & Preparation Notes</span>
                  </h4>
                  <p className="leading-relaxed text-stone-600 mb-2">
                    {product.fullDescription}
                  </p>
                  <p className="font-mono text-[11px] text-stone-500">
                    <strong>Butcher Cut Profile:</strong> {product.cutInformation}
                  </p>
                </div>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#C7903E]" />
                    <span>Cooking Suggestions</span>
                  </h4>
                  <p className="leading-relaxed text-stone-600">
                    {product.cookingSuggestions}
                  </p>
                </div>
              </div>

              {/* Compliance, Storage & Origin */}
              <div className="space-y-3">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-[#2E6B4D]" />
                    <span>Storage Instructions</span>
                  </h4>
                  <p className="leading-relaxed text-stone-600">
                    {product.storageInstructions}
                  </p>
                </div>

                {/* Country of Origin & Allergens Framework */}
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
                  <div>
                    <h5 className="font-bold text-stone-900 mb-0.5">Country of Origin:</h5>
                    <p className="font-mono text-[11px] text-stone-600">
                      {product.originPlaceholder}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-0.5">Allergen Information:</h5>
                    <p className="font-mono text-[11px] text-stone-600">
                      {product.allergensPlaceholder}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-0.5">Weight & Serving Guide:</h5>
                    <p className="text-[11px] text-stone-600">
                      Selected: {currentOption.weight} ({currentOption.serves}). Weights are approximate average portion sizes at packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links to Delivery & Refunds */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-stone-100/70 border border-stone-200 text-xs">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenCompliance('cold-chain')}
                  className="text-[#2E6B4D] font-semibold hover:underline flex items-center gap-1"
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Cold-Chain Delivery Policy</span>
                </button>
                <span className="text-stone-300">|</span>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('returns-refunds')}
                  className="text-stone-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Perishable Goods Refund Policy</span>
                </button>
              </div>

              {/* Schema Preview Toggle */}
              <button
                type="button"
                onClick={() => setShowSchema(!showSchema)}
                className="text-stone-500 hover:text-stone-800 font-mono text-[11px] flex items-center gap-1"
              >
                <Code className="w-3.5 h-3.5" />
                <span>{showSchema ? 'Hide Schema JSON-LD' : 'View Product Schema JSON-LD'}</span>
              </button>
            </div>

            {/* Product Schema Recommendation Viewer */}
            {showSchema && (
              <div className="bg-[#151515] text-stone-300 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-stone-800">
                <div className="text-[11px] text-[#C7903E] mb-2 font-bold">
                  Recommended Product Schema Markup (JSON-LD)
                </div>
                <pre>{JSON.stringify(jsonLdSchema, null, 2)}</pre>
              </div>
            )}

            {/* Related Products */}
            <div className="pt-6 border-t border-stone-200">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">
                You May Also Like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel);
                      setSelectedWeight(rel.weightOptions[0].weight);
                    }}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer flex gap-3 items-center group transition-all"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-stone-200 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#7A1F2B] line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="font-serif text-xs font-bold text-[#7A1F2B]">
                        From ${rel.defaultPrice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
