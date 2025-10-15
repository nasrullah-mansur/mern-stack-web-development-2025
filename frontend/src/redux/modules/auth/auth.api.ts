import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/login",
                data: data
            }),
        }),
        me: builder.query({
            query: () => ({
                method: "GET",
                url: "/auth/me",
            }),
        }),
        logout: builder.query({
            query: () => ({
                method: "GET",
                url: "/auth/logout",
            }),
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
    useLogoutQuery,
    useSendOtpMutation,
    useVerifyOtpMutation,
    useResetPassMutation
} = userApi;

