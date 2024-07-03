/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#131313",
          900: "#181818",
        },
      },
    },
    fontFamily: {
      yekan: ["yekan", "system-ui"],
    },
  },
  plugins: [],
};
