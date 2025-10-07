import { Router } from "express";
import { UserController } from "./user.controller.js";
import { createUserValidation } from "./user.validation.js";
import { validationCheck } from "../../middleware/validationCheck.js";
import { authCheck } from "../../middleware/authCheck.js";
const router = Router();
router.get('/all-users', authCheck, UserController.getUsers);
router.post('/create-user', validationCheck(createUserValidation), UserController.createUser);
export const UserRoute = router;
//# sourceMappingURL=user.route.js.map