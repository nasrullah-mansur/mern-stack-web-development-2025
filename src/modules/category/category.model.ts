import mongoose from "mongoose";
import type { ICategory } from "./category.interface.js";

const CategorySchema = new mongoose.Schema<ICategory>({
    title: { type: String, required: true },
}, {
    versionKey: ""
})

export const Category = mongoose.model("Category", CategorySchema)

