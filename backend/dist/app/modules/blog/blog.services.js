import { Blog } from "./blog.model.js";
const create = async (req) => {
    const blog = await Blog.insertOne(req.body);
    return blog;
};
const update = async (req, id) => {
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    return blog;
};
export const BlogServices = {
    create,
    update
};
//# sourceMappingURL=blog.services.js.map