import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
}, {
    versionKey: ""
});
export const Category = mongoose.model("Category", CategorySchema);
//# sourceMappingURL=category.model.js.map