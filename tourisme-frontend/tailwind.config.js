/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'newBlack': '#484848',
        'newGrey': '#9A9A9A',
        'mediumGrey' :'#F8FAFB',
        'lightGrey':'#F1F5F6',
        'info': 'rgba (205, 221, 224, 0.15)'
      },
      fontFamily: {
        sans: ["Montesserat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
