/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2e7d32',
        'accent': '#fdd835',
        'background': '#F5F5F5',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'primary': ['Open Sans', 'sans-serif'],
        'secondary': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};