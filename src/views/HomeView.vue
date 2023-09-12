<script setup>
  import mapboxgl from "mapbox-gl"
  import {ref, onMounted} from "vue";


  onMounted(()=>{
    mapboxgl.accessToken = `pk.eyJ1Ijoic2hha3p5IiwiYSI6ImNsbHh3bmpkNDJrN3czcHA4eWlsbGo5cXgifQ.dI63IIgQ30AaQrmQLwBsaA`;
    const nav = new mapboxgl.NavigationControl();
    const bounds = [
        [7.972914, 5.028030],
        [7.981987, 5.047798]
    ];
    const map = new mapboxgl.Map({
      container: "mapcontainer",
      style: `mapbox://styles/shakzy/cllzhauhc00o501pba4gt0zhi`,
      center: [7.977964, 5.037636],
      zoom: 1,
      maxBounds: bounds
    });
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
