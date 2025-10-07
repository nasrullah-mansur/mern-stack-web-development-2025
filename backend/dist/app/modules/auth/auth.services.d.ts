import type { Response } from "express";
import type { IAuth } from "./auth.interface.js";
export declare const AuthServices: {
    login: (payload: IAuth, res: Response) => Promise<{
        accessToken: string;
    }>;
};
//# sourceMappingURL=auth.services.d.ts.map