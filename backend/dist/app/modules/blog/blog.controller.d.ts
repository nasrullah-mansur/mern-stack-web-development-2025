import type { NextFunction, Request, Response } from "express";
export declare const BlogController: {
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    singleBlog: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    blogs: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=blog.controller.d.ts.map