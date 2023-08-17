/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Green: "#388E3C",
      LightGreen: "#66BB6A",
      Orange: "#FFA726",
      White: "#F5F5F5",
      Black: "#333333",
    },
  },
  plugins: [],
};
