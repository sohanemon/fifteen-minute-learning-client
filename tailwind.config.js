/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cedarville: ["Cedarville Cursive", "cursive"],
        cursive: ["cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
