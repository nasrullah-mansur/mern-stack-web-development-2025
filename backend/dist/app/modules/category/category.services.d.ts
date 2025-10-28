import type { Request } from "express";
export declare const CategoryService: {
    create: (req: Request) => Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
    }, {}, {
        timestamps: true;
        versionKey: "";
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        "": number;
    }>;
    update: (req: Request, id: string) => Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
    }, {}, {
        timestamps: true;
        versionKey: "";
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        "": number;
    }) | null>;
};
//# sourceMappingURL=category.services.d.ts.map