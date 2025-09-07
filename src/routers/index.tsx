
import MainLayout from "@/components/layout/MainLayout";
import { blogByCategoryLoader, getIndexPageData } from "@/loader/loader";
import BlogByCategory from "@/pages/BlogByCategory";
import CreateBlog from "@/pages/CreateBlog";
import CreateCategory from "@/pages/CreateCategory";
import IndexPage from "@/pages/Index";
import UpdateBlog from "@/pages/UpdateBlog";
import ViewBlog from "@/pages/ViewBlog";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([

    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage,
                loader: getIndexPageData,
                hydrateFallbackElement: <div className="text-center py-8">loading...</div>
            },
            {
                path: "blog-by-category/:slug",
                Component: BlogByCategory,
                loader: blogByCategoryLoader,
                hydrateFallbackElement: <div>loading...</div>
            },
            {
                path: "create-blog",
                Component: CreateBlog
            },
            {
                path: "create-category",
                Component: CreateCategory,
            },
            {
                path: "blog/:slug",
                Component: ViewBlog,
            },
            {
                path: 'update-blog/:slug',
                Component: UpdateBlog
            }
        ],
    },


]);

export default router;