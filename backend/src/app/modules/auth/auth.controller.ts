import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes"
import { AuthServices } from "./auth.services.js";

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const data = await AuthServices.login(req.body, res);

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in successfully",
        data
    })
})



export const AuthController = {
    login
} 