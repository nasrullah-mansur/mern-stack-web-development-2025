import express, {} from "express";
import router from "./app/router/index.js";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
// Middleware;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1', router);
// Global Error Handler;
app.use(globalErrorHandler);
export default app;
//# sourceMappingURL=app.js.map