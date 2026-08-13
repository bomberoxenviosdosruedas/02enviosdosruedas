'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface RadioCardOption {
  id: string;
  label: string;
  description?: string;
  price?: string;
  badge?: string;
  serviceType?: 'EXPRESS' | 'LOW_COST' | 'FLEX' | string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  gridCols?: string;
}

/**
 * RadioCardGroup Component
 * Interactive service selection grid with distinct checked states per service type.
 * Follows DESIGN.md specifications:
 * - Grid 3 cols desktop, 1 col mobile
 * - Card: bg-white, border-2 border-brand-blue-100, rounded-xl, p-6
 * - Checked Express: bg-brand-blue-700, border-brand-blue-700, text-white
 * - Checked LowCost: bg-brand-blue-50, border-brand-blue-200, text-brand-blue-700
 * - Checked Flex: bg-brand-yellow-50, border-brand-yellow-200, text-brand-blue-700
 */
export const RadioCardGroup: React.FC<RadioCardGroupProps> = ({
  options,
  value,
  onChange,
  name = 'service-selector',
  className,
  gridCols = 'grid-cols-1 md:grid-cols-3',
}) => {
  return (
    <div
      role="radiogroup"
      aria-label="Selector de servicio"
      className={cn('grid gap-4 w-full', gridCols, className)}
    >
      {options.map((opt) => {
        const isChecked = value === opt.id;
        const type = (opt.serviceType || opt.id).toUpperCase();

        const getCheckedStyles = () => {
          if (type.includes('EXPRESS')) {
            return 'bg-brand-blue-700 border-brand-blue-700 text-white shadow-md';
          }
          if (type.includes('LOW') || type.includes('LOWCOST')) {
            return 'bg-brand-blue-50 border-brand-blue-200 text-brand-blue-700 shadow-sm';
          }
          if (type.includes('FLEX')) {
            return 'bg-brand-yellow-50 border-brand-yellow-200 text-brand-blue-700 shadow-sm';
          }
          return 'bg-brand-blue-700 border-brand-blue-700 text-white shadow-md';
        };

        const uncheckedStyles =
          'bg-white border-2 border-brand-blue-100 text-brand-blue-900 hover:border-brand-blue-200 hover:bg-brand-blue-50/30';

        const checkedStyles = isChecked ? getCheckedStyles() : uncheckedStyles;

        return (
          <label
            key={opt.id}
            role="radio"
            aria-checked={isChecked}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if (!opt.disabled) onChange(opt.id);
              }
            }}
            onClick={() => {
              if (!opt.disabled) onChange(opt.id);
            }}
            className={cn(
              'relative flex flex-col justify-between p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2',
              checkedStyles,
              opt.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={isChecked}
              onChange={() => onChange(opt.id)}
              disabled={opt.disabled}
              className="sr-only"
            />

            <div>
              {/* Card Header: Icon/Badge + Check indicator */}
              <div className="flex items-center justify-between mb-4">
                {opt.icon && (
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                      isChecked && type.includes('EXPRESS')
                        ? 'bg-white/20 text-white'
                        : 'bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100'
                    )}
                  >
                    {opt.icon}
                  </div>
                )}

                {opt.badge && (
                  <span
                    className={cn(
                      'font-subheading text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full',
                      isChecked && type.includes('EXPRESS')
                        ? 'bg-brand-yellow-500 text-brand-blue-900'
                        : 'bg-brand-blue-100 text-brand-blue-800'
                    )}
                  >
                    {opt.badge}
                  </span>
                )}

                <div
                  className={cn(
                    'w-6 h-6 rounded-full border-2 flex items-center justify-center ml-auto transition-all',
                    isChecked
                      ? type.includes('EXPRESS')
                        ? 'bg-brand-yellow-500 border-brand-yellow-500 text-brand-blue-900'
                        : 'bg-brand-blue-700 border-brand-blue-700 text-white'
                      : 'border-brand-blue-200 bg-white'
                  )}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className={cn(
                  'font-subheading text-xl uppercase tracking-wide font-bold mb-1',
                  isChecked && type.includes('EXPRESS') ? 'text-white' : 'text-brand-blue-900'
                )}
              >
                {opt.label}
              </h3>

              {opt.description && (
                <p
                  className={cn(
                    'text-xs font-sans leading-relaxed',
                    isChecked && type.includes('EXPRESS')
                      ? 'text-brand-blue-100'
                      : 'text-brand-blue-700/80'
                  )}
                >
                  {opt.description}
                </p>
              )}
            </div>

            {/* Price section if provided */}
            {opt.price && (
              <div className="mt-4 pt-3 border-t border-current/10 flex items-baseline justify-between">
                <span
                  className={cn(
                    'text-[10px] font-subheading uppercase tracking-wider',
                    isChecked && type.includes('EXPRESS') ? 'text-brand-blue-100' : 'text-brand-blue-400'
                  )}
                >
                  DESDE
                </span>
                <span
                  className={cn(
                    'font-mono text-lg font-bold tabular-nums',
                    isChecked && type.includes('EXPRESS')
                      ? 'text-brand-yellow-500'
                      : 'text-brand-blue-700'
                  )}
                >
                  {opt.price}
                </span>
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default RadioCardGroup;
