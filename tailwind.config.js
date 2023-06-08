/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#2B3945',
        darkBg: '#202C37',
        darkText: '#FFFFFF',
        lightText: '#111517',
        lightInput: '#858585',
        lightBg: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
