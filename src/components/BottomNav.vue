<script setup>
import {useRouter,} from 'vue-router'
import {ref} from "vue";
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
</template>