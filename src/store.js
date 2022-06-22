import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
const reducer = (state, action) => {
  if (action.type === "UP") {
    return { ...state, value: state.value + action.step };
  }
  return state;
};
const initialState = {
  value: 0
};
const store = createStore(reducer, initialState);

export default store;