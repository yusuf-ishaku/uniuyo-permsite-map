<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {ref} from "vue";
const route = useRoute();
let courses = ref("");
const id = route.params.id;
// console.log(id);
const token = JSON.parse(localStorage.getItem("MIVERSITY_TOKEN"));
const getCourses = async () =>{
    let data = await axios.get(`https://miversity-map-app.onrender.com/api/v1/${id}`, {
        headers: {
            Authorization: token,
        }
    });
    courses.value = data.courses;
}

onMounted(() =>{
    getCourses();
})
</script>
<template>
    <div class="text-center w-full">
        Courses
    </div>
    <div>
        <h2 class="text-center" v-if="!courses">
            No courses available, add courses.
            When you add courses you're offering at the University of Uyo, 
            Miversity can help show you the locations of your lectures and also remind you of classes you're having
        </h2>
        <ul v-else>
            <li>Chem 122</li>
        </ul>
    </div>
</template>