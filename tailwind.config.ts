import type { Config } from 'tailwindcss';

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
          500: '#0950F6',      // Electric Speed Blue / Focus ring
          600: '#0950F6',      // Ajuste Max: colapsado al tope
          700: '#0950F6',      // Ajuste Max: Primary / Trust MAX / Lienzo institucional
          800: '#3570F8',      // Ajuste Max: Hover aclarado (no se puede oscurecer más que #0950F6)
          900: '#0950F6',      // Ajuste Max: Texto sobre amarillo (cumple 4.9:1 sobre #FFEC01)
          950: '#0950F6',      // Ajuste Max: Ultra Deep Void - mismo que hero, sin midnight
        },
        'brand-yellow': {
          50: '#FFFDE6',
          100: '#FFFAB8',
          200: '#FFF78A',
          300: '#FFF45C',
          400: '#FFF12E',      // Accent hover
          500: '#FFEC01',      // CTA primario oficial - señal vial
          600: '#E6D400',      // Accent pressed
        },
        'brand-white': {
          50: '#FFFFFF',
        },
        'brand-ink': '#0950F6',      // Body Ink MAX - era #00277C, ahora #0950F6
        'brand-dark': '#0950F6',     // Alias legacy - apunta al tope Max
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Outfit', 'IBM Plex Sans', 'sans-serif'],
        display: ['var(--font-display)', 'Anton SC', 'Anton', 'sans-serif'],
        headline: ['var(--font-display)', 'Anton SC', 'Anton', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Bebas Neue', 'sans-serif'],
        mono: ['var(--font-mono)', 'Geist Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '9xl': '9rem',
      },
      lineHeight: {
        'hero': '0.8',
        'tight': '1.25',
        'relaxed': '1.625',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'mega': '0.2em',
      },
      spacing: {
        'section-y': '6rem',
        'section-y-tight': '3rem',
        'container-max': '80rem',
        'control-sm': '2.25rem',
        'control': '2.5rem',
        'control-lg': '2.75rem',
        'control-xl': '3.5rem',
        'control-2xl': '4rem',
      },
      borderRadius: {
        'sm': '6px',      // --radius-sm
        'md': '8px',      // --radius-md
        'lg': '12px',     // --radius-lg
        'xl': '16px',     // --radius-xl (16px)
        '2xl': '24px',    // --radius-2xl (24px)
        '3xl': '32px',    // --radius-3xl (32px)
        '4xl': '40px',    // --radius-4xl (40px)
      },
      boxShadow: {
        // Sombras teñidas con tope #0950F6 (Ajuste Max) - NUNCA grises/negras
        'xs': '0 1px 2px rgba(9, 80, 246, 0.04)',
        'sm': '0 2px 4px rgba(9, 80, 246, 0.06), 0 1px 2px rgba(9, 80, 246, 0.03)',
        'md': '0 4px 8px rgba(9, 80, 246, 0.08), 0 2px 4px rgba(9, 80, 246, 0.04)',
        'lg': '0 8px 16px rgba(9, 80, 246, 0.1), 0 4px 8px rgba(9, 80, 246, 0.06)',
        'xl': '0 16px 32px rgba(9, 80, 246, 0.12), 0 8px 16px rgba(9, 80, 246, 0.08)',
        '2xl': '0 25px 50px -12px rgba(9, 80, 246, 0.25)',
        'panel': '0 32px 120px -20px rgba(9, 80, 246, 0.15)',
        'float': '0 25px 50px -12px rgba(9, 80, 246, 0.15)',
        'elevated': '0 16px 40px rgba(9, 80, 246, 0.18)',
        'hover-lift': '0 24px 64px rgba(9, 80, 246, 0.20)',
        'antigravity-deep': '0 24px 64px rgba(9, 80, 246, 0.22)',
        'ambient-elevation': '0 20px 80px rgba(9, 80, 246, 0.18)',
        'accent': '0 12px 40px -6px rgba(255, 236, 1, 0.3)',
        'accent-hover': '0 6px 25px rgba(255, 236, 1, 0.4)',
        'accent-sm': '0 2px 4px rgba(255, 236, 1, 0.15)',
        'accent-md': '0 4px 8px rgba(255, 236, 1, 0.2)',
        'glow-blue': '0 0 25px rgba(9, 80, 246, 0.35)',
        'glow-yellow': '0 0 25px rgba(255, 241, 46, 0.45)',
        'cta-glow': '0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'counter-up': 'counter-up 0.6s ease-out',
        'logos-scroll': 'logos-scroll 30s linear infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(9,80,246,0.2)' },
          '50%': { borderColor: 'rgba(9,80,246,0.4)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'counter-up': {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'logos-scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
