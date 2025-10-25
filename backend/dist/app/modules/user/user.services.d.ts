import type { Request, Response } from "express";
export declare const UserServices: {
    createUser: (req: Request, res: Response) => Promise<{
        user: import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            name: string;
            role: "USER" | "ADMIN";
            otp: string;
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
            role: "USER" | "ADMIN";
            otp: string;
            email: string;
            password: string;
            avatar: string;
            isVerified: boolean;
            isPremium: boolean;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            "": number;
        };
        payment: {
            status: any;
            GatewayPageURL: any;
        };
    }>;
};
//# sourceMappingURL=user.services.d.ts.map