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
      animation: {
        wiggle: "wiggle 10s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
