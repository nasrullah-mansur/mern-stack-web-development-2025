import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";
import { AuthRoute } from "../modules/auth/auth.route.js";
import { PaymentRoute } from "../modules/payment/payment.route.js";
const router = Router();
const routeList = [
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
    }
];
routeList.forEach(route => {
    router.use(route.path, route.route);
});
export default router;
//# sourceMappingURL=index.js.map