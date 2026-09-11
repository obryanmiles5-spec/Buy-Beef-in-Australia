'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ShieldCheck, Truck, Headphones, Award, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/data';

interface HeroProps {
  onShopBeef: () => void;
  onExploreMeatPacks: () => void;
  onViewAll?: () => void;
  onWholesale: () => void;
  onOpenCompliance: (sectionId?: string) => void;
}

interface SlideData {
  id: number;
  image: string;
  alt: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  badgeTag: string;
  badgeTitle: string;
  badgeDetail: string;
  badgeAction: string;
  onBadgeAction: 'beef' | 'packs';
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: '/hero/home2_hd.webp',
    alt: 'Premium Australian Black Angus & F1 Wagyu Cuts (Home 2)',
    eyebrow: 'Prime Australian Black Angus & Wagyu Butcher',
    titleLead: 'Prime Black Angus',
    titleAccent: '& F1 Wagyu Steaks',
    description: `Ethically sourced, grain-finished and pasture-raised Black Angus and F1 Wagyu (MBS 4+ to 9+). Available in quarter (1/4), half (1/2), and full carcass shares, plus artisan-cut Tomahawks and Ribeye delivered cold-chain fresh across Australia.`,
    badgeTag: "Butcher Reserve",
    badgeTitle: 'Black Angus & Wagyu Ribeye MBS 5+',
    badgeDetail: 'Dry-Aged, Tomahawks & Prime Steaks',
    badgeAction: 'Shop Black Angus & Wagyu',
    onBadgeAction: 'beef',
  },
  {
    id: 2,
    image: '/hero/home3_hd.webp',
    alt: 'Curated Family Meat Packs and Black Angus Butcher Boxes (Home 3)',
    eyebrow: 'Pasture-Fed Black Angus & Value Meat Packs',
    titleLead: 'Family Meat Packs &',
    titleAccent: 'Black Angus Selections',
    description: 'Save on curated butcher boxes featuring Australian Black Angus steaks, Wagyu beef patties, free-range poultry, succulent pork crackling roasts, and handcrafted sausages packed in chilled insulated containers.',
    badgeTag: "Family Value Bundle",
    badgeTitle: 'Curated Family Meat Pack',
    badgeDetail: 'Black Angus Steaks + Everyday Cuts',
    badgeAction: 'Explore Family Meat Packs',
    onBadgeAction: 'packs',
  },
];

const SLIDE_DURATION = 6500; // 6.5s per slide

export default function Hero({ onShopBeef, onExploreMeatPacks, onViewAll, onWholesale, onOpenCompliance }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + totalSlides) % totalSlides);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Progress bar and auto-play ticker
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION;

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(pct);

      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
      }
    }, 50);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide, isPaused, nextSlide, progress]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const activeSlide = SLIDES[currentSlide];

  const handlePrimaryClick = () => {
    onShopBeef();
  };

  const handleSecondaryClick = () => {
    onExploreMeatPacks();
  };

  const handleBadgeClick = () => {
    if (activeSlide.onBadgeAction === 'beef') {
      onShopBeef();
    } else {
      onExploreMeatPacks();
    }
  };

  return (
    <section
      id="hero-rev-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Revolution Slider - Featured Meat and Beef Showcase"
      className="relative bg-[#151515] text-[#F8F5EF] overflow-hidden border-b border-stone-800 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Progress Bar (Rev Slider Top Timeline) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-40">
        <div
          className="h-full bg-[#C7903E] transition-[width] duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide Background Images with Cross-fade & Ken-Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-60 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Natural Tones High-Contrast Overlays - balanced for image clarity & text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-[#151515]/75 to-[#151515]/35 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-[#151515]/30 z-10 pointer-events-none" />

      {/* Rev Slider Navigation Controls: Prev & Next Arrows (Desktop & Tablet; Mobile uses swipe) */}
      <button
        type="button"
        id="hero-rev-prev-btn"
        aria-label="Previous Slide"
        onClick={prevSlide}
        className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black/40 hover:bg-[#C7903E] text-white/80 hover:text-white border border-white/15 hover:border-[#C7903E] backdrop-blur-sm items-center justify-center transition-all shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C7903E]"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        id="hero-rev-next-btn"
        aria-label="Next Slide"
        onClick={nextSlide}
        className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-black/40 hover:bg-[#C7903E] text-white/80 hover:text-white border border-white/15 hover:border-[#C7903E] backdrop-blur-sm items-center justify-center transition-all shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C7903E]"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Verified Business Details & ABN Link (Directly under Home & Shop Navigation) */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-8 z-30 flex items-center max-w-[calc(100%-65px)] sm:max-w-none overflow-hidden">
        <a
          href={BUSINESS_CONFIG.abnLookupUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="hero-business-abn-verify-btn"
          title="Verify business registration on Australian Business Register"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-[8.5px] sm:text-[10px] font-mono tracking-wider uppercase bg-black/60 hover:bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/15 hover:border-[#C7903E] text-stone-300 transition-all shadow-md group truncate sm:overflow-visible"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4D] animate-pulse shrink-0" />
          <span className="text-stone-400 hidden sm:inline">Entity:</span>
          <strong className="text-white font-semibold hidden sm:inline">A.J BLANCH &amp; M.C BLANCH</strong>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="text-stone-400">ABN:</span>
          <strong className="text-[#C7903E] font-bold">45 775 613 837</strong>
          <span className="text-stone-600 hidden md:inline">|</span>
          <span className="text-stone-400 hidden md:inline">Business Name:</span>
          <strong className="text-white font-semibold hidden md:inline">Matty B Farm Fencing</strong>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="text-[#C7903E] group-hover:text-[#E0AE5C] font-bold inline-flex items-center gap-0.5 group-hover:underline shrink-0 ml-0.5">
            Verified ↗
          </span>
        </a>
      </div>

      {/* Rev Slider Top Meta Indicator (Play/Pause) */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-8 z-30 flex items-center gap-2">
        <button
          type="button"
          id="hero-rev-pause-btn"
          aria-label={isPaused ? 'Resume slider auto-play' : 'Pause slider auto-play'}
          onClick={() => setIsPaused(!isPaused)}
          className="p-1.5 rounded-sm bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/15 text-stone-300 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          title={isPaused ? 'Play' : 'Pause'}
        >
          {isPaused ? <Play className="w-3 h-3 text-[#C7903E]" /> : <Pause className="w-3 h-3" />}
        </button>
      </div>

      {/* Slider Main Stage Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 flex flex-col lg:flex-row items-center justify-between min-h-[540px] sm:min-h-[640px]">
        <div className="max-w-2xl w-full">
          {/* Eyebrow with Natural Tones Gold Rule */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C7903E]"></span>
            <span className="text-[#C7903E] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
              {activeSlide.eyebrow}
            </span>
          </div>

          {/* H1 Heading targeting primary butcher keywords */}
          <h1
            key={`title-${activeSlide.id}`}
            className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 animate-fade-in"
          >
            {activeSlide.titleLead} <br />
            <span className="text-[#C7903E] italic font-normal">{activeSlide.titleAccent}</span>
          </h1>

          {/* Supporting text */}
          <p
            key={`desc-${activeSlide.id}`}
            className="text-xs sm:text-base text-[#F8F5EF]/80 leading-relaxed mb-6 sm:mb-8 max-w-xl animate-fade-in"
          >
            {activeSlide.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-8 sm:mb-10">
            {/* Primary CTA */}
            <button
              type="button"
              id={`hero-rev-cta-primary-${activeSlide.id}`}
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto min-h-[44px] justify-center bg-[#C7903E] hover:bg-[#B37F33] text-white font-bold text-[11px] uppercase tracking-widest px-6 sm:px-7 py-3.5 rounded-sm shadow-md transition-all flex items-center gap-2 hover:shadow-lg active:scale-98"
            >
              <span>Shop Black Angus &amp; Wagyu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              id={`hero-rev-cta-secondary-${activeSlide.id}`}
              onClick={handleSecondaryClick}
              className="w-full sm:w-auto min-h-[44px] justify-center border border-white/30 hover:border-white/60 text-white font-bold text-[11px] uppercase tracking-widest px-6 sm:px-7 py-3.5 rounded-sm hover:bg-white/10 transition-all flex items-center"
            >
              Explore Family Meat Packs
            </button>

            {/* Tertiary Link */}
            <button
              type="button"
              id={`hero-rev-cta-wholesale-${activeSlide.id}`}
              onClick={onWholesale}
              className="text-center sm:text-left text-[#C7903E] hover:text-[#E0AE5C] text-[11px] font-bold uppercase tracking-widest py-2 px-3 transition-colors"
            >
              Wholesale Supply →
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-sm bg-white/5 text-[#C7903E] border border-white/10">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-wider">Secure Checkout</p>
                <p className="text-[9px] text-stone-400">256-Bit SSL</p>
              </div>
            </div>

            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => onOpenCompliance('cold-chain')}
            >
              <div className="p-1.5 rounded-sm bg-white/5 text-[#2E6B4D] border border-white/10 group-hover:border-[#2E6B4D] transition-colors">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-wider group-hover:text-[#2E6B4D] transition-colors">
                  Cold-Chain Delivery
                </p>
                <p className="text-[9px] text-stone-400">Chilled Transit</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-sm bg-white/5 text-[#C7903E] border border-white/10">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-wider">Local Support</p>
                <p className="text-[9px] text-stone-400">Australian Team</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-sm bg-white/5 text-[#C7903E] border border-white/10">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-wider">Artisan Quality</p>
                <p className="text-[9px] text-stone-400">Expert Hand-Trimmed</p>
              </div>
            </div>
          </div>
        </div>

        {/* High-Resolution Featured Visual Stage (Rev Slider Featured Cut Showcase) */}
        <div className="w-full lg:w-[460px] xl:w-[500px] shrink-0 mt-8 lg:mt-0">
          <div
            key={`stage-${activeSlide.id}`}
            className="relative rounded-sm overflow-hidden border-2 border-[#C7903E]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#1c1c1c] group transition-all duration-500 hover:border-[#C7903E] animate-fade-in"
          >
            {/* 100% Crisp High-Res Image Showcase with Exact Identical Height Across Slides */}
            <div className="relative w-full h-[320px] sm:h-[360px] md:h-[380px] lg:h-[400px] overflow-hidden bg-stone-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeSlide.image}
                alt={activeSlide.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient vignette for rich contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/35 pointer-events-none" />

              {/* Top Bar Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                <div className="bg-[#151515]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-[#C7903E]/40 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#C7903E] animate-pulse" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#C7903E] font-bold">
                    {activeSlide.badgeTag}
                  </span>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20 text-[9px] font-mono tracking-widest text-[#E0AE5C] font-bold shadow-md">
                ULTRA HD CUT
              </div>

              {/* Bottom Cut Details & Direct Action */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#151515] via-[#151515]/95 to-transparent z-10">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-base sm:text-xl font-bold text-white leading-snug drop-shadow-sm">
                      {activeSlide.badgeTitle}
                    </h3>
                    <p className="text-xs text-[#C7903E] font-mono font-medium mt-0.5">
                      {activeSlide.badgeDetail}
                    </p>
                  </div>
                  <button
                    type="button"
                    id={`hero-badge-cta-${activeSlide.id}`}
                    onClick={handleBadgeClick}
                    className="shrink-0 bg-[#C7903E] hover:bg-[#B37F33] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-sm shadow-md transition-all flex items-center gap-1.5 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    <span>{activeSlide.badgeAction}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rev Slider Bottom Bullet Indicators / Pagination */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={slide.id}
              type="button"
              id={`hero-rev-dot-${slide.id}`}
              aria-label={`Go to slide ${slide.id}: ${slide.titleLead}`}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-7 h-2 bg-[#C7903E]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

