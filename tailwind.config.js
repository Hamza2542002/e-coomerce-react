/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors :{
        primary : '#f42c37',
        secondary : '#f42c37',  
        brandYellow : '#fdc83a', 
        brandGreen : '#41d17c', 
        brandBlue : '#1d7bf5', 
        brandWhite : '#eeeeee', 
      },
      container :{
        center : true,
        padding : {
          DEFAULT  :"1rem",
          sm : "3rem",
          lg : "4rem",
          xl : "5rem",
          '2xl' : "6rem",
        }
      }
    },
  },
  plugins: [],
}

