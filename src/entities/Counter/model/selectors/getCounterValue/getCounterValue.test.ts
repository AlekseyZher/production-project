import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateShema } from "app/providers/StoreProvider";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateShema> = {
      counter: { value: 11 },
    }
    expect(getCounterValue(state as StateShema)).toEqual(11);
  });
});