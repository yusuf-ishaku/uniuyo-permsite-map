<script setup></script>
<template>
    <header class="flex flex-col justify-around w-[100%] items-center font-poppins">
        <RouterLink class="text-blue-600 mr-auto" to="/locations">
            Back
        </RouterLink>
        <h1 class="my-3">
        Miversity.com
        </h1>
    </header>   
    <RouterView></RouterView>
</template>