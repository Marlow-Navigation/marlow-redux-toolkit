import counterReducer, { counterInitialState } from "./counter/counter.slice";
import { ReduxState } from "@marlow/redux/store";

const reducer = {
  counter: counterReducer,
};

export const initState: ReduxState = {
  counter: counterInitialState,
};

export default reducer;
