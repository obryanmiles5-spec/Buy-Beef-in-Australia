'use client';

import { useState } from 'react';
import { 
  Building2, 
  Truck, 
  FileCheck2, 
  Layers, 
  DollarSign, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { BUSINESS_CONFIG, WHOLESALE_FAQS } from '@/lib/data';

interface WholesaleViewProps {
  onOpenCompliance: (sectionId?: string) => void;
}

export default function WholesaleView({ onOpenCompliance }: WholesaleViewProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    abn: '',
    contactName: '',
    email: '',
    phone: '',
    deliverySuburb: '',
    postcode: '',
    weeklyVolume: 'under_100kg',
    productsRequired: '',
    message: '',
  });

  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="wholesale-page-view" className="py-12 bg-[#F8F5EF] text-[#151515] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#151515] text-[#F8F5EF] rounded-2xl p-8 sm:p-14 border border-stone-800 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#C7903E] font-bold mb-3">
              Commercial Food Service & B2B
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Wholesale Meat Supply for Australian Businesses
            </h1>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
              Partner with <span className="text-white font-semibold">{BUSINESS_CONFIG.businessName}</span> for consistent primal and sub-primal cuts, carton-buy discounts, and reliable temperature-controlled cold-chain logistics tailored to high-volume commercial hospitality schedules.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded border border-stone-800">
                <Truck className="w-3.5 h-3.5 text-[#2E6B4D]" />
                <span>Delivery Zones: [INSERT VERIFIED WHOLESALE DELIVERY ZONES]</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded border border-stone-800">
                <DollarSign className="w-3.5 h-3.5 text-[#C7903E]" />
                <span>Minimum Order: $[WHOLESALE MINIMUM ORDER]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Supply & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Who We Supply */}
          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#7A1F2B]/10 text-[#7A1F2B] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">
              Who We Supply
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
              We provide commercial meat supply contracts and scheduled deliveries to verified Australian food establishments:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2B]" />
                Restaurants & Steakhouses
              </li>
              <li className="flex items-center gap-2 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2B]" />
                Pubs, Clubs & Bistros
              </li>
              <li className="flex items-center gap-2 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2B]" />
                Cafés & Brunch Venues
              </li>
              <li className="flex items-center gap-2 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2B]" />
                Caterers & Function Centres
              </li>
              <li className="flex items-center gap-2 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2B]" />
                Burger Bars & Quick Service
              </li>
              <li className="flex items-center gap-2 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F2B]" />
                Meal-Prep Companies
              </li>
            </ul>
          </div>

          {/* Wholesale Categories & Bulk Options */}
          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#C7903E]/10 text-[#C7903E] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">
              Wholesale Categories & Bulk Ordering
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
              Available in master cartons, cryovac vacuum-packed primals, or bespoke portion specifications:
            </p>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <h4 className="font-bold text-stone-900">Primal & Sub-Primal Beef</h4>
                <p className="text-stone-600 text-[11px] mt-0.5">
                  Whole Scotch Fillets (cube rolls), Striploins, Rumps, Tenderloins, and Brisket packers.
                </p>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <h4 className="font-bold text-stone-900">Poultry & Pork Cartons</h4>
                <p className="text-stone-600 text-[11px] mt-0.5">
                  10kg / 15kg poultry breast cartons, bone-in thighs, pork loins, and belly slabs.
                </p>
              </div>
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                <h4 className="font-bold text-stone-900">Custom Burger & Mince Blends</h4>
                <p className="text-stone-600 text-[11px] mt-0.5">
                  Calibrated coarse ground beef blends formulated for consistent burger smash cooking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wholesale Enquiry & Account Application Form */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-lg mb-14 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold mb-2">
              <FileCheck2 className="w-4 h-4" />
              <span>Trade Pricing Registration</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
              Apply for a Wholesale Account
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Submit your Australian business details below. Our commercial sales manager will review and provide a customized wholesale price catalog within 1 business day.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold text-emerald-900 mb-1">
                Wholesale Enquiry Received
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mb-4">
                Thank you, {formData.contactName || 'Trade Customer'}. Your application for{' '}
                <span className="font-semibold">{formData.businessName || 'your business'}</span> (ABN: {formData.abn || '[INSERT ABN]'}) has been received. Our team will contact you at {formData.email || 'your email'} shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2 px-4 rounded"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Melbourne Bistro Pty Ltd"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Australian Business Number (ABN) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.abn}
                    onChange={(e) => setFormData({ ...formData, abn: e.target.value })}
                    placeholder="11-digit ABN number"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Head Chef / Manager"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchasing@restaurant.com.au"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0400 000 000"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Delivery Suburb *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.deliverySuburb}
                    onChange={(e) => setFormData({ ...formData, deliverySuburb: e.target.value })}
                    placeholder="e.g. Richmond / Surry Hills"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="e.g. 3121"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Estimated Weekly Order Volume:
                  </label>
                  <select
                    value={formData.weeklyVolume}
                    onChange={(e) => setFormData({ ...formData, weeklyVolume: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  >
                    <option value="under_100kg">Under 100 kg per week</option>
                    <option value="100_300kg">100 kg – 300 kg per week</option>
                    <option value="300_500kg">300 kg – 500 kg per week</option>
                    <option value="over_500kg">500 kg+ per week (High Volume Commercial)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Primary Products Required:
                  </label>
                  <input
                    type="text"
                    value={formData.productsRequired}
                    onChange={(e) => setFormData({ ...formData, productsRequired: e.target.value })}
                    placeholder="e.g. Whole Scotch Fillet, Ground Chuck, Chicken Fillets"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Message / Special Delivery Requirements:
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your kitchen prep times, preferred delivery days, or cut thickness specifications..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                />
              </div>

              <button
                type="submit"
                id="submit-wholesale-enquiry"
                className="w-full bg-[#7A1F2B] hover:bg-[#5F1721] text-white font-bold text-sm py-3.5 px-6 rounded-lg shadow-md transition-all uppercase tracking-wider"
              >
                Request Wholesale Pricing
              </button>
            </form>
          )}
        </div>

        {/* Wholesale FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-1">
              Wholesale Frequently Asked Questions
            </h2>
            <p className="text-xs text-stone-500">Commercial supply terms and logistics.</p>
          </div>

          <div className="space-y-3">
            {WHOLESALE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-serif text-sm font-bold text-stone-900"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform ${isOpen ? 'rotate-180 text-[#7A1F2B]' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-2 bg-stone-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
