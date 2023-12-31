<script setup>
import mapboxgl from "mapbox-gl"
import { onMounted} from "vue";
const props = defineProps(["campus"]);
  const campus = props.campus;
onMounted(() => {
 
  mapboxgl.accessToken = `pk.eyJ1Ijoic2hha3p5IiwiYSI6ImNsbHh3bmpkNDJrN3czcHA4eWlsbGo5cXgifQ.dI63IIgQ30AaQrmQLwBsaA`;
  const nav = new mapboxgl.NavigationControl();
  let bounds;
  let center;
  let style;
  let zoom;
  if (campus === "maincamp") {
    center = [7.977964, 5.037636];
    style = "mapbox://styles/shakzy/cllvtm9qo00dy01r4a0e5h7lx";
    bounds = [
      [7.972914, 5.028030],
      [7.981987, 5.047798]
    ];
    zoom = 1;
    const map = new mapboxgl.Map({
      container: "mapcontainer",
      style,
      center,
      zoom,
      bounds
    });
    map.addControl(nav, "top-right");
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    })
    );
    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['uniuyolocation']
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      // eslint-disable-next-line no-unused-vars
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    });
  } else if (campus === "towncamp") {
    center = [7.922957, 5.042335]
    bounds = [
      [7.92073, 5.05038],
      [7.92236, 5.03391]
    ];
    style = "mapbox://styles/shakzy/clqk8r5hx00jx01qy9wjz85kj";
    zoom = 16;
    const map = new mapboxgl.Map({
      container: "mapcontainer",
      style,
      center,
      zoom,
      bounds
    });
    map.addControl(nav, "top-right");
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    })
    );
    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['uniuyolocation']
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      // eslint-disable-next-line no-unused-vars
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    });
  }
});

// console.log(props.campus)
</script>

<template>
  <main id="mapcontainer">
  </main>
</template>

<style scoped>
#mapcontainer {
  width: 100%;
  height: 90vh;
}
</style>
