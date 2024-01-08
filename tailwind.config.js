/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    colors: {
      black: '#151515',
      white: '#fafafa',
    },
    extend: {
      fontFamily: {
        base: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
