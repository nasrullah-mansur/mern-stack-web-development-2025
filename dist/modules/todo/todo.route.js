import { Router } from "express";
export const todoRouter = Router();
todoRouter.get('/all-todos', (req, res) => {
    // pull array data from database;
    res.json([
        {
            id: 1,
            todo: "this is dummy todo"
        }
    ]);
});
todoRouter.post("/create-todo", (req, res) => {
    // set body data to database;
    let data = req.body;
    res.json(data);
});
todoRouter.post('/delete-todo/:id', (req, res) => {
    // Delete todo from database;
    const todoId = req.params?.id;
    console.log(todoId);
    res.json({
        message: "todo item delete successfully"
    });
});
todoRouter.get('/test', (req, res) => {
    let params = req.query;
    console.log(params);
    res.json({
        message: "successfully"
    });
});
//# sourceMappingURL=todo.route.js.map