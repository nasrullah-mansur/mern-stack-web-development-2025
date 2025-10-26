import type { NextFunction, Request, Response } from "express"
import httpStatus from "http-status-codes"
import catchAsync from "../../utils/catchAsync.js"
import { PaymentService } from "./payment.service.js";

const success = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const email = req.query.email;
    const updateUserInfo = await PaymentService.success(email as string);
    res.status(httpStatus.OK).json(updateUserInfo)
})

export const PaymentController = {
    success,
}