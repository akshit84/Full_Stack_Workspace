import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  editTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    setEditTodo: (state, action) => {
      state.editTodo = action.payload;
    },
    clearEditTodo: (state) => {
      state.editTodo = null;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setEditTodo, clearEditTodo } = todoSlice.actions;

export default todoSlice.reducer;
