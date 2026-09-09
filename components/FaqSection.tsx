'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { HOMEPAGE_FAQS } from '@/lib/data';

interface FaqSectionProps {
  onOpenCompliance: (sectionId?: string) => void;
}

export default function FaqSection({ onOpenCompliance }: FaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq-section"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-transparent text-[#151515]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E0AE5C] mb-2 drop-shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#E0AE5C]" />
            <span>Got Questions?</span>
          </div>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3 drop-shadow-md"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium drop-shadow-xs">
            Everything you need to know about ordering beef online, cold-chain delivery, packaging, and commercial wholesale.
          </p>
        </div>

        <div className="space-y-3" role="region" aria-label="FAQ Accordion">
          {HOMEPAGE_FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={faq.question}
                id={`faq-item-${index + 1}`}
                className="bg-white/95 backdrop-blur-xs rounded-sm border border-[#EAE6DF] overflow-hidden shadow-lg transition-all hover:border-[#C7903E] hover:bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F8F5EF]/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index + 1}`}
                >
                  <span className="font-serif text-base font-bold text-[#151515]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#7A1F2B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index + 1}`}
                    className="px-5 pb-4 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-[#EAE6DF] bg-[#F8F5EF]/30"
                  >
                    <p>{faq.answer}</p>
                    {(index === 2 || index === 3 || index === 4) && (
                      <button
                        type="button"
                        onClick={() => onOpenCompliance('delivery-info')}
                        className="mt-2.5 text-[11px] font-bold uppercase tracking-wider text-[#2E6B4D] hover:underline block"
                      >
                        Official Delivery & Cold-Chain Policy →
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
