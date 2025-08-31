import TodoList from "./components/modules/todo/TodoList";
import { TodoContext } from "./store/todo/todoContext";
import type { TodoStateType } from "./store/todo/todoInterface";

function App() {
    const todos: TodoStateType = [
        {
            id: 1,
            title: "this is title from context",
            status: "Done"
        }
    ]
    return (
        <TodoContext value={todos}>
            <TodoList />
        </TodoContext>
    );
}

export default App;