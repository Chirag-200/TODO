// store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices'; // Adjust the path as necessary

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;