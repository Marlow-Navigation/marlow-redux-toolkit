import { delay, takeEvery } from "@redux-saga/core/effects";
import { increase } from "@marlow/redux/slices/counter/counter.slice";
import { ChangeCountAction } from "@marlow/redux/slices/counter/counter.type";

export function* increaseWatcher(action: ChangeCountAction) {
  yield delay(1000);
  console.log("Increase watcher called", action);
}

export function* counterSaga() {
  yield takeEvery(increase.type, increaseWatcher);
}
