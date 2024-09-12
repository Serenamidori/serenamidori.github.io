/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./css/**/*.{html,js}"],
  content: ["./_layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ivory-black': '#0d192d',
        'sky-blue': '#328cc1',
        'ice-blue': '#e0f0ff',
        'gold-leaf': '#dfb806',
        'prussian-blue': '#043451',
      }
    },
  },
  plugins: [],
});