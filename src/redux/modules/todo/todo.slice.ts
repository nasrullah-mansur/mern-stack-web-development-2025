import { createSlice } from "@reduxjs/toolkit";

type ITask = {
    id: number;
    task: string;
}

const initialState: ITask[] = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: state.length + 1,
                task: action.payload
            });
        },

        deleteTask: (state, action) => {
            const findIndexOfTodo = state.findIndex(todo => todo.id == action.payload)
            state.splice(findIndexOfTodo, 1);
        },

        updateTask: (state, action) => {
            const findIndexOfTodo = state.findIndex(todo => todo.id == action.payload.id)
            state[findIndexOfTodo] = action.payload;
            // state[findIndexOfTodo].task = action.payload.task;
        }
    }
});




export default todoSlice.reducer;

export const { addTask, deleteTask, updateTask } = todoSlice.actions;