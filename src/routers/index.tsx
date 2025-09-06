
import MainLayout from "@/components/layout/MainLayout";
import { blogByCategoryLoader, getIndexPageData } from "@/loader/loader";
import BlogByCategory from "@/pages/BlogByCategory";
import CreateBlog from "@/pages/CreateBlog";
import CreateCategory from "@/pages/CreateCategory";
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
                path: "blog-by-category/:slug",
                Component: BlogByCategory,
                loader: blogByCategoryLoader,
            },
            {
                path: "create-blog",
                Component: CreateBlog
            },
            {
                path: "create-category",
                Component: CreateCategory,
            }
        ],
    },


]);

export default router;