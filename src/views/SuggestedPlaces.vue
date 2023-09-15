<script>
import { ref, onMounted, defineComponent, } from "vue";
import { useGetLocationsQuery } from "../app/store.js";

const name = ref('clly08aik5fwf2as9kzxvxjgm');

// import {  ref } from 'vue'

// import { useGetPokemonByNameQuery } from '../store';

export default defineComponent({
  setup() {
    const name = ref('clly08aik5fwf2as9kzxvxjgm');

    return {
      ...useGetLocationsQuery(name),
      name,
    }
  }
})


</script>

<template>
    <div class="w-full h-[100%] p-2 b-red-800 font-poppins">
        <input type="search" class="border-[1px] p-2 focus:border-0 w-full focus:outline-none border-gray-400 rounded"/>
        <p v-if="isLoading">Fetching...</p>
        <div v-else>
            <p v-if="error" class="error">Error fetching pokemon</p>
            <div v-else class="w-full h-full"> 
                <ul class="h-[70vh] overflow-y-auto p-2">
                    <li class="border-[1px] border-gray-400 my-2 h-fit rounded-md p-2" v-for="feature in data?.features" :key="feature.id">
                        <h3 class="text-lg font-semibold">
                            {{ feature.properties.title }}
                        </h3>
                        <p class="text-sm font-light">{{ feature.properties.description  }}</p> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>