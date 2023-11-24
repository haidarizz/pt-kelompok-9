/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "darkgreen" : "#136E7D",
      "green" : "#5e9a78",
      "lightgreen" : "#789ca4",
      "yellow" : "#FDD33F",
      "orange" : "#F96001",
      "orange2" : "#E59639",
      "lightcream" : "#EAE5E0",
      "cream" : "#E4CAAC",
      "lightbrown" : "#DDAB71",
      "brown" : "#A36D66",
      //"gold" : "#9d8f62",
      "white" : "#FFFFFF",
      "black" : "#000000",
      "back" : "#1E252B",
      "gray" : "#747D88",
      "red" : "#FF0000",
    },
    fontFamily: {
      vollkorn: ['Vollkorn']
    }
  },
  plugins: [],
}