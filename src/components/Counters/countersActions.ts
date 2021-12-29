import { createAction } from "@reduxjs/toolkit";

export const addCounter = createAction(
  "counters/add",
  function prepare(text: string) {
    return {
      payload: {},
    };
  }
);
