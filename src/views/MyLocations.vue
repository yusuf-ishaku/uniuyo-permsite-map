<script setup>
import {useRoute} from "vue-router"
const route = useRoute();

const campus = route.params.campus;


</script>

<template>
    <div class="w-full flex h-[100%] flex-col items-center justify-center font-poppins">
        <main class="w-full h-fit overflow-y-auto flex flex-col items-center justify-center">
            <RouterView></RouterView>
            <figure class="h-40 w-40 sm:w-56 sm:h-56">
                <img src="../assets/images/hiii.png" alt="Account not found">
            </figure>
            <h2 class="w-2/3 text-xl font-semibold text-center">
                Oops!
            </h2>
            <p class="w-3/4 text-sm sm:text-lg font-normal text-center">
               Create a Miversity account or log in to view your locations
            </p>
            <RouterLink :to="`/${campus}/auth/signup`">
                <button class="bg-blue-700 text-white h-fit px-4 p-2 rounded-md my-2">
                Create Account
            </button> 
            </RouterLink>
            <RouterLink :to="`/${campus}/auth/login`">
                <button class="border-[1px] border-blue-700 my-2 text-blue-700 bg-transparent px-4 p-2 rounded-md">
                Sign In
                </button>
            </RouterLink>
        </main>
    </div>
</template>