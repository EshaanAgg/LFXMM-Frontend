/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#00101B",
        "highlight-blue": "#0077CC",
        "fade-grey":"#FFFFFFB2",
      },
      fontFamily: {
        header: ['"Orbitron"', 'sans-serif'],
        subHeader: ['"Rajdhani"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
