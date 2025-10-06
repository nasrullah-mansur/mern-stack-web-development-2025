import type { Response } from "express";
import type { IAuth } from "./auth.interface.js";
export declare const AuthServices: {
    login: (payload: IAuth, res: Response) => Promise<{
        name: string | undefined;
        email: string | undefined;
        avatar: string | undefined;
        isVerified: boolean | undefined;
        isPremium: boolean | undefined;
    }>;
};
//# sourceMappingURL=auth.services.d.ts.map