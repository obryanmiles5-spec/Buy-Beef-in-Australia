'use client';

import { 
  Award, 
  Smartphone, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Users, 
  Headphones 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenCompliance: (sectionId?: string) => void;
}

export default function WhyChooseUs({ onOpenCompliance }: WhyChooseUsProps) {
  const benefits = [
    {
      title: 'Carefully Selected Quality Cuts',
      description: 'Each cut is inspected, trimmed to standard, and prepared by experienced butchery staff with attention to portion consistency.',
      icon: Award,
    },
    {
      title: 'Convenient Online Ordering',
      description: 'Browse cuts from your smartphone or desktop, choose desired pack weights, and order in minutes without queuing at the counter.',
      icon: Smartphone,
    },
    {
      title: 'Secure Online Payments',
      description: 'Encrypted payment checkout protecting your financial details across credit cards, digital wallets, and approved gateways.',
      icon: ShieldCheck,
    },
    {
      title: 'Temperature-Controlled Delivery',
      description: 'Perishable goods dispatched in thermal insulated barrier containers with frozen coolant bricks to maintain food safe temperatures.',
      icon: ThermometerSnowflake,
      complianceId: 'cold-chain',
    },
    {
      title: 'Family, BBQ and Bulk Options',
      description: 'From modest weeknight meal portions to entertainer BBQ bundles and wholesale cartons for hospitality buyers.',
      icon: Users,
    },
    {
      title: 'Helpful Australian Customer Support',
      description: 'Local support available during operating hours to assist with orders, cut recommendations, and delivery tracking enquiries.',
      icon: Headphones,
    },
  ];

  return (
    <section
      id="why-choose-us-section"
      aria-labelledby="why-choose-heading"
      className="py-16 sm:py-24 bg-transparent text-[#151515]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E0AE5C] font-bold block mb-2 drop-shadow-xs">
            The Meat Delivery Standard
          </span>
          <h2
            id="why-choose-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3 drop-shadow-md"
          >
            Why Customers Choose Our Online Butcher
          </h2>
          <p className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium drop-shadow-xs">
            We focus on meticulous preparation, hygienic packaging, and dependable temperature-controlled logistics for Australian food lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            // Alternate Natural Tones accents: Forest, Gold, Burgundy
            const iconColors = [
              'text-[#2E6B4D] bg-[#2E6B4D]/10 border-[#2E6B4D]/20',
              'text-[#C7903E] bg-[#C7903E]/10 border-[#C7903E]/20',
              'text-[#7A1F2B] bg-[#7A1F2B]/10 border-[#7A1F2B]/20',
              'text-[#2E6B4D] bg-[#2E6B4D]/10 border-[#2E6B4D]/20',
              'text-[#C7903E] bg-[#C7903E]/10 border-[#C7903E]/20',
              'text-[#7A1F2B] bg-[#7A1F2B]/10 border-[#7A1F2B]/20',
            ];
            const colorClass = iconColors[index % iconColors.length];

            return (
              <div
                key={item.title}
                id={`benefit-card-${index + 1}`}
                className="p-6 rounded-sm border border-[#EAE6DF] bg-white/95 hover:border-[#C7903E] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 border ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#151515] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                {item.complianceId && (
                  <button
                    type="button"
                    onClick={() => onOpenCompliance(item.complianceId)}
                    className="text-[11px] font-bold uppercase tracking-wider text-[#2E6B4D] hover:underline inline-flex items-center gap-1 self-start"
                  >
                    <span>Cold-Chain Policy →</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
