'use client';

import { BUSINESS_CONFIG } from '@/lib/data';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'icon-only' | 'footer';
  className?: string;
  onClick?: () => void;
  id?: string;
}

// Icon Mark SVG declared outside component body to satisfy ESLint static component rules
function IconMark({ size = 36 }: { size?: number }) {
  return (
    <div 
      style={{ width: size, height: size }}
      className="relative shrink-0 rounded-md overflow-hidden bg-gradient-to-br from-[#8B2332] via-[#6E1824] to-[#4A0D16] p-[2px] shadow-sm border border-[#C7903E]/80 flex items-center justify-center group-hover:border-[#E2B766] transition-colors"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logoMarkGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0D1" />
            <stop offset="50%" stopColor="#E2B766" />
            <stop offset="100%" stopColor="#C7903E" />
          </linearGradient>
        </defs>

        {/* Outer decorative dashed ring */}
        <circle cx="50" cy="50" r="44" stroke="url(#logoMarkGold)" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />

        {/* Crossed cleavers watermark */}
        <path d="M30 30 L45 45 M70 30 L55 45" stroke="url(#logoMarkGold)" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />

        {/* Angus Steer Horns & Head */}
        <path
          d="M50 24 C55 24 68 26 76 35 C79 38 79 42 78 44 C77 45 73 44 71 41 C66 36 59 34 50 34 C41 34 34 36 29 41 C27 44 23 45 22 44 C21 42 21 38 24 35 C32 26 45 24 50 24 Z"
          fill="url(#logoMarkGold)"
        />
        <path
          d="M50 32 C58 32 66 35 68 43 C70 49 67 56 64 64 C62 70 57 74 50 76 C43 74 38 70 36 64 C33 56 30 49 32 43 C34 35 42 32 50 32 Z"
          fill="url(#logoMarkGold)"
        />

        {/* Muzzle & Nose Ring */}
        <ellipse cx="50" cy="69" rx="8.5" ry="5.5" fill="#4A0D16" stroke="url(#logoMarkGold)" strokeWidth="1" />
        <circle cx="47" cy="68" r="1" fill="url(#logoMarkGold)" />
        <circle cx="53" cy="68" r="1" fill="url(#logoMarkGold)" />
        <path d="M46 72 C46 75 48 78 50 78 C52 78 54 75 54 72" stroke="#FFF0D1" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Quality Stars */}
        <polygon points="50,15 51,18 54,18 51.5,20 52.5,23 50,21 47.5,23 48.5,20 46,18 49,18" fill="#FFF0D1" />
      </svg>
    </div>
  );
}

export default function BrandLogo({
  variant = 'full',
  className = '',
  onClick,
  id = 'brand-logo',
}: BrandLogoProps) {
  if (variant === 'icon-only') {
    return (
      <div id={id} onClick={onClick} className={`inline-flex items-center cursor-pointer ${className}`}>
        <IconMark size={40} />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div id={id} onClick={onClick} className={`flex items-center gap-3 cursor-pointer group ${className}`}>
        <IconMark size={42} />
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-lg font-bold tracking-tight text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-tight">
              {BUSINESS_CONFIG.businessName}
            </span>
          </div>
          <span className="text-[10px] tracking-[0.14em] uppercase font-mono text-[#605D58] flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4D] shrink-0" />
            <span>NSW 2642 • AUSTRALIA</span>
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div id={id} onClick={onClick} className={`flex items-center gap-2.5 cursor-pointer group ${className}`}>
        <IconMark size={34} />
        <div className="flex flex-col justify-center min-w-0">
          <span className="font-serif text-base font-bold tracking-tight text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-tight truncate">
            {BUSINESS_CONFIG.businessName}
          </span>
          <span className="text-[8.5px] tracking-[0.12em] uppercase font-mono text-[#706E6B] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B4D] shrink-0" />
            <span className="truncate">NSW 2642 • AUSTRALIA</span>
          </span>
        </div>
      </div>
    );
  }

  // Full default variant
  return (
    <div id={id} onClick={onClick} className={`flex items-center gap-3 cursor-pointer group select-none ${className}`}>
      <IconMark size={38} />
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-[#151515] group-hover:text-[#7A1F2B] transition-colors leading-tight truncate">
            {BUSINESS_CONFIG.businessName}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[8.5px] sm:text-[9.5px] tracking-[0.14em] uppercase font-mono text-[#706E6B] mt-0.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E6B4D] shrink-0" />
          <span className="font-bold text-[#2E6B4D] tracking-wider hidden xs:inline">FARM-DIRECT</span>
          <span className="text-stone-300 hidden xs:inline">•</span>
          <span className="truncate">NSW 2642 AUSTRALIA</span>
        </div>
      </div>
    </div>
  );
}
