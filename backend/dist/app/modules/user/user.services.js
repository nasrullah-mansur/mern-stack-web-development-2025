import { User } from "./user.model.js";
import httpStatus from "http-status-codes";
import { encryptPassword } from "../../../utils/password.js";
const createUser = async (req, res) => {
    const user = await User.find({ email: req.body.email });
    if (user.length > 0) {
        res.status(httpStatus.UNAUTHORIZED).json({
            status: "error",
            message: "User already exist",
        });
    }
    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });
    return createdUser;
};
export const UserServices = {
    createUser
};
//# sourceMappingURL=user.services.js.map