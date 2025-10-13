import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes";
import { AuthServices } from "./auth.services.js";
const login = catchAsync(async (req, res, next) => {
    const data = await AuthServices.login(req.body, res);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged in successfully",
        data
    });
});
const me = catchAsync(async (req, res, next) => {
    const data = await AuthServices.me(req, res);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user is logged in",
        data
    });
});
const logout = catchAsync(async (req, res, next) => {
    res.clearCookie("accessToken");
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user logged out successfully",
    });
});
const sendOtp = catchAsync(async (req, res, next) => {
    const otpSend = await AuthServices.sendOtp(req, res);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "OTP sent successfully",
    });
});
const verifyOtp = catchAsync(async (req, res, next) => {
    const otpSend = await AuthServices.verifyOtp(req, res);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "OTP verified successfully",
    });
});
export const AuthController = {
    login,
    me,
    logout,
    sendOtp,
    verifyOtp
};
//# sourceMappingURL=auth.controller.js.map