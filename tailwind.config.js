/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#B68C5A",
        "light-gray": "#E7E7E7",
        "medium-gray": "#707070",
        "deep-gray": "#414040",
        "light-black": "#282A36",
        "light-white": "#F3F3F3",
        "deep-white": "#CFCFCF",
      },
      fontFamily: {
        poppins: "Poppins",
        garamond: "EB Garamond",
      },
    },
  },
  plugins: [require("daisyui")],
};
