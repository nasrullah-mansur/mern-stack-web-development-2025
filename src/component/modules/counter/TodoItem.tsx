import { useState } from "react";
import { useAppDispatch } from "../../../hook/reduxHook";
import { deleteTask, updateTask } from "../../../redux/modules/todo/todo.slice";

function TodoItem({ todo }: { todo: { id: number; task: string } }) {
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(todo.task)

    const dispatch = useAppDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteTask(id))
    }

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(updateTask({
            id: todo.id,
            task: text
        }))

        setIsEdit(false)
    }

    return (
        <li className="bg-white p-2 flex mb-3">
            <span>#{todo.id}</span>
            {isEdit
                ? <form onSubmit={handleUpdate} className="border"><input value={text} onChange={(e) => setText(e.target.value)} /> <button>Save</button></form>
                : <span>{todo.task}</span>}
            <div className="ml-auto flex gap-2">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => handleDelete(todo.id)} className="text-red-500">Delete</button>
            </div>
        </li>
    );
}

export default TodoItem;