import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";
import { AuthRoute } from "../modules/auth/auth.route.js";
import { PaymentRoute } from "../modules/payment/payment.route.js";
import { CategoryRoute } from "../modules/category/category.route.js";

const router = Router();

interface IRoute {
    path: string;
    route: Router;
}

const routeList: IRoute[] = [
    {
        path: "/user",
        route: UserRoute,
    },
    {
        path: "/auth",
        route: AuthRoute,
    },
    {
        path: "/payment",
        route: PaymentRoute,
    },
    {
        path: "/category",
        route: CategoryRoute
    }
];


routeList.forEach(route => {
    router.use(route.path, route.route)
})

export default router;
