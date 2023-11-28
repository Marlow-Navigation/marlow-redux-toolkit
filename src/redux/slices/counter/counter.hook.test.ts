import { useCounter } from "@marlow/redux/slices/counter/counter.hook";
import { renderReduxHook, act } from "@marlow/utils/test-utils";

describe("Test Counter Hooks", () => {
  it("should be defined useCounter", () => {
    expect(useCounter).toBeDefined();
  });

  it("should render useCounter", () => {
    const { result } = renderReduxHook(useCounter);

    const increaseDispatcher = result.current.dispatchIncrease;
    expect(typeof increaseDispatcher).toBe("function");

    const mockedIncreaseDispatcher = jest.fn(increaseDispatcher);

    const increasePayload = { count: 2 };
    act(() => mockedIncreaseDispatcher(increasePayload));
    expect(mockedIncreaseDispatcher).toHaveBeenNthCalledWith(
      1,
      increasePayload
    );

    const decreaseDispatcher = result.current.dispatchDecrease;
    expect(typeof decreaseDispatcher).toBe("function");

    const mockedDecreaseDispatcher = jest.fn(decreaseDispatcher);

    const decreasePayload = { count: 2 };
    act(() => mockedDecreaseDispatcher(decreasePayload));
    expect(mockedDecreaseDispatcher).toHaveBeenNthCalledWith(
      1,
      decreasePayload
    );

    const clearDispatcher = result.current.dispatchDecrease;
    expect(typeof clearDispatcher).toBe("function");

    const mockedClearDispatcher = jest.fn(clearDispatcher);

    act(() => mockedClearDispatcher());
    expect(mockedClearDispatcher).toHaveBeenCalledTimes(1);
  });
});
