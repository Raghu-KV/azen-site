/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        pirmary: "#8339e4",
        secondery: "#fe759b",
        extra: "#3bd6f4",
      },
    },
  },
  plugins: [],
};
