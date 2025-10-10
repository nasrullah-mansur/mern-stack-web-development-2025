import jwt from "jsonwebtoken";
export const createAccessToken = (payload) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "1h",
    });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, 'my_secret');
};
//# sourceMappingURL=accessToken.js.map