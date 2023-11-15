import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SuggestedPlaces from "../views/SuggestedPlaces.vue";
import YourLocations from "../views/MyLocations.vue";
import AuthView from "../views/AuthView.vue";
import SignUpForLocations from "../components/auth/SignUpForLocations.vue";
import LoginForLocations from "../components/auth/LoginForLocations.vue";
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
      path: "/locations",
      name: 'your locations',
      component: YourLocations,
        
    },
    {
      path: "/auth",
      component: AuthView,
      children: [
        {
          path: "signup",
          component: SignUpForLocations
        },
        {
          path: "login",
          component: LoginForLocations
        }
      ]
     }
 
  ]
})

export default router
