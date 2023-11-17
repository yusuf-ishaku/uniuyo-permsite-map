<script setup>
// import { div} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue';
import {useRouter, useRoute} from 'vue-router'
import {ref} from "vue"
import HomeViewVue from '../views/HomeView.vue';
const show = ref(false);
const showSearch = ref(false);
const router = useRouter();
const route = useRoute();
const showPlaces = ref(false);
const campus = route.params.campus;
// console.log(show.value);
const handleShow = (param) =>{
   
    if(show.value && route.path !== `/${campus}/${param}`){
        router.push({path: `/${campus}/${param}`});
        return
    }
    if(show.value && route.path === `/${campus}/${param}`){
        router.push({path: `/${campus}`});
        show.value = false;
        return
    }
    show.value = true;
    router.push({path: `/${campus}/${param}`});
}

</script>

<template>
  <div class="w-[100vw] h-[100vh] overflow-hidden">
    <div class="w-[100vw] h-[100vh] flex flex-col items-center border-t-[1px]">
      <div class="w-[100vw] h-[90vh]">
        <HomeViewVue>

        </HomeViewVue>
      </div>
      <nav class="w-full z-50 bg-white fixed bottom-0  h-[10vh] flex flex-row items-center justify-between font-normal px-10 py-2 sm:px-20" >
        <button 
        @click="handleShow('suggestedplaces')"
        class="w-fit p-2 font-poppins flex flex-col items-center" 
        :class="{'text-blue-600' : route.path === `/${campus}/suggestedplaces` }">
          <span class="material-symbols-outlined">
            search
          </span>
          <span>Search</span>
        </button>

        
        <!-- <div to="/about">About</div> -->
        <RouterLink to="/">
          <button @click="show = false; showSearch = false; showPlaces = false" 
        :class="{'text-blue-600' : !show}"
        class="font-poppins w-fit p-2 flex flex-col items-center"
        >
          <span class="material-symbols-outlined">
            explore
          </span>
          <span>
            Map
          </span>
        </button>
        </RouterLink>
        <button
            @click="handleShow('locations')"
            class="w-fit p-2 font-poppins flex flex-col items-center"
            :class="{'text-blue-600': route.path === `/${campus}/locations`}">
          <span class="material-symbols-outlined">
            star
          </span>
          <span>
           My Places
          </span>
        </button>
      </nav>
    </div>
    <Transition>
      <div v-if="show" class="w-[100vw] bg-red-900 bg-aroma  moveup z-20 h-[90vh] pt-[5vh] flex flex-row items-end justify-center border-t-[1px] relative">
        <div class="w-[92vw] sm:w-[80vw] bg-white h-[85vh] rounded-t-xl p-3">
            <RouterView></RouterView>
        </div>
      </div>
    </Transition>
  </div>
  <!-- <div class="w-[100vw] h-[100vh] bg-red-700 top-0 absolute z-[50]" :class="{'hidden': showMap}">

  </div> -->
 
</template>
<style scoped>
#mapcontainer{
  width: 100%;
  height: 90vh;
}
.moveup{
  transform: translateY(-100vh);
}
.v-enter-active,
.v-leave-active{
  transition: all 500ms ease-in;
}
.v-enter-from,
.v-leave-to {
  transform: translateY(0vh);
}
</style>
