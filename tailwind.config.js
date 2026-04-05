/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/context/**/*.{js,jsx}`,
    `./src/content/js/**/*.{js,jsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        page: "rgb(var(--tw-page) / <alpha-value>)",
        surface: "rgb(var(--tw-surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--tw-surface-muted) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--tw-ink) / <alpha-value>)",
          muted: "rgb(var(--tw-ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--tw-ink-subtle) / <alpha-value>)",
        },
        basil: {
          DEFAULT: "#79A69E",
        },
        "accent-blush": "rgb(255 218 230 / <alpha-value>)",
        "accent-lavender": "rgb(230 220 255 / <alpha-value>)",
        "accent-mint": "rgb(200 240 228 / <alpha-value>)",
        "accent-peach": "rgb(255 228 210 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
