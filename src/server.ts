import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app.js"
import client from "./config/mongodb.js";

const port = 4000


const bootstrap = async function () {
    const connect = await client.connect();
    console.log('MongoDB connected');

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap()