import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../redux/modules/counter/counter.slice'


const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});


export default store;

/**
 * blogReducer
 * categoryReducer
 * commentReducer
 */