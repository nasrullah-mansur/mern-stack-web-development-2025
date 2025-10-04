import type { NextFunction, Request, Response } from "express";

export const validationCheck = (scheme: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        req.body = await scheme.parseAsync(req.body);
        next()
    }
}