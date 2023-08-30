<script setup>
import { RouterLink} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="w-[100vw] h-14 fixed bottom-0 flex flex-row items-center border-t-[1px]">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav class="w-full flex flex-row items-center justify-between font-normal px-4" >
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
  <RouterView class="w-[100vw]"/>
</template>
