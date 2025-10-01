import { Router } from "express";
import { UserController } from "./user.controller.js";
const router = Router();
router.get('/all-users', UserController.getUsers);
router.post('/create-user', UserController.createUser);
export const UserRoute = router;
//# sourceMappingURL=user.route.js.map