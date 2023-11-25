<script setup>
import { ref } from "vue";
const passwordSeen = ref(false);

const passwordChange = () =>{
    passwordSeen.value = !passwordSeen.value;
    return null
}

</script>
<template>
     <h1 class="text-center">Log In</h1>

<form class="mt-5 flex flex-col items-center">
 
    <div class="w-[80%] my-3">
        <input autocomplete="off" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="email" placeholder="Email Address">
    </div>
    <div class="w-[80%] mb-2">
        <label for="password" class="text-sm text-gray-700">Password</label>
        <div class="w-full border-gray-500 border-[1px] rounded-md focus:outline-none flex flex-row items-center justify-center">

            <input v-if="!passwordSeen" required v-model="password" autocomplete="password" class="w-full py-2 p-2  rounded-md focus:outline-none" type="password" placeholder="........">
            <input v-else required v-model="password" autocomplete="password" class="w-full py-2 p-2  rounded-md focus:outline-none" type="text" placeholder="........">
            
            <span @click="passwordChange" class="flex flex-col items-center pr-2">
                <span v-if="passwordSeen" class="material-symbols-outlined">visibility</span>
            </span>
            <span @click="passwordChange" class="flex flex-col items-center pr-2">
                <span v-if="!passwordSeen" class="material-symbols-outlined">visibility_off</span>
            </span>
        </div>
    </div>
    <button type="submit" class="bg-blue-600 text-white w-fit rounded-md px-4 py-2">Log in</button>
   
</form>
</template>