'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CTANestedPillVariant = 'primary' | 'elevated' | 'outline' | 'ghost';
export type CTANestedPillSize = 'compact' | 'default' | 'large';

export interface CTANestedPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: CTANestedPillVariant;
  size?: CTANestedPillSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  iconClassName?: string;
  target?: string;
  rel?: string;
}

/**
 * CTANestedPill Component
 * Standardized nested pill CTA interactive element (Button or Link).
 * Follows DESIGN.md specifications:
 * - Rounded-full, font-subheading, uppercase, tracking-[.05em], font-bold
 * - Embedded circular icon chip (w-8 h-8) with smooth hover translation
 * - Variants: --primary (yellow), --elevated (white), --outline, --ghost
 */
export const CTANestedPill = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CTANestedPillProps>(
  (
    {
      children,
      href,
      variant = 'primary',
      size = 'default',
      icon,
      iconPosition = 'right',
      className,
      iconClassName,
      target,
      rel,
      disabled,
      ...buttonProps
    },
    ref
  ) => {
    const isPrimary = variant === 'primary';
    const isElevated = variant === 'elevated';
    const isOutline = variant === 'outline';
    const isGhost = variant === 'ghost';

    const baseStyles =
      'cta-nested-pill group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-[.05em] font-bold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 select-none border';

    const sizeStyles = {
      compact: 'px-4 py-1.5 text-xs min-h-[36px]',
      default: 'px-5 py-2 text-sm min-h-[44px]',
      large: 'px-8 py-3 text-base min-h-[52px]',
    }[size];

    const variantStyles = {
      primary:
        'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 shadow-accent-sm hover:shadow-cta-glow hover:bg-brand-yellow-400 active:scale-[.98] active:translate-y-[1px]',
      elevated:
        'bg-white text-brand-blue-700 border-brand-blue-100 shadow-elevated hover:shadow-hover-lift hover:border-brand-blue-300 hover:text-brand-blue-800 active:scale-[.98]',
      outline:
        'bg-transparent text-brand-blue-700 border-2 border-brand-blue-700 hover:bg-brand-blue-50 active:scale-[.98]',
      ghost:
        'bg-transparent text-brand-blue-700 border-transparent hover:bg-brand-blue-50 active:scale-[.98]',
    }[variant];

    const iconChipBase =
      'cta-nested-icon w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200';

    const iconChipVariantStyles = {
      primary:
        'bg-brand-blue-700/10 text-brand-blue-900 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 group-hover:translate-x-1',
      elevated:
        'bg-brand-blue-700/10 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-white group-hover:translate-x-1',
      outline:
        'bg-brand-blue-700/10 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-white group-hover:translate-x-1',
      ghost:
        'bg-brand-blue-700/10 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-white group-hover:translate-x-1',
    }[variant];

    const defaultIcon = <ArrowRight className="w-4 h-4" />;
    const renderedIcon = icon !== undefined ? icon : defaultIcon;

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

    const combinedClassName = cn(
      baseStyles,
      sizeStyles,
      variantStyles,
      disabledStyles,
      className
    );

    const iconContent = (
      <span className={cn(iconChipBase, iconChipVariantStyles, iconClassName)}>
        {renderedIcon}
      </span>
    );

    const content = (
      <>
        {iconPosition === 'left' && iconContent}
        <span className="truncate">{children}</span>
        {iconPosition === 'right' && iconContent}
      </>
    );

    if (href && !disabled) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          target={target}
          rel={rel}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        disabled={disabled}
        className={combinedClassName}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

CTANestedPill.displayName = 'CTANestedPill';

export default CTANestedPill;
