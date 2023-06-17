/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#00accf",
        secondary: "#27477D",
        third: "#48c3e5",
      },
    },
  },
  plugins: [],
};
