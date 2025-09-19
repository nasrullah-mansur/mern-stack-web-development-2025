import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, actions) => {
            // const updateState = {
            //     ...state,
            //     count: state.count + 1
            // }

            // return updateState;

            state.count = state.count + 1;
        },
        decrement: (state, actions) => {
            state.count = state.count - 1;
        }
    },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;