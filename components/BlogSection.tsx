'use client';

import { useState } from 'react';
import { Clock, BookOpen, ArrowRight, X, Flame, ChefHat, ShieldCheck, Thermometer } from 'lucide-react';
import { BlogPost } from '@/lib/types';
import { BLOG_POSTS } from '@/lib/data';

interface BlogSectionProps {
  onOpenArticle?: (post: BlogPost) => void;
  onNavigate?: (view: string, category?: string) => void;
}

export default function BlogSection({ onOpenArticle, onNavigate }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Spot 1: Featured BBQ & Grilling Guide (home1.webp - 2500x1667)
  const featuredBbqPost = BLOG_POSTS.find((p) => p.id === 'blog-2') || BLOG_POSTS[1];

  // Spot 2: Artisan Beef Cut Buying Manual (home.webp - 3000x4000)
  const cutManualPost = BLOG_POSTS.find((p) => p.id === 'blog-1') || BLOG_POSTS[0];

  // Supporting Guides
  const storagePost = BLOG_POSTS.find((p) => p.id === 'blog-3') || BLOG_POSTS[2];
  const tempsPost = BLOG_POSTS.find((p) => p.id === 'blog-4') || BLOG_POSTS[3];

  const handleRead = (post: BlogPost) => {
    if (onOpenArticle) {
      onOpenArticle(post);
    } else {
      setSelectedPost(post);
    }
  };

  const handleShopBeef = () => {
    if (onNavigate) {
      onNavigate('category', 'beef');
    }
  };

  return (
    <section
      id="blog-guides-section"
      aria-labelledby="blog-heading"
      className="relative z-20 py-16 sm:py-24 bg-[#F8F5EF] text-[#151515] border-b border-[#EAE6DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#7A1F2B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7A1F2B]">
                Australian Butcher Journal & Culinary Guides
              </span>
            </div>
            <h2
              id="blog-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight"
            >
              Recipes, Cut Guides & Meat Storage Advice
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mt-3 md:mt-0 leading-relaxed">
            Practical culinary insights, food safety advice, and barbecue techniques directly from our Australian butcher counter.
          </p>
        </div>

        {/* SPOT 1: Lead High-Resolution Spotlight (home1.webp - 2500x1667 Landscape) */}
        {featuredBbqPost && (
          <div
            id="blog-spotlight-home1"
            className="mb-10 bg-white rounded-sm overflow-hidden border border-[#EAE6DF] shadow-sm hover:border-[#C7903E] transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* High-Resolution Landscape Image Stage */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[280px] sm:min-h-[380px] overflow-hidden bg-stone-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredBbqPost.image}
                  alt="Best Steak Cuts for BBQ Season in Australia - High Resolution 2500px Feature"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Badges on Image */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="bg-[#7A1F2B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-300" />
                    <span>Featured Masterclass</span>
                  </span>
                  <span className="bg-black/75 backdrop-blur-sm text-stone-200 text-[9px] font-mono tracking-widest px-2.5 py-1 rounded-sm border border-white/20">
                    2500×1667 ULTRA-HD
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white/90 text-xs font-mono">
                  <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/10">
                    Category: BBQ & Grilling
                  </span>
                  <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C7903E]" />
                    <span>{featuredBbqPost.readingTime}</span>
                  </span>
                </div>
              </div>

              {/* Editorial Copy Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-stone-500 text-[11px] font-mono uppercase tracking-wider mb-2.5">
                    <ChefHat className="w-3.5 h-3.5 text-[#C7903E]" />
                    <span>Master Butcher Series • Summer Season</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515] leading-snug group-hover:text-[#7A1F2B] transition-colors mb-3">
                    {featuredBbqPost.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {featuredBbqPost.excerpt}
                  </p>

                  {/* Cut Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-stone-100 mb-6">
                    <div className="flex items-start gap-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7903E] mt-1.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 font-semibold">Scotch Fillet (Ribeye):</strong> Built-in basting with rich intramuscular fat ribbons.
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7903E] mt-1.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 font-semibold">Thick-Cut Rump:</strong> High value, robust beef flavour, perfect for sizzling high-heat char.
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7903E] mt-1.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 font-semibold">Resting Principle:</strong> Always rest on a warm board for 5–8 minutes prior to carving.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#EAE6DF]">
                  <button
                    type="button"
                    id="blog-spotlight-read-btn"
                    onClick={() => handleRead(featuredBbqPost)}
                    className="bg-[#151515] hover:bg-[#7A1F2B] text-white font-bold text-[11px] uppercase tracking-wider py-3 px-6 rounded-sm transition-all flex items-center gap-2 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    id="blog-spotlight-shop-btn"
                    onClick={handleShopBeef}
                    className="border border-stone-300 hover:border-stone-500 text-stone-800 font-bold text-[11px] uppercase tracking-wider py-3 px-5 rounded-sm hover:bg-stone-50 transition-all"
                  >
                    Shop BBQ Cuts →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lower Row: SPOT 2 (home.webp - 3000x4000 Portrait) + Supporting Guides */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* SPOT 2: Artisan Butcher Cut Manual (home.webp - 3000x4000 Portrait Frame) */}
          {cutManualPost && (
            <article
              id="blog-spotlight-home"
              className="md:col-span-6 lg:col-span-5 bg-white rounded-sm overflow-hidden border border-[#EAE6DF] shadow-xs hover:border-[#C7903E] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* High-Resolution Portrait Container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-stone-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cutManualPost.image}
                    alt="How to Choose the Best Beef Cut for Every Meal - 3000x4000 High Resolution Manual"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Resolution Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-[#151515]/90 backdrop-blur-sm text-[#C7903E] text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm border border-stone-700">
                      {cutManualPost.category}
                    </span>
                    <span className="bg-black/75 backdrop-blur-sm text-stone-300 text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-sm border border-white/15">
                      3000×4000 HD SPEC
                    </span>
                  </div>

                  {/* Bottom Image Overlay Header */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7903E] font-bold block mb-1">
                      Artisan Cut Anatomy
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-sm">
                      {cutManualPost.title}
                    </h3>
                  </div>
                </div>

                {/* Excerpt and Specs */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] text-stone-500 font-medium mb-3">
                    <Clock className="w-3 h-3 text-[#C7903E]" />
                    <span>{cutManualPost.readingTime}</span>
                    <span>•</span>
                    <span className="font-mono text-stone-400">/blog/{cutManualPost.slug}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {cutManualPost.excerpt}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#F8F5EF] p-3 rounded-sm border border-[#EAE6DF] font-sans">
                    <div>
                      <span className="font-bold text-stone-900 block">Low & Slow:</span>
                      <span className="text-stone-600 text-[10px]">Chuck, Shin, Brisket</span>
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 block">High-Heat Sear:</span>
                      <span className="text-stone-600 text-[10px]">Ribeye, Fillet, Sirloin</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  id={`read-more-${cutManualPost.id}`}
                  onClick={() => handleRead(cutManualPost)}
                  className="w-full bg-[#F8F5EF] hover:bg-[#7A1F2B] hover:text-white text-stone-800 text-[11px] font-bold uppercase tracking-wider py-2.5 px-4 rounded-sm border border-[#EAE6DF] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Butcher Cut Manual</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          )}

          {/* Supporting Articles: Safe Storage & Cooking Temperatures */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Guide 3: Food Safety & Meat Storage */}
            {storagePost && (
              <article
                id={`blog-card-${storagePost.id}`}
                className="bg-white rounded-sm overflow-hidden border border-[#EAE6DF] shadow-xs hover:border-[#C7903E] transition-all duration-300 p-5 flex flex-col sm:flex-row gap-4 group"
              >
                <div className="sm:w-44 shrink-0 relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[140px] rounded-sm overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={storagePost.image}
                    alt={storagePost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-[#151515]/90 text-[#2E6B4D] text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm border border-stone-700">
                    Food Safety
                  </span>
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-500 mb-1.5">
                      <ShieldCheck className="w-3 h-3 text-[#2E6B4D]" />
                      <span>{storagePost.readingTime}</span>
                      <span>•</span>
                      <span className="font-mono text-stone-400">Domestic & Cold-Chain</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-snug mb-2">
                      {storagePost.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                      {storagePost.excerpt}
                    </p>
                  </div>

                  <button
                    type="button"
                    id={`read-more-${storagePost.id}`}
                    onClick={() => handleRead(storagePost)}
                    className="self-start text-[11px] font-bold uppercase tracking-wider text-[#7A1F2B] hover:text-[#C7903E] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Storage Protocol</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            )}

            {/* Guide 4: Core Cooking Temperatures & Probe Accuracy */}
            {tempsPost && (
              <article
                id={`blog-card-${tempsPost.id}`}
                className="bg-white rounded-sm overflow-hidden border border-[#EAE6DF] shadow-xs hover:border-[#C7903E] transition-all duration-300 p-5 flex flex-col sm:flex-row gap-4 group"
              >
                <div className="sm:w-44 shrink-0 relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[140px] rounded-sm overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tempsPost.image}
                    alt={tempsPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-[#151515]/90 text-[#C7903E] text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm border border-stone-700">
                    Culinary Temps
                  </span>
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-500 mb-1.5">
                      <Thermometer className="w-3 h-3 text-[#C7903E]" />
                      <span>{tempsPost.readingTime}</span>
                      <span>•</span>
                      <span className="font-mono text-stone-400">Core Probe Guide</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-snug mb-2">
                      {tempsPost.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                      {tempsPost.excerpt}
                    </p>
                  </div>

                  <button
                    type="button"
                    id={`read-more-${tempsPost.id}`}
                    onClick={() => handleRead(tempsPost)}
                    className="self-start text-[11px] font-bold uppercase tracking-wider text-[#7A1F2B] hover:text-[#C7903E] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Temp Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            )}

            {/* Quick Meat Cutting Tip Box */}
            <div className="bg-[#151515] text-[#F8F5EF] p-5 rounded-sm border border-stone-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#C7903E] block mb-1">
                  Butcher Counter Tip
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Need custom cut thickness or carton primal portions? Our master butchers cut to order for both household packs and hospitality supply.
                </p>
              </div>
              <button
                type="button"
                onClick={handleShopBeef}
                className="shrink-0 bg-[#C7903E] hover:bg-[#B37F33] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-sm transition-all whitespace-nowrap"
              >
                Order Fresh Cuts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-sm shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 border border-[#EAE6DF] animate-fade-in text-stone-900 relative">
            <button
              type="button"
              id="close-article-modal-btn"
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-sm text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-wider text-[#7A1F2B]">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span className="text-stone-500">{selectedPost.readingTime}</span>
              {selectedPost.id === 'blog-1' && (
                <span className="ml-auto bg-stone-100 text-stone-700 px-2 py-0.5 rounded-sm font-mono text-[9px] border border-stone-200">
                  3000×4000 HD IMAGE
                </span>
              )}
              {selectedPost.id === 'blog-2' && (
                <span className="ml-auto bg-stone-100 text-stone-700 px-2 py-0.5 rounded-sm font-mono text-[9px] border border-stone-200">
                  2500×1667 HD IMAGE
                </span>
              )}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515] mb-4 leading-snug">
              {selectedPost.title}
            </h2>

            {/* High-Resolution Modal Showcase Banner */}
            <div className="aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden mb-6 bg-stone-950 border border-[#EAE6DF] relative shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-5 border-t border-[#EAE6DF] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
              <span className="font-mono text-[10px]">Canonical: /blog/{selectedPost.slug}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShopBeef}
                  className="bg-[#C7903E] text-white px-4 py-2 rounded-sm font-bold uppercase tracking-wider text-[10px] hover:bg-[#B37F33] transition-colors"
                >
                  Shop Featured Beef
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="bg-[#151515] text-white px-4 py-2 rounded-sm font-bold uppercase tracking-wider text-[10px] hover:bg-stone-800 transition-colors"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
