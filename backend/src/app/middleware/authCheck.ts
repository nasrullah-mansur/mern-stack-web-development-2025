import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies?.accessToken

    if (!accessToken) {
        res.status(400).json({
            status: "error",
            message: "Token not found"
        })
    }

    const checkToken = jwt.verify(accessToken, "secret")

    console.log(checkToken);


    next();

}