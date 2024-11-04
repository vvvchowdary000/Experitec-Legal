/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d2d9e7",
          300: "#a7b7d1",
          400: "#7790b9",
          500: "#516ea1",
          600: "#3d5685", // Main Experitec blue
          700: "#344870",
          800: "#2d3c5c",
          900: "#28334d",
        },
      },
    },
  },
  plugins: [],
};
