import React from 'react';
import { cn } from '@/lib/utils';

export interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
  innerClassName?: string;
  variant?: 'light' | 'dark';
  hoverEffect?: boolean;
}

/**
 * DoubleBezelCard Component
 * Signature Two-tier container system (outer bezel + inner card) for primary content.
 * Follows DESIGN.md specifications:
 * - Outer: bg-brand-blue-50/80, border-brand-blue-100, rounded-2xl (16px), p-2 (8px), shadow-float
 * - Inner: bg-white (or brand-blue-500 in dark variant), rounded-xl (12px), p-6, shadow-sm
 * - Hover: shadow-antigravity-deep, border-brand-blue-300
 */
export const DoubleBezelCard = React.forwardRef<HTMLDivElement, DoubleBezelCardProps>(
  (
    {
      children,
      className,
      outerClassName,
      innerClassName,
      variant = 'light',
      hoverEffect = true,
      ...props
    },
    ref
  ) => {
    const isDark = variant === 'dark';

    return (
      <div
        ref={ref}
        className={cn(
          'double-bezel-outer transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl p-2 shadow-float',
          isDark
            ? 'bg-brand-blue-50/80 border border-brand-blue-100/80'
            : 'bg-brand-blue-50/80 border border-brand-blue-100/90',
          hoverEffect &&
            (isDark
              ? 'hover:shadow-antigravity-deep hover:border-brand-yellow-400/80 hover:-translate-y-1'
              : 'hover:shadow-antigravity-deep hover:border-brand-blue-300 hover:-translate-y-1'),
          outerClassName,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'double-bezel-inner rounded-xl p-6 shadow-sm overflow-hidden transition-all duration-200 ring-1',
            isDark
              ? 'bg-brand-blue-500 border border-white/10 ring-white/10 text-white'
              : 'bg-white border border-brand-blue-50/50 ring-brand-blue-50/60 text-brand-blue-500',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

DoubleBezelCard.displayName = 'DoubleBezelCard';

export default DoubleBezelCard;
