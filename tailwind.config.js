/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,html}",  // ✅ <-- This line is missing in your setup!
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
      height: {
        'fill-available': '-webkit-fill-available',
      }
    },
  },
  plugins: [],
};
