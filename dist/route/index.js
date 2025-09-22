import { Router } from "express";
import { todoRouter } from "../modules/todo/todo.route.js";
export const router = Router();
router.use("/todo", todoRouter);
//# sourceMappingURL=index.js.map