

import { useReducer } from "react";
import { TODO_CASE } from "../../../store/todo/todoInterface";
import { todoReducer } from "../../../store/todo/todoReducer";
import AddTask from "./AddTask";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const handleAddTodo = (text: string) => {
        dispatch({
            type: TODO_CASE.ADD_TODO,
            payload: {
                title: text
            }
        })
    }

    const handleUpdateTodo = (id: number, title: string) => {
        dispatch({
            type: TODO_CASE.UPDATE_TODO,
            payload: {
                id,
                title,
            }
        })
    }

    const handleDeleteTodo = (id: number) => {
        dispatch({
            type: TODO_CASE.DELETE_TODO,
            payload: {
                id: id
            }
        });
    }

    const handleStatusChangeTodo = (id: number) => {
        dispatch({
            type: TODO_CASE.STATUS_CHANGE,
            payload: {
                id,
            }
        })
    }

    return (
        <div className="container max-w-2xl mx-auto p-2 my-5 ">
            <h1 className="py-5 text-3xl text-center font-bold">To do list</h1>

            <AddTask onAddTask={handleAddTodo} />

            <div className="rounded border border-gray-300 shadow-sm">

                <table className="min-w-full divide-y-2 divide-gray-200 table-fixed">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-2">#</th>
                            <th className="px-3 py-2">Task</th>
                            <th className="px-3 py-2">Status</th>
                            <th className="px-3 py-2 ">Action</th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {todos.map(todo => <TodoItem
                            todo={todo}
                            key={todo.id}
                            onUpdateTodo={handleUpdateTodo}
                            onDeleteTodo={handleDeleteTodo}
                            onStatusChangeTodo={handleStatusChangeTodo}
                        />)}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodoList;