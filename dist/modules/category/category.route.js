import { Router } from "express";
import { CategoryController } from "./category.controller.js";
const router = Router();
router.get('/all', CategoryController.getCategories);
router.post('/create', CategoryController.createCategory);
router.post('/delete/:id', CategoryController.deleteCategory);
router.post('/update/:id', CategoryController.updateCategory);
export const CategoryRouter = router;
//# sourceMappingURL=category.route.js.map