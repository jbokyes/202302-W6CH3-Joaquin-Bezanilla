import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  phoneReducer: { phone },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
