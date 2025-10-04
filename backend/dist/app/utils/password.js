import bcrypt from "bcryptjs";
export const encryptPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};
//# sourceMappingURL=password.js.map