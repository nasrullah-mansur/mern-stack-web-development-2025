import type { Request } from "express"
import { Category } from "./category.model.js"


const create = async (req: Request) => {
    const createCategory = Category.insertOne(req.body);
    return createCategory;
}

export const CategoryService = {
    create
}