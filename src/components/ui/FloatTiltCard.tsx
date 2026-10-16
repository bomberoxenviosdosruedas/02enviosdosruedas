'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface FloatTiltCardProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  disabled?: boolean;
}

/**
 * FloatTiltCard Component
 * Interactive 3D hero cards utilizing CSS perspective and multi-layer Z-translations.
 * Follows DESIGN.md specifications:
 * - Perspective 1000px on wrapper
 * - transform-style: preserve-3d
 * - Mousemove -> rotateX(±8deg) rotateY(±8deg)
 * - Hover tilt lift -> translateY(-6px) rotateX(4deg) rotateY(-2deg) + shadow-antigravity-deep
 * - Disables 3D tilt when prefers-reduced-motion is active
 */
export const FloatTiltCard: React.FC<FloatTiltCardProps> = ({
  children,
  className,
  perspective = 1000,
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    const rotateX = (yPct * -6).toFixed(2);
    const rotateY = (xPct * 6).toFixed(2);

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
        rafRef.current = 0;
      });
    }
  };

  const handleMouseEnter = () => {
    if (disabled || reducedMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || reducedMotion) return;
    setIsHovered(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    if (cardRef.current) {
      cardRef.current.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      className="float-tilt-perspective w-full"
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 120ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms ease-out'
            : 'transform 300ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms ease-out',
        }}
        className={cn(
          'relative transition-[box-shadow] duration-200 ease-out',
          isHovered && 'shadow-antigravity-deep',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FloatTiltCard;
