/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        cream: '#F5F1E6',
        brown: {
          50: '#FAF7F2',
          100: '#F0E9E0',
          200: '#E1D5C3',
          300: '#D2C1A6',
          400: '#C3AD89',
          500: '#B4996C',
          600: '#A58A5E',
          700: '#8E7650',
          800: '#766142',
          900: '#5E4D34',
        },
        green: {
          50: '#F0F5F1',
          100: '#DCE8DF',
          200: '#B9D1C0',
          300: '#96BAA1',
          400: '#73A382',
          500: '#508C63',
          600: '#3D7A50',
          700: '#2A683D',
          800: '#17562A',
          900: '#044417',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};