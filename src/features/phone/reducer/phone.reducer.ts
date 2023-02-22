import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./phone.actions.creator";

const initialState: string = "";

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.updateCreator, (state, { payload }) => state + payload);
});
