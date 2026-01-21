/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brightYellow: '#FFC107',   // Bright Yellow/Mustard
        deepRed: '#B71C1C',        // Deep Red
        emeraldGreen: '#4CAF50',   // Emerald Green
        royalBlue: '#1976D2',      // Royal Blue
        golden: '#FFD700',         // Golden
        orangeSaffron: '#FF9800',  // Orange/Saffron
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};