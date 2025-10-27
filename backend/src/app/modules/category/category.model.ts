
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minlength: [3, "Name must be at least 3 characters long"],
        },

    },
    { timestamps: true, versionKey: "" }
);


export const Category = mongoose.model("Category", categorySchema);