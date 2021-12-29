import { createSlice, current } from "@reduxjs/toolkit";
export interface CounterState {
  counters: { [key: string]: number };
}

const initialState: CounterState = {
  counters: {},
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
    addCounter: (state, { payload }: any) => {
      state.counters[payload] = Object.values(state.counters).reduce(
        (summ, value) => (summ += value),
        0
      );
    },
    remove: (state, { payload }: any) => {
      delete state.counters[payload];
    },
  },
});

export const { addCounter, increment, decrement, remove } =
  counterSlice.actions;

export const reducer = counterSlice.reducer;
