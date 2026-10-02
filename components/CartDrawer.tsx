'use client';

import { useState, useMemo } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  AlertCircle,
  Tag,
  CreditCard,
  Coins,
  MapPin,
  Clock,
  Printer,
  ChevronRight,
  Info
} from 'lucide-react';
import { CartItem } from '@/lib/types';
import { BUSINESS_CONFIG } from '@/lib/data';
import BrandLogo from './BrandLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOpenCompliance: (sectionId?: string) => void;
}

interface PromoCodeState {
  code: string;
  applied: boolean;
  discountType: 'fixed' | 'percent' | 'freeship';
  discountValue: number;
  description: string;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenCompliance,
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'delivery' | 'payment' | 'success'>('cart');
  
  // Customer Form State
  const [customer, setCustomer] = useState({
    firstName: 'Alex',
    lastName: 'Smith',
    email: 'alex.smith@example.com.au',
    phone: '0412 345 678',
    street: '142 Collins Street',
    suburb: 'Melbourne',
    state: 'VIC',
    postcode: '3000',
    notes: 'Please leave in shaded portico near side gate if unattended.',
  });

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express-bbq' | 'pickup'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'payid' | 'crypto' | 'bank_transfer'>('card');
  const [atlConsent, setAtlConsent] = useState(true);
  const [orderId, setOrderId] = useState('AU-849201');

  // Promo Code State
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [activePromo, setActivePromo] = useState<PromoCodeState | null>(null);

