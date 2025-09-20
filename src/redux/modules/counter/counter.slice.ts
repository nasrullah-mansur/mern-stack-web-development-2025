import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, actions) => {

            state.count = state.count + actions.payload;
        },
        decrement: (state, actions) => {
            state.count = state.count - actions.payload;
        }
    },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;