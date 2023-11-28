import { PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  count: number;
  additionalText?: string;
};

export type ChangeCountAction = PayloadAction<{
  count: number;
  additionalText?: string;
}>;
