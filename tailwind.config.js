/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/App.vue",
  "./src/views/HomeView.vue",
  "./src/views/MyLocations.vue",
  "./src/views/SuggestedPlaces.vue",
  "./src/views/AuthView.vue",
  "./src/components/auth/SignUpForLocations.vue",
  "./src/components/auth/LoginForLocations.vue",
  "./src/views/OnboardView.vue",
  "./src/views/OriginalView.vue",
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

