import { Router } from "express";
import { CategoryRouter } from "../modules/category/category.route.js";
export const router = Router();
const routeList = [
    {
        prefix: "/category",
        route: CategoryRouter,
    },
    // {
    //     prefix: "/blog",
    //     route: BlogRouter,
    // }
];
routeList.forEach(route => {
    router.use(route.prefix, route.route);
});
//# sourceMappingURL=index.js.map