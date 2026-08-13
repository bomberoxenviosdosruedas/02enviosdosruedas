'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
}

/**
 * InputField Component
 * Standardized form input container.
 * Follows DESIGN.md specifications:
 * - Height: h-11 (44px touch target)
 * - Border: border-2 border-brand-blue-100 rounded-xl bg-white
 * - Padding left: pl-10 when icon is present
 * - Label: font-subheading text-xs uppercase tracking-[.05em] text-brand-blue-700
 * - Help text: font-mono text-[10px] text-brand-blue-400
 * - Focus: border-brand-blue-700 + ring-2 ring-brand-blue-500/20
 * - Error: border-red-500 + ring-2 ring-red-500/20
 */
export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      helpText,
      icon,
      containerClassName,
      labelClassName,
      className,
      id,
      disabled,
      required,
      ...inputProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className={cn('input-wrapper flex flex-col gap-1.5 w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'input-label font-subheading text-xs uppercase tracking-[.05em] font-bold text-brand-blue-700 flex items-center justify-between',
              labelClassName
            )}
          >
            <span>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>
          </label>
        )}

        <div className="relative flex items-center w-full">
          {icon && (
            <div className="input-icon absolute left-3.5 text-brand-blue-400 pointer-events-none flex items-center justify-center w-5 h-5">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              'input-field h-11 w-full border-2 rounded-xl bg-white font-sans text-sm text-brand-blue-900 placeholder:text-brand-blue-300/70 transition-all duration-200 focus:outline-none',
              icon ? 'pl-10 pr-4' : 'px-4',
              error
                ? 'border-red-500 focus:border-red-500 ring-2 ring-red-500/20 text-red-600'
                : 'border-brand-blue-100 hover:border-brand-blue-200 focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20',
              disabled && 'border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-400 cursor-not-allowed',
              className
            )}
            {...inputProps}
          />
        </div>

        {error ? (
          <p className="font-mono text-[10px] text-red-500 font-medium">{error}</p>
        ) : helpText ? (
          <p className="font-mono text-[10px] text-brand-blue-400">{helpText}</p>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
