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
        'brand-blue': '#00277C',
        'brand-yellow': '#D8CA00',
        'brand-navy': '#001C58',
        'brand-ink': '#1A1C1E',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'IBM Plex Sans', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Anton', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 39, 124, 0.25)',
        'glow-yellow': '0 0 25px rgba(216, 202, 0, 0.35)',
        'glow-blue-lg': '0 0 50px rgba(0, 39, 124, 0.35)',
        'glow-yellow-lg': '0 0 50px rgba(216, 202, 0, 0.5)',
        'accent-sm': '0 2px 4px rgba(216, 202, 0, 0.15)',
        'accent-md': '0 4px 8px rgba(216, 202, 0, 0.2), 0 2px 4px rgba(216, 202, 0, 0.1)',
        'accent-lg': '0 8px 16px rgba(216, 202, 0, 0.3), 0 4px 8px rgba(216, 202, 0, 0.2)',
        'float-shadow': '0 25px 50px -12px rgba(0, 39, 124, 0.15)',
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

