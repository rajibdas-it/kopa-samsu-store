/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4ac607",

          secondary: "#f9c0e1",

          accent: "#ed34d7",

          neutral: "#2C2B3B",

          "base-100": "#DFE0F1",

          info: "#4D9DD5",

          success: "#19864A",

          warning: "#EFBF6B",

          error: "#FA385F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
