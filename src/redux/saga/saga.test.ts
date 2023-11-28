import rootSaga from "@marlow/redux/saga";
import { all, call } from "@redux-saga/core/effects";
import { counterSaga } from "@marlow/redux/slices/counter/counter.saga";

describe("Test root saga", () => {
  it("should be defined", () => {
    expect(rootSaga).toBeDefined();
  });

  it("should watch all sagas", () => {
    const gen = rootSaga();
    expect(gen.next().value).toEqual(all([call(counterSaga)]));
  });
});
