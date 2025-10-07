import jwt from "jsonwebtoken";
export const authCheck = (req, res, next) => {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
        res.status(400).json({
            status: "error",
            message: "Token not found"
        });
    }
    const checkToken = jwt.verify(accessToken, "secret");
    console.log(checkToken);
    next();
};
//# sourceMappingURL=authCheck.js.map