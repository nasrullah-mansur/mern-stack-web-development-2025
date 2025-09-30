import type { NextFunction, Request, Response } from "express"

import httpStatus from "http-status-codes"

const getUsers = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({
        status: "success",
        message: "all user retrieved successfully"
    })
}


export const UserController = {
    getUsers
}