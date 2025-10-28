import { Category } from "./category.model.js";
const create = async (req) => {
    const createCategory = Category.insertOne(req.body);
    return createCategory;
};
const update = async (req, id) => {
    const createCategory = Category.findByIdAndUpdate(id, req.body);
    return createCategory;
};
export const CategoryService = {
    create,
    update
};
//# sourceMappingURL=category.services.js.map