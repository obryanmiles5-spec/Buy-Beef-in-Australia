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
      className="py-16 sm:py-20 bg-[#F8F5EF] text-[#151515] border-b border-[#EAE6DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A1F2B] block mb-1">
              Butcher Departments
            </span>
            <h2
              id="categories-heading"
              className="text-2xl sm:text-4xl font-serif italic text-[#151515]"
            >
              Shop by Category
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onSelectCategory('beef')}
            className="text-[10px] font-bold uppercase tracking-widest text-[#7A1F2B] border-b border-[#7A1F2B] pb-1 hover:text-[#5A1720] transition-colors self-start sm:self-end"
          >
            View Full Catalog →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((category, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            return (
              <div
                key={category.id}
                id={`category-card-${category.id}`}
                onClick={() => onSelectCategory(category.id)}
                className="group relative bg-white rounded-sm overflow-hidden border border-[#EAE6DF] hover:border-[#C7903E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={category.image}
                    alt={`${category.name} category cuts`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                  <span className="absolute top-3 left-3 text-xs font-serif font-bold text-white/90 bg-black/40 px-2 py-0.5 rounded-sm backdrop-blur-xs">
                    {indexStr}
                  </span>
                  <h3 className="absolute bottom-3 left-3 right-3 font-serif text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-sm line-clamp-2">
                    {category.name}
                  </h3>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {category.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-[#EAE6DF] flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      {category.id === 'beef' ? 'Black Angus & F1 Wagyu' : `${category.subcategories.length} Cuts / Packs`}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#7A1F2B] group-hover:text-[#5A1720]">
                      <span>Browse</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
            className="group relative bg-[#151515] text-white rounded-sm overflow-hidden border border-stone-800 hover:border-[#C7903E] p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all"
          >
            <div>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#C7903E] block mb-2">
                Wholesale Counter
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Commercial Supply
              </h3>
              <p className="text-xs text-[#F8F5EF]/70 leading-relaxed mb-4">
                Primal vacuum-packed cuts, carton buys, and dedicated wholesale accounts for Australian food service.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#C7903E] uppercase tracking-wider">
                Cartons & Primal Cuts
              </span>
              <button
                type="button"
                className="bg-[#C7903E] hover:bg-[#B37F33] text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors"
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
