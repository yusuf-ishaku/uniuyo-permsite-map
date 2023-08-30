<script setup>
  import mapboxgl from "mapbox-gl"
  import {ref, onMounted} from "vue";


  onMounted(()=>{
    mapboxgl.accessToken = `pk.eyJ1Ijoic2hha3p5IiwiYSI6ImNsbHh3bmpkNDJrN3czcHA4eWlsbGo5cXgifQ.dI63IIgQ30AaQrmQLwBsaA`;
    const nav = new mapboxgl.NavigationControl();
    const map =new mapboxgl.Map(
      {
        container: "mapcontainer",
        style: `mapbox://styles/shakzy/cllxv04m700ki01pjejo35gwd`,
        center: [5.037739, 7.977827],
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
