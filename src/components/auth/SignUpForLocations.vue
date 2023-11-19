<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
// const password2 = ref("");
const formerror = ref("");
const passwordSeen = ref(false);

let clearError = () =>{
    formerror.value = "";
    return null
}

const passwordChange = () =>{
    passwordSeen.value = !passwordSeen.value;
    return null
}

let submitData = async () =>{        
    let data = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    let response = await axios.post("https://miversity-map-app.onrender.com/api/v1/signup", data);
    formerror.value = response.data.message;
    if(response.data.code === 201){
        router.push({path: "/user/courses"})
    }
}
</script>
<template>
    <main class="overflow-y-auto h-[100%] pb-10">
        <h1 class="text-center font-poppins">Sign Up</h1>
        <p class="text-red-400 text-center text-sm h-5">{{ formerror }}</p>
        <form v-on:submit.prevent="submitData" v-on:input="clearError" class="flex flex-col items-center font-poppins overflow-y-auto">
            <div class="w-[80%] mb-2">
                <label for="username" class="text-sm text-gray-700">Username</label>
                <input required v-model="username" autocomplete="name" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="text" placeholder="Username">
            </div>
            <div class="w-[80%] mb-2">
                <label for="email" class="text-sm text-gray-700">Email</label>
                <input required v-model="email" autocomplete="email" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="email" placeholder="Email Address">
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
            <button type="submit" class="bg-blue-600 text-white w-fit rounded-md px-4 py-2 mt-2">Sign up</button>
        </form>
    </main>
    
</template>
