import mongoose from "mongoose";
export declare const Blog: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subTitle: string;
    details: string;
    imageUrl: string;
    category: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subTitle: string;
    details: string;
    imageUrl: string;
    category: mongoose.Types.ObjectId;
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
    category: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subTitle: string;
    details: string;
    imageUrl: string;
    category: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subTitle: string;
    details: string;
    imageUrl: string;
    category: mongoose.Types.ObjectId;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    subTitle: string;
    details: string;
    imageUrl: string;
    category: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=blog.model.d.ts.map