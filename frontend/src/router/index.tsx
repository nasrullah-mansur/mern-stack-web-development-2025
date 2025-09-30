import AppLayout from "@/components/layout/AppLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Post from "@/components/modules/blog/Post";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import SendOtp from "@/pages/auth/SendOtp";
import SignUp from "@/pages/auth/Signup";
import Contact from "@/pages/contact/Contact";
import HomePage from "@/pages/home";
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
                path: "/reset-password",
                Component: ResetPassword
            }
        ],
    },
    {
        path: "me",
        Component: DashboardLayout,

    }
]);

export default router;