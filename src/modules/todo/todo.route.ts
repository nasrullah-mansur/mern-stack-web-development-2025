import { Router, type Request, type Response } from "express";
import client from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

export const todoRouter = Router();


todoRouter.get('/all-todos', async (req: Request, res: Response) => {
    // pull array data from database;

    const db = await client.db('todo');
    const collection = await db.collection('todo');

    const todos = await collection.find({}).toArray();

    res.json(todos)
})

todoRouter.post("/create-todo", async (req: Request, res: Response) => {
    // set body data to database;
    let data = req.body;
    const db = await client.db('todo');
    const collection = await db.collection('todo');
    await collection.insertOne(data);

    res.json(data);
})

todoRouter.post('/delete-todo/:id', async (req: Request, res: Response) => {
    // Delete todo from database;

    const todoId = req.params?.id;
    const db = await client.db('todo');
    const collection = await db.collection('todo');

    await collection.deleteOne({ _id: new ObjectId(todoId) })

    res.json({
        message: "todo item delete successfully"
    })
})


todoRouter.post('/update-todo/:id', async (req: Request, res: Response) => {
    const todoId = req.params.id;

    const db = await client.db('todo');
    const collection = await db.collection('todo');

    await collection.updateOne(
        { _id: new ObjectId(todoId) },
        {
            $set: req.body,
        }
    );

    res.json({
        message: "item updated successfully"
    })

})

