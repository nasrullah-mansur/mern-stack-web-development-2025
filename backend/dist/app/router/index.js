import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";
const router = Router();
const routeList = [
    {
        path: "/user",
        route: UserRoute,
    }
];
routeList.forEach(route => {
    router.use(route.path, route.route);
});
export default router;
//# sourceMappingURL=index.js.map