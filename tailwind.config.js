/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          dark: 'rgba(0, 0, 0, 0.6)',
        },
        brand: {
          dark: '#050505',
          light: '#f5f5f7',
          accent: '#8b5cf6', // Violet
          secondary: '#3b82f6', // Blue
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'], // Elegant for headings
        mono: ['"JetBrains Mono"', 'monospace'], // Keep for code snippets only
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'iridescent': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