  // Parse Numeric Calculations
  const calculations = useMemo(() => {
    const minOrderVal = parseFloat(BUSINESS_CONFIG.minimumOrder) || 80;
    const freeDeliveryThresholdVal = parseFloat(BUSINESS_CONFIG.freeDeliveryThreshold) || 180;
    const cryptoDiscountPercent = parseFloat(BUSINESS_CONFIG.cryptoDiscount) || 5;

    const itemCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

    const subtotal = items.reduce((acc, curr) => {
      const price = parseFloat(curr.pricePerUnit) || 0;
      return acc + price * curr.quantity;
    }, 0);

    const amountForFreeDelivery = Math.max(0, freeDeliveryThresholdVal - subtotal);
    const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThresholdVal) * 100));
    const qualifiesForFreeDelivery = subtotal >= freeDeliveryThresholdVal;

    // Delivery Fee
    let baseShippingFee = 0;
    if (shippingMethod === 'standard') {
      baseShippingFee = qualifiesForFreeDelivery ? 0 : 18.50;
    } else if (shippingMethod === 'express-bbq') {
      baseShippingFee = qualifiesForFreeDelivery ? 8.50 : 26.00;
    } else if (shippingMethod === 'pickup') {
      baseShippingFee = 0;
    }

    // Promo Discount calculation
    let promoDiscountAmount = 0;
    if (activePromo && activePromo.applied) {
      if (activePromo.discountType === 'fixed') {
        promoDiscountAmount = Math.min(subtotal, activePromo.discountValue);
      } else if (activePromo.discountType === 'percent') {
        promoDiscountAmount = (subtotal * activePromo.discountValue) / 100;
      } else if (activePromo.discountType === 'freeship') {
        baseShippingFee = 0;
      }
    }

    // Crypto discount
    let cryptoDiscountAmount = 0;
    if (paymentMethod === 'crypto') {
      const remainingSubtotal = Math.max(0, subtotal - promoDiscountAmount);
      cryptoDiscountAmount = (remainingSubtotal * cryptoDiscountPercent) / 100;
    }

    const totalDiscounts = promoDiscountAmount + cryptoDiscountAmount;
    const finalTotal = Math.max(0, subtotal - totalDiscounts + baseShippingFee);
    const meetsMinimumOrder = subtotal >= minOrderVal;
    const amountForMinOrder = Math.max(0, minOrderVal - subtotal);

    return {
      itemCount,
      subtotal,
      minOrderVal,
      meetsMinimumOrder,
      amountForMinOrder,
      freeDeliveryThresholdVal,
      amountForFreeDelivery,
      freeDeliveryProgress,
      qualifiesForFreeDelivery,
      baseShippingFee,
      promoDiscountAmount,
      cryptoDiscountAmount,
      totalDiscounts,
      finalTotal,
    };
  }, [items, shippingMethod, paymentMethod, activePromo]);

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const clean = promoInput.trim().toUpperCase();

    if (!clean) {
      setPromoError('Please enter a coupon code.');
      return;
    }

    if (clean === 'WELCOME10') {
      setActivePromo({
        code: 'WELCOME10',
        applied: true,
        discountType: 'fixed',
        discountValue: 10,
        description: '$10.00 Off First Order',
      });
      setPromoInput('');
    } else if (clean === 'AUSSIE5') {
      setActivePromo({
        code: 'AUSSIE5',
        applied: true,
        discountType: 'percent',
        discountValue: 5,
        description: '5% Off Australian Butcher Cuts',
      });
      setPromoInput('');
    } else if (clean === 'FREESHIP') {
      setActivePromo({
        code: 'FREESHIP',
        applied: true,
        discountType: 'freeship',
        discountValue: 0,
        description: 'Free Cold-Chain Delivery',
      });
      setPromoInput('');
    } else if (clean === 'CARNIVORE') {
      if (calculations.subtotal < 150) {
        setPromoError('Coupon "CARNIVORE" requires a minimum order of $150.00.');
        return;
      }
      setActivePromo({
        code: 'CARNIVORE',
        applied: true,
        discountType: 'fixed',
        discountValue: 15,
        description: '$15.00 Off Carnivore Order',
      });
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon code. Try WELCOME10, AUSSIE5, or FREESHIP.');
    }
  };

  const handleRemovePromo = () => {
    setActivePromo(null);
    setPromoError('');
  };

  const handleProceedToCheckout = () => {
    if (!calculations.meetsMinimumOrder) return;
    setCheckoutStep('shipping');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderId(`AU-${Math.floor(100000 + Math.random() * 900000)}`);
    setCheckoutStep('success');
  };

  const resetAndClose = () => {
    onClearCart();
    setCheckoutStep('cart');
    setActivePromo(null);
    onClose();
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex justify-end animate-fade-in font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between text-[#151515] relative animate-slide-left border-l border-[#EAE6DF]">
        {/* Cart Header */}
        <div className="p-4 sm:p-5 border-b border-[#EAE6DF] flex items-center justify-between bg-[#FDFCF9]">
          <div className="flex items-center gap-3">
            <BrandLogo variant="icon-only" />
            <div>
              <h2 id="cart-title" className="font-serif text-base sm:text-lg font-bold text-[#151515] leading-tight">
                {checkoutStep === 'cart' && `Shopping Cart (${calculations.itemCount} cuts)`}
                {checkoutStep === 'shipping' && '1. Delivery Details & Address'}
                {checkoutStep === 'delivery' && '2. Temperature-Controlled Dispatch'}
                {checkoutStep === 'payment' && '3. Secure Butcher Checkout'}
                {checkoutStep === 'success' && 'Order Dispatched to Butcher!'}
              </h2>
              <p className="text-[10px] font-mono text-[#706E6B] uppercase tracking-wider">
                {checkoutStep === 'cart' && 'NSW 2642 Farm-Direct Dispatches'}
                {checkoutStep === 'shipping' && 'Cold-Chain Refrigerated Delivery'}
                {checkoutStep === 'delivery' && 'Select Preferred Timing Slot'}
                {checkoutStep === 'payment' && '256-Bit SSL Encrypted Payment'}
                {checkoutStep === 'success' && `Tax Invoice Order #${orderId}`}
              </p>
            </div>
          </div>
          <button
            type="button"
            id="close-cart-btn"
            onClick={onClose}
            className="p-2 rounded-sm text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Free Shipping & Minimum Order Progress Banner */}
        {checkoutStep === 'cart' && items.length > 0 && (
          <div className="bg-[#FAF7F0] border-b border-[#EAE6DF] px-4 sm:px-5 py-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-medium text-[#151515]">
                <Truck className="w-3.5 h-3.5 text-[#2E6B4D]" />
                {calculations.qualifiesForFreeDelivery ? (
                  <span className="text-[#2E6B4D] font-bold">
                    🎉 You qualify for FREE temperature-controlled delivery!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#7A1F2B] font-mono">${calculations.amountForFreeDelivery.toFixed(2)}</strong> more for <strong>FREE Delivery</strong>
                  </span>
                )}
              </div>
              <span className="font-mono text-[10px] text-stone-500 font-bold">
                Goal: ${calculations.freeDeliveryThresholdVal}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#EAE6DF] h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C7903E] to-[#2E6B4D] transition-all duration-300 rounded-full"
                style={{ width: `${calculations.freeDeliveryProgress}%` }}
              />
            </div>

            {!calculations.meetsMinimumOrder && (
              <div className="flex items-center gap-1.5 text-[11px] text-amber-800 bg-amber-50 p-2 rounded-xs border border-amber-200">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>
                  Minimum order is <strong>${calculations.minOrderVal.toFixed(2)}</strong> for insulated cold-chain cartons (add <strong>${calculations.amountForMinOrder.toFixed(2)}</strong>).
                </span>
              </div>
            )}
          </div>
        )}

        {/* Cart Body: Step Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* STEP: CART ITEMS */}
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">
                    Your Butcher Cart is Empty
                  </h3>
                  <p className="text-xs text-stone-500 max-w-xs mb-6">
                    Select from pasture-fed Black Angus beef, prime steaks, whole carcass shares, artisan sausages, or value packs.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-semibold py-2.5 px-6 rounded-sm transition-colors shadow-sm"
                  >
                    Explore Cuts &amp; Shop Now
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Item List with Dynamic Calculations */}
                  <div className="space-y-3">
                    {items.map((item, idx) => {
                      const unitPrice = parseFloat(item.pricePerUnit) || 0;
                      const lineTotal = unitPrice * item.quantity;

                      return (
                        <div
                          key={`${item.product.id}-${item.selectedWeight}-${idx}`}
                          className="flex gap-3.5 p-3.5 bg-[#FAF9F5] rounded-sm border border-[#EAE6DF] hover:border-[#C7903E]/60 transition-all relative group"
                        >
                          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xs overflow-hidden bg-stone-200 shrink-0 border border-stone-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug line-clamp-2">
                                  {item.product.name}
                                </h4>
                                <button
                                  type="button"
                                  onClick={() => onRemoveItem(idx)}
                                  className="text-stone-400 hover:text-red-600 p-1 shrink-0 transition-colors"
                                  title="Remove item"
                                  aria-label={`Remove ${item.product.name}`}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="text-[11px] text-[#7A1F2B] font-semibold mt-0.5">
                                {item.selectedWeight}
                              </p>
                            </div>

                            {/* Quantity Controls & Dynamic Item Calculation */}
                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-200/70">
                              <div className="flex items-center border border-stone-300 rounded-xs bg-white shadow-2xs">
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                                  className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 font-bold transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="px-2.5 py-0.5 text-xs font-mono font-bold text-stone-900">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                                  className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 font-bold transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>

                              <div className="text-right">
                                <span className="text-[10px] text-stone-400 font-mono block">
                                  ${unitPrice.toFixed(2)} × {item.quantity}
                                </span>
                                <span className="font-serif text-sm sm:text-base font-bold text-[#151515]">
                                  ${lineTotal.toFixed(2)} AUD
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Promo Code Input Section */}
                  <div className="p-3 bg-[#FAF7F0] border border-[#EAE6DF] rounded-sm space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-[#151515]">
                      <span className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#C7903E]" />
                        <span>Have a Promo Code or Coupon?</span>
                      </span>
                      <span className="text-[10px] font-mono text-stone-500">e.g. WELCOME10, AUSSIE5</span>
                    </div>

                    {activePromo && activePromo.applied ? (
                      <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-2 rounded-xs text-xs text-emerald-800">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <div>
                            <span className="font-mono font-bold">{activePromo.code}</span>
                            <span className="text-emerald-700 ml-1.5 text-[11px]">({activePromo.description})</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemovePromo}
                          className="text-[11px] font-bold text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyPromo} className="flex gap-2">
                        <input
                          type="text"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="Enter coupon code"
                          className="flex-1 p-2 bg-white border border-stone-300 rounded-xs text-xs font-mono uppercase focus:border-[#7A1F2B] outline-none"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#151515] hover:bg-[#7A1F2B] text-white text-xs font-bold rounded-xs transition-colors"
                        >
                          Apply
                        </button>
                      </form>
                    )}

                    {promoError && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{promoError}</span>
                      </p>
                    )}
                  </div>

                  {/* Cold-Chain Packaging Notice */}
                  <div className="bg-stone-50 p-3 rounded-sm border border-stone-200 text-[11px] text-stone-600 space-y-1">
                    <p className="font-bold text-stone-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E6B4D]" />
                      <span>Certified Cold-Chain Meat Guarantee</span>
                    </p>
                    <p className="leading-relaxed">
                      All meat is trimmed fresh to order, vacuum cryovac sealed, and shipped in insulated temperature-controlled packaging maintaining &lt; 4°C right to your doorstep.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 1: SHIPPING ADDRESS */}
          {checkoutStep === 'shipping' && (
            <div className="space-y-4 text-xs">
              <div className="bg-[#FAF7F0] p-3 rounded-sm border border-[#EAE6DF] flex items-center justify-between">
                <span className="font-bold text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#7A1F2B]" />
                  <span>1. Australian Delivery Address</span>
                </span>
                <span className="text-[10px] font-mono text-[#2E6B4D] font-bold">NSW 2642 Logistics</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">First Name *</label>
                  <input
                    type="text"
                    value={customer.firstName}
                    onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={customer.lastName}
                    onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Email for Tracking *</label>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Mobile for SMS Alerts *</label>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Street Address *</label>
                <input
                  type="text"
                  value={customer.street}
                  onChange={(e) => setCustomer({ ...customer, street: e.target.value })}
                  placeholder="Street and Unit number"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Suburb *</label>
                  <input
                    type="text"
                    value={customer.suburb}
                    onChange={(e) => setCustomer({ ...customer, suburb: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">State *</label>
                  <select
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none font-bold"
                  >
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="ACT">ACT</option>
                    <option value="WA">WA</option>
                    <option value="TAS">TAS</option>
                    <option value="NT">NT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Postcode *</label>
                  <input
                    type="text"
                    value={customer.postcode}
                    onChange={(e) => setCustomer({ ...customer, postcode: e.target.value })}
                    maxLength={4}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:border-[#7A1F2B] outline-none font-mono font-bold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-600 uppercase mb-1">Butcher Delivery Notes / Instructions</label>
                <textarea
                  rows={2}
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  placeholder="Gate code, safe drop location, or cutting preferences..."
                  className="w-full p-2 bg-stone-50 border border-stone-300 rounded-xs text-xs focus:border-[#7A1F2B] outline-none resize-none"
                />
              </div>

              <div className="pt-2 border-t border-stone-200">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={atlConsent}
                    onChange={(e) => setAtlConsent(e.target.checked)}
                    className="mt-0.5 accent-[#7A1F2B]"
                  />
                  <span className="text-[11px] text-stone-600 leading-snug">
                    <strong>Authority to Leave (ATL):</strong> You authorize the refrigerated courier to place your insulated thermal meat box at a safe front entrance location if you are not home.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 2: COLD-CHAIN DISPATCH SLOT */}
          {checkoutStep === 'delivery' && (
            <div className="space-y-4 text-xs">
              <div className="bg-[#FAF7F0] p-3 rounded-sm border border-[#EAE6DF] flex items-center justify-between">
                <span className="font-bold text-stone-800 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#7A1F2B]" />
                  <span>2. Cold-Chain Delivery Slot &amp; Timing</span>
                </span>
                <span className="text-[10px] font-mono text-[#706E6B]">To: {customer.suburb}, {customer.state} {customer.postcode}</span>
              </div>

              <div className="space-y-2.5">
                {/* Standard Cold-Chain Delivery */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  shippingMethod === 'standard' ? 'border-[#7A1F2B] bg-[#FAF7F0] shadow-xs' : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="shippingMethod"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="accent-[#7A1F2B]"
                      />
                      <div>
                        <span className="font-bold text-stone-900 block">Next Available Cold-Chain Window (Refrigerated Van)</span>
                        <span className="text-[11px] text-stone-500">Dispatch within 24–48 hours in insulated cold cartons</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {calculations.qualifiesForFreeDelivery ? (
                        <span className="font-mono font-bold text-[#2E6B4D] text-xs">FREE</span>
                      ) : (
                        <span className="font-mono font-bold text-stone-900">$18.50 AUD</span>
                      )}
                    </div>
                  </div>
                </label>

                {/* Friday Afternoon Pre-Weekend BBQ Run */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  shippingMethod === 'express-bbq' ? 'border-[#7A1F2B] bg-[#FAF7F0] shadow-xs' : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="shippingMethod"
                        checked={shippingMethod === 'express-bbq'}
                        onChange={() => setShippingMethod('express-bbq')}
                        className="accent-[#7A1F2B]"
                      />
                      <div>
                        <span className="font-bold text-[#7A1F2B] block">Priority Friday Afternoon Pre-Weekend BBQ Run</span>
                        <span className="text-[11px] text-stone-500">Guaranteed delivery before 5:00 PM Friday for weekend grilling</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {calculations.qualifiesForFreeDelivery ? (
                        <span className="font-mono font-bold text-[#7A1F2B] text-xs">$8.50 Priority</span>
                      ) : (
                        <span className="font-mono font-bold text-stone-900">$26.00 AUD</span>
                      )}
                    </div>
                  </div>
                </label>

                {/* Butcher Depot Pickup */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  shippingMethod === 'pickup' ? 'border-[#7A1F2B] bg-[#FAF7F0] shadow-xs' : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="shippingMethod"
                        checked={shippingMethod === 'pickup'}
                        onChange={() => setShippingMethod('pickup')}
                        className="accent-[#7A1F2B]"
                      />
                      <div>
                        <span className="font-bold text-stone-900 block">Master Butcher Depot Pickup (NSW 2642)</span>
                        <span className="text-[11px] text-stone-500">Collect directly from packing room (Mon–Fri 8am–4pm)</span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-[#2E6B4D] text-xs">FREE</span>
                  </div>
                </label>
              </div>

              <div className="bg-amber-50/80 p-3 rounded-sm border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  All deliveries are monitored with temperature loggers. Immediate refrigeration (&lt; 4°C) is required once the insulated carton is opened.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT METHOD */}
          {checkoutStep === 'payment' && (
            <div className="space-y-4 text-xs">
              <div className="bg-[#FAF7F0] p-3 rounded-sm border border-[#EAE6DF] flex items-center justify-between">
                <span className="font-bold text-stone-800 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-[#7A1F2B]" />
                  <span>3. Secure Payment Options</span>
                </span>
                <span className="text-[10px] font-mono text-[#2E6B4D] font-bold">256-Bit SSL</span>
              </div>

              <div className="space-y-2.5">
                {/* 1. Credit Card */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'border-[#7A1F2B] bg-[#FAF7F0]' : 'border-stone-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-[#7A1F2B]"
                      />
                      <span className="font-bold text-stone-900">Credit Card</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">Visa / Mastercard / AMEX</span>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="grid grid-cols-2 gap-2.5 mt-3 pt-2.5 border-t border-stone-200">
                      <div className="col-span-2">
                        <label className="block text-[9px] font-bold text-stone-500 uppercase mb-1">Card Number (Leave Empty)</label>
                        <input
                          type="text"
                          placeholder="4111 2222 3333 4444"
                          className="w-full p-2 bg-white border border-stone-300 rounded-xs font-mono text-xs outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase mb-1">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-2 bg-white border border-stone-300 rounded-xs font-mono text-xs outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase mb-1">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full p-2 bg-white border border-stone-300 rounded-xs font-mono text-xs outline-none"
                        />
                      </div>
                    </div>
                  )}
                </label>

                {/* 2. Pay ID */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  paymentMethod === 'payid' ? 'border-[#7A1F2B] bg-[#FAF7F0]' : 'border-stone-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'payid'}
                        onChange={() => setPaymentMethod('payid')}
                        className="accent-[#7A1F2B]"
                      />
                      <span className="font-bold text-stone-900">Pay ID</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-500">Instant Mobile / Email Transfer</span>
                  </div>

                  {paymentMethod === 'payid' && (
                    <div className="mt-3 pt-2.5 border-t border-stone-200 space-y-1 text-[11px] text-stone-600">
                      <p className="font-mono text-[10px] text-stone-500">
                        PayID details will be displayed on order confirmation. Please leave payment reference as your Order ID.
                      </p>
                    </div>
                  )}
                </label>

                {/* 3. Crypto */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  paymentMethod === 'crypto' ? 'border-[#C7903E] bg-[#FDFBF7]' : 'border-stone-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'crypto'}
                        onChange={() => setPaymentMethod('crypto')}
                        className="accent-[#C7903E]"
                      />
                      <div className="flex items-center gap-1.5">
                        <Coins className="w-4 h-4 text-[#C7903E]" />
                        <span className="font-bold text-[#151515]">Crypto</span>
                      </div>
                    </div>
                    <span className="bg-[#C7903E]/20 text-[#8F611A] font-bold px-2 py-0.5 rounded-xs font-mono text-[10px] border border-[#C7903E]/40">
                      SAVE {BUSINESS_CONFIG.cryptoDiscount}%
                    </span>
                  </div>

                  {paymentMethod === 'crypto' && (
                    <div className="mt-3 pt-2.5 border-t border-[#EAE6DF] space-y-1.5 text-[11px] text-stone-600">
                      <p className="text-[#2E6B4D] font-bold">
                        ✓ 5% discount (-${calculations.cryptoDiscountAmount.toFixed(2)} AUD) automatically deducted!
                      </p>
                      <p className="font-mono text-[10px] text-stone-500">
                        Wallet address details left unintegrated / empty pending gateway connection.
                      </p>
                    </div>
                  )}
                </label>

                {/* 4. Bank Transfer */}
                <label className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                  paymentMethod === 'bank_transfer' ? 'border-[#7A1F2B] bg-[#FAF7F0]' : 'border-stone-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'bank_transfer'}
                        onChange={() => setPaymentMethod('bank_transfer')}
                        className="accent-[#7A1F2B]"
                      />
                      <span className="font-bold text-stone-900">Bank Transfer</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-500">Direct EFT</span>
                  </div>

                  {paymentMethod === 'bank_transfer' && (
                    <div className="mt-3 pt-2.5 border-t border-stone-200 space-y-1.5 text-[11px] text-stone-600">
                      <p className="font-mono text-[10px] text-stone-500">
                        BSB and Account Number left empty as requested. Bank details will be provided on invoice dispatch.
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2 bg-stone-50 border border-stone-200 rounded-xs text-[10px] font-mono text-stone-400">
                          BSB: [Left Empty]
                        </div>
                        <div className="p-2 bg-stone-50 border border-stone-200 rounded-xs text-[10px] font-mono text-stone-400">
                          Account: [Left Empty]
                        </div>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              <div className="flex items-center gap-2 text-stone-500 text-[11px] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#2E6B4D]" />
                <span>Encrypted with bank-grade 256-bit SSL certificate &amp; PCI-DSS compliant.</span>
              </div>
            </div>
          )}

          {/* STEP 4: ORDER SUCCESS & INVOICE */}
          {checkoutStep === 'success' && (
            <div className="py-4 space-y-4">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs font-mono text-[#7A1F2B] font-bold">
                  Official Butcher Invoice: #{orderId}
                </p>
                <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{customer.firstName}</strong>. Your cuts have been sent to our master butcher team in NSW 2642 for cold-room portioning and temperature-controlled dispatch.
                </p>
              </div>

              {/* Itemized Tax Invoice Card */}
              <div className="bg-[#FAF9F5] p-4 rounded-sm border border-[#EAE6DF] text-xs space-y-3 font-sans">
                <div className="flex justify-between items-center pb-2.5 border-b border-[#EAE6DF]">
                  <BrandLogo variant="compact" />
                  <div className="text-right font-mono text-[10px] text-stone-500">
                    <p>ABN: {BUSINESS_CONFIG.abn}</p>
                    <p>{new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-700 pb-2 border-b border-[#EAE6DF]">
                  <div>
                    <span className="font-bold text-stone-900 block">Deliver To:</span>
                    <p>{customer.firstName} {customer.lastName}</p>
                    <p>{customer.street}</p>
                    <p>{customer.suburb}, {customer.state} {customer.postcode}</p>
                    <p className="font-mono">{customer.phone}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-stone-900 block">Cold-Chain Slot:</span>
                    <p>{shippingMethod === 'standard' ? 'Standard Cold-Chain (24–48hr)' : shippingMethod === 'express-bbq' ? 'Priority Friday BBQ Run' : 'Depot Pickup'}</p>
                    <p className="text-[#2E6B4D] font-bold mt-1">Status: Confirmed &amp; In Prep</p>
                  </div>
                </div>

                {/* Items in Invoice */}
                <div className="space-y-1.5">
                  <span className="font-bold text-[10px] uppercase font-mono text-stone-500">Ordered Cuts:</span>
                  {items.map((item, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span>{item.quantity}x {item.product.name} ({item.selectedWeight})</span>
                      <span className="font-mono font-bold">${((parseFloat(item.pricePerUnit) || 0) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Final Calculations Table */}
                <div className="pt-2 border-t border-[#EAE6DF] space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal:</span>
                    <span>${calculations.subtotal.toFixed(2)} AUD</span>
                  </div>
                  {calculations.totalDiscounts > 0 && (
                    <div className="flex justify-between text-[#2E6B4D] font-bold">
                      <span>Discounts &amp; Promos:</span>
                      <span>-${calculations.totalDiscounts.toFixed(2)} AUD</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>Cold-Chain Shipping:</span>
                    <span>{calculations.baseShippingFee === 0 ? 'FREE' : `$${calculations.baseShippingFee.toFixed(2)} AUD`}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-stone-900 pt-1.5 border-t border-stone-300">
                    <span>Total Paid (inc. Australian GST):</span>
                    <span className="text-[#7A1F2B] font-serif text-sm">${calculations.finalTotal.toFixed(2)} AUD</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Tax Invoice</span>
                </button>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="py-2.5 px-3 bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-bold rounded-sm transition-colors shadow-sm"
                >
                  Return to Butcher Shop
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Cart Footer with Exact Product Total Calculations */}
        {checkoutStep !== 'success' && items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#EAE6DF] bg-[#FAF9F5] space-y-3">
            {/* Live Calculation Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Products Subtotal ({calculations.itemCount} item{calculations.itemCount > 1 ? 's' : ''}):</span>
                <span className="font-serif font-bold text-stone-900">${calculations.subtotal.toFixed(2)} AUD</span>
              </div>

              {/* Promo Discount line if active */}
              {activePromo && activePromo.applied && calculations.promoDiscountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>Coupon ({activePromo.code}):</span>
                  </span>
                  <span className="font-mono font-bold">-${calculations.promoDiscountAmount.toFixed(2)} AUD</span>
                </div>
              )}

              {/* Crypto discount line if selected */}
              {paymentMethod === 'crypto' && calculations.cryptoDiscountAmount > 0 && (
                <div className="flex justify-between text-[#8F611A] font-medium">
                  <span className="flex items-center gap-1">
                    <Coins className="w-3 h-3 text-[#C7903E]" />
                    <span>Crypto Discount (5% Off):</span>
                  </span>
                  <span className="font-mono font-bold">-${calculations.cryptoDiscountAmount.toFixed(2)} AUD</span>
                </div>
              )}

              {/* Cold Chain Delivery Line */}
              <div className="flex justify-between text-stone-600">
                <span>Cold-Chain Delivery:</span>
                {checkoutStep === 'cart' ? (
                  calculations.qualifiesForFreeDelivery ? (
                    <span className="font-mono font-bold text-[#2E6B4D]">FREE (Qualified)</span>
                  ) : (
                    <span className="font-mono text-stone-500">$18.50 (Free over ${calculations.freeDeliveryThresholdVal})</span>
                  )
                ) : (
                  <span className="font-mono font-bold text-[#2E6B4D]">
                    {calculations.baseShippingFee === 0 ? 'FREE' : `$${calculations.baseShippingFee.toFixed(2)} AUD`}
                  </span>
                )}
              </div>

              {/* Final Calculated Product Total */}
              <div className="flex justify-between items-baseline text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                <div>
                  <span>Total (AUD):</span>
                  <span className="text-[10px] text-stone-400 font-mono block font-normal">Includes cold packaging</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#7A1F2B]">
                    ${calculations.finalTotal.toFixed(2)}
                  </span>
                  <span className="text-[10px] font-mono text-stone-500 block">AUD</span>
                </div>
              </div>
            </div>

            {/* Step Navigation Controls */}
            {checkoutStep === 'cart' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-sm transition-colors text-center"
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  id="proceed-to-checkout-btn"
                  onClick={handleProceedToCheckout}
                  disabled={!calculations.meetsMinimumOrder}
                  className={`w-full py-2.5 text-xs font-bold rounded-sm shadow-sm transition-all flex items-center justify-center gap-1.5 ${
                    calculations.meetsMinimumOrder
                      ? 'text-white bg-[#7A1F2B] hover:bg-[#5F1721] cursor-pointer'
                      : 'text-stone-400 bg-stone-300 cursor-not-allowed'
                  }`}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {checkoutStep === 'shipping' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-sm transition-colors"
                >
                  Back to Cart
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('delivery')}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#7A1F2B] hover:bg-[#5F1721] rounded-sm shadow-sm transition-colors flex items-center justify-center gap-1"
                >
                  <span>Next: Delivery Slot</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {checkoutStep === 'delivery' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('shipping')}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-sm transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('payment')}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#7A1F2B] hover:bg-[#5F1721] rounded-sm shadow-sm transition-colors flex items-center justify-center gap-1"
                >
                  <span>Next: Payment</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {checkoutStep === 'payment' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('delivery')}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-sm transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  id="complete-order-btn"
                  onClick={handlePlaceOrder}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#2E6B4D] hover:bg-[#1f4a35] rounded-sm shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Place Order (${calculations.finalTotal.toFixed(2)})</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
