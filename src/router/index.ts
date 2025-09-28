
import FrontLayout from "@/components/layout/FrontLayout";
import Login from "@/pages/auth/Login";
import ResetPassword from "@/pages/auth/ResetPassword";
import SendOtp from "@/pages/auth/SendOtp";
import SignUp from "@/pages/auth/Signup";
import Contact from "@/pages/contact/Contact";
import HomePage from "@/pages/home";
import SingleBlog from "@/pages/single-blog";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            }
            ,
            {
                path: "/single-blog/:slug",
                Component: SingleBlog
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

        ]
    }
])

export default router;