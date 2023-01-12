/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "880px",
      },
      colors: {
        secondaryColor: "#CD9E45",
        thirdColor: "#A72414",
        grayforme : "#767A89",
      },

      fontFamily: {
        Spline: ["Spline", "monospace"],
        Acme: ["Acme", "sans-serif"],
        Rowdies: ["Rowdies", "cursive"],
        MeriendaOne : ["Merienda One","cursive"],
      },
      animation: {
        blob: "blob 6s infinite",
        text: "text 5s ease infinite",
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        blob: {
          "0%": {
            transform: "translate(-10px, 10px) scale(1)",
          },
          "33%": {
            transform: "translate(25px, -30px) scale(1.3)",
          },
          "66%": {
            transform: "translate(-15px, 15px) scale(1.1)",
          },
          "100%": {
            transform: "translate(-10px, 10px) scale(1)",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
