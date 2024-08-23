/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      ClashDisplayReguler: ["ClashDisplay-Regular", "serif"],
      ClashDisplayLight: ["ClashDisplay-Light", "serif"],
      ClashDisplayExtraLight: ["ClashDisplay-Extralight", "serif"],
      ClashDisplayMedium: ["ClashDisplay-Medium", "serif"],
      ClashDisplaySemiBold: ["ClashDisplay-SemiBold", "serif"],
      ClashDisplayBold: ["ClashDisplay-Bold", "serif"],
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
