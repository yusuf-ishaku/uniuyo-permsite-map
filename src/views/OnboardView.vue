<script setup>
import { VuePreloader } from 'vue-preloader';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../node_modules/vue-preloader/dist/style.css';
AOS.init();
import { ref } from 'vue';

let showMap = ref(false)
</script>
<template>
   <main  class="w-[100vw] font-poppins flex flex-row justify-center h-[100vh] bg-gray-100 top-0 absolute z-[50]">
     <div class="w-fit h-fit flex flex-col items-center mt-32" :class="{'hidden' : showMap}">
      <header>
        <h2>
          Campus?
        </h2>
      </header>
      <RouterLink @click="showMap = true" to="/maincamp/home">
        <button 
          data-aos="fade-up" 
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" 
          data-aos-duration="1800" 
          class="my-3 hover:bg-white hover:border-blue-600 hover:border-[1px] bg-blue-400 hover:text-blue-700 text-white rounded-md py-2 px-4">
        University of Uyo, Main Campus
        </button>
      </RouterLink>
      <RouterLink to="/towncamp/home">
        <button 
          data-aos="fade-up" 
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" 
          data-aos-duration="2300" 
          class="my-3 bg-blue-400 hover:bg-white hover:border-blue-600  hover:border-[1px] hover:text-blue-700 text-white rounded-md py-2 px-4">
        University of Uyo, Town Campus
        </button>
      </RouterLink>
      <RouterLink to="/annex/home">
        <button 
          data-aos="fade-up" 
          data-aos-easing="ease-in-sine" 
          data-aos-duration="2700" 
          class="my-3 bg-blue-400 hover:bg-white hover:border-blue-600 hover:border-[1px] hover:text-blue-700 text-white rounded-md py-2 px-4">
          University of Uyo, Annex
        </button>
      </RouterLink>
     </div>
    </main>
  <VuePreloader
    background-color="#091a28"
    color="#ffffff"
    transition-type="fade-up"
    :loading-speed="28"
    :transition-speed="700"
    @loading-is-over="loadingIsOver"
    @transition-is-over="transitionIsOver" 
    overflow-active=true
    class="w-[100vw] absolute h-[100vh] z-[9999]"
  >
  <span class="text-white">You are awesome animation goes here</span>
  </VuePreloader>
</template>