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
        'brand-blue': {
          50: '#E6EEFE',
          100: '#BACEFD',
          200: '#8EAFFB',
          300: '#628FF9',
          400: '#3570F8',
          500: '#0950F6',
          600: '#0742CA',
          700: '#0636A5',
        },
        'brand-yellow': {
          50: '#FFFDE6',
          100: '#FFFAB8',
          200: '#FFF78A',
          300: '#FFF45C',
          400: '#FFF12E',
          500: '#FFEC01',
        },
        'brand-white': {
          50: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'IBM Plex Sans', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Anton', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 39, 124, 0.25)',
        'glow-yellow': '0 0 25px rgba(255, 236, 1, 0.35)',
        'glow-blue-lg': '0 0 50px rgba(0, 39, 124, 0.35)',
        'glow-yellow-lg': '0 0 50px rgba(255, 236, 1, 0.5)',
        'accent-sm': '0 2px 4px rgba(255, 236, 1, 0.15)',
        'accent-md': '0 4px 8px rgba(255, 236, 1, 0.2), 0 2px 4px rgba(255, 236, 1, 0.1)',
        'accent-lg': '0 8px 16px rgba(255, 236, 1, 0.3), 0 4px 8px rgba(255, 236, 1, 0.2)',
        'float-shadow': '0 25px 50px -12px rgba(0, 39, 124, 0.15)',
        'bezel-inner': 'inset 0 1px 0 rgba(255,255,255,0.1)',
        'elevated': '0 20px 40px -8px rgba(6,54,165,0.2), 0 8px 16px -4px rgba(6,54,165,0.12)',
        'hover-lift': '0 32px 64px -12px rgba(6,54,165,0.25)',
        'cta-glow': '0 0 40px rgba(255,236,1,0.4), 0 0 80px rgba(255,236,1,0.15)',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'counter-up': 'counter-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(255,236,1,0.3)' },
          '50%': { borderColor: 'rgba(255,236,1,0.8)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config

