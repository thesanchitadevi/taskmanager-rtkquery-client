import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// 'RootState' is the type of the whole state of the store
export type RootState = ReturnType<typeof store.getState>;
// 'AppDispatch' is the type of the dispatch function
export type AppDispatch = typeof store.dispatch;
