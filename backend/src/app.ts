import express, { type Application } from "express";
import router from "./app/router/index.js";

const app: Application = express()


// Middleware;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api/v1', router);


export default app;
