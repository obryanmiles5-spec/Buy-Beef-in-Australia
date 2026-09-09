'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { ANNOUNCEMENT_SLIDES, BUSINESS_CONFIG } from '@/lib/data';

interface AnnouncementBarProps {
  onOpenCompliance?: (sectionId?: string) => void;
}

export default function AnnouncementBar({ onOpenCompliance }: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENT_SLIDES.length) % ANNOUNCEMENT_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_SLIDES.length);
  };

  const currentSlide = ANNOUNCEMENT_SLIDES[currentIndex];

  return (
    <aside
      id="announcement-bar"
      aria-label="Store Announcements and Special Offers"
      className="bg-[#151515] text-white py-1.5 px-4 text-[10px] uppercase tracking-[0.2em] font-medium border-b border-[#C7903E]/30 relative z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Play/Pause Button for Accessibility */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-[#C7903E] hover:text-[#E0AE5C] p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-[#C7903E] flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"
          aria-label={isPlaying ? 'Pause announcement rotation' : 'Play announcement rotation'}
          title={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        {/* Current Announcement Content */}
        <div className="flex-1 text-center font-medium overflow-hidden px-2 flex items-center justify-center">
          {currentSlide.isTrustpilot ? (
            <div
              key={currentSlide.id}
              className="animate-fade-in inline-flex items-center gap-2 text-center text-[#F8F5EF]"
            >
              <span className="text-[#00b67a] font-bold text-xs">★</span>
              <span className="truncate sm:overflow-visible tracking-[0.15em] font-semibold">{currentSlide.text}</span>
            </div>
          ) : (
            <div
              key={currentSlide.id}
              className="animate-fade-in inline-flex items-center gap-2 cursor-pointer hover:underline text-center"
              onClick={() => {
                if (currentSlide.id === 6 || currentSlide.id === 5) {
                  onOpenCompliance?.('delivery-info');
                }
              }}
            >
              <span className="text-[#C7903E] font-semibold text-xs">★</span>
              <span className="truncate sm:overflow-visible tracking-[0.15em]">{currentSlide.text}</span>
            </div>
          )}
        </div>

        {/* Right Side Info: Location & Guarantee */}
        <div className="hidden md:flex items-center gap-3 text-[9px] tracking-[0.15em] text-[#F8F5EF]/90 font-mono">
          <span className="text-[#2E6B4D] font-bold">✓ 100% Australian Butcher</span>
          <span className="opacity-40">|</span>
          <span className="text-stone-300">{BUSINESS_CONFIG.location}</span>
        </div>

        {/* Previous / Next Controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrev}
            className="text-stone-400 hover:text-white p-1 rounded focus:outline-none focus:ring-1 focus:ring-stone-400"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-stone-400 font-mono hidden sm:inline-block px-1">
            {currentIndex + 1}/{ANNOUNCEMENT_SLIDES.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="text-stone-400 hover:text-white p-1 rounded focus:outline-none focus:ring-1 focus:ring-stone-400"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
