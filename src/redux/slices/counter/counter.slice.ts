import { createSlice } from "@reduxjs/toolkit";
import {
  CounterState,
  ChangeCountAction,
} from "@marlow/redux/slices/counter/counter.type";

export const counterInitialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increase: {
      reducer: (state: CounterState, action: ChangeCountAction) => {
        state.count += action.payload.count;
      },
      prepare: (payload: ChangeCountAction["payload"]) => {
        const { additionalText = "text", count } = payload;

        return {
          payload: {
            count,
            additionalText,
          },
        };
      },
    },
    decrease: (state: CounterState, action: ChangeCountAction) => {
      state.count -= action.payload.count;
    },
    clear: () => {
      return counterInitialState;
    },
  },
});

export const { increase, decrease, clear } = counterSlice.actions;

export default counterSlice.reducer;
