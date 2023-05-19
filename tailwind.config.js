/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#264B96",
      fadeOrange: "#F3D1BF",
      deepOrange: "#F9A73E",
      fadeGreen: "#27B376",
      deepGreen: "#006F3C",
      offwhite: "#F1F0FA",
      white: "#FFF",
      grey: "#3C4858",
      black: "#000",
      red: "#BF212F",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
