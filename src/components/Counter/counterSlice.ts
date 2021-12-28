import { createSlice } from "@reduxjs/toolkit";
export interface CounterState {
  counters: { [key: string]: number };
}

const initialState: CounterState = {
  counters: { "1": 0 },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }: any) => {
      state.counters[payload] += 1;
    },
    decrement: (state, { payload }: any) => {
      state.counters[payload] -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const reducer = counterSlice.reducer;
