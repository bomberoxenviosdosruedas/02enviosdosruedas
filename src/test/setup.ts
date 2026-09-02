import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.scrollTo
global.scrollTo = vi.fn();

// Mock next/image
vi.mock('next/image', () => ({
  default: function MockImage({ src, alt, width, height, className, style, priority, ...props }: any) {
    return React.createElement('img', {
      src: src || '',
      alt: alt || '',
      className,
      style,
      ...props,
    });
  },
}));

// Mock next/navigation
vi.mock('next/navigation', () => {
  const router = {
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  };
  return {
    useRouter: () => router,
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
  };
});

// Mock motion/react
const mockMotionComponent = (tag: string) => {
  const MockComp = React.forwardRef(({ children, ...props }: any, ref: any) => {
    const cleanProps = { ...props };
    const motionProps = [
      'animate', 'initial', 'variants', 'transition', 'whileHover',
      'whileTap', 'exit', 'viewport', 'layout', 'onAnimationComplete'
    ];
    motionProps.forEach(p => delete cleanProps[p]);
    return React.createElement(tag, { ref, ...cleanProps }, children);
  });
  MockComp.displayName = `motion(${tag})`;
  return MockComp;
};

const mockMotion: any = {};
['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'section', 'button', 'a', 'form', 'input', 'label', 'ul', 'li', 'ol'].forEach(tag => {
  mockMotion[tag] = mockMotionComponent(tag);
});

const mockUseMotionValue = (init: any) => ({
  get: () => init,
  set: () => {},
  on: () => () => {},
  onChange: () => () => {},
});

vi.mock('motion/react', () => ({
  motion: mockMotion,
  AnimatePresence: ({ children }: any) => children,
  useReducedMotion: () => false,
  useMotionValue: mockUseMotionValue,
  animate: vi.fn(),
  useSpring: (v: any) => v,
  useTransform: (v: any, transformer: any) => {
    const val = v && typeof v === 'object' && typeof v.get === 'function' ? v.get() : v;
    if (typeof transformer === 'function') {
      return transformer(val);
    }
    return val;
  },
}));

// Mock Leaflet / Maps to prevent rendering failures under JSDOM
vi.mock('leaflet', () => ({
 default: {
    map: () => ({
      setView: vi.fn(),
      remove: vi.fn(),
    }),
    icon: vi.fn(),
  },
}));

// Mock DynamicRouteMap
vi.mock('@/src/components/ui/DynamicRouteMap', () => ({
  default: function MockDynamicRouteMap() {
    return React.createElement('div', { 'data-testid': 'mock-route-map' }, 'Interactive Map Mock');
  },
}));

// Mock AddressAutocomplete
vi.mock('@/src/components/ui/AddressAutocomplete', () => ({
  default: function MockAddressAutocomplete({ value, onChange, onSelectCoordinate, placeholder, label }: any) {
    const labelEl = label ? React.createElement('label', null, label) : null;
    const inputEl = React.createElement('input', {
      'data-testid': 'mock-address-input',
      placeholder,
      value: value || '',
      onChange: (e: any) => {
        onChange(e.target.value);
        if (onSelectCoordinate) {
          onSelectCoordinate({ lat: -38.0055, lng: -57.5426 });
        }
      }
    });
    return React.createElement('div', { 'data-testid': 'address-autocomplete-wrapper' }, labelEl, inputEl);
  },
}));
