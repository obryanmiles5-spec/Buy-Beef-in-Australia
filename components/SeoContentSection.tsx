'use client';

import { BUSINESS_CONFIG } from '@/lib/data';

interface SeoContentSectionProps {
  onNavigate: (view: string, categoryId?: string) => void;
  onOpenCompliance: (sectionId?: string) => void;
}

export default function SeoContentSection({ onNavigate, onOpenCompliance }: SeoContentSectionProps) {
  return (
    <section
      id="seo-content-section"
      aria-labelledby="seo-article-heading"
      className="py-16 sm:py-24 bg-transparent text-[#151515]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main H2 Header with high contrast over dark butcher background */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E0AE5C] block mb-2 drop-shadow-xs">
            Australian Meat Delivery Guide
          </span>
          <h2
            id="seo-article-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 drop-shadow-md"
          >
            How to Buy Beef Online in Australia: Quality, Convenience & Cold-Chain Delivery
          </h2>
          <div className="w-16 h-0.5 bg-[#C7903E] mx-auto shadow-sm"></div>
        </div>

        {/* Article Container with High Contrast & Editorial Hierarchy */}
        <div className="bg-white/95 backdrop-blur-xs rounded-sm border border-[#EAE6DF] p-6 sm:p-10 md:p-12 shadow-2xl">
          <article className="prose prose-stone max-w-none">
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              When you decide to <strong>buy beef online in Australia</strong>, you expect the uncompromising standards of an artisan butcher shop paired with modern delivery convenience. At{' '}
              <span className="font-semibold text-stone-900">{BUSINESS_CONFIG.businessName}</span>, our mission is to simplify how home cooks, barbecue enthusiasts, and commercial food operators source quality protein. By ordering through an established <strong>online butcher in Australia</strong>, you bypass supermarket queues and gain direct access to expertly prepared meat cuts portioned to weight and delivered in temperature-controlled conditions.
            </p>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#151515] mt-8 mb-3">
            A Complete Range of Premium Beef Cuts Online
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            Navigating an online meat catalog should be intuitive and informative. Our curated selection of{' '}
            <button
              type="button"
              onClick={() => onNavigate('category', 'beef')}
              className="text-[#7A1F2B] font-semibold underline hover:text-[#5A1720]"
            >
              beef cuts online
            </button>{' '}
            covers every culinary occasion. For steak lovers seeking reliable <strong>steak delivery</strong>, we offer succulent Ribeye (Scotch Fillet), prime Rump steaks, and classic bone-in T-bones. Each cut is trimmed to remove excessive surface fat while maintaining the natural marbling required for tenderness and depth of flavour.
          </p>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
            For everyday family dining and high-protein meal preparation, ordering <strong>beef mince online</strong> ensures consistent quality without filler. You will also find specialised cuts including whole and flat briskets for low-and-slow smoking, short ribs, diced casserole beef, and lean stir-fry strips sliced across the grain. Looking for variety? Our curated{' '}
            <button
              type="button"
              onClick={() => onNavigate('category', 'packs')}
              className="text-[#7A1F2B] font-semibold underline hover:text-[#5A1720]"
            >
              family meat packs
            </button>{' '}
            and <strong>BBQ meat packs</strong> combine steaks, sausages, and poultry for maximum household value.
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#151515] mt-8 mb-3">
            Reliable Cold-Chain Fresh Meat Delivery
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            Perishable food requires rigorous logistical discipline. Our <strong>fresh meat delivery</strong> framework relies on strict cold-chain protocols. After portioning in certified hygienic premises, cuts are vacuum-sealed or thermo-sealed in food-grade barrier films to prevent oxidation and moisture loss. Orders are then assembled in heavy-duty thermal insulated cartons chilled with high-performance gel refrigerant packs.
          </p>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
            This specialized packaging maintains safe temperatures (below 5°C) from dispatch until arrival at your address. Review our dedicated{' '}
            <button
              type="button"
              onClick={() => onOpenCompliance('delivery-info')}
              className="text-[#2E6B4D] font-semibold underline hover:text-[#1d4733]"
            >
              Delivery Information & Cold-Chain Policy
            </button>{' '}
            to check delivery schedules and service zones across Australia [INSERT VERIFIED DELIVERY REGIONS].
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#151515] mt-8 mb-3">
            Commercial & Wholesale Meat Supply for Australian Businesses
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            Beyond domestic kitchens, we act as a dedicated{' '}
            <button
              type="button"
              onClick={() => onNavigate('wholesale')}
              className="text-[#7A1F2B] font-semibold underline hover:text-[#5A1720]"
            >
              wholesale meat supplier
            </button>{' '}
            catering to cafes, pubs, restaurants, catering businesses, and butcher retailers. Commercial partners benefit from primal and sub-primal carton buys, tailored portioning, and scheduled cold-chain delivery designed to fit demanding hospitality prep schedules.
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#151515] mt-8 mb-3">
            Proper Meat Storage and Kitchen Preparation
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            To experience the best texture and safety from your order, immediate refrigeration is essential. Store chilled fresh meat in your domestic refrigerator between 0°C and 4°C. Cuts intended for later dates should be frozen immediately at -18°C. For cooking guidance, internal core temperatures, and chef-tested steak recipes, explore our instructional{' '}
            <button
              type="button"
              onClick={() => onNavigate('blog')}
              className="text-[#7A1F2B] font-semibold underline hover:text-[#5A1720]"
            >
              Butcher Cooking Guides & Blog
            </button>.
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#151515] mt-8 mb-3">
            Dedicated Customer Care
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            Whether you have questions about specific cut thicknesses, delivery postcodes, or placing custom carton orders, our Australian support staff is here to help. Reach out through our{' '}
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="text-[#7A1F2B] font-semibold underline hover:text-[#5A1720]"
            >
              Contact Page
            </button>{' '}
            or call us on {BUSINESS_CONFIG.phone} during operating hours ({BUSINESS_CONFIG.operatingHours}). Start your order today and experience modern, dependable meat delivery.
          </p>
        </article>
        </div>
      </div>
    </section>
  );
}
