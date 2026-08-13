'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface VerticalStep {
  number?: string | number;
  title: string;
  description: string;
  detail?: string;
  badge?: string;
}

export interface StepperVerticalProps {
  steps: VerticalStep[];
  activeStep: number;
  completedSteps?: number[];
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * StepperVertical Component
 * Vertical timeline & process indicator ("How It Works", tracking steps).
 * Follows DESIGN.md specifications:
 * - Vertical line 2px left (brand-blue-100 or white/20 in dark mode)
 * - Dots 24px fixed left with 3px border
 * - Completed: brand-yellow-500 + brand-yellow-100 ring — STRICTLY NO GREEN!
 * - Active: brand-yellow-500 + ring-4 ring-brand-yellow-500/30 + pulse-subtle
 * - Pending: brand-blue-100 / muted
 * - Numbers in font-display text-2xl/h2
 */
export const StepperVertical: React.FC<StepperVerticalProps> = ({
  steps,
  activeStep,
  completedSteps,
  className,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={cn('relative space-y-8 pl-8 md:pl-10', className)}>
      {/* Vertical Connecting Line */}
      <div
        className={cn(
          'absolute top-3 bottom-3 left-3 md:left-3.5 w-0.5 -translate-x-1/2 -z-0',
          isDark ? 'bg-white/20' : 'bg-brand-blue-100'
        )}
      />

      {steps.map((step, idx) => {
        const stepNum = step.number !== undefined ? step.number : idx + 1;
        const isCompleted =
          completedSteps?.includes(idx) ?? idx < activeStep;
        const isActive = idx === activeStep;
        const isPending = !isCompleted && !isActive;

        return (
          <div key={idx} className="relative flex items-start gap-4 md:gap-6 group">
            {/* Step Dot (24px fixed left) */}
            <div
              className={cn(
                'absolute -left-8 md:-left-10 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-all duration-300 z-10',
                isCompleted &&
                  'bg-brand-yellow-500 border-white ring-4 ring-brand-yellow-100 text-brand-blue-900',
                isActive &&
                  'bg-brand-yellow-500 border-white ring-4 ring-brand-yellow-500/30 animate-pulse-subtle text-brand-blue-900 scale-110',
                isPending &&
                  (isDark
                    ? 'bg-brand-blue-900 border-white/20 text-brand-blue-300'
                    : 'bg-brand-blue-100 border-white text-brand-blue-400')
              )}
            >
              {isCompleted ? (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-current" />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'font-display text-xl md:text-2xl tracking-tight uppercase leading-none',
                    isActive || isCompleted
                      ? isDark
                        ? 'text-brand-yellow-500'
                        : 'text-brand-blue-700'
                      : isDark
                      ? 'text-brand-blue-200/60'
                      : 'text-brand-blue-300'
                  )}
                >
                  {typeof stepNum === 'number' && stepNum < 10 ? `0${stepNum}` : stepNum}.
                </span>

                <h3
                  className={cn(
                    'font-display text-lg md:text-xl uppercase tracking-wide leading-tight',
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-brand-blue-900 font-bold'
                      : isCompleted
                      ? isDark
                        ? 'text-white/90'
                        : 'text-brand-blue-800'
                      : isDark
                      ? 'text-brand-blue-200/70'
                      : 'text-brand-blue-400'
                  )}
                >
                  {step.title}
                </h3>

                {step.badge && (
                  <span
                    className={cn(
                      'font-subheading text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full',
                      isActive
                        ? 'bg-brand-yellow-500 text-brand-blue-900'
                        : 'bg-brand-blue-100 text-brand-blue-800'
                    )}
                  >
                    {step.badge}
                  </span>
                )}
              </div>

              <p
                className={cn(
                  'font-sans text-xs md:text-sm leading-relaxed max-w-xl',
                  isDark ? 'text-brand-blue-100/90' : 'text-brand-blue-700/80'
                )}
              >
                {step.description}
              </p>

              {step.detail && (
                <p
                  className={cn(
                    'font-mono text-[11px] mt-1',
                    isDark ? 'text-brand-yellow-300' : 'text-brand-blue-500'
                  )}
                >
                  {step.detail}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepperVertical;
