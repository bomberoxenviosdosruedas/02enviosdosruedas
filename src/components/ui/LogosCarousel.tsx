'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface LogoItem {
  name: string;
  logoUrl?: string;
  logoSvg?: React.ReactNode;
  alt?: string;
}

export interface LogosCarouselProps {
  logos?: LogoItem[];
  speed?: number;
  className?: string;
}

const DEFAULT_LOGOS: LogoItem[] = [
  { name: 'MercadoLibre Flex', logoUrl: '/logo-master.svg', alt: 'Partner MercadoLibre Flex' },
  { name: 'E-Commerce MDQ', logoUrl: '/logo-master.svg', alt: 'Partner E-Commerce MDQ' },
  { name: 'Güemes Express', logoUrl: '/logo-master.svg', alt: 'Partner Güemes Express' },
  { name: 'Chauvín Logística', logoUrl: '/logo-master.svg', alt: 'Partner Chauvín Logística' },
  { name: 'Playa Grande Retail', logoUrl: '/logo-master.svg', alt: 'Partner Playa Grande Retail' },
  { name: 'Puerto Mar del Plata', logoUrl: '/logo-master.svg', alt: 'Partner Puerto Mar del Plata' },
];

/**
 * LogosCarousel Component
 * Infinite horizontal scrolling partner logo marquee.
 * Follows DESIGN.md specifications:
 * - Mask gradient: linear-gradient(to right, transparent, black 10%, black 90%, transparent)
 * - Track: flex, gap 48px, animation speed (default 30s)
 * - Items: h-12, grayscale contrast opacity
 * - Hover/Focus: grayscale(0) contrast(1) opacity-100
 * - Pause on hover, focusin, or document.hidden
 */
export const LogosCarousel: React.FC<LogosCarouselProps> = ({
  logos = DEFAULT_LOGOS,
  speed = 30,
  className,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Triple items list to ensure smooth infinite loop without visual gap
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden py-4 select-none',
        className
      )}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className={cn(
          'flex items-center gap-12 w-max animate-marquee',
          isPaused && 'animation-paused'
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="h-12 flex items-center justify-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
          >
            {item.logoSvg ? (
              <div className="h-8 w-auto flex items-center justify-center text-brand-blue-700">
                {item.logoSvg}
              </div>
            ) : item.logoUrl ? (
              <div className="relative h-8 w-32 flex items-center justify-center">
                <Image
                  src={item.logoUrl}
                  alt={item.alt || item.name}
                  width={120}
                  height={32}
                  className="object-contain max-h-8 w-auto"
                />
              </div>
            ) : (
              <span className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-700">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel;
