import { Router } from "express";
import { CategoryController } from "./category.controller.js";
const router = Router();
router.post("/create", CategoryController.create);
router.get("/all-categories", CategoryController.allCategories);
router.get("/view-category/:id", CategoryController.viewCategory);
export const CategoryRoute = router;
//# sourceMappingURL=category.route.js.map