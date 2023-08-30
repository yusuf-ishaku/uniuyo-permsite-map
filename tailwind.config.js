/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/App.vue",
  "./src/views/HomeView.vue",
  "./src/views/MyLocations.vue",
  "./src/views/SuggestedPlaces.vue"
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

