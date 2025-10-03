import type { NextFunction, Request, Response } from "express";

export const validationCheck = (scheme: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            await scheme.parseAsync(req.body);
            next();

        } catch (error: any) {

            const newArr = JSON.parse(error).map((errorItem: any) => {
                return {
                    path: errorItem.path[0],
                    message: errorItem.message
                }
            })

            console.error(newArr)

            next({
                type: "ZodError",
                error: newArr
            })
        }

    }
}