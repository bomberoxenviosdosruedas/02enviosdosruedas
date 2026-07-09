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
        'brand-blue': '#003399',
        'brand-yellow': '#FFCC00',
        'brand-navy': '#002068',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Anton', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(6, 54, 165, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 236, 1, 0.4)',
        'glow-blue-lg': '0 0 40px rgba(6, 54, 165, 0.4)',
        'glow-yellow-lg': '0 0 40px rgba(255, 236, 1, 0.5)',
        'accent-sm': '0 2px 4px rgba(255, 236, 1, 0.2)',
        'accent-md': '0 4px 8px rgba(255, 236, 1, 0.25), 0 2px 4px rgba(255, 236, 1, 0.15)',
        'accent-lg': '0 8px 16px rgba(255, 236, 1, 0.3), 0 4px 8px rgba(255, 236, 1, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config
