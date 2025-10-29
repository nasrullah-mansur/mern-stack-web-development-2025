import type { Request } from "express"
import { Blog } from "./blog.model.js"

const create = async (req: Request) => {
    const blog = await Blog.insertOne(req.body);

    return blog;
}

const update = async (req: Request, id: string) => {
    const blog = await Blog.findByIdAndUpdate(id, req.body);

    return blog;
}


export const BlogServices = {
    create,
    update
}