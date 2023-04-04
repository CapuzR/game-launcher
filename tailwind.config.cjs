const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#090909",
        white: "#F6F6F6",
        darkPrimary: "#FEA002",
        lightPrimary: "#E73BCF",
        dark: "#33343F",
        error: colors.red[400],
        success: colors.green[500],
        info: colors.yellow[500],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        primary: "40px",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit,minmax(324px,1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
