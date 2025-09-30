import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";

const router = Router();

interface IRoute {
    path: string;
    route: Router;
}

const routeList: IRoute[] = [
    {
        path: "/user",
        route: UserRoute,
    }
];


routeList.forEach(route => {
    router.use(route.path, route.route)
})

export default router;
