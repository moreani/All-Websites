/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28A745',
        accent: '#FFC107',
        background: '#F5F5F5',
        text: '#333333',
        'primary-light': '#34CE57',
        'primary-dark': '#1E7E34',
        'accent-light': '#FFD54F',
        'accent-dark': '#FFA000',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};