<script setup>
import { ref } from "vue";
import axios from "axios";
const username = ref("");
const email = ref("");
const password = ref("");
const password2 = ref("");

let submitData = async () =>{
    let data = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    console.log(data)
    console.log(username.value)
    let response = await axios.post("https://miversity-general.onrender.com/api/v1/signup", data)
    console.log(response);
}
</script>
<template>
    <h1 class="text-center font-poppins">Sign Up</h1>

    <form v-on:submit.prevent="submitData" class="mt-5 flex flex-col items-center font-poppins">
        <div class="w-[80%] my-3">
            <input required v-model="username" autocomplete="name" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="text" placeholder="Username">
        </div>
        <div class="w-[80%] my-3">
            <input required v-model="email" autocomplete="email" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="email" placeholder="Email Address">
        </div>
        <div class="w-[80%] my-3">
            <input required v-model="password" autocomplete="password" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="password" placeholder="........">
        </div>
        <div class="w-[80%] my-3">
            <input required v-model="password2" autocomplete="off" class="w-full py-2 p-2 border-gray-500 border-[1px] rounded-md focus:outline-none" type="password" placeholder="password">
        </div>
        <button type="submit" class="bg-blue-600 text-white w-fit rounded-md px-4 py-2">Submit</button>
    </form>
</template>
