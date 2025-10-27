import { Category } from "./category.model.js";
const create = async (req) => {
    const createCategory = Category.insertOne(req.body);
    return createCategory;
};
export const CategoryService = {
    create
};
//# sourceMappingURL=category.services.js.map