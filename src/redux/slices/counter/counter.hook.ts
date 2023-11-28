import { useAppDispatch, useAppSelector } from "@marlow/hooks/redux";
import {
  clear,
  decrease,
  increase,
} from "@marlow/redux/slices/counter/counter.slice";
import { ChangeCountAction } from "@marlow/redux/slices/counter/counter.type";

export function useCounter() {
  const counter = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  const dispatchIncrease = (payload: ChangeCountAction["payload"]) => {
    dispatch(increase(payload));
  };

  const dispatchDecrease = (payload: ChangeCountAction["payload"]) => {
    dispatch(decrease(payload));
  };

  const dispatchClear = () => {
    dispatch(clear());
  };

  return {
    ...counter,
    dispatchIncrease,
    dispatchDecrease,
    dispatchClear,
  };
}
