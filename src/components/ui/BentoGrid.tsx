'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import DoubleBezelCard from './DoubleBezelCard';

export interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span?: '7' | '5' | '12' | 'hero' | 'standard' | 'full' | number;
  className?: string;
  doubleBezel?: boolean;
  variant?: 'light' | 'dark';
}

/**
 * BentoGrid Component
 * Asymmetric 12-column layout container for service showcases and features.
 * Follows DESIGN.md specifications:
 * - Base: grid-cols-12, gap-6 lg:gap-8, auto-rows-[380px]
 * - Span 7 (Hero cards): Express, E-Commerce 3PL -> lg:col-span-7
 * - Span 5 (Standard cards): LowCost, Flex -> lg:col-span-5
 * - Span 12 (Full width): Cotizador CTA -> col-span-12
 * - Mobile: grid-cols-1 (all col-span-12 / full width)
 */
export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(340px,auto)] md:auto-rows-[380px] w-full',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  children,
  span = 'standard',
  className,
  doubleBezel = true,
  variant = 'light',
  ...props
}) => {
  const getSpanClass = () => {
    if (span === 7 || span === '7' || span === 'hero') {
      return 'col-span-1 md:col-span-12 lg:col-span-7';
    }
    if (span === 5 || span === '5' || span === 'standard') {
      return 'col-span-1 md:col-span-6 lg:col-span-5';
    }
    if (span === 12 || span === '12' || span === 'full') {
      return 'col-span-1 md:col-span-12 lg:col-span-12';
    }
    if (typeof span === 'number') {
      return `col-span-1 md:col-span-${Math.min(span, 12)} lg:col-span-${span}`;
    }
    return 'col-span-1 md:col-span-6 lg:col-span-5';
  };

  const spanClass = getSpanClass();

  if (doubleBezel) {
    return (
      <DoubleBezelCard
        variant={variant}
        className={cn(spanClass, 'h-full flex flex-col', className)}
        {...props}
      >
        {children}
      </DoubleBezelCard>
    );
  }

  return (
    <div
      className={cn('h-full flex flex-col overflow-hidden', spanClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
