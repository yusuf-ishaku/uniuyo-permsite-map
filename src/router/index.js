import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SuggestedPlaces from "../views/SuggestedPlaces.vue";
import YourLocations from "../views/MyLocations.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/suggestedplaces",
      name: "suggested places",
      component: SuggestedPlaces
    },
    {
      path: "/your-locations",
      name: 'your locations',
      component: YourLocations
    }
  ]
})

export default router
