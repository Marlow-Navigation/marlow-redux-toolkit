import { ReduxState } from "@marlow/redux/store";

export const selectCounter = (state: ReduxState) => state.counter;
