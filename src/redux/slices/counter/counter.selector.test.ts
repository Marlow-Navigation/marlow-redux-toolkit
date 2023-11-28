import { selectCounter } from "@marlow/redux/slices/counter/counter.selector";
import { initState } from "@marlow/redux/slices";

describe("Test counter selector", () => {
  it("should be defined selectCounter", () => {
    expect(selectCounter).toBeDefined();
  });

  it("should return counter state", () => {
    expect(selectCounter(initState)).toEqual(initState.counter);
  });
});
