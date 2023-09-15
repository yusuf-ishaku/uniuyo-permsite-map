<script setup>
// import { div} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue';
import {ref, onMounted, Transition} from "vue"
import HomeViewVue from './views/HomeView.vue';
import MyLocationsVue from "./views/MyLocations.vue";
import SuggestedPlacesVue from "./views/SuggestedPlaces.vue";
const show = ref(false);
const showSearch = ref(false);
const showPlaces = ref(false);
// console.log(show.value);
function handleShow(t){
    if( t === 'search'){
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
        }
      }
    }
    if(t === 'places'){
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
        }
      }
    }
}
</script>

<template>
  <div class="w-[100vw] h-[100vh] overflow-hidden flex flex-col items-center ">
    <div class="w-[100vw] h-fit  flex flex-col items-center border-t-[1px]">
      <div class="w-[100vw] h-[90vh]">
        <HomeViewVue>

        </HomeViewVue>
      </div>
      <nav class="w-full z-50 bg-white top-[90vh] fixed bottom-0 h-[10vh] flex flex-row items-center justify-between font-normal px-10 py-2 sm:px-20" >
        <button @click="handleShow('search')" class="font-poppins flex flex-col items-center" >
          <span class="material-symbols-outlined">
            search
          </span>
          <span>Search</span>
        </button>

        <button @click="show = false" class="font-poppins flex flex-col items-center">
          <span class="material-symbols-outlined">
            explore
          </span>
          <span>
            Map
          </span>
        </button>
        <!-- <div to="/about">About</div> -->
        <button @click="handleShow('places')" class="font-poppins flex flex-col items-center">
          <span class="material-symbols-outlined">
            star
          </span>
          <span>
            Places
          </span>
        </button>
      </nav>
    </div>
    <Transition>
      <div v-if="show" class="w-[90vw] bg-transparent moveup z-60 h-[100vh] pt-[10vh] flex flex-row items-end justify-center border-t-[1px]">
        <div class="w-[85vw] sm:w-[80vw] bg-white h-[80vh] rounded-t-xl p-4">
            <SuggestedPlacesVue v-if="showSearch">

            </SuggestedPlacesVue>
            <MyLocationsVue v-if="showPlaces">

            </MyLocationsVue>
        </div>
      </div>
    </Transition>
  </div>
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
