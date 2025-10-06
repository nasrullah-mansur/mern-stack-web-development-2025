import type { Request, Response } from "express";
import { User } from "./user.model.js";
import { encryptPassword } from "../../utils/password.js";

const createUser = async (req: Request, res: Response) => {

    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });

    return createdUser;
}


export const UserServices = {
    createUser
}