'use client';

import { ShieldCheck } from 'lucide-react';
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
      className="relative z-20 bg-[#F1EEE7] text-stone-700 border-t border-[#EAE6DF] py-6 sm:py-8 font-sans"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Compact 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-[#EAE6DF]">
          {/* Column 1: Brand & Location (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 bg-[#7A1F2B] text-white flex items-center justify-center text-xs font-serif italic rounded-xs shadow-xs">
                  B
                </div>
                <h3 className="font-serif text-base font-bold text-[#151515] tracking-tight">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-[#7A1F2B]/10 text-[#7A1F2B] rounded-xs font-bold">
                  AU Butcher
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Farm-direct carcass shares, free-range poultry, and artisan cuts dispatched across Australia with cold-chain packaging.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-stone-600">
              <span className="text-stone-800 font-bold">{BUSINESS_CONFIG.location}</span>
              <span>•</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A1F2B] transition-colors">
                Facebook
              </a>
              <span>•</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A1F2B] transition-colors">
                Instagram
              </a>
              <span>•</span>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A1F2B] transition-colors">
                TikTok
              </a>
            </div>
          </div>

          {/* Column 2: Shop Departments 2-Col Micro Grid (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#151515] mb-2 font-mono">
              Shop Departments
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
              {[
                { name: 'Beef & Wagyu', id: 'beef' },
                { name: 'Chicken & Poultry', id: 'chicken' },
                { name: 'Pork & Roasts', id: 'pork' },
                { name: 'Lamb & Cutlets', id: 'lamb' },
                { name: 'Fish & Fillets', id: 'fish' },
                { name: 'Ocean Seafood', id: 'seafood' },
                { name: 'Artisan Sausages', id: 'sausages' },
                { name: 'Curated Meat Packs', id: 'packs' },
                { name: 'BARF Pet Food', id: 'pet-food' },
                { name: 'Offal & Specialty', id: 'offal' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigate('category', cat.id)}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 text-stone-600 truncate cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span className="truncate">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Customer Care (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#151515] mb-2 font-mono">
              Customer Care
            </h4>
            <ul className="space-y-1 text-xs text-stone-600">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Contact &amp; Orders</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('delivery-info')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Delivery Schedule</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('returns-refunds')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Returns Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenCompliance('food-safety')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Food Safety</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Wholesale (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#151515] mb-2 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs text-stone-600">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>About Our Butchery</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Butcher Journal</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('wholesale')}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer font-medium text-[#7A1F2B]"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Wholesale Meat Supply</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBlueprint}
                  className="hover:text-[#7A1F2B] hover:translate-x-0.5 transition-all text-left flex items-center gap-1 py-0.5 cursor-pointer font-mono text-[11px]"
                >
                  <span className="text-[#C7903E] text-[9px]">›</span>
                  <span>Site Architecture</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Inline Trust Strip */}
        <div className="py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 border-b border-[#EAE6DF] text-xs">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-stone-600">
            <span className="inline-flex items-center gap-1 text-[#2E6B4D] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ABN 45 775 613 837</span>
            </span>
            <span>•</span>
            <span>Sub-4°C Cold Chain Packaging</span>
            <span>•</span>
            <span>Dispatch Hub: {BUSINESS_CONFIG.location}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#00b67a]/10 border border-[#00b67a]/25 rounded-xs text-[10px] font-bold text-[#008257]">
            <span>★ 4.9/5 Rating (348+ Verified Australian Reviews)</span>
          </div>
        </div>

        {/* Footer Bottom (Compact 1-row) */}
        <div className="pt-3 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-stone-500">
          <p>
            © {currentYear} {BUSINESS_CONFIG.businessName}. All rights reserved. Sourced 100% Australian Farm Direct.
          </p>

          {/* Payment Badges & Policies */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 font-mono text-[9px] text-stone-500">
              <span className="px-1.5 py-0.5 bg-white border border-[#EAE6DF] rounded-xs">VISA</span>
              <span className="px-1.5 py-0.5 bg-white border border-[#EAE6DF] rounded-xs">MASTERCARD</span>
              <span className="px-1.5 py-0.5 bg-white border border-[#EAE6DF] rounded-xs">AMEX</span>
              <span className="px-1.5 py-0.5 bg-white border border-[#EAE6DF] rounded-xs">APPLE PAY</span>
              <span className="px-1.5 py-0.5 bg-white border border-[#EAE6DF] rounded-xs">CRYPTO</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenCompliance('legal-disclaimer')}
                className="hover:text-[#7A1F2B] hover:underline cursor-pointer"
              >
                Privacy &amp; Terms
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenCompliance('delivery-info')}
                className="hover:text-[#7A1F2B] hover:underline cursor-pointer"
              >
                Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
