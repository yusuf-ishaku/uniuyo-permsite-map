<script setup>
  import mapboxgl from "mapbox-gl"
  import {ref, onMounted} from "vue";


  onMounted(()=>{
    mapboxgl.accessToken = `pk.eyJ1Ijoic2hha3p5IiwiYSI6ImNsbHh3bmpkNDJrN3czcHA4eWlsbGo5cXgifQ.dI63IIgQ30AaQrmQLwBsaA`;
    const nav = new mapboxgl.NavigationControl();
    const map =new mapboxgl.Map(
      {
        container: "mapcontainer",
        style: `mapbox://styles/shakzy/cllzhauhc00o501pba4gt0zhi`,
        center: [5.037636, 7.977964],
        zoom: 12,
      }
    );
   map.addControl(nav, "top-right");
   map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));
  })
</script>

<template>
  <main id="mapcontainer" >
  </main>
</template>

<style scoped>
#mapcontainer{
  width: auto;
  height: 90vh;
}

</style>
