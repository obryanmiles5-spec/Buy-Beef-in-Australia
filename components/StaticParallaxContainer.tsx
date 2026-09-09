import React from 'react';

interface StaticParallaxContainerProps {
  children: React.ReactNode;
  bgImageUrl?: string;
  webpUrl?: string;
  className?: string;
  id?: string;
  altText?: string;
  scrimClassName?: string;
}

export default function StaticParallaxContainer({
  children,
  bgImageUrl = '/why-choose-bg.webp',
  webpUrl,
  className = '',
  id = 'static-parallax-container',
  altText = 'Australian Online Butcher Artisan Preparation',
  scrimClassName,
}: StaticParallaxContainerProps) {
  const resolvedWebp = webpUrl || (bgImageUrl.endsWith('.webp') ? bgImageUrl : undefined);

  return (
    <div
      id={id}
      className={`relative z-0 overflow-clip isolate border-b border-[#EAE6DF] ${className}`}
    >
      {/* 
        Native CSS Sticky Background:
        Zero JavaScript, zero scroll event listeners, zero frame lag.
        The browser compositor handles this natively on the GPU at 60Hz/120Hz refresh rates,
        completely eliminating all scroll shaking and jitter.
        The background stays perfectly static through the wrapped sections,
        then naturally scrolls away when this container terminates.
      */}
      <div
        aria-hidden="true"
        className="sticky top-0 h-screen h-[100dvh] w-full -mb-[100vh] -mb-[100dvh] pointer-events-none z-0 overflow-hidden select-none"
      >
        <picture>
          {resolvedWebp && <source srcSet={resolvedWebp} type="image/webp" />}
          <img
            src={bgImageUrl}
            alt={altText}
            className="w-full h-full object-cover object-center transform-gpu scale-[1.01]"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* 
          Balanced contrast scrim:
          Protects typography readability while letting the high-resolution cutting board,
          steel knife, and marbled meat textures remain crystal clear and vivid to the eyes.
        */}
        <div className={`absolute inset-0 ${scrimClassName || 'bg-black/40'}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Foreground Interactive Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
