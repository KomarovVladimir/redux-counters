import { configureStore } from "@reduxjs/toolkit";

import { reducer as counterReducer } from "../components/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
