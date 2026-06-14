/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Primary Blue (MarketX Brand Identity)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Accents (minimal)
        accent: {
          blue: '#2563eb',
        },
        // Grays
        dark: {
          900: '#0A0A0A',
          800: '#0c0c0c',
          700: '#0f0f0f',
          600: '#404040',
          500: '#525252',
          400: '#6a7282',
          300: '#364153',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0A0A0A',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
