/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
      'primary': "#ECEEFF",
      "btntheme": "#D400FF",
      "slate-gray": "#6D6D6D",
      "pale-blue": "#F5F6FF",
      "white-400": "rgba(255, 255, 255, 0.80)"
    }},
  },
  plugins: [],
}

