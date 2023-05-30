import { configureStore } from "@reduxjs/toolkit";
import { reducer as superheroReducer } from "./superhero/superheroSlice";

export const store = configureStore({
  reducer: { superhero: superheroReducer },
});
