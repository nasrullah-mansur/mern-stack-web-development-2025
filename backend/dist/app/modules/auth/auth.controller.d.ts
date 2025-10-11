import type { NextFunction, Request, Response } from "express";
export declare const AuthController: {
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    me: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logout: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    sendOtp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map