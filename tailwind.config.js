/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-sky-blue": "#D0F0FD", // Calm, soft reading base background
        "ivory-white": "#FFFFF0", // Warm, soft background
        "indigo": "#4B0082", // Smart, futuristic ML feel
        "slate-gray": "#2F3E46", // Strong contrast, clean data tone and text
        "seafoam-green": "#2EC4B6", // Fresh, modern for buttons or highlights
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
