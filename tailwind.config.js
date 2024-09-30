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
      backgroundImage: {
        slider1:
          "linear-gradient(180deg, rgba(17,17,17,0.80) 0%, rgba(17,17,17,1) 100%), url('../images/slider-1.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
