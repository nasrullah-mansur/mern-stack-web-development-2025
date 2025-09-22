import express, { Router } from "express";
import { router } from "./route/index.js";
const app = express();
app.use(express.json());
app.use("/api", router);
export default app;
//# sourceMappingURL=app.js.map