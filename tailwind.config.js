/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-sky-blue": "#D0F0FD", // Calm, soft reading base background
        "ivory-white": "#FFFFF0", // Warm, soft background
        // Note: a flat "indigo" colour used to be defined here; it replaced Tailwind's
        // whole indigo scale and broke every indigo-300/400/500 class, so it was removed.
        "slate-gray": "#2F3E46", // Strong contrast, clean data tone and text
        "seafoam-green": "#2EC4B6", // Fresh, modern for buttons or highlights
      },
      // Extra opacity steps used across the site (e.g. border-white/8, opacity-8)
      // that Tailwind does not include by default.
      opacity: {
        8: "0.08",
        12: "0.12",
        18: "0.18",
        22: "0.22",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
