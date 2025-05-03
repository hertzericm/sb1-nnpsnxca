/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f6ff',
          100: '#deeafe',
          200: '#c2d8fd',
          300: '#9abbfc',
          400: '#6d95f7',
          500: '#406ef0',
          600: '#0969da', // GitHub blue
          700: '#1a40af',
          800: '#1c3891',
          900: '#1d3476',
        },
        success: {
          50: '#eef8ee',
          100: '#d4efd4',
          200: '#b0e0b0',
          300: '#81c881',
          400: '#4fa94f',
          500: '#2da44e', // GitHub green
          600: '#24843e',
          700: '#1e6e34',
          800: '#1a572b',
          900: '#164a25',
        },
        error: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fcc5c5',
          300: '#f99898',
          400: '#f46b6b',
          500: '#e13d3d',
          600: '#cf2e2e',
          700: '#ab1f1f',
          800: '#8f1d1d',
          900: '#771c1c',
        },
        warning: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffdca6',
          300: '#ffc26d',
          400: '#ffa136',
          500: '#ff8210',
          600: '#ee6302',
          700: '#c54705',
          800: '#9c380c',
          900: '#7e2f0c',
        },
      },
      boxShadow: {
        'button': '0 3px 5px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};