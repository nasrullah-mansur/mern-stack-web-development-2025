import { Router } from "express";
import { AuthController } from "./auth.controller.js";
const router = Router();
router.post("/login", AuthController.login);
router.get("/me", AuthController.me);
export const AuthRoute = router;
//# sourceMappingURL=auth.route.js.map