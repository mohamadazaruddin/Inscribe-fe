/** @type {import('tailwindcss').Config} */

import color from "./src/styles/color";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: color,
  },
  plugins: [],
};
