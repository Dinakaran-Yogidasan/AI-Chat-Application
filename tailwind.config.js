/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        "background-light": "#FFFFFF",

        "primary-dark": "#262626",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
        "background-dark": "#262626",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
