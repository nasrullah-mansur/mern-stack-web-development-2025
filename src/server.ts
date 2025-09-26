
import app from "./app.js"
import mongoose from "mongoose";

const port = 4000

const uri = "mongodb+srv://nasrullah:nasrullah@cluster0.osmy4pt.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

const bootstrap = async function () {
    await mongoose.connect(uri);
    console.log('MongoDB connected');

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap()