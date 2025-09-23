import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://nasrullah:nasrullah@cluster0.osmy4pt.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default client;