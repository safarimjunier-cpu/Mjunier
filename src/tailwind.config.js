/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E4A7E",
        secondary: "#1FA8E1",
        accent: "#F9A826",
      }
    },
  },
  plugins: [],
}
