
// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from '@/redux/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

const tagTypes: string[] = [
    "USER"
]

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    // baseQuery: fetchBaseQuery({
    //     baseUrl: 'http://localhost:4000/api/v1'
    // }),
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:4000/api/v1',
    }),
    endpoints: () => ({}),
    tagTypes: tagTypes

})