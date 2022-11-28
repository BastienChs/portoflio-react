/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        bilal: ['Bilal', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
