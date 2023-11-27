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
        secondery: "#19b087",
        extra: "#3bd6f4",
      },
      animation: {
        wiggle: "wiggle 10s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0%)" },
          "25%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0%)" },
          "75%": { transform: "translateY(25%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
