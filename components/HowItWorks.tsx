'use client';

import { CheckCircle, Truck, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenCompliance: (sectionId?: string) => void;
  onShopNow: () => void;
}

export default function HowItWorks({ onOpenCompliance, onShopNow }: HowItWorksProps) {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Cuts',
      description: 'Explore premium Australian beef, chicken, pork, lamb, seafood, and family meat packs. Select your preferred pack weights and portion quantities.',
      icon: CheckCircle,
    },
    {
      step: '02',
      title: 'Select Your Delivery Option',
      description: 'Enter your Australian postcode at checkout, choose an available delivery window, and our team prepares and packs your order in insulated cold-chain cartons.',
      icon: Truck,
    },
    {
      step: '03',
      title: 'Cook, Share and Enjoy',
      description: 'Unpack your chilled cuts, refrigerate or freeze according to storage instructions, and prepare steakhouse-quality meals for family and friends.',
      icon: UtensilsCrossed,
    },
  ];

  return (
    <section
      id="how-it-works-section"
      aria-labelledby="how-it-works-heading"
      className="py-16 sm:py-24 bg-transparent text-[#151515]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E0AE5C] block mb-2 drop-shadow-xs">
            Simple 3-Step Process
          </span>
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3 drop-shadow-md"
          >
            How Online Meat Delivery Works
          </h2>
          <p className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium drop-shadow-xs">
            Fresh meat delivery made reliable, transparent, and convenient from order to your kitchen bench.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                id={`how-it-works-step-${index + 1}`}
                className="bg-white/95 p-7 rounded-sm border border-[#EAE6DF] hover:border-[#C7903E] hover:bg-white hover:shadow-2xl shadow-lg flex flex-col justify-between relative group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-bold text-[#C7903E]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white border border-[#EAE6DF] text-[#7A1F2B] flex items-center justify-center group-hover:bg-[#7A1F2B] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#151515] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Delivery Information page */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/95 py-4 px-6 rounded-sm border border-[#EAE6DF] w-fit mx-auto shadow-md">
          <button
            type="button"
            onClick={() => onOpenCompliance('delivery-info')}
            className="text-xs font-bold uppercase tracking-wider text-[#2E6B4D] hover:underline flex items-center gap-1.5"
          >
            <span>Learn cold-chain packaging & delivery zones →</span>
          </button>
          <span className="hidden sm:inline-block text-[#EAE6DF]">|</span>
          <button
            type="button"
            onClick={onShopNow}
            className="inline-flex items-center gap-2 bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-[11px] font-bold uppercase tracking-widest py-3 px-6 rounded-sm shadow-sm transition-colors"
          >
            <span>Start Your Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
