import { baseApi } from "@/redux/baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        all: builder.query({
            query: () => ({
                method: "GET",
                url: "/blog/all",
            })
        }),

        create: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/blog/create",
                data: data
            }),
            invalidatesTags: ["BLOG"]
        }),

        update: builder.mutation({
            query: ({ data, id }) => ({
                method: "POST",
                url: `/blog/update/${id}`,
                data: data
            }),
            invalidatesTags: ["BLOG"]
        }),

        viewBlog: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/blog/single-blog/${id}`,
            }),
        }),

    }),
})


export const {
    useAllQuery,
    useCreateMutation,
    useUpdateMutation,
    useViewBlogQuery
} = blogApi;

