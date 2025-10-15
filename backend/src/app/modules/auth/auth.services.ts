import type { Request, Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./auth.interface.js"
import jwt, { type JwtPayload } from "jsonwebtoken"

import bcrypt from "bcryptjs";
import { createAccessToken, createShortAccessToken, verifyAccessToken } from "../../utils/accessToken.js";
import { generateOTP } from "../../utils/generateOTP.js";
import { encryptPassword } from "../../utils/password.js";

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

const verifyOtp = async (req: Request, res: Response) => {

    const isAccessToken = req.cookies.accessToken;

    if (!isAccessToken) {
        res.status(401).json({
            status: "error",
            message: "Invalid User"
        })
    }

    const isVerified = verifyAccessToken(isAccessToken)

    if (!isVerified) {
        res.status(401).json({
            status: "error",
            message: "Unauthorize user"
        })
    }


    const user = await User.findOne({ email: (isVerified as JwtPayload).email });

    if (!user) {
        res.status(401).json({
            status: "error",
            message: "user doesn't exist",
        })
    }

    if (user?.otp != req.body.otp) {
        res.status(401).json({
            status: "error",
            message: "OTP does not match"
        })
    }

    const tokenPayload = {
        name: user?.name,
        email: user?.email,
        avatar: user?.avatar,
        isVerified: user?.isVerified,
        isPremium: user?.isPremium,
        role: user?.role
    }

    const accessToken = createAccessToken(tokenPayload)


    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false
    })



}

const updatePassword = async (req: Request, res: Response) => {

    const isAccessToken = req.cookies.accessToken;

    if (!isAccessToken) {
        res.status(401).json({
            status: "error",
            message: "Invalid User"
        })
    }

    const isVerified = verifyAccessToken(isAccessToken)

    if (!isVerified) {
        res.status(401).json({
            status: "error",
            message: "Unauthorize user"
        })
    }

    const user = await User.findOne({ email: (isVerified as JwtPayload).email });

    if (!user) {
        res.status(401).json({
            status: "error",
            message: "user doesn't exist",
        })
    }

    await User.findByIdAndUpdate(user?._id, {
        password: await encryptPassword(req.body.password),
        otp: null
    })

    res.clearCookie("accessToken");


}


export const AuthServices = {
    login,
    me,
    sendOtp,
    verifyOtp,
    updatePassword
}