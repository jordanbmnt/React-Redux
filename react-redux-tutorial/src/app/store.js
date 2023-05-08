import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice.js";
const counterReducer = counterSlice.reducer;

export default configureStore({
  reducer: { counter: counterReducer },
});