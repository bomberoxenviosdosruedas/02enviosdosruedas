'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface HorizontalStep {
  title: string;
  subtitle?: string;
}

export interface StepperHorizontalProps {
  steps: HorizontalStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

/**
 * StepperHorizontal Component
 * Multi-step progress indicator for quoters and multi-step forms.
 * Follows DESIGN.md specifications:
 * - Line 2px: brand-blue-100 (completed: brand-yellow-500)
 * - Circles 40px: completed=yellow-500 (STRICTLY NO GREEN!), active=blue-700 + ring, pending=blue-100
 * - Labels: font-subheading text-xs uppercase tracking-wider
 */
export const StepperHorizontal: React.FC<StepperHorizontalProps> = ({
  steps,
  currentStep,
  onStepClick,
  className,
}) => {
  return (
    <div className={cn('w-full py-4', className)}>
      <div className="relative flex items-center justify-between w-full">
        {/* Background Step Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-brand-blue-100 -z-0" />

        {/* Active Step Progress Line */}
        <div
          className="absolute top-5 left-0 h-0.5 bg-brand-yellow-500 transition-all duration-300 -z-0"
          style={{
            width: `${(Math.min(currentStep, steps.length - 1) / Math.max(steps.length - 1, 1)) * 100}%`,
          }}
        />

        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const isPending = idx > currentStep;
          const isClickable = onStepClick && (isCompleted || isActive);

          return (
            <div
              key={idx}
              className="flex flex-col items-center relative z-10 group"
              onClick={() => isClickable && onStepClick(idx)}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={(e) => {
                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  onStepClick(idx);
                }
              }}
            >
              {/* Step Circle (40px) */}
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-subheading text-base font-bold transition-all duration-200 border-2 select-none',
                  isCompleted &&
                    'bg-brand-yellow-500 border-brand-yellow-500 text-brand-blue-900 shadow-sm',
                  isActive &&
                    'bg-brand-blue-700 border-brand-blue-700 text-white ring-4 ring-brand-blue-500/20 scale-105',
                  isPending &&
                    'bg-white border-brand-blue-100 text-brand-blue-400',
                  isClickable && 'cursor-pointer hover:scale-110'
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-[3] text-brand-blue-900" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>

              {/* Step Label */}
              <div className="mt-2 text-center max-w-[120px]">
                <span
                  className={cn(
                    'block font-subheading text-xs uppercase tracking-wider font-bold transition-colors',
                    isCompleted && 'text-brand-blue-900',
                    isActive && 'text-brand-blue-700 font-extrabold',
                    isPending && 'text-brand-blue-400'
                  )}
                >
                  {step.title}
                </span>
                {step.subtitle && (
                  <span className="block font-mono text-[10px] text-brand-blue-400/80 leading-tight mt-0.5">
                    {step.subtitle}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepperHorizontal;
