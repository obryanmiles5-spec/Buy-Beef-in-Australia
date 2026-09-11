'use client';

import { 
  Award, 
  Smartphone, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Users, 
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface WhyChooseUsProps {
  onOpenCompliance: (sectionId?: string) => void;
}

export default function WhyChooseUs({ onOpenCompliance }: WhyChooseUsProps) {
  const benefits = [
    {
      title: '100% Australian Farm-Direct Provenance',
      subtitle: 'Ethically Pasture-Fed & Grain-Finished',
      description: 'Direct partnerships with ethical Australian cattle and livestock graziers. Every cut of Black Angus, F1 Wagyu, Riverina Pork, and Prime Lamb is traceable from paddock to plate with zero artificial growth hormones.',
      icon: Award,
      tag: 'MSA Graded Quality',
    },
    {
      title: 'Master Artisan Custom Butchery',
      subtitle: 'Cut-to-Order Portion Consistency',
      description: 'Every primal cut, steak, roast, and carcass share is hand-trimmed, portioned, and vacuum-sealed by accredited Australian master butchers to preserve peak moisture, natural marbling, and tenderness.',
      icon: Users,
      tag: 'Craft Butchery',
    },
    {
      title: 'Sub-4°C Sealed Cold-Chain Logistics',
      subtitle: '48-Hour Chill Temperature Guarantee',
      description: 'Dispatched in heavy-duty food-grade insulated thermal box liners with sub-zero eutectic ice gel bricks. Your meat stays strictly between 0°C and 4°C throughout transit direct to your doorstep.',
      icon: ThermometerSnowflake,
      complianceId: 'cold-chain',
      tag: 'FSANZ Standard 3.2.2',
    },
    {
      title: '1/4, 1/2 & Full Carcass Value',
      subtitle: 'Save up to 35% with Nose-to-Tail Shares',
      description: 'Eliminate supermarket retail markups through ethical whole-animal purchases. Custom break-down sheets allow you to tailor steak thicknesses, roast sizes, sausages, and primal cuts for maximum freezer value.',
      icon: Sparkles,
      tag: 'Zero-Waste Butchery',
    },
    {
      title: 'Convenient 24/7 Digital Butcher Ordering',
      subtitle: 'Mobile-Optimized Cut Selection',
      description: 'Effortlessly select pack portions, steak weights, and bulk family boxes on any smartphone or desktop. Secure checkout with Instant Cards, Apple Pay, Google Pay, and Crypto options.',
      icon: Smartphone,
      tag: 'Instant Checkout',
    },
    {
      title: 'Dedicated Australian Butcher Support',
      subtitle: 'Regional Dispatch Base NSW 2642',
      description: 'Direct access to butchery specialists for culinary recommendations, smoking guidelines, custom primal orders, and live order tracking. Australian Consumer Law protected.',
      icon: Headphones,
      tag: 'Local Support',
    },
  ];

  return (
    <section
      id="why-choose-us-section"
      aria-labelledby="why-choose-heading"
      className="py-16 sm:py-24 lg:py-28 bg-transparent text-[#151515]"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header with SEO Rich Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/50 backdrop-blur-md border border-[#E0AE5C]/40 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-[#E0AE5C] mb-3 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E0AE5C] animate-pulse" />
            <span>The Australian Online Butcher Standard</span>
          </div>
          <h2
            id="why-choose-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-lg"
          >
            Why Customers Choose Our Online Butcher
          </h2>
          <p className="text-stone-100 text-xs sm:text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            From farm-direct Black Angus beef and whole carcass shares to precision cold-chain temperature monitoring, discover why Australian home cooks, pitmasters, and chefs trust {BUSINESS_CONFIG.businessName}.
          </p>
        </div>

        {/* 6 High-Impact SEO Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const iconColors = [
              'text-[#2E6B4D] bg-[#2E6B4D]/10 border-[#2E6B4D]/25',
              'text-[#C7903E] bg-[#C7903E]/10 border-[#C7903E]/25',
              'text-[#7A1F2B] bg-[#7A1F2B]/10 border-[#7A1F2B]/25',
              'text-[#C7903E] bg-[#C7903E]/10 border-[#C7903E]/25',
              'text-[#2E6B4D] bg-[#2E6B4D]/10 border-[#2E6B4D]/25',
              'text-[#7A1F2B] bg-[#7A1F2B]/10 border-[#7A1F2B]/25',
            ];
            const colorClass = iconColors[index % iconColors.length];

            return (
              <article
                key={item.title}
                id={`benefit-card-${index + 1}`}
                className="p-6 sm:p-7 rounded-sm border border-[#EAE6DF] bg-white/95 backdrop-blur-sm hover:border-[#C7903E] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-sm flex items-center justify-center border ${colorClass} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-xs border border-stone-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#C7903E] font-semibold mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  {item.complianceId ? (
                    <button
                      type="button"
                      onClick={() => onOpenCompliance(item.complianceId)}
                      className="text-[11px] font-bold uppercase tracking-wider text-[#2E6B4D] hover:text-[#1d4733] inline-flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Cold-Chain Assurance Protocol</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B4D]" />
                      <span>100% Quality Inspected</span>
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* SEO Trust Matrix Banner */}
        <div className="bg-black/65 backdrop-blur-md border border-white/20 rounded-sm p-6 sm:p-7 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#7A1F2B] text-white flex items-center justify-center shrink-0 border border-white/20 shadow-md">
              <ShieldCheck className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0AE5C]">
                  Official Australian Butcher Guarantee
                </span>
                <span className="text-[10px] bg-[#2E6B4D] text-white px-2 py-0.5 rounded-xs font-bold font-mono">
                  ABN: 45 775 613 837
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-2xl">
                Operating strictly under Australian Consumer Law and FSANZ temperature standards. Every consignment is sealed with commercial thermal barriers and dispatched direct from {BUSINESS_CONFIG.location}.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenCompliance('food-safety')}
              className="px-5 py-3 bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Food Safety Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onOpenCompliance('delivery-info')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              <span>Delivery Zones</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

