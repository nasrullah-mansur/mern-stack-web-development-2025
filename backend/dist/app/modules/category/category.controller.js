import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes";
import { CategoryService } from "./category.services.js";
import { Category } from "./category.model.js";
const create = catchAsync(async (req, res, next) => {
    const data = await CategoryService.create(req);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Category added successfully",
        data
    });
});
const update = catchAsync(async (req, res, next) => {
    const data = await CategoryService.update(req, req.params.id);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Category updated successfully",
        data
    });
});
const delete_cat = catchAsync(async (req, res, next) => {
    const data = await Category.findByIdAndDelete(req.params.id);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Category removed successfully",
        data
    });
});
const allCategories = catchAsync(async (req, res, next) => {
    const data = await Category.find({});
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in successfully",
        data
    });
});
const viewCategory = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const data = await Category.findById(id);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Data retrieved successfully",
        data
    });
});
export const CategoryController = {
    create,
    allCategories,
    viewCategory,
    update,
    delete_cat
};
//# sourceMappingURL=category.controller.js.map