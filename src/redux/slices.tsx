// slices/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    isChecked: boolean;
}

interface TodoState {
    list: Todo[];
}

const initialState: TodoState = {
    list: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<Todo[]>) => {
            state.list = action.payload;
        },
        toggleCheckbox: (state, action: PayloadAction<number>) => {
            const todo = state.list.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isChecked = !todo.isChecked;
            }
        },
    },
});

export const { setTodos, toggleCheckbox } = todoSlice.actions;
export default todoSlice.reducer;