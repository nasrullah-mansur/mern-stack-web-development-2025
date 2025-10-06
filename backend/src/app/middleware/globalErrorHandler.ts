import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes"

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    const statusCode = httpStatus.INTERNAL_SERVER_ERROR;

    const responseError = {
        status: "error",
        message: "",
        errors: err
    }


    // Jod Error Check;
    if (err.name == "ZodError") {
        const updateErrors = JSON.parse(err.message).map((error: any) => {
            return {
                path: error.path[0],
                message: error.message
            }
        })

        responseError.message = err.name;
        responseError.errors = updateErrors;

    }



    res.status(statusCode).json({ ...responseError, errors: err })


}