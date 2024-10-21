// src/features/todos/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface TodoObject {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: { todos: TodoObject[] } = {
  todos: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    // Remove a todo by id
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

// Export the actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer to use in the store
export default todoSlice.reducer;
