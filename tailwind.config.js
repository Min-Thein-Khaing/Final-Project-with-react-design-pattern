/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: ['Montserrat', 'Padauk','sans-serif'],
  },
  theme: {
    fontFamily: {
      heading:["poppins",'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}