/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      pageBg1: "#EED5A5",
      pageBg2: "#0C1E28",
      green: "#55D73D",
      red: "#FF0000",
      background: "#0C1E28",
      cardBackground: "#2E4857",
      lightYellow: "#EED5A5",
      border: "rgba(255, 255, 255, 0.5)",
      grayCta: "#F1F0F6",
      grayNav: "#E1E6F0",
      graybg: "#fdfbfb",
      textCta: "#080717",
      subscriptions: {
        label: "#24468B",
        green: "#85D4BE",
        purple: "#B2A9DF",
      },
      primary: { dark: "#25478B", mid: "#7C90B9", light: "#CDD6E6" },
      accent: { dark: "#FF667D", mid: "#FFB2BE", light: "#FFD1D8" },
      semantic: {
        green: { dark: "#85D4BE", mid: "#C2E9DE", light: "#DBF2EB" },
        orange: { dark: "#FFC7A2", mid: "#FFE3DA", light: "#FFEEE3" },
        purple: { dark: "#B2AADF", mid: "#D1CCEC", light: "#E0DCF2" },
        pink: { dark: "#F3B0C2", mid: "#F9D7E0", light: "#FBE7ED" },
        yellow: { dark: "#FFFFB5", mid: "#FFFFDA", light: "#FFFFE9" },
        lightPink: { dark: "#ECD6E3", mid: "#F5EAF1", light: "#F9F2F6" },
      },
      alert: {
        orange: { dark: "#EB4A0B", mid: "#F5A586", light: "#F9C9B7" },
        lightOrange: { dark: "#F38054", mid: "#F9C0AA", light: "#FBD9CC" },
      },
      nurtal: {
        black: { dark: "#282C33", mid: "#7E8084", light: "#A9AAAD" },
        pink: { dark: "#E1E6F0", mid: "#F1F0F6" },
      },
    },

    extend: {},
  },
  plugins: [],
}

