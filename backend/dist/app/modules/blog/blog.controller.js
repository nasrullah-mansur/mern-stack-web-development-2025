import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes";
import { BlogServices } from "./blog.services.js";
import { Blog } from "./blog.model.js";
const create = catchAsync(async (req, res, next) => {
    const data = await BlogServices.create(req);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Blog added successfully",
        data
    });
});
const blogs = catchAsync(async (req, res, next) => {
    const data = await Blog.find({}).populate('category');
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Blog added successfully",
        data
    });
});
const update = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const data = await BlogServices.update(req, id);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Blog updated successfully",
        data
    });
});
const singleBlog = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const data = await Blog.findById(id).populate('category');
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Blog retrieved successfully",
        data
    });
});
export const BlogController = {
    create,
    update,
    singleBlog,
    blogs
};
//# sourceMappingURL=blog.controller.js.map