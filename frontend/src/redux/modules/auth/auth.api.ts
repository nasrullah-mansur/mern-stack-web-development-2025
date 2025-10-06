import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/login",
                body: data
            }),
        }),
    }),
})


export const {
    useLoginMutation
} = userApi;

