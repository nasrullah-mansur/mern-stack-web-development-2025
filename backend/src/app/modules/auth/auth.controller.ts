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

const me = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const data = await AuthServices.me(req, res);

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user is logged in",
        data
    })
})

const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    res.clearCookie("accessToken");

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged out successfully",
    })
})


const sendOtp = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const otpSend = await AuthServices.sendOtp(req, res)

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "OTP sent successfully",
    })
})


const verifyOtp = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const otpSend = await AuthServices.verifyOtp(req, res)

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "OTP verified successfully",
    })
})


const updatePassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const otpSend = await AuthServices.updatePassword(req, res)

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "Password updated successfully",
    })
})



export const AuthController = {
    login,
    me,
    logout,
    sendOtp,
    verifyOtp,
    updatePassword
} 