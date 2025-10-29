import { Router } from "express";
import { BlogController } from "./blog.controller.js";
const router = Router();
router.get("/all", BlogController.blogs);
router.post("/create", BlogController.create);
router.post("/update/:id", BlogController.update);
router.get("/single-blog/:id", BlogController.singleBlog);
export const BlogRoute = router;
//# sourceMappingURL=blog.route.js.map