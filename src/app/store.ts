import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "../customer/slice";

export const store = configureStore({
  reducer: {
    [customerSlice.reducerPath]: customerSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(customerSlice.middleware)
  },
  devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
