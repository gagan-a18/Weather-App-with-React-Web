/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        medium: "875px",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assests/weather_4.jpg')",
    },
  },
  plugins: [],
};
