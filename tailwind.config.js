/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Amiri: ["Amiri"],
      },
      colors: {
        brown: "var(--brown)",
        light: "var(--light)",
        bgColor: "var(--bg-color)"
      },
    },
  },
  plugins: [],
};
