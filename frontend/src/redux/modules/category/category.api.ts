import { baseApi } from "@/redux/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        create: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/category/create",
                data: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        update: builder.mutation({
            query: ({ data, id }) => ({
                method: "POST",
                url: `/category/update/${id}`,
                data: data
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        delete: builder.mutation({
            query: (id) => ({
                method: "POST",
                url: `/category/delete/${id}`,
                data: null
            }),
            invalidatesTags: ["CATEGORY"]
        }),
        getCategories: builder.query({
            query: () => ({
                method: "GET",
                url: "/category/all-categories",
            }),
            providesTags: ["CATEGORY"]
        }),
        viewCategory: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/category/view-category/${id}`,
            }),
        }),
    }),
})


export const {
    useCreateMutation,
    useGetCategoriesQuery,
    useViewCategoryQuery,
    useUpdateMutation,
    useDeleteMutation
} = categoryApi;

