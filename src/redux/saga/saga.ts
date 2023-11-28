import { all, call } from "@redux-saga/core/effects";
import { counterSaga } from "@marlow/redux/slices/counter/counter.saga";

export default function* rootSaga() {
  yield all([call(counterSaga)]);
}
