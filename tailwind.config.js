/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 1.8s infinite alternate",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(15px)" },
          "100%": { transform: "translateY(0)" },
        },
      colors: {
        'dark-bg': '#1d1d1d',
        'light-bg': '#f3f4f6',
      },
    },
  },
  plugins: [],
}
}