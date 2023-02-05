/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainBg: "#F8FCFF",
      white: "#FFFFFF",
      orange: "#E15C19",
      blackDark: "#222223",
      blackLight: "#404041",
      blueDark: "#565584",
      blueLight: "#52C0FF",
      grayDark: "#535354",
      grayLight: "#5F5F64",
      grayBorder: "#DFDFDF",
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
