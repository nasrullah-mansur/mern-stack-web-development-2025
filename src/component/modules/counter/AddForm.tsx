import { useState } from "react";
import { useAppDispatch } from "../../../hook/reduxHook";
import { addTask } from "../../../redux/modules/todo/todo.slice";

function AddTodoForm() {

    const [text, setText] = useState("");

    const dispatch = useAppDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTask(text));
        setText("");
    }

    return (
        <form onSubmit={submitHandler} className="flex">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="bg-white border" />
            <button className="w-20 bg-white">Add</button>
        </form>
    );
}

export default AddTodoForm;