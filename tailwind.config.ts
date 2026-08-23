import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: withAlpha('--color-fg'),
        ink: {
          900: withAlpha('--color-bg-primary'),
          800: withAlpha('--color-bg-secondary'),
          700: withAlpha('--color-bg-card'),
          600: withAlpha('--color-bg-border'),
        },
        gold: {
          200: withAlpha('--color-gold-200'),
          300: withAlpha('--color-gold-300'),
          400: withAlpha('--color-gold-400'),
          500: withAlpha('--color-gold-500'),
        },
        violet: {
          300: withAlpha('--color-violet-300'),
          400: withAlpha('--color-violet-400'),
          500: withAlpha('--color-violet-500'),
        },
        neutral: {
          300: withAlpha('--color-fg-secondary'),
          400: withAlpha('--color-fg-muted'),
        },
        background: {
          primary: withAlpha('--color-bg-primary'),
          secondary: withAlpha('--color-bg-secondary'),
          card: withAlpha('--color-bg-card'),
        },
        border: {
          DEFAULT: withAlpha('--color-bg-border'),
        },
        text: {
          primary: withAlpha('--color-fg'),
          secondary: withAlpha('--color-fg-secondary'),
          muted: withAlpha('--color-fg-muted'),
        },
        accent: {
          authority: withAlpha('--color-gold-300'),
          secondary: withAlpha('--color-gold-500'),
          intelligence: withAlpha('--color-violet-500'),
        },
        brand: {
          obsidian: withAlpha('--brand-obsidian'),
          ivory: withAlpha('--brand-ivory'),
          aubergine: withAlpha('--brand-aubergine'),
          plum: withAlpha('--brand-plum'),
          violet: withAlpha('--brand-violet'),
          champagne: withAlpha('--brand-champagne'),
          brass: withAlpha('--brand-brass'),
          bronze: withAlpha('--brand-bronze'),
        },
        action: {
          DEFAULT: withAlpha('--action-primary'),
          hover: withAlpha('--action-primary-hover'),
          pressed: withAlpha('--action-primary-pressed'),
          text: withAlpha('--action-primary-text'),
          secondary: withAlpha('--action-secondary'),
        },
        success: {
          DEFAULT: withAlpha('--success-fg'),
          bg: withAlpha('--success-bg'),
          border: withAlpha('--success-border'),
        },
        warning: {
          DEFAULT: withAlpha('--warning-fg'),
          bg: withAlpha('--warning-bg'),
          border: withAlpha('--warning-border'),
        },
        danger: {
          DEFAULT: withAlpha('--danger-fg'),
          bg: withAlpha('--danger-bg'),
          border: withAlpha('--danger-border'),
        },
        info: {
          DEFAULT: withAlpha('--info-fg'),
          bg: withAlpha('--info-bg'),
          border: withAlpha('--info-border'),
        },
        review: {
          DEFAULT: withAlpha('--review-fg'),
          bg: withAlpha('--review-bg'),
          border: withAlpha('--review-border'),
        },
        pending: {
          DEFAULT: withAlpha('--pending-fg'),
          bg: withAlpha('--pending-bg'),
          border: withAlpha('--pending-border'),
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-clash)', 'Clash Display', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', '[data-theme="light"] &')
    }),
  ],
}

export default config
