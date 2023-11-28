import reducer, {
  clear,
  counterInitialState,
  decrease,
  increase,
} from "@marlow/redux/slices/counter/counter.slice";

describe("Test Counter Slice", () => {
  it("should test initial state", () => {
    expect(counterInitialState).toEqual({
      count: 0,
    });
  });

  it("should test reducer to return initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(counterInitialState);
  });

  describe("Test increase action", () => {
    const payload = { count: 2 };
    const result = { ...payload, additionalText: "text" };

    it("should test increase with default payload", () => {
      expect(increase(payload).payload).toEqual(result);
    });

    it("should test increase payload", () => {
      const payload2 = { count: 2, additionalText: "text2" };

      expect(increase(payload2).payload).toEqual(payload2);
    });

    it("should handle reducer increase", () => {
      expect(reducer(counterInitialState, increase(payload))).toEqual(result);
    });
  });

  describe("Test decrease action", () => {
    const payload = { count: 2 };

    it("should test decrease payload", () => {
      expect(decrease(payload).payload).toEqual(payload);
    });

    it("should handle reducer decrease", () => {
      expect(reducer(counterInitialState, decrease(payload))).toEqual({
        count: -2,
      });
    });
  });

  describe("Test clear action", () => {
    it("should test clear payload", () => {
      expect(clear().payload).not.toBeDefined();
    });

    it("should handle reducer clear", () => {
      expect(reducer({ count: 10 }, clear())).toEqual({
        count: 0,
      });
    });
  });
});
