/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4e7',
          100: '#fbe8cf',
          200: '#f9d29f',
          300: '#f6bd6f',
          400: '#f4a73f',
          500: '#f2910f',
          600: '#d97c0d',
          700: '#a9610a',
          800: '#794608',
          900: '#4a2b04',
          950: '#1a0f01',
        },
        accent: {
          50: '#e6f2e7',
          100: '#cee6d0',
          200: '#9ccda0',
          300: '#6ab471',
          400: '#389b41',
          500: '#138808', // Indian flag green
          600: '#107307',
          700: '#0d5a05',
          800: '#094104',
          900: '#052802',
          950: '#021001',
        },
        neutral: {
          50: '#f0f3f7',
          100: '#e2e7ef',
          200: '#c5cfdf',
          300: '#a8b7cf',
          400: '#8b9fbf',
          500: '#6d87af',
          600: '#526c91',
          700: '#405473',
          800: '#2e3c54',
          900: '#1c2536',
          950: '#0a0e17',
        },
        saffron: '#FF9933', // Indian flag saffron
        navy: '#000080',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};