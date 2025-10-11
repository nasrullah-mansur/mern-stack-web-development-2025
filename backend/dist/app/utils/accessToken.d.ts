import jwt from "jsonwebtoken";
export declare const createAccessToken: (payload: any) => string;
export declare const verifyAccessToken: (token: string) => string | jwt.JwtPayload;
export declare const createShortAccessToken: (payload: any) => string;
//# sourceMappingURL=accessToken.d.ts.map