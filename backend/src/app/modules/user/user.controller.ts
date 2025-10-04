import type { NextFunction, Request, Response } from "express"

import httpStatus from "http-status-codes"
import { User } from "./user.model.js"
import { UserServices } from "./user.services.js"
import catchAsync from "../../utils/catchAsync.js"

const getUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const users = await User.find({});

    res.status(httpStatus.OK).json({
        status: "success",
        message: "all user retrieved successfully",
        data: users
    })
})


const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const user = await UserServices.createUser(req, res);

    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user create successfully",
        user: user,
    })
})


export const UserController = {
    getUsers,
    createUser
}