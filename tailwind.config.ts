import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0636A5',
        'brand-yellow': '#FFEC01',
        'brand-navy': '#002068',
        'brand-ink': '#151B2D',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Anton', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(6, 54, 165, 0.4)',
        'glow-yellow': '0 0 25px rgba(255, 236, 1, 0.5)',
        'glow-blue-lg': '0 0 50px rgba(6, 54, 165, 0.5)',
        'glow-yellow-lg': '0 0 50px rgba(255, 236, 1, 0.65)',
        'accent-sm': '0 2px 4px rgba(255, 236, 1, 0.2)',
        'accent-md': '0 4px 8px rgba(255, 236, 1, 0.25), 0 2px 4px rgba(255, 236, 1, 0.15)',
        'accent-lg': '0 8px 16px rgba(255, 236, 1, 0.35), 0 4px 8px rgba(255, 236, 1, 0.25)',
        'float-shadow': '0 25px 50px -12px rgba(6, 54, 165, 0.25)',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config

