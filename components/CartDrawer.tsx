'use client';

import { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  AlertCircle 
} from 'lucide-react';
import { CartItem } from '@/lib/types';
import { BUSINESS_CONFIG } from '@/lib/data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOpenCompliance: (sectionId?: string) => void;
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
  const [postcode, setPostcode] = useState('2000');
  const [shippingMethod, setShippingMethod] = useState('cold-chain-standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | 'apple_pay'>('card');
  const [atlConsent, setAtlConsent] = useState(true);
  const [orderId, setOrderId] = useState('AU-849201');

  if (!isOpen) return null;

  const totalItemCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleProceedToCheckout = () => {
    setCheckoutStep('shipping');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderId(`AU-${Date.now().toString().slice(-6)}`);
    setCheckoutStep('success');
  };

  const resetAndClose = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fade-in font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between text-[#151515] relative animate-slide-left">
        {/* Cart Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#7A1F2B]" />
            <h2 id="cart-title" className="font-serif text-lg font-bold text-stone-900">
              {checkoutStep === 'cart' && `Shopping Cart (${totalItemCount})`}
              {checkoutStep === 'shipping' && 'Checkout: Delivery Address'}
              {checkoutStep === 'delivery' && 'Checkout: Cold-Chain Slot'}
              {checkoutStep === 'payment' && 'Checkout: Secure Payment'}
              {checkoutStep === 'success' && 'Order Placed!'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cold-Chain Threshold Reminder Banner */}
        {checkoutStep === 'cart' && (
          <div className="bg-[#2E6B4D]/10 border-b border-[#2E6B4D]/20 px-5 py-2.5 flex items-center justify-between text-xs text-[#2E6B4D]">
            <div className="flex items-center gap-1.5 font-medium">
              <Truck className="w-4 h-4" />
              <span>Min. Order: ${BUSINESS_CONFIG.minimumOrder} | Free Delivery Over ${BUSINESS_CONFIG.freeDeliveryThreshold}</span>
            </div>
          </div>
        )}

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">
                    Your Cart is Empty
                  </h3>
                  <p className="text-xs text-stone-500 max-w-xs mb-6">
                    Explore our Australian beef cuts, steaks, gourmet sausages, and value meat packs.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-semibold py-2.5 px-6 rounded-lg transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.selectedWeight}-${idx}`}
                      className="flex gap-4 p-3.5 bg-stone-50 rounded-xl border border-stone-200 relative"
                    >
                      <div className="w-18 h-18 rounded-lg overflow-hidden bg-stone-200 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif text-sm font-bold text-stone-900 pr-4">
                              {item.product.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => onRemoveItem(idx)}
                              className="text-stone-400 hover:text-red-600 p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs text-[#7A1F2B] font-semibold mt-0.5">
                            {item.selectedWeight}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-200/60">
                          <div className="flex items-center border border-stone-300 rounded bg-white">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                              className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-mono font-bold">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 font-bold"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-stone-400 font-mono block">Item Price</span>
                            <span className="font-serif text-sm font-bold text-stone-900">
                              ${item.pricePerUnit} ea
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Packaging Safety Confirmation */}
                  <div className="bg-stone-100/80 p-3 rounded-lg border border-stone-200 text-[11px] text-stone-600 space-y-1">
                    <p className="font-bold text-stone-800 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-[#2E6B4D]" />
                      <span>Cold-Chain Packaging Guarantee</span>
                    </p>
                    <p>
                      Your cuts will be vacuum sealed and packed in insulated coolers with food-grade gel ice bricks maintaining &lt; 5°C throughout transit.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Checkout Step: Shipping */}
          {checkoutStep === 'shipping' && (
            <div className="space-y-4 text-xs">
              <h3 className="font-serif text-base font-bold text-stone-900">
                1. Australian Delivery Address
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name *"
                  defaultValue="Alex"
                  className="p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  defaultValue="Smith"
                  className="p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email for dispatch updates *"
                defaultValue="alex.smith@example.com.au"
                className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
              />
              <input
                type="tel"
                placeholder="Mobile for SMS delivery alerts *"
                defaultValue="0412 345 678"
                className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
              />
              <input
                type="text"
                placeholder="Street Address *"
                defaultValue="142 Collins Street"
                className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
              />
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Suburb *"
                  defaultValue="Melbourne"
                  className="p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
                />
                <select className="p-2.5 bg-stone-50 border border-stone-300 rounded outline-none">
                  <option>VIC</option>
                  <option>NSW</option>
                  <option>QLD</option>
                  <option>SA</option>
                  <option>WA</option>
                  <option>TAS</option>
                  <option>ACT</option>
                </select>
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Postcode *"
                  maxLength={4}
                  className="p-2.5 bg-stone-50 border border-stone-300 rounded outline-none"
                />
              </div>

              <div className="pt-3">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={atlConsent}
                    onChange={(e) => setAtlConsent(e.target.checked)}
                    className="mt-0.5"
                  />
                  <span className="text-[11px] text-stone-600 leading-snug">
                    Authority to Leave (ATL): Courier may leave the insulated cold-chain carton in a sheltered spot at your front entrance if unattended.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Checkout Step: Delivery Slot */}
          {checkoutStep === 'delivery' && (
            <div className="space-y-4 text-xs">
              <h3 className="font-serif text-base font-bold text-stone-900">
                2. Cold-Chain Delivery Slot
              </h3>
              <p className="text-stone-500">
                Deliveries are scheduled to optimize refrigeration time during transit.
              </p>

              <div className="space-y-2">
                <label className="block p-3 border border-stone-300 rounded-lg cursor-pointer bg-stone-50 hover:bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="slot"
                        checked={shippingMethod === 'cold-chain-standard'}
                        onChange={() => setShippingMethod('cold-chain-standard')}
                      />
                      <span className="font-bold">Next Available Delivery Window</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900">$[DELIVERY FEE]</span>
                  </div>
                  <p className="text-[11px] text-stone-500 ml-6 mt-1 font-mono">
                    Timeframe: {BUSINESS_CONFIG.deliveryTimeframe}
                  </p>
                </label>

                <label className="block p-3 border border-stone-300 rounded-lg cursor-pointer bg-stone-50 hover:bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="slot"
                        checked={shippingMethod === 'weekend-bbq'}
                        onChange={() => setShippingMethod('weekend-bbq')}
                      />
                      <span className="font-bold">Friday Afternoon Pre-Weekend BBQ Run</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900">$[FEE]</span>
                  </div>
                  <p className="text-[11px] text-stone-500 ml-6 mt-1 font-mono">
                    Delivered cold before 5:00 PM Friday.
                  </p>
                </label>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-[11px] text-amber-900">
                <AlertCircle className="w-3.5 h-3.5 inline mr-1 text-amber-700" />
                <span>
                  Perishable meat delivery requires prompt transfer to your refrigerator (below 4°C) upon unpacking.
                </span>
              </div>
            </div>
          )}

          {/* Checkout Step: Payment */}
          {checkoutStep === 'payment' && (
            <div className="space-y-4 text-xs">
              <h3 className="font-serif text-base font-bold text-stone-900">
                3. Payment Method
              </h3>

              <div className="space-y-2">
                <label className="block p-3 border border-stone-300 rounded-lg cursor-pointer bg-stone-50 hover:bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span className="font-bold">Credit / Debit Card (Visa, Mastercard, AMEX)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 ml-6">
                    <input
                      type="text"
                      placeholder="Card Number"
                      defaultValue="•••• •••• •••• 4242"
                      className="col-span-2 p-2 bg-white border border-stone-300 rounded font-mono text-xs"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      defaultValue="12/28"
                      className="p-2 bg-white border border-stone-300 rounded font-mono text-xs"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      defaultValue="•••"
                      className="p-2 bg-white border border-stone-300 rounded font-mono text-xs"
                    />
                  </div>
                </label>

                <label className="block p-3 border border-stone-300 rounded-lg cursor-pointer bg-stone-50 hover:bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'crypto'}
                        onChange={() => setPaymentMethod('crypto')}
                      />
                      <span className="font-bold text-[#7A1F2B]">
                        Crypto (BTC / ETH / USDT / USDC)
                      </span>
                    </div>
                    <span className="bg-[#7A1F2B]/10 text-[#7A1F2B] font-bold px-2 py-0.5 rounded font-mono text-[10px]">
                      SAVE {BUSINESS_CONFIG.cryptoDiscount}%
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 ml-6 mt-1 font-mono">
                    Discount automatically applied at blockchain confirmation screen.
                  </p>
                </label>
              </div>

              <div className="flex items-center gap-2 text-stone-500 text-[11px] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#2E6B4D]" />
                <span>256-Bit SSL Encrypted & PCI-DSS Compliant Gateway</span>
              </div>
            </div>
          )}

          {/* Success Step */}
          {checkoutStep === 'success' && (
            <div className="text-center py-10 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Order Received!
              </h3>
              <p className="text-xs font-mono text-stone-500">
                Order Confirmation: #{orderId}
              </p>
              <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                Thank you for ordering with {BUSINESS_CONFIG.businessName}. Your cuts have been scheduled for butcher trimming and temperature-controlled cold-chain packaging.
              </p>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-left text-xs font-mono space-y-1">
                <p><strong>Customer:</strong> Alex Smith</p>
                <p><strong>Delivery Suburb:</strong> Melbourne, VIC {postcode}</p>
                <p><strong>Cold-Chain Slot:</strong> {BUSINESS_CONFIG.deliveryTimeframe}</p>
                <p><strong>Subtotal:</strong> $[ORDER TOTAL]</p>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="w-full bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-semibold py-3 px-6 rounded-lg shadow"
              >
                Done & Return to Butcher Shop
              </button>
            </div>
          )}
        </div>

        {/* Cart Footer Actions */}
        {checkoutStep !== 'success' && items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal ({totalItemCount} items):</span>
                <span className="font-serif font-bold text-stone-900">$[ITEMS SUBTOTAL]</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Cold-Chain Packaging & Delivery:</span>
                <span className="font-mono text-[#2E6B4D]">Calculated by Suburb</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                <span>Estimated Total (AUD):</span>
                <span className="font-serif text-lg text-[#7A1F2B]">$[TOTAL ESTIMATE]</span>
              </div>
            </div>

            {/* Stepper Buttons */}
            {checkoutStep === 'cart' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors text-center"
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  id="proceed-to-checkout-btn"
                  onClick={handleProceedToCheckout}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#7A1F2B] hover:bg-[#5F1721] rounded-lg shadow transition-colors flex items-center justify-center gap-1.5"
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
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg"
                >
                  Back to Cart
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('delivery')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#7A1F2B] hover:bg-[#5F1721] rounded-lg shadow"
                >
                  Next: Delivery Slot
                </button>
              </div>
            )}

            {checkoutStep === 'delivery' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('shipping')}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('payment')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#7A1F2B] hover:bg-[#5F1721] rounded-lg shadow"
                >
                  Next: Payment
                </button>
              </div>
            )}

            {checkoutStep === 'payment' && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('delivery')}
                  className="w-full py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="button"
                  id="complete-order-btn"
                  onClick={handlePlaceOrder}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#2E6B4D] hover:bg-[#1f4a35] rounded-lg shadow flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Place Order ($[PRICE])</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
