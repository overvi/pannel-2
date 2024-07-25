/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lines: "url('../src/assets/lines.png')",
        nature: "url('../src/assets/nature.png')",
      },
      colors: {
        gray: {
          950: "#131313",
          900: "#181818",
          700: "#303030",
        },
        orange: {
          400: "#f9b233",
        },
      },
    },
    fontFamily: {
      yekan: ["yekan", "system-ui"],
    },
  },
  plugins: [],
};
