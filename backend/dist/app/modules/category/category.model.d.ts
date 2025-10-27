import mongoose from "mongoose";
export declare const Category: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    title: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    versionKey: "";
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    "": number;
}>>;
//# sourceMappingURL=category.model.d.ts.map