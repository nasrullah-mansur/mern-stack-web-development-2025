import catchAsync from "../../utils/catchAsync.js";
import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes"
import { CategoryService } from "./category.services.js";
import { Category } from "./category.model.js";

const create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const data = await CategoryService.create(req);

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in successfully",
        data
    })
})


const allCategories = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const data = await Category.find({});

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in successfully",
        data
    })
})

const viewCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;

    const data = await Category.findById(id);

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Data retrieved successfully",
        data
    })
})

export const CategoryController = {
    create,
    allCategories,
    viewCategory
}