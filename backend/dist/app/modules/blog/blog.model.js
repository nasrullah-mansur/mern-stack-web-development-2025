import mongoose, { Schema } from "mongoose";
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    subTitle: {
        type: String,
        required: [true, "Sub Title is required"],
    },
    details: {
        type: String,
        required: [true, "Details is required"],
    },
    imageUrl: {
        type: String,
        required: [true, "Image URL is required"],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
}, { timestamps: true });
export const Blog = mongoose.model("Blog", blogSchema);
//# sourceMappingURL=blog.model.js.map