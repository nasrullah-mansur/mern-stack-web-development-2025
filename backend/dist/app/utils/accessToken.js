import jwt from "jsonwebtoken";
export const createAccessToken = (payload) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "1h",
    });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, 'my_secret');
};
export const createShortAccessToken = (payload) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "15m",
    });
};
//# sourceMappingURL=accessToken.js.map