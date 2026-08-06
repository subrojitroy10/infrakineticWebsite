/** @type {import('tailwindcss').Config} */

// Tokens are wired to CSS variables (see src/index.css) so the same utility
// classes (bg-ink-900, text-white/60, text-gold-300, ...) automatically
// retheme between the dark Primary Brand Palette and the light Presentation
// Palette based on the [data-theme] attribute on <html> — no per-component
// dark:/light: class duplication needed for these tokens.
const withAlpha = (variable) => `rgb(var(${variable}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
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
        // Semantic aliases for clarity
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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
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
    // Custom variant for the rare cases where a token-remap can't do the job
    // (e.g. default Tailwind palette colors like text-red-300 need an
    // explicit lighter/darker swap between themes). Usage: light:text-red-700
    function ({ addVariant }) {
      addVariant('light', '[data-theme="light"] &')
    },
  ],
}