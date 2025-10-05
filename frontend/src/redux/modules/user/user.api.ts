import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/user/create-user",
                body: data
            }),
        }),
    }),
})


export const {
    useSignUpMutation
} = userApi;

