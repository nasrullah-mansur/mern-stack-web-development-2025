import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    _id: mongoose.Types.ObjectId;
} & {
    "": number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: "";
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    versionKey: "";
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isVerified: boolean;
    isPremium: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    "": number;
}>>;
//# sourceMappingURL=user.model.d.ts.map