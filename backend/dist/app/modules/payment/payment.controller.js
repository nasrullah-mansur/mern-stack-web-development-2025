import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync.js";
import { PaymentService } from "./payment.service.js";
const success = catchAsync(async (req, res, next) => {
    const email = req.query.email;
    const updateUserInfo = await PaymentService.success(email);
    res.status(httpStatus.OK).json(updateUserInfo);
});
export const PaymentController = {
    success,
};
//# sourceMappingURL=payment.controller.js.map