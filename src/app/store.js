import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import photosReducer from "./features/photos/photosSlice";
import todosReducer from "./features/todos/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    photos: photosReducer,
  },
});
export default store;
