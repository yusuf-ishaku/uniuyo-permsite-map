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
        center: [7.977964, 5.037636],
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
  map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['uniuyolocation'] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  // Code from the next step will go here.
  const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
  )
  .addTo(map);
  });
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
