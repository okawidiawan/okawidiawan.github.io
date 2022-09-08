/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#4f46e5",
        secondary: "#64748b",
        dark: "#3E4154",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
