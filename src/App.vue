<script setup>
// import { div} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HomeViewVue from './views/HomeView.vue';
</script>

<template>
  <div class="w-[100vw] h-[100vh] overflow-hidden flex flex-col items-center ">
    <div class="w-[100vw] h-fit  flex flex-col items-center border-t-[1px]">
      <div class="w-[100vw] h-[90vh]">
        <HomeViewVue>

        </HomeViewVue>
      </div>
      <nav class="w-full bg-white bottom-0 h-[10vh] flex flex-row items-center justify-between font-normal px-10 sm:px-20" >
        <button class="font-poppins flex flex-col items-center" >
          <span class="material-symbols-outlined">
            search
          </span>
          <span>Search</span>
        </button>

        <button class="font-poppins flex flex-col items-center">
          <span class="material-symbols-outlined">
            explore
          </span>
          <span>
            Map
          </span>
        </button>
        <!-- <div to="/about">About</div> -->
        <button class="font-poppins flex flex-col items-center">
          <span class="material-symbols-outlined">
            star
          </span>
          <span>
            Places
          </span>
        </button>
      </nav>
    </div>
    <div class="w-[90vw] bg-transparent  h-[100vh] pt-[10vh] flex flex-row items-end justify-center border-t-[1px]">
        <div class="w-[85vw] sm:w-[80vw] bg-white h-[80vh] rounded-t-xl">

        </div>
    </div>
  </div>
</template>
<style scoped>
#mapcontainer{
  width: 100%;
  height: 90vh;
}
.moveup{
  transform: translateY(-100vh);
  transition: all 500ms ease-in
}
</style>
