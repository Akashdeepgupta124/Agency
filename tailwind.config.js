/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'custom-orange': '#f56f10',

      },
      fontFamily: {
        urbanist: ['"Urbanist"', 'serif'], // Add the Urbanist font family
        manrope: [ "Manrope", 'serif'],
      },
    },
  },
  plugins: [],
}

// tailwind.config.js

  