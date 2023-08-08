/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#66FFFF",
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      }
    },
  },
  plugins: [],
};

