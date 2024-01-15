/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',    // Small screens, like mobile
      'md': '768px',    // Medium screens, like tablets
      'lg': '1024px',   // Large screens, like laptops
      'xl': '1280px',   // Extra large screens, like desktops
    },
  },
  plugins: [],
}

