'use client';

import { ShieldCheck, Truck, Award, Users, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function AboutView({ onNavigate, onOpenCompliance }: AboutViewProps) {
  return (
    <div id="about-us-page-view" className="py-12 sm:py-16 bg-[#F8F5EF] text-[#151515] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#7A1F2B]/10 px-3 py-1 rounded-full border border-[#7A1F2B]/20">
            <span className="w-2 h-2 rounded-full bg-[#7A1F2B]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A1F2B] font-bold">
              {BUSINESS_CONFIG.domain} • Official Brand Heritage
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#151515] tracking-tight mb-4">
            About Pasture & Tide
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Bridging the gap between traditional Australian pastoral farming and modern home kitchens, {BUSINESS_CONFIG.businessName} delivers master-butchered Black Angus, F1 Wagyu, free-range poultry, and ocean-fresh seafood directly from NSW 2642 to tables nationwide.
          </p>
        </div>

        {/* Brand Story & Mission */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-12 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#C7903E] font-bold">
              Our Heritage & Origin
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
              From Verdant Pastures and Pristine Tides to Your Kitchen Table
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
              Founded in the rich agricultural heartland of New South Wales (NSW 2642), <strong>Pasture & Tide</strong> was born out of a singular, uncompromising vision: to eliminate the anonymous supermarket middleman and provide Australian households with direct access to top-tier, export-grade proteins. Our name reflects our dual commitment to land-based pastoral excellence—raising grass-fed and grain-finished Black Angus and F1 Wagyu on open, chemical-free pastures—and ocean-harvested seafood sourced under strict sustainability and cold-chain protocols.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Every cut that leaves our packing room is handled by master butchers with decades of knife-work heritage. We adhere rigorously to Australian Food Safety Standard 3.2.2, ensuring that whether you order an artisan 1/4 carcass share for your home chest freezer, a dry-aged Scotch fillet for a weekend gathering, or weekly family poultry boxes, you receive restaurant-quality precision every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-stone-100">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#7A1F2B]" />
                <span>Our Core Mission</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                To empower Australian families, barbecue pitmasters, and culinary enthusiasts with transparently sourced, flawlessly portioned, and safely temperature-controlled meats that elevate everyday cooking into extraordinary dining experiences.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2E6B4D]" />
                <span>The Pasture & Tide Quality Promise</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Rated 4.9/5 Excellent on Trustpilot, we stand behind our produce with an unconditional freshness guarantee. If your cold-chain insulated carton does not arrive in pristine, chilled condition, our support team makes it right immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Product Sourcing & Responsible Packaging Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#7A1F2B]" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Verified Australian Provenance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                We partner exclusively with verified pastoral graziers across NSW, Victoria, and regional Queensland who adhere to high animal welfare standards, natural rotational grazing, and zero routine antibiotic growth promotants. Our Black Angus and F1 Wagyu are grain-finished for optimal marbling or grass-fed for pure robust flavor.
              </p>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B4D]" />
                  <span>100% Australian Sourced (ABN: 45 775 613 837)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B4D]" />
                  <span>MSA Graded Steaks & Carcass Shares</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B4D]" />
                  <span>Custom Butchery & Vacuum Cryovac Sealing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#2E6B4D]" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Cold-Chain & Sustainable Packaging
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Perishable delivery requires absolute temperature integrity. Every order is packed in heavy-duty thermal insulated boxes lined with recyclable materials and chilled with non-toxic frozen gel bricks. Temperature loggers monitor transit conditions to ensure meat arrives at or below 4°C.
              </p>
              <button
                type="button"
                onClick={() => onOpenCompliance('cold-chain')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E6B4D] hover:underline"
              >
                <span>Read Full Cold-Chain Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Master Butcher Team Spotlight */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-12 text-center">
          <Users className="w-10 h-10 text-[#C7903E] mx-auto mb-3" />
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
            Meet Our Master Butchery & Dispatch Team
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Led by veteran butchers with over 35 years of collective experience in artisanal carcass breakdown, dry-aging craftsmanship, and vacuum packaging, our team operates our NSW 2642 facility with pride, precision, and deep respect for the craft.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 border-t border-stone-100">
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <span className="font-serif font-bold text-stone-900 block text-sm">Master Carcass Division</span>
              <p className="text-[11px] text-stone-500 mt-1">Specializing in custom 1/4, 1/2 and full beast breakdown and yield optimization.</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <span className="font-serif font-bold text-stone-900 block text-sm">Dry-Aging & Steaks</span>
              <p className="text-[11px] text-stone-500 mt-1">Monitoring temperature and humidity controlled dry-aging rooms for peak tenderness.</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
              <span className="font-serif font-bold text-stone-900 block text-sm">Cold-Chain Logistics</span>
              <p className="text-[11px] text-stone-500 mt-1">Ensuring thermal insulation and rapid dispatch across regional and metro Australia.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#151515] text-white rounded-2xl p-8 sm:p-12 text-center border border-stone-800">
          <HeartHandshake className="w-10 h-10 text-[#C7903E] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Ready to Experience Pasture & Tide Quality?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-6">
            Explore our master butcher departments or reach out to our team at {BUSINESS_CONFIG.email} for custom wholesale and home delivery inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Shop Meat Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Contact Butcher Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
