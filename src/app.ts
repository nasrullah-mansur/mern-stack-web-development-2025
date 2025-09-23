
import express, { Router, type Application } from "express";
import { router } from "./route/index.js";

const app: Application = express()

app.use(express.json())


app.use("/api", router);


export default app;