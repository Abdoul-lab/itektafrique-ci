/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0B4FA0',
        'brand-orange': '#FF9A2E',
        'brand-dark': '#2B2B2B',
      },
    },
  },
  plugins: [],
};
