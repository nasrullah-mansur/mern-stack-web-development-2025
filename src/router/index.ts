
import FrontLayout from "@/components/layout/FrontLayout";
import HomePage from "@/pages/home";
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
        ]
    }
])

export default router;