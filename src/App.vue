<script setup>
import { RouterLink} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="w-[100vw] h-[100vh]  flex flex-col items-center border-t-[1px]">
      <!-- <HelloWorld msg="You did it!" /> -->
      <RouterView class="w-[100%] h-[90vh]"/>
      <nav class="w-full bg-white fixed bottom-0 h-[10vh] flex flex-row items-center justify-between font-normal px-4" >
        <RouterLink class="font-poppins" to="/your-locations">
          your locations
        </RouterLink>

        <RouterLink class="font-poppins" to="/">
          home
        </RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink class="font-poppins" to="/suggestedplaces">
            suggested Places
        </RouterLink>
      
      </nav>
    </div>
  
</template>
