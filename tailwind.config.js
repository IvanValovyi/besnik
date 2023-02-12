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
      blueDark: "#45B3F2",
      blueLight: "rgb(82, 192, 255, 0.4)",
      grayDark: "#535354",
      grayLight: "#5F5F64",
      grayBorder: "#DFDFDF",
      yellow: "#FFD968",
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },

  plugins: [],
};
