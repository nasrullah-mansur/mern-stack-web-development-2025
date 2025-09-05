
import MainLayout from "@/components/layout/MainLayout";
import BlogByCategory from "@/components/modules/blog/BlogByCategory";
import { blogByCategoryLoader, getIndexPageData } from "@/loader/loader";
import IndexPage from "@/pages/Index";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([

    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage,
                loader: getIndexPageData
            },
            {
                path: "/blog-by-category/:slug",
                Component: BlogByCategory,
                loader: blogByCategoryLoader
            }
        ],
    },


]);

export default router;