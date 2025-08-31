

import { useState } from "react";
import AddTask from "./AddTask";
import TodoItem from "./TodoItem";
import type { TodoStateType } from "../../../store/todo/todoInterface";

function TodoList() {




    const [todos, setTodos] = useState<TodoStateType>([]);

    const handleAddTodo = (text: string) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                title: text,
                status: "Doing"
            }
        ]);
    }

    const handleUpdateTodo = (id: number, title: string) => {
        console.log(id, title);
        const updateTodos: TodoStateType = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title
                }
            }
            return todo;
        })

        setTodos(updateTodos)
    }

    const handleDeleteTodo = (id: number) => {
        const updateTodos = todos.filter(todo => todo.id != id);
        setTodos(updateTodos)
    }

    const handleStatusChangeTodo = (id: number) => {

        const updateTodos: TodoStateType = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: todo.status === "Doing" ? "Done" : "Doing",
                }
            }
            return todo;

        });

        setTodos(updateTodos);


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