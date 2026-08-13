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
  const [transformStyle, setTransformStyle] = useState<string>('');
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

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    const rotateX = yPct * -8; // ±8deg
    const rotateY = xPct * 8; // ±8deg

    setTransformStyle(
      `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    );
  };

  const handleMouseEnter = () => {
    if (disabled || reducedMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || reducedMotion) return;
    setIsHovered(false);
    setTransformStyle('translateY(0px) rotateX(0deg) rotateY(0deg)');
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
          transform: isHovered
            ? transformStyle || 'translateY(-6px) rotateX(4deg) rotateY(-2deg)'
            : 'translateY(0px) rotateX(0deg) rotateY(0deg)',
          transition: isHovered
            ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease-out'
            : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease-out',
        }}
        className={cn(
          'relative transition-all duration-300',
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
