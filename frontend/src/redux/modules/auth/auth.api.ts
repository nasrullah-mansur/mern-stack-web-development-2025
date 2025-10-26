import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/login",
                data: data
            }),
            invalidatesTags: ["USER"]
        }),

        me: builder.query({
            query: () => ({
                method: "GET",
                url: "/auth/me",
            }),
            providesTags: ["USER"]
        }),

        logout: builder.mutation({
            query: () => ({
                method: "POST",
                url: "/auth/logout",
                data: undefined
            }),
            // invalidatesTags: ["USER"]
        }),

        sendOtp: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/send-otp",
                data: data
            }),
        }),

        verifyOtp: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/verify-otp",
                data: data
            }),
        }),

        resetPass: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/update-password",
                data: data
            }),
        }),

    }),
})


export const {
    useLoginMutation,
    useMeQuery,
    useLogoutMutation,
    useSendOtpMutation,
    useVerifyOtpMutation,
    useResetPassMutation
} = userApi;

