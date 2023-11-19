<script setup>
import {useRoute} from "vue-router";
const route = useRoute();

const campus = route.params.campus;
</script>
<template>
    <div class="h-[100%] w-full">
        <header class="flex flex-col justify-around w-[100%] items-center font-poppins">
        <RouterLink class="text-blue-600 mr-auto text-sm" :to="`/${campus}/locations`">
            Back
        </RouterLink>
        <h1 class="my-1">
        Miversity.com
        </h1>
    </header>
    <main class="overflow-y-auto h-[70vh]">
        <RouterView ></RouterView>
    </main>   
    </div>
    
    
</template>