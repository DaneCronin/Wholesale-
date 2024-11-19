/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#5B5B66"
        },
        black: {
          DEFAULT: "#000",
          500: "#15141A"
        },
        blue: {
          DEFAULT: #0060df,
          500: "#003eaa"
        }
      },
      fontFamily: {
        Avenir: ["Avenir", "sans-serif"]
      
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}

