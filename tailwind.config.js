module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      periwinkle100: "#130B43",
      periwinkle80: "#5C5589",
      periwinkle60: "#3F3A5A",
      periwinkle40: "#3D3B45",
      periwinkle20: "#C8D5EF",
      periwinkle10: "#CBC9D9",
      "fire-opal": "#D85050",
      white: "#FFFFFF",
      "old-lace": "#FFF4E3",
      crayola: "#CC00FF",
      xanthic: "#3300FF",
    },
    extend: {
      boxShadow: {
        notifications: "0px 4px 24px 0px rgba(156, 130, 38, 0.4)",
      },
    },
  },
  plugins: [],
};
