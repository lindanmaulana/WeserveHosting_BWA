/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      ClashDisplayMedium: ["ClashDisplay-Medium", "serif"],
      Poppins: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        'primary': "#080C2E",
        'secondary': "#640EF1",
        'third': "#FFFFFF"
      }
    },
  },
  plugins: [],
};
