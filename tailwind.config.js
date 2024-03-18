/** @type {import('tailwindcss').Config} */
import defaultColors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      ...defaultColors,
      red: {
        100: "#FBEFEC",
        200: "#F7DFDB",
        300: "#F3CEC7",
        400: "#EFBDB5",
        500: "#E89E8F",
        600: "#E07C6A",
        700: "#D85B46",
        800: "#B24B38",
        900: "#8C3A2B",
        1000: "#7F3224",
        1100: "#702B1F",
        1200: "#612419",
        1300: "#521D14",
        1400: "#43160D",
      },
      orange: {
        100: "#FBE6D1",
        200: "#FADBBE",
        300: "#F8D1AC",
        400: "#F7C798",
        500: "#F4B273",
        600: "#F29F4D",
        700: "#EE8928",
        800: "#CC7521",
        900: "#AA611A",
        1000: "#884C13",
        1100: "#77420F",
        1200: "#66390C",
        1300: "#552E08",
        1400: "#442405",
      },
      gray: {
        100: "#FFF",
        200: "#F2F2F2",
        300: "#E6E6E6",
        400: "#D9D9D9",
        500: "#CCC",
        600: "#B3B3B3",
        700: "#999",
        800: "#808080",
        900: "#666",
        1000: "#4D4D4D",
        1100: "#333",
        1200: "#262626",
        1300: "#1A1A1A",
        1400: "#0D0D0D",
        1500: "#000",
      },
    },
    extend: {
      fontSize: {
        9: 48,
        8: 40,
        7: 34,
        6: 28,
        5: 24,
        4: 20,
        3: 16,
        2: 14,
        1: 12,
      },
      boxShadow: {
        my_shadow: "0 0 8px rgba(0,0,0,35)",
      },
    },
  },
  plugins: [],
};
