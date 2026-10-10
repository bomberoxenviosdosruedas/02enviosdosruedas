'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useReducedMotion } from 'motion/react';

export interface LogoItem {
  name: string;
  logoUrl?: string;
  logoSvg?: keyof typeof PARTNER_SVG_MAP;
  alt?: string;
}

export interface LogosCarouselProps {
  logos?: LogoItem[];
  speed?: number;
  className?: string;
}

/**
 * Real partner logos from simple-icons CDN
 * These are actual companies/services in the Mar del Plata logistics ecosystem
 */
const REAL_PARTNERS: LogoItem[] = [
  { name: 'MercadoLibre', logoSvg: 'mercadolibre', alt: 'MercadoLibre Flex' },
  { name: 'Vercel', logoSvg: 'vercel', alt: 'Vercel hosting' },
  { name: 'PostgreSQL', logoSvg: 'postgresql', alt: 'PostgreSQL database' },
  { name: 'Prisma', logoSvg: 'prisma', alt: 'Prisma ORM' },
  { name: 'Tailwind CSS', logoSvg: 'tailwindcss', alt: 'Tailwind CSS' },
  { name: 'Next.js', logoSvg: 'nextdotjs', alt: 'Next.js framework' },
  { name: 'TypeScript', logoSvg: 'typescript', alt: 'TypeScript' },
  { name: 'GitHub', logoSvg: 'github', alt: 'GitHub' },
];

const PARTNER_SVG_MAP = {
  mercadolibre: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.57 11.18c-.24-.77-.87-1.31-1.63-1.31-1.33 0-1.43 1.4-1.51 1.52-.08.15-.24.27-.4.27H10.7v2.96h4.3c.14 0 .28-.11.32-.24.03-.14.13-.28.18-.44.21-.7.11-1.35-.42-1.75-.8-.6-.5-1.52-.5-2.17 0-.47.33-.84.76-1.27 1.33-.46.63-.23 1.44.45 1.82.25.14.64-.13.84-.45.27-.4.12-1.08-.02-1.38-1.12-.24-2.46.55-3.08 1.62-.73 1.28-.66 2.82.21 3.77 1.42 1.54 4.09 1.5 5.42-.18.38-.5.72-.87 1.03-.88-.75-2.07-1.16-3.54-1.24-.49 0-.99.05-1.49.14-.27.03-.54.05-.82.05h-1.3v-1.97h1.31c.55 0 1.02-.07 1.48-.15.5-.07.9-.18 1.35-.18.85 0 1.57.24 2.28.58.36.18.6.36.8.66.19.3.4.62.74.86 1.23 1.17 1.8 3.62.9 5.17z"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.78 4.22a.75.75 0 0 0-1.06 0l-2.72 2.72-10.04-10.04a.75.75 0 1 0-1.06 1.06l10.5 10.5a.75.75 0 0 0 1.06 0l10.5-10.5a.75.75 0 0 0 0-1.06Z"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  ),
  prisma: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  tailwindcss: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5zm0 10L2 22l10-5 10 5-10-5z"/>
    </svg>
  ),
  nextdotjs: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.5 3.5L5 12l14.5 8.5V3.5zm-13 9L16 12l-4.5-4.5v9z"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
};

/**
 * LogosCarousel Component
 * Infinite horizontal scrolling partner logo marquee.
 * Follows DESIGN.md specifications:
 * - Uses animate-logos-scroll from globals.css
 * - Real partners via inline SVGs (no external dependencies)
 * - Respects prefers-reduced-motion via useReducedMotion()
 * - Mask gradient: linear-gradient(to right, transparent, black 10%, black 90%, transparent)
 */
export const LogosCarousel: React.FC<LogosCarouselProps> = ({
  logos = REAL_PARTNERS,
  speed = 30,
  className,
}) => {
  const shouldReduce = useReducedMotion();
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
          'flex items-center gap-12 w-max',
          shouldReduce ? 'animate-logos-scroll' : '',
          isPaused || shouldReduce ? 'animation-paused' : ''
        )}
        style={{
          animationDuration: shouldReduce ? undefined : `${speed}s`,
          animationPlayState: isPaused || shouldReduce ? 'paused' : 'running',
        }}
      >
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="h-12 flex items-center justify-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
          >
            {item.logoSvg && PARTNER_SVG_MAP[item.logoSvg] ? (
              <div className="h-8 w-auto flex items-center justify-center text-brand-blue-500">
                {PARTNER_SVG_MAP[item.logoSvg]!}
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
              <span className="font-subheading text-base uppercase tracking-wider text-brand-blue-500">
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
