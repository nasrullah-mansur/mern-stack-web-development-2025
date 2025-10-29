import type { Request } from "express";
export declare const BlogServices: {
    create: (req: Request) => Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        subTitle: string;
        details: string;
        imageUrl: string;
        category: import("mongoose").Types.ObjectId;
    }, {}, {
        timestamps: true;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        subTitle: string;
        details: string;
        imageUrl: string;
        category: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update: (req: Request, id: string) => Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        subTitle: string;
        details: string;
        imageUrl: string;
        category: import("mongoose").Types.ObjectId;
    }, {}, {
        timestamps: true;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        title: string;
        subTitle: string;
        details: string;
        imageUrl: string;
        category: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=blog.services.d.ts.map