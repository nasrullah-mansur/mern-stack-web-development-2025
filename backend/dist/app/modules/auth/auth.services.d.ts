import type { Request, Response } from "express";
import type { IAuth } from "./auth.interface.js";
import jwt from "jsonwebtoken";
export declare const AuthServices: {
    login: (payload: IAuth, res: Response) => Promise<{
        accessToken: string;
    }>;
    me: (req: Request, res: Response) => Promise<string | jwt.JwtPayload>;
    sendOtp: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=auth.services.d.ts.map