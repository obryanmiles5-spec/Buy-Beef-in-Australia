'use client';

import { ShieldCheck, Truck } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface FooterProps {
  onNavigate: (view: string, categoryId?: string) => void;
  onOpenCompliance: (sectionId?: string) => void;
  onOpenBlueprint: () => void;
}

export default function Footer({ onNavigate, onOpenCompliance, onOpenBlueprint }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="relative z-20 bg-[#F1EEE7] text-stone-700 border-t border-[#EAE6DF] pt-12 pb-8 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#EAE6DF]">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-[#7A1F2B] text-white flex items-center justify-center text-xs font-serif italic rounded-sm shadow-sm">
                  B
                </div>
                <h3 className="font-serif text-lg font-bold text-[#151515] tracking-tight">
                  {BUSINESS_CONFIG.businessName}
                </h3>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#706E6B]">
                Australian Online Butcher
              </p>
            </div>

            {/* Brief business description */}
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {BUSINESS_CONFIG.businessName} delivers prime Black Angus & F1 Wagyu carcass shares, free-range poultry, ocean catches, artisan sausages, and curated family meat packs across Australia with certified cold-chain logistics.
            </p>

            {/* Location & Contact Meta */}
            <p className="text-[11px] font-mono text-stone-600 mb-4">
              Location: <strong>{BUSINESS_CONFIG.location}</strong>
            </p>

            {/* Social Media Links */}
            <div className="space-y-1 text-xs">
              <p className="text-[10px] font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                Connect:
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-white hover:bg-[#7A1F2B] hover:text-white border border-[#EAE6DF] rounded-sm text-[10px] font-mono text-stone-600 transition-colors"
                >
                  [FACEBOOK URL]
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-white hover:bg-[#7A1F2B] hover:text-white border border-[#EAE6DF] rounded-sm text-[10px] font-mono text-stone-600 transition-colors"
                >
                  [INSTAGRAM URL]
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-white hover:bg-[#7A1F2B] hover:text-white border border-[#EAE6DF] rounded-sm text-[10px] font-mono text-stone-600 transition-colors"
                >
                  [TIKTOK URL]
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Shop Departments */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#151515] mb-3 border-b border-[#EAE6DF] pb-1.5">
              Shop Departments
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { name: 'Beef (Black Angus & F1 Wagyu)', id: 'beef' },
                { name: 'Chicken (Free-Range)', id: 'chicken' },
                { name: 'Fish & Fillets', id: 'fish' },
                { name: 'Pork (Crackling & Roasts)', id: 'pork' },
                { name: 'Lamb (Grass-Fed Cuts)', id: 'lamb' },
                { name: 'Seafood (Prawns & Calamari)', id: 'seafood' },
                { name: 'Pet Food (BARF Diet & Bones)', id: 'pet-food' },
                { name: 'Artisan Sausages', id: 'sausages' },
                { name: 'Curated Meat Packs', id: 'packs' },
                { name: 'Beef & Meat Offal / Specialty Cuts', id: 'offal' },
              ].map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('category', cat.id)}
                    className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                  >
                    <span className="text-[#C7903E] text-[10px]">›</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#151515] mb-3 border-b border-[#EAE6DF] pb-1.5">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Contact Us & Orders</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('delivery-info')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Delivery Information & Schedule</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('returns-refunds')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Returns & Refunds Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('food-safety')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Food Safety & Cold-Chain Packaging</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('legal-disclaimer')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Privacy Policy & Terms of Service</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Wholesale */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#151515] mb-3 border-b border-[#EAE6DF] pb-1.5">
              Quick Links & Wholesale
            </h4>
            <ul className="space-y-2 text-xs mb-4">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>About Our Butcher Shop</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Butcher Journal & Recipes</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('wholesale')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Wholesale Meat Supply</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('wholesale')}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Apply for Wholesale Account</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBlueprint}
                  className="hover:text-[#7A1F2B] hover:translate-x-1 transition-all text-left flex items-center gap-1.5 w-full py-0.5 font-mono text-[11px]"
                >
                  <span className="text-[#C7903E] text-[10px]">›</span>
                  <span>Site Architecture & Blueprint</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Verified Australian Business Register & Reviews Banner */}
        <div className="my-4 p-3 bg-white border border-[#EAE6DF] rounded-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2E6B4D]/10 text-[#2E6B4D] border border-[#2E6B4D]/25 rounded-sm flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-[#151515] uppercase tracking-wider font-mono">
                  Official Business Entity
                </span>
                <span className="px-2 py-0.5 bg-[#2E6B4D]/15 text-[#2E6B4D] rounded-xs text-[10px] font-bold">
                  ✓ Active Registration
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Location: <strong className="text-stone-800">{BUSINESS_CONFIG.location}</strong> &bull; Operating under Australian Consumer Law
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F5EF] border border-[#2E6B4D]/30 rounded-sm text-xs font-bold text-[#2E6B4D]">
              <ShieldCheck className="w-4 h-4 text-[#2E6B4D]" />
              <span>Certified Cold-Chain Food Safety Standards</span>
            </div>

            {/* Reviews display with no Trustpilot external link */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00b67a]/10 border border-[#00b67a]/30 rounded-sm text-xs font-bold text-[#008257]">
              <span>★ 4.9/5 Customer Reviews (348+ Verified Reviews)</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="text-center md:text-left space-y-0.5">
            <p className="text-[11px]">
              © {currentYear} {BUSINESS_CONFIG.businessName}. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-stone-600 flex items-center gap-2 justify-center md:justify-start">
              <span>Location: {BUSINESS_CONFIG.location}</span>
              <span>•</span>
              <span className="text-[#2E6B4D] font-medium">100% Australian Farm Sourced</span>
            </p>
          </div>

          {/* Payment Icons Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="px-2 py-0.5 bg-white border border-[#EAE6DF] rounded-sm font-mono text-[9px] text-stone-600">
              [VISA]
            </span>
            <span className="px-2 py-0.5 bg-white border border-[#EAE6DF] rounded-sm font-mono text-[9px] text-stone-600">
              [MASTERCARD]
            </span>
            <span className="px-2 py-0.5 bg-white border border-[#EAE6DF] rounded-sm font-mono text-[9px] text-stone-600">
              [AMEX]
            </span>
            <span className="px-2 py-0.5 bg-white border border-[#EAE6DF] rounded-sm font-mono text-[9px] text-stone-600">
              [APPLE PAY]
            </span>
            <span className="px-2 py-0.5 bg-white border border-[#EAE6DF] rounded-sm font-mono text-[9px] text-stone-600">
              [GOOGLE PAY]
            </span>
            <span className="px-2 py-0.5 bg-[#7A1F2B]/10 border border-[#7A1F2B]/30 rounded-sm font-mono text-[9px] text-[#7A1F2B]">
              [CRYPTO]
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-[11px] text-stone-500">
            <button
              type="button"
              onClick={() => onOpenCompliance('legal-disclaimer')}
              className="hover:text-[#7A1F2B] hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenCompliance('legal-disclaimer')}
              className="hover:text-[#7A1F2B] hover:underline"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenCompliance('food-safety')}
              className="hover:text-[#7A1F2B] hover:underline"
            >
              Food Safety
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenCompliance('delivery-info')}
              className="hover:text-[#7A1F2B] hover:underline"
            >
              Delivery Zones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
