'use client';

import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/data';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section
      id="shop-by-category-section"
      aria-labelledby="categories-heading"
      className="relative z-20 py-16 sm:py-24 lg:py-28 bg-[#F8F5EF] text-[#151515] border-b border-[#EAE6DF]"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-4 pb-4 border-b border-[#EAE6DF]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#7A1F2B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A1F2B]">
                Master Butcher Departments • 100% Australian Farm-Direct
              </span>
            </div>
            <h2
              id="categories-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[#151515] font-bold"
            >
              Shop by Category
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex text-[11px] font-mono text-stone-500 uppercase">
              10 Specialized Departments + Wholesale
            </span>
            <button
              type="button"
              id="category-grid-view-all-btn"
              onClick={() => onSelectCategory('beef')}
              className="text-[11px] font-bold uppercase tracking-widest text-white bg-[#7A1F2B] hover:bg-[#5A1720] px-4 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {CATEGORIES.filter((c) => c.id !== 'wholesale').map((category, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <div
                key={category.id}
                id={`category-card-${category.id}`}
                onClick={() => onSelectCategory(category.id)}
                className="group relative bg-white rounded-sm overflow-hidden border border-[#EAE6DF] hover:border-[#C7903E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={category.image}
                    alt={`${category.name} category cuts`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <span className="absolute top-3 left-3 text-xs font-serif font-bold text-white/90 bg-black/50 px-2.5 py-0.5 rounded-sm backdrop-blur-xs border border-white/15">
                    {indexStr}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#C7903E] font-bold block mb-0.5">
                      Butcher Counter
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-sm line-clamp-2">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-2">
                    {category.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#EAE6DF] flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-medium">
                      {category.id === 'beef' ? 'Black Angus & F1 Wagyu' : `${category.subcategories.length} Cuts Available`}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#7A1F2B] group-hover:text-[#5A1720]">
                      <span>Browse</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Wholesale Card in Natural Tones theme */}
          <div
            id="category-card-wholesale"
            onClick={() => onSelectCategory('wholesale')}
            className="group relative bg-[#151515] text-white rounded-sm overflow-hidden border border-stone-800 hover:border-[#C7903E] p-6 sm:p-7 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all"
          >
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/categories/wholesale.webp"
                alt="Wholesale Meat Commercial Supply"
                className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/85 to-[#151515]/70" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#C7903E] block">
                  Wholesale Counter
                </span>
                <span className="text-[9px] bg-[#C7903E]/20 text-[#C7903E] font-mono px-2 py-0.5 rounded-xs font-bold border border-[#C7903E]/40">
                  Commercial
                </span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                Commercial Supply
              </h3>
              <p className="text-xs text-[#F8F5EF]/75 leading-relaxed mb-6">
                Primal vacuum-packed cuts, carton buys, and dedicated wholesale butcher accounts for Australian restaurants, pubs, and catering.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#C7903E] uppercase tracking-wider">
                Cartons &amp; Primals
              </span>
              <button
                type="button"
                className="bg-[#C7903E] hover:bg-[#B37F33] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors shadow-sm"
              >
                Enquire Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
