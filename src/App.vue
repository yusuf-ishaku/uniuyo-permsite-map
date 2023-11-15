<script setup>
// import { div} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue';
import { VuePreloader } from 'vue-preloader';
import {useRouter,} from 'vue-router'
import '../node_modules/vue-preloader/dist/style.css';
import {ref} from "vue"
import HomeViewVue from './views/HomeView.vue';
const show = ref(false);
const showSearch = ref(false);
const router = useRouter();
const showPlaces = ref(false);
// console.log(show.value);
function handleShow(t){
    if( t === 'search'){
      router.push({path: "/suggestedplaces"})
      if(!show.value){
        showPlaces.value = false;
        showSearch.value = true;
        show.value = true;
      }
      else if(show.value){
        if (showPlaces.value) {
          showPlaces.value = false;
          showSearch.value = true;
        }
        else{
          show.value = false;
          showSearch.value = false;
          router.push("/")
        }
      }
    }
    if(t === 'places'){
      router.push({path: "/locations"})
      if(!show.value){
        showSearch.value = false;
        showPlaces.value = true;
        show.value = true;
      }
      else if(show.value){
        if (showSearch.value) {showSearch.value = false;
        showPlaces.value = true;
        }
        else{
          show.value = false;
          showPlaces.value = false;
          router.push("/")
        }
      }
    }
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
        <button @click="handleShow('search')" 
        class="w-fit p-2 font-poppins flex flex-col items-center" 
        :class="{'text-blue-600' : showSearch }">
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
        <button @click="handleShow('places')" 
        class="w-fit p-2 font-poppins flex flex-col items-center"
        :class="{'text-blue-600': showPlaces}">
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
  <VuePreloader
    background-color="#091a28"
    color="#ffffff"
    transition-type="fade-up"
    :loading-speed="50"
    :transition-speed="1900"
    @loading-is-over="loadingIsOver"
    @transition-is-over="transitionIsOver" 
    overflow-active="true"
    class="w-[100vw] absolute h-[100vh] z-[9999]"
  >
  <span class="text-white">You are awesome animation goes here</span>
  </VuePreloader>
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
