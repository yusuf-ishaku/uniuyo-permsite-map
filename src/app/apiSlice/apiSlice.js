import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const getLocationsApi = createApi({
    reducerPath: 'locationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.mapbox.com/datasets/v1/"
    }),
    endpoints: (builder) => ({
        getLocations: builder.query({
          query: (dataset_id) => `shakzy/${dataset_id}/features?access_token=pk.eyJ1Ijoic2hha3p5IiwiYSI6ImNsbHh3bmpkNDJrN3czcHA4eWlsbGo5cXgifQ.dI63IIgQ30AaQrmQLwBsaA`,
        }),
    }),
})