import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fcdf1e7caamsh0caa50e294e8fbep17def7jsnc98460de6e79',
        'X-RapidAPI-Host': ''
    }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'fcdf1e7caamsh0caa50e294e8fbep17def7jsnc98460de6e79');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' })
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;