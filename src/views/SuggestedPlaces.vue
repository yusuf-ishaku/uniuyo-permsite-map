<script setup>
import { ref } from "vue";
import { useGetLocationsQuery } from "../app/store.js";


// import {  ref } from 'vue'

// import { useGetPokemonByNameQuery } from '../store';

const serch = ref('')
const name = ref('clly08aik5fwf2as9kzxvxjgm');
const { data, isLoading, error } = useGetLocationsQuery(name);
const searched = ref(false);
const found= ref(false);
const newData = ref([])

let myData = ref(data);

function searchQuery(){
    newData.value  = myData.value.features.filter((x) => x.properties.title.toLowerCase().includes(serch.value.trim().toLowerCase()));
    console.log(newData);
    if(newData.value){
        searched.value = true;
        if(newData.value.length !== 0){
            found.value = true;
        }
        else{
           found.value = false;
        }
    }
}

</script>

<template>
    <div class="w-full h-[100%] p-2 b-red-800 font-poppins">
        <div class="py-2 ">
            <input @input="searchQuery" type="text" v-model="serch" class="border-[1px] p-2 focus:border-2 w-full focus:outline-none  border-gray-400 rounded"/>
        </div>
        <div v-if="!searched">
            <p v-if="isLoading">Fetching...</p>
            <div v-else>
                <p v-if="error" class="error">Error fetching pokemon</p>
                <div v-else class="w-full h-full"> 
                    <ul class="h-[75vh] overflow-y-auto px-3 py-3">
                        <li class="border-[1px] border-gray-400 my-2 h-fit rounded-md p-2" v-for="feature in myData?.features" :key="feature.id">
                            <h3 class="text-lg font-semibold">
                                {{ feature.properties.title }}
                            </h3>
                            <p class="text-sm font-light">{{ feature.properties.description  }}</p> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>     
        <div v-else>
            <div class="w-full h-fit mt-2 flex  flex-col items-center justify-center font-poppins" v-if="!found">
                <figure class="h-40 w-40 sm:w-56 sm:h-56">
                    <img src="../assets/images/hiii.png" alt="Account not found">
                </figure>
                <h2 class="block w-2/3 text-xl font-semibold text-center">
                    Oops!
                </h2>
                <p class="block w-3/4 text-sm sm:text-lg font-normal text-center">
                    Can't find that location. <span class="block ">Sign in or create account to view full list of location</span>
                </p>
                <button class="bg-blue-700 text-white h-fit px-4 p-2 rounded-md my-2">
                    Create Account
                </button> 
                <button class="border-[1px] border-blue-700 my-2 text-blue-700 bg-transparent px-4 p-2 rounded-md">
                    Sign In
                </button>
            </div>
            <div v-else>
                <ul>    
                    <li class="border-[1px] border-gray-400 my-2 h-fit rounded-md p-2" v-for="feature in newData" :key="feature.id">
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