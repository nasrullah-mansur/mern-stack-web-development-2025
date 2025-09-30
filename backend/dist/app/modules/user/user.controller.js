import httpStatus from "http-status-codes";
const getUsers = (req, res, next) => {
    res.status(httpStatus.OK).json({
        status: "success",
        message: "all user retrieved successfully"
    });
};
export const UserController = {
    getUsers
};
//# sourceMappingURL=user.controller.js.map