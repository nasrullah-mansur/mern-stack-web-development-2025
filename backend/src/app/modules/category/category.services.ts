import type { Request } from "express"
import { Category } from "./category.model.js"


const create = async (req: Request) => {
    const createCategory = Category.insertOne(req.body);
    return createCategory;
}

const update = async (req: Request, id: string) => {
    const createCategory = Category.findByIdAndUpdate(id, req.body);
    return createCategory;
}

export const CategoryService = {
    create,
    update
}