import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import Locations from "../views/MyLocations.vue";
import SuggestedPlaces from "../views/SuggestedPlaces.vue"
import AuthView from "../views/AuthView.vue";
import SignUpForLocations from "../components/auth/SignUpForLocations.vue";
import LoginForLocations from "../components/auth/LoginForLocations.vue";
import OriginalView from "../views/OriginalView.vue";
import OnboardView from "../views/OnboardView.vue";
import CoursesView from "../views/CoursesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Onboard",
      component: OnboardView
    },
    {
      path: "/:campus",
      name: 'Home',
      component: OriginalView,
      
      children: [
        {
          path: ":id",
          component: CoursesView,
          children: [
            {
              path: "locations",
              component: Locations,
            }
           
          ]
        },
        {
          path: "locations",
          component: Locations,
        },
        {
          path: "suggestedplaces",
          component: SuggestedPlaces
        },
        {
          path: "auth",
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
    },
    
 
  ]
})

export default router
