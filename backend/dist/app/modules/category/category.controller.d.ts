import type { NextFunction, Request, Response } from "express";
export declare const CategoryController: {
    create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    allCategories: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    viewCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    delete_cat: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=category.controller.d.ts.map