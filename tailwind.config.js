const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playFair: "'Playfair Display', serif",
      },
      backgroundImage: (theme) => ({
        sakura:
          "url('/home/tisadini/Documents/my-portfolio/src/assets/sakura.jpg')",
        cloud:
          "url('/home/tisadini/Documents/my-portfolio/src/assets/cloud.jpg')",
        paper:
          "url('/home/tisadini/Documents/my-portfolio/src/assets/paper.jpg')",
        self: "url('/home/tisadini/Documents/my-portfolio/src/assets/cloud.jpg')",
      }),
      backgroundColor: (theme) => ({
        pastelRed: "#d26466",
      }),
      colors: {
        orchid: "#C779D0",
        purple: {
          lavender: "#DDD6F3",
          light: "#D3CCE3",
          violet: "#E9E4F0",
          ...defaultTheme.colors.purple,
        },
        red: {
          pale: "#FAACA8",
          orange: "#FEAC5E",
          ...defaultTheme.colors.red,
        },
        blue: {
          pale: "#E0EAFC",
          light: "#CFDEF3",
          ...defaultTheme.colors.blue,
        },
        green: {
          cyan: "#4BC0C8",
          ...defaultTheme.colors.green,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// almost: #ddd6f3 → #faaca8
// sky: #E0EAFC #CFDEF3
// delicate: #D3CCE3 #E9E4F0
// card atlas : #FEAC5E #C779D0 #4BC0C8

// purple: {
//   550: "#8F6EA7",
//   ...defaultTheme.colors.purple
// }
