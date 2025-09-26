import mongoose from "mongoose";
import type { ICategory } from "./category.interface.js";
export declare const Category: mongoose.Model<ICategory, {}, {}, {}, mongoose.Document<unknown, {}, ICategory, {}, mongoose.DefaultSchemaOptions> & ICategory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<ICategory, mongoose.Model<ICategory, any, any, any, mongoose.Document<unknown, any, ICategory, any, {}> & ICategory & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ICategory, mongoose.Document<unknown, {}, mongoose.FlatRecord<ICategory>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ICategory> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=category.model.d.ts.map