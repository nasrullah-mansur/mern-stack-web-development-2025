import AppLayout from "@/components/layout/AppLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Post from "@/components/modules/blog/Post";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import SendOtp from "@/pages/auth/SendOtp";
import SignUp from "@/pages/auth/Signup";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import AllCategories from "@/pages/cateogory/AllCategories";
import CreateCategory from "@/pages/cateogory/CreateCategory";
import EditCategory from "@/pages/cateogory/EditCategory";
import Contact from "@/pages/contact/Contact";
import HomePage from "@/pages/home";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter } from "react-router";



const router = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/post/:slug",
                Component: Post,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: "/login",
                Component: Login
            },

            {
                path: "/sign-up",
                Component: SignUp
            },
            {
                path: "/send-otp",
                Component: SendOtp
            },
            {
                path: "/verify-otp",
                Component: VerifyOtp
            },
            {
                path: "/reset-password",
                Component: ResetPassword
            }
        ],
    },
    {
        path: "/me",
        Component: withAuth(DashboardLayout),
        children: [
            {
                path: "create-category",
                Component: CreateCategory
            },
            {
                path: "all-categories",
                Component: AllCategories
            },
            {
                path: "edit-category/:id",
                Component: EditCategory
            }
        ],
    }
]);

export default router;