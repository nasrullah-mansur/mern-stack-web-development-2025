import type { Request, Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./auth.interface.js"
import jwt from "jsonwebtoken"

import bcrypt from "bcryptjs";
import { createAccessToken, createShortAccessToken, verifyAccessToken } from "../../utils/accessToken.js";
import { generateOTP } from "../../utils/generateOTP.js";

const login = async (payload: IAuth, res: Response) => {
    const { email, password } = payload;

    const isUserExist = await User.findOne({ email })

    if (!isUserExist) {
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist",
            message: "email doesn't match"
        })
    }

    const isPasswordMatch = await bcrypt.compare(password, (isUserExist?.password as string));

    if (!isPasswordMatch) {
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist",
            message: "password doesn't match"
        })
    }


    const tokenPayload = {
        name: isUserExist?.name,
        email: isUserExist?.email,
        avatar: isUserExist?.avatar,
        isVerified: isUserExist?.isVerified,
        isPremium: isUserExist?.isPremium
    }

    const accessToken = createAccessToken(tokenPayload)


    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false
    })


    return {
        accessToken,
    };


}

const me = async (req: Request, res: Response) => {
    const isAccessToken = req.cookies.accessToken;

    if (!isAccessToken) {
        res.status(401).json({
            status: "error",
            message: "user is not logged in"
        })
    }

    const isVerified = verifyAccessToken(isAccessToken)

    return isVerified;

}


const sendOtp = async (req: Request, res: Response) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.status(401).json({
            status: "error",
            message: "user doesn't exist"
        })
    }

    // Send Email to this user;

    const updateUser = await User.updateOne(
        { email: user?.email },
        { $set: { otp: generateOTP() } },
    )


    const accessToken = createShortAccessToken({
        email: user?.email,
    })


    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false
    })



}


export const AuthServices = {
    login,
    me,
    sendOtp
}