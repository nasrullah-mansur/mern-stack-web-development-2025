import type { Request, Response } from "express";
export declare const UserServices: {
    createUser: (req: Request, res: Response) => Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    }, {}, {
        timestamps: true;
        versionKey: "";
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        "": number;
    }>;
};
//# sourceMappingURL=user.services.d.ts.map