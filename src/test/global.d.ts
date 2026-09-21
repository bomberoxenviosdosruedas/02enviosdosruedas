// Global type declarations for testing
/// <reference types="@testing-library/jest-dom" />
/// <reference types="vitest/globals" />

import type { TestingLibraryMatchers } from '@testing-library/jest-dom';

// Extend Vitest's Assertion interface with jest-dom matchers
declare module 'vitest' {
  interface Assertion<T = any> extends TestingLibraryMatchers<unknown, any> {
    toBeInTheDocument(): T;
    toHaveValue(value: string | number): T;
    toBeDisabled(): T;
    toHaveAttribute(name: string, value?: string): T;
  }
  interface AsymmetricMatchersContaining extends TestingLibraryMatchers<unknown, any> {
    toBeInTheDocument(): any;
    toHaveValue(value: string | number): any;
    toBeDisabled(): any;
    toHaveAttribute(name: string, value?: string): any;
  }
}