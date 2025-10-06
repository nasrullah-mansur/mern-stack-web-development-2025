import { User } from "../user/user.model.js";
import bcrypt from "bcryptjs";
const login = async (payload, res) => {
    const { email, password } = payload;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist",
            message: "email doesn't match"
        });
    }
    const isPasswordMatch = await bcrypt.compare(password, isUserExist?.password);
    if (!isPasswordMatch) {
        res.status(400).json({
            status: "error",
            // message: "user doesn't exist",
            message: "password doesn't match"
        });
    }
    const loginUser = {
        name: isUserExist?.name,
        email: isUserExist?.email,
        avatar: isUserExist?.avatar,
        isVerified: isUserExist?.isVerified,
        isPremium: isUserExist?.isPremium
    };
    return loginUser;
};
export const AuthServices = {
    login
};
//# sourceMappingURL=auth.services.js.map