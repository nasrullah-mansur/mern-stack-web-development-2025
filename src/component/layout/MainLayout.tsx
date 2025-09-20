import { useAppSelector } from "../../hook/reduxHook";
import AddTodoForm from "../modules/counter/AddForm";
import TodoItem from "../modules/counter/TodoItem";
import TodoList from "../modules/counter/TodoList";

function MainLayout() {

    const todos = useAppSelector(store => store.todo)

    return (
        <div className="grid grid-cols-3 gap-2.5 max-w-screen-md mx-auto bg-amber-100 p-4 mt-8">
            <div className="col-span-1">
                <AddTodoForm />
            </div>

            <div className="col-span-2">
                <TodoList>
                    {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}

                </TodoList>
            </div>
        </div>
    );
}

export default MainLayout;