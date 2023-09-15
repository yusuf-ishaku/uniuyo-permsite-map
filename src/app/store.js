import { configureStore } from '@reduxjs/toolkit';
import { computed, onUnmounted, ref, onMounted, watch } from 'vue';
import  { getLocationsApi } from "./apiSlice/apiSlice"

const locationStore = configureStore({
    reducer: {
      [getLocationsApi.reducerPath]: getLocationsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getLocationsApi.middleware),
});

export function useGetLocationsQuery(name){
    const store = ref(locationStore.getState());
    const refetch = ref(() => {});
    const unsubscribe = ref(() => {});

    const unsubscribeStore = locationStore.subscribe(() => {
        store.value = locationStore.getState();
    });

    const getLocations = () => {
        const result = locationStore.dispatch(getLocationsApi.endpoints.getLocations.initiate(name.value.toLowerCase()));
        refetch.value = result.refetch;
        unsubscribe.value = result.unsubscribe;
    };

    const result = computed(() => getLocationsApi.endpoints.getLocations.select(name.value.toLowerCase())(store.value));

    const isLoading = computed(() => result.value.isLoading);
    const error = computed(() => result.value.isError);
    const data = computed(() => result.value.data);
    onMounted(getLocations);
    watch(name, getLocations);

    onUnmounted(() => {
        unsubscribeStore();
        unsubscribe.value();
    });

    return {
        data,
        refetch,
        isLoading,
        error
    }
};