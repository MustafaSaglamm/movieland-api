/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('../public/img/220-22057.jpg')"
      }
    },  
  },
  plugins: [],
}