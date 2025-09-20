import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../redux/modules/counter/counter.slice'
import todoSlice from "../redux/modules/todo/todo.slice";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
    }
});


export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch