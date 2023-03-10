/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      yeseva: [ 'Yeseva One', 'cursive' ],
      work: [ 'Work Sans', 'sans-serif' ]
    },
    colors: {
      'primary': '#1F2B6C',
      'secondary': '#159EEC',
      'accent': '#BFD2F8',
    }
  },
  plugins: [],
}