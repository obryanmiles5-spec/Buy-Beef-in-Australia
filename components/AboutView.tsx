'use client';

import { ShieldCheck, Truck, Award, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function AboutView({ onNavigate, onOpenCompliance }: AboutViewProps) {
  return (
    <div id="about-us-page-view" className="py-12 bg-[#F8F5EF] text-[#151515] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A1F2B] font-bold">
            Artisan Craft & Dedication
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#151515] tracking-tight mt-2 mb-4">
            About {BUSINESS_CONFIG.businessName}
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Delivering quality Australian beef, poultry, lamb, and seafood to home cooks, barbecue enthusiasts, and commercial food businesses with temperature-controlled cold-chain care.
          </p>
        </div>

        {/* Brand Story & Mission */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-12 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#C7903E] font-bold">
              Our Journey
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
              Our Brand Story
            </h2>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono text-xs text-stone-600 mb-4">
              [INSERT BRAND STORY / BUTCHER ORIGIN — E.G. FOUNDED TO CONNECT PASSIONATE HOME COOKS WITH TRADITIONAL MASTER BUTCHERY CUTS, WITHOUT INTERMEDIARY MARKUPS OR SUPERMARKET COMPROMISES]
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              At {BUSINESS_CONFIG.businessName}, we believe that cooking exceptional meals begins with respecting the integrity of the cut. In a retail market dominated by pre-packaged supermarket trays and obscure storage histories, our digital storefront bridges the gap between old-world artisan butcher craft and modern online ordering ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-stone-100">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#7A1F2B]" />
                <span>Our Mission</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                To deliver consistently exceptional, cleanly trimmed, and safely temperature-controlled meat cuts directly to Australian doorsteps, fostering a culture of confident home cooking and culinary enjoyment.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2E6B4D]" />
                <span>Our Quality Approach</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Every steak, roast, and portion is cut by skilled butchery staff adhering strictly to Australian Food Safety Standard 3.2.2. We focus on consistent portion weights, clean knife work, and hygienic cold-room preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Product Sourcing & Responsible Packaging Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Product Sourcing Statement
            </h3>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 font-mono text-xs text-stone-600 mb-3">
              [INSERT PRODUCT SOURCING STATEMENT — VERIFIED PROVENANCE, AUSTRALIAN PASTORAL REGIONS, PROCESSING ACCREDITATIONS]
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              We partner with audited Australian pastoral suppliers who respect animal welfare and industry grading standards. We do not make unsubstantiated claims regarding organic or specialty classifications unless backed by official documentation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              Responsible Packaging & Cold Chain
            </h3>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 font-mono text-xs text-stone-600 mb-3">
              [INSERT RESPONSIBLE PACKAGING STATEMENT & COLD-CHAIN RECYCLABILITY POLICY]
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Perishable items are protected with food-grade vacuum seals and recyclable thermal insulated box liners. Chilled by non-toxic frozen gel bricks designed to keep meat below 5°C throughout the transit window.
            </p>
            <button
              type="button"
              onClick={() => onOpenCompliance('cold-chain')}
              className="mt-3 text-xs font-semibold text-[#2E6B4D] hover:underline block"
            >
              Read Full Cold-Chain Protocol →
            </button>
          </div>
        </div>

        {/* Meet the Team Placeholder */}
        <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm mb-12 text-center">
          <Users className="w-10 h-10 text-stone-400 mx-auto mb-3" />
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
            Meet the Butchery & Culinary Team
          </h3>
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 max-w-lg mx-auto font-mono text-xs text-stone-600 my-4">
            [MEET THE BUTCHERY TEAM / MASTER BUTCHER BIO — PHOTOGRAPHS, APPRENTICESHIP PEDIGREE, AND AUSTRALIAN INDUSTRY HERITAGE]
          </div>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Profiles of our head butcher, portioning specialists, and quality control team will be published once team bios are verified.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#151515] text-white rounded-2xl p-8 sm:p-12 text-center border border-stone-800">
          <HeartHandshake className="w-10 h-10 text-[#C7903E] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Have Questions for Our Butcher Team?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-6">
            We are here to help you select the ideal cut for your next barbecue, dinner party, or wholesale kitchen order.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Browse Meat Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
