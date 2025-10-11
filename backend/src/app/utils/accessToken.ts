import jwt from "jsonwebtoken"

export const createAccessToken = (payload: any) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "1h",
    })
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, 'my_secret');
}

export const createShortAccessToken = (payload: any) => {
    return jwt.sign(payload, "my_secret", {
        expiresIn: "15m",
    })
}