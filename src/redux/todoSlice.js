import { createSLice } from "@reduxjs/toolkit";
export const todoSlice = createSLice({
  name: "todos",
  initialState: [
    { id: 1, title: "This is the first todo item", completed: false },
    { id: 2, title: "This is the second todo item", completed: false },
    { id: 3, title: "This is the third todo item", completed: false },
    { id: 4, title: "This is the forth todo item", completed: true },
    { id: 5, title: "This is the fifth todo item", completed: false },
  ],
  reducer: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };

      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id === action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.action;

export default todoSlice.reducer;
