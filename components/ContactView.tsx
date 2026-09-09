'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Truck, 
  ArrowRight 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface ContactViewProps {
  onNavigate: (view: string) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function ContactView({ onNavigate, onOpenCompliance }: ContactViewProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page-view" className="py-12 bg-[#F8F5EF] text-[#151515] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold">
            Customer Support & Enquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#151515] tracking-tight mt-2 mb-4">
            Contact {BUSINESS_CONFIG.businessName}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Need help with an upcoming meat order, delivery window, or cut selection? Our Australian customer care team is available to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Details Column */}
          <div className="bg-[#151515] text-[#F8F5EF] rounded-2xl p-8 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C7903E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Phone Number</p>
                    <p className="text-white font-mono">{BUSINESS_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C7903E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Email Address</p>
                    <p className="text-white font-mono">{BUSINESS_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#2E6B4D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">WhatsApp Support</p>
                    <p className="text-white font-mono">{BUSINESS_CONFIG.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C7903E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Butcher Facility Address</p>
                    <p className="text-white font-mono">{BUSINESS_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C7903E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Operating Hours (AEST)</p>
                    <p className="text-white font-mono">{BUSINESS_CONFIG.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-800 mt-8 space-y-3">
              <button
                type="button"
                onClick={() => onNavigate('wholesale')}
                className="w-full bg-stone-900 hover:bg-stone-800 text-[#C7903E] text-xs font-semibold py-2.5 px-3 rounded border border-stone-800 text-center"
              >
                Need Commercial Pricing? Wholesale Enquiries →
              </button>
              <button
                type="button"
                onClick={() => onNavigate('shop')}
                className="w-full bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-semibold py-2.5 px-3 rounded text-center flex items-center justify-center gap-1.5"
              >
                <span>Shop Meat Catalog Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Contact Form (2 columns wide on large screens) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Fill in your details below and our team will respond within 24 hours during standard trading days.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-emerald-900 mb-1">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mb-4">
                  Thank you, {formData.name}. We have logged your enquiry regarding &ldquo;{formData.subject}&rdquo; and sent a copy to {formData.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2 px-4 rounded"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
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
                      placeholder="sarah@example.com.au"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Order Number (If applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      placeholder="e.g. #AU-9821"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Enquiry Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none font-medium"
                  >
                    <option value="Delivery Postcode / ETA Question">Delivery Postcode / ETA Question</option>
                    <option value="Butcher Cut Sizing & Custom Request">Butcher Cut Sizing & Custom Request</option>
                    <option value="Order Tracking & Cold-Chain Query">Order Tracking & Cold-Chain Query</option>
                    <option value="Wholesale Hospitality Enquiry">Wholesale Hospitality Enquiry</option>
                    <option value="Other Question">Other Question</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our butcher and customer support team help you today?"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-enquiry"
                  className="w-full sm:w-auto bg-[#7A1F2B] hover:bg-[#5F1721] text-white font-bold text-xs py-3 px-8 rounded-lg shadow transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Delivery Enquiry & FAQ Banner */}
        <div className="bg-stone-100 rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-stone-200 text-[#2E6B4D]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-stone-900">Perishable Goods Delivery Questions?</p>
              <p className="text-stone-600">Review cold-chain packing, arrival windows, and food safety storage guidelines.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenCompliance('delivery-info')}
            className="whitespace-nowrap px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded font-semibold transition-colors"
          >
            Read Delivery Policy
          </button>
        </div>
      </div>
    </div>
  );
}
