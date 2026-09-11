'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  Star, 
  ShieldCheck, 
  MessageSquarePlus, 
  CheckCircle2, 
  ThumbsUp, 
  Filter,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Quote
} from 'lucide-react';
import { BUSINESS_CONFIG, TRUSTPILOT_REVIEWS } from '@/lib/data';
import { TrustpilotReview } from '@/lib/types';

export default function ReviewSection() {
  const [showLeaveReviewModal, setShowLeaveReviewModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    TRUSTPILOT_REVIEWS.forEach((r) => {
      initial[r.id] = r.helpfulCount || 12;
    });
    return initial;
  });
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const handleHelpful = (id: string) => {
    if (likedReviews[id]) return;
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
    setHelpfulCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const filteredReviews = TRUSTPILOT_REVIEWS.filter((review) => {
    if (selectedTag === 'all') return true;
    if (selectedTag === 'steaks') return review.productCut?.toLowerCase().includes('ribeye') || review.productCut?.toLowerCase().includes('rump') || review.content.toLowerCase().includes('steak');
    if (selectedTag === 'delivery') return review.content.toLowerCase().includes('cold-chain') || review.content.toLowerCase().includes('ice') || review.content.toLowerCase().includes('delivery') || review.content.toLowerCase().includes('packaging');
    if (selectedTag === 'family') return review.productCut?.toLowerCase().includes('box') || review.productCut?.toLowerCase().includes('pack') || review.content.toLowerCase().includes('family');
    if (selectedTag === 'bbq') return review.content.toLowerCase().includes('bbq') || review.content.toLowerCase().includes('brisket') || review.productCut?.toLowerCase().includes('brisket');
    return true;
  });

  const totalReviews = filteredReviews.length;

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (totalReviews > 0 ? (prev + 1) % totalReviews : 0));
  }, [totalReviews]);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (totalReviews > 0 ? (prev - 1 + totalReviews) % totalReviews : 0));
  }, [totalReviews]);

  // Auto-play Rev Slider effect
  useEffect(() => {
    if (isPaused || totalReviews <= 1) return;
    const interval = setInterval(() => {
      nextReview();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextReview, totalReviews]);

  const handleSelectTag = (tagId: string) => {
    setSelectedTag(tagId);
    setCurrentIndex(0);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setShowLeaveReviewModal(false);
    }, 2500);
  };

  return (
    <section
      id="reviews-section"
      aria-labelledby="reviews-heading"
      className="relative z-20 py-16 sm:py-24 lg:py-28 bg-[#F8F5EF] text-[#151515] border-b border-[#EAE6DF]"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#00b67a]/10 border border-[#00b67a]/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#008257] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00b67a] animate-pulse"></span>
            <span>Trustpilot Verified Feedback • Australian Delivery</span>
          </div>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151515] tracking-tight mb-3"
          >
            Verified Customer Reviews
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Authentic dining experiences from home cooks, BBQ pitmasters, and food connoisseurs across Australia. Dispatched with temperature-controlled cold-chain insulation from {BUSINESS_CONFIG.location}.
          </p>
        </div>

        {/* Trustpilot Score Summary Bar (Full-Length 4-Column Grid) */}
        <div className="bg-white border border-[#EAE6DF] rounded-sm p-6 sm:p-8 lg:p-9 shadow-sm mb-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-[#EAE6DF]">
            {/* Trustpilot Score & Stars */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-serif text-4xl lg:text-5xl font-extrabold text-[#151515]">
                  4.9
                </span>
                <div className="text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00b67a] block leading-tight">
                    Excellent Rating
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Based on 348+ verified reviews
                  </span>
                </div>
              </div>

              {/* 5 Green Trustpilot Stars */}
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-xs shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                ))}
              </div>

              <div className="text-[11px] font-bold text-[#008257] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a]" />
                <span>100% Verified Customer Ratings</span>
              </div>
            </div>

            {/* Cold-Chain Assurance */}
            <div className="pt-4 sm:pt-0 sm:px-4 lg:px-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E6B4D] mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2E6B4D]" />
                <span>Cold-Chain Delivery Sealed</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
                Vacuum-sealed sub-4°C thermal liners and gel packs keeping all meats fresh in transit.
              </p>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#2E6B4D]/10 border border-[#2E6B4D]/25 rounded-xs text-[10px] font-mono text-[#2E6B4D] font-bold">
                <span>✓ 48-Hour Chill Guarantee</span>
              </div>
            </div>

            {/* Verified Australian Entity & Location */}
            <div className="pt-4 sm:pt-0 sm:px-4 lg:px-6 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A1F2B] mb-1.5">
                <MapPin className="w-4 h-4 text-[#7A1F2B]" />
                <span>Regional Dispatch Hub</span>
              </div>
              <p className="text-xs text-stone-700 font-mono mb-2">
                Dispatched from NSW 2642
              </p>
              <div className="flex items-center gap-1 text-[11px] text-stone-600 mb-2">
                <span>Verified ABN: 45 775 613 837</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F8F5EF] border border-[#EAE6DF] rounded-xs text-[10px] font-mono text-stone-600">
                <span>✓ Australian Farm Direct</span>
              </div>
            </div>

            {/* Customer Review Action */}
            <div className="pt-4 sm:pt-0 sm:pl-4 lg:pl-6 flex flex-col items-center sm:items-start justify-center gap-2">
              <div className="text-center sm:text-left w-full mb-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
                  Have you ordered recently?
                </span>
                <span className="text-xs font-bold text-stone-900 block">
                  Share your meat delivery experience
                </span>
              </div>
              <button
                type="button"
                id="open-leave-review-btn"
                onClick={() => setShowLeaveReviewModal(true)}
                className="w-full bg-[#7A1F2B] hover:bg-[#5A1720] text-white text-[11px] font-bold uppercase tracking-wider py-3 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>Write a Customer Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Filter By Topic:</span>
          </span>
          {[
            { id: 'all', label: 'All Reviews (8 Verified)' },
            { id: 'steaks', label: 'Wagyu & Steaks' },
            { id: 'delivery', label: 'Cold-Chain & Delivery' },
            { id: 'family', label: 'Family Meat Packs' },
            { id: 'bbq', label: 'BBQ & Brisket' }
          ].map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => handleSelectTag(tag.id)}
              className={`px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-[#151515] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-[#EAE6DF]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* =========================================================================
            REV SLIDER: Interactive Trustpilot Reviews Carousel (Full Length)
            ========================================================================= */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Rev Slider Top Meta Navigation */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
              <span className="w-2 h-2 rounded-full bg-[#00b67a]" />
              <span className="font-bold text-[#151515]">
                Review {totalReviews > 0 ? currentIndex + 1 : 0} of {totalReviews}
              </span>
            </div>

            {/* Slider Controls: Prev, Next, Play/Pause */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                id="review-rev-pause-btn"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                title={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                className="p-2 rounded-sm bg-white hover:bg-[#F8F5EF] border border-[#EAE6DF] text-stone-600 hover:text-stone-900 transition-colors shadow-xs cursor-pointer"
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-[#C7903E]" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                id="review-rev-prev-btn"
                onClick={prevReview}
                aria-label="Previous Review"
                title="Previous Review"
                className="p-2 rounded-sm bg-white hover:bg-[#C7903E] hover:text-white border border-[#EAE6DF] text-stone-700 transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="review-rev-next-btn"
                onClick={nextReview}
                aria-label="Next Review"
                title="Next Review"
                className="p-2 rounded-sm bg-white hover:bg-[#C7903E] hover:text-white border border-[#EAE6DF] text-stone-700 transition-all shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Rev Slider Main Viewport: Multi-Card Grid / Carousel */}
          {totalReviews > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((offset) => {
                const reviewItemIndex = (currentIndex + offset) % totalReviews;
                const review = filteredReviews[reviewItemIndex];
                if (!review) return null;

                const isPrimary = offset === 0;
                const isLiked = likedReviews[review.id];
                const currentHelpful = helpfulCounts[review.id] || 0;

                return (
                  <div
                    key={`${review.id}-${offset}`}
                    id={`rev-slide-review-${review.id}`}
                    className={`bg-white border rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs relative overflow-hidden group ${
                      isPrimary 
                        ? 'border-[#00b67a] ring-1 ring-[#00b67a]/30 shadow-md' 
                        : 'border-[#EAE6DF] hover:border-[#00b67a]'
                    } ${offset >= 1 ? 'hidden md:flex' : 'flex'} ${offset === 2 ? 'hidden lg:flex' : ''} ${offset === 3 ? 'hidden xl:flex' : ''}`}
                  >
                    {/* Decorative Watermark Quote */}
                    <Quote className="absolute -bottom-2 -right-2 w-20 h-20 text-stone-100 -rotate-12 pointer-events-none group-hover:text-[#00b67a]/5 transition-colors" />

                    <div>
                      {/* Top Header: Trustpilot Stars & Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-2xs">
                              <Star className="w-2.5 h-2.5 fill-white text-white" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-mono text-stone-400">
                          {review.date}
                        </span>
                      </div>

                      {/* Verified Buyer Badge */}
                      <div className="flex items-center gap-1.5 text-[10px] text-[#2E6B4D] font-bold mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00b67a]" />
                        <span>Verified Buyer on Trustpilot</span>
                      </div>

                      {/* Review Title */}
                      <h3 className="font-serif text-base font-bold text-[#151515] group-hover:text-[#008257] transition-colors mb-2.5 leading-snug">
                        &ldquo;{review.title}&rdquo;
                      </h3>

                      {/* Review Content */}
                      <p className="text-xs text-stone-600 leading-relaxed mb-5 relative z-10">
                        {review.content}
                      </p>
                    </div>

                    {/* Bottom Metadata & Helpful Upvote */}
                    <div className="pt-3 border-t border-[#EAE6DF]/70 relative z-10">
                      {review.productCut && (
                        <div className="mb-3">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#C7903E] block mb-0.5">
                            Purchased Cut:
                          </span>
                          <p className="text-[11px] font-semibold text-stone-800 truncate">
                            {review.productCut}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2 text-xs">
                        <div>
                          <p className="font-bold text-stone-900 text-xs">{review.author}</p>
                          <p className="text-[10px] text-stone-500 font-mono flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#7A1F2B]" />
                            <span>{review.location}</span>
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleHelpful(review.id)}
                          className={`inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-sm border transition-colors cursor-pointer ${
                            isLiked
                              ? 'bg-[#00b67a]/10 border-[#00b67a]/40 text-[#008257] font-bold'
                              : 'bg-[#F8F5EF] border-[#EAE6DF] text-stone-600 hover:text-stone-900 hover:border-stone-400'
                          }`}
                          title="Mark as helpful"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>{currentHelpful}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center bg-white border border-[#EAE6DF] rounded-sm">
              <p className="text-xs text-stone-500">No reviews found under this topic.</p>
            </div>
          )}

          {/* Rev Slider Pagination Indicators */}
          {totalReviews > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {filteredReviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  id={`rev-dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-[#00b67a]' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Full-Length Customer Trust & Artisan Butchery Showcase Banner */}
        <div className="mt-10 sm:mt-14 w-full overflow-hidden rounded-sm border border-[#EAE6DF] shadow-md bg-white">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/trustpilot-banner.webp"
              alt="Australian Online Butcher - Premium Meat Delivery, Whole Carcass Shares & Verified Customer Satisfaction"
              width={1672}
              height={941}
              priority={false}
              className="w-full h-auto object-cover block select-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1440px) 1440px, 1600px"
            />
          </div>
        </div>
      </div>

      {/* Leave a Review Modal */}
      {showLeaveReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-sm shadow-2xl max-w-md w-full p-6 border border-[#EAE6DF] animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-xl font-bold text-[#151515]">
                Submit Customer Review
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-[#00b67a]/15 text-[#008257] font-bold rounded-xs">
                Trustpilot Verified
              </span>
            </div>
            <p className="text-xs text-stone-500 mb-4">
              Feedback is reviewed and synced with our official store profile at {BUSINESS_CONFIG.businessName} (NSW, 2642).
            </p>

            {reviewSubmitted ? (
              <div className="p-6 bg-[#2E6B4D]/10 border border-[#2E6B4D]/30 rounded-sm text-center">
                <CheckCircle2 className="w-8 h-8 text-[#2E6B4D] mx-auto mb-2" />
                <h4 className="font-bold text-[#2E6B4D] text-sm">Thank You for Your Feedback!</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Your review has been logged and forwarded for verification.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Michael Henderson"
                    className="w-full text-xs p-2.5 bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Suburb / Postcode:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Albury, NSW 2642"
                    className="w-full text-xs p-2.5 bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Rating on Trustpilot:
                  </label>
                  <select className="w-full text-xs p-2.5 bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none font-medium">
                    <option value="5">★★★★★ - Excellent (5 Stars)</option>
                    <option value="4">★★★★☆ - Great (4 Stars)</option>
                    <option value="3">★★★☆☆ - Average (3 Stars)</option>
                    <option value="2">★★☆☆☆ - Poor (2 Stars)</option>
                    <option value="1">★☆☆☆☆ - Bad (1 Star)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Review Title:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Best Wagyu Ribeye and perfect packaging"
                    className="w-full text-xs p-2.5 bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Review Details:
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe cut tenderness, flavor, cold-chain delivery temperature, or butcher customer service..."
                    className="w-full text-xs p-2.5 bg-[#F8F5EF] border border-[#EAE6DF] rounded-sm focus:ring-1 focus:ring-[#7A1F2B] outline-none"
                  ></textarea>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLeaveReviewModal(false)}
                    className="w-1/2 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00b67a] hover:bg-[#009b68] rounded-sm transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
