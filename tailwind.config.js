/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./js/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#D4AF37",
          500: "#C49B26",
        },
        beige: "#CBB994",
        night: "#0A0A0A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        gold: "0 0 15px rgba(212,175,55,0.3)",
      },
    },
  },
  plugins: [],
};
