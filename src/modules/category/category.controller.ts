import type { Request, Response } from "express"
import { Category } from "./category.model.js"

const createCategory = async (req: Request, res: Response) => {

    const category = await Category.insertOne(req.body)

    res.status(201).json({
        message: "category created successfully",
        data: category
    })
}

const getCategories = async (req: Request, res: Response) => {

    const categories = await Category.find();

    res.status(200).json({
        message: "category retrieved successfully",
        data: categories,
    })
}

const deleteCategory = async (req: Request, res: Response) => {

    const id = req.params?.id;

    const categories = await Category.findByIdAndDelete(id);

    res.status(200).json({
        message: "category deleted successfully",
    })
}


const updateCategory = async (req: Request, res: Response) => {

    const id = req.params?.id;

    const categories = await Category.findByIdAndUpdate(id, {
        $set: { ...req.body }
    });

    res.status(200).json({
        message: "category updated successfully",
    })
}


export const CategoryController = {
    createCategory,
    getCategories,
    deleteCategory,
    updateCategory
}