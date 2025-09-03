import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import IndexPage from "@/pages/Index";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: '/',
        Component: IndexPage,
    },
    {
        path: "/about",
        Component: AboutPage,
    },
    {
        path: '/contact',
        Component: ContactPage,
    }
]);

export default router;