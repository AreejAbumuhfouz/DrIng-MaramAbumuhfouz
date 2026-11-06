import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B2345', 50: '#EEF2F8', 100: '#D5DEEC', 700: '#12315C', 800: '#0B2345', 900: '#071731', 950: '#040D1E' },
        teal: { DEFAULT: '#039185', 300: '#5FD3C5', 400: '#22B8A8', 500: '#039185', 600: '#037A70' },
        amber: { DEFAULT: '#F29B18', 300: '#FFC56B', 400: '#F7AE3D', 500: '#F29B18', 600: '#D9840A' },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        beam: { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '1' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        beam: 'beam 2.6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 60s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
