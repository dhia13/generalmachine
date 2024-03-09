const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Signika: ['"Signika"', ...defaultTheme.fontFamily.sans],
        pressStart: ['"Press Start 2P"', "cursive"],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        glow: [
          "0 0 5px #03e9f4",
          "0 0 25px #03e9f4",
          "0 0 50px #03e9f4",
          "0 0 100px #03e9f4",
        ],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1400px",
      // => @media (min-width: 1024px) { ... }

      xl: "1376px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
