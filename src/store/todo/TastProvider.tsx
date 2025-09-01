import { useReducer } from "react";
import App from "../../App";
import { TodoContext, TodoDispatchContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

const TaskProvider = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext value={todos}>
      <TodoDispatchContext value={dispatch}>
        <App />
      </TodoDispatchContext>
    </TodoContext>
  )

}

export default TaskProvider;