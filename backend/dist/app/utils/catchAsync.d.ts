import type { NextFunction, Request, Response } from "express";
type Fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const catchAsync: (fn: Fn) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default catchAsync;
//# sourceMappingURL=catchAsync.d.ts.map