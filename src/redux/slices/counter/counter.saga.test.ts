import {
  counterSaga,
  increaseWatcher,
} from "@marlow/redux/slices/counter/counter.saga";
import { increase } from "@marlow/redux/slices/counter/counter.slice";
import { delay, takeEvery } from "@redux-saga/core/effects";

describe("Test counter sagas", () => {
  describe("Test increaseWatcher", () => {
    it("should be defined increaseWatcher", () => {
      expect(increaseWatcher).toBeDefined();
    });

    it("should log the action with delay", () => {
      const gen = increaseWatcher(increase({ count: 10 }));

      expect(gen.next().value).toEqual(delay(1000));
      expect(gen.next().done).toBe(true);
    });
  });

  describe("Test counterSaga", () => {
    it("should be defined counterSaga", () => {
      expect(counterSaga).toBeDefined();
    });

    it("should watch all the watchers", () => {
      const gen = counterSaga();

      expect(gen.next().value).toEqual(
        takeEvery(increase.type, increaseWatcher)
      );
    });
  });
});
