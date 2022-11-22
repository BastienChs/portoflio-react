/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
