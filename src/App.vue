
















































































<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../node_modules/vue-preloader/dist/style.css';
AOS.init();
</script>
<template>
    <main  class="w-[100vw] font-poppins flex flex-row justify-center h-[100vh] bg-gray-100 top-0 absolute z-[50]">
      <RouterView></RouterView>
    </main>
</template>