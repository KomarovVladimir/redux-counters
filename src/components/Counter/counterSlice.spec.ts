import {
  reducer,
  CounterState,
  //  increment,
  //  decrement
} from "./counterSlice";

describe("counter reducer", () => {
  const initialState: CounterState = {
    counters: {},
  };
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  // it("should handle increment", () => {
  //   const actual = reducer(initialState, increment());
  //   expect(actual.value).toEqual(2);
  // });

  // it("should handle decrement", () => {
  //   const actual = reducer(initialState, decrement());
  //   expect(actual.value).toEqual(1);
  // });
});
