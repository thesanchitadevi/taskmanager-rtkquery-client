import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  // reducer: {
  //   [baseApi.reducerPath]: baseApi.reducer,
  // },

  // for slice reducers
  reducer: {
    counter: counterReducer,
    todoTasks: taskReducer,
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(baseApi.middleware),
});

// 'RootState' is the type of the whole state of the store
export type RootState = ReturnType<typeof store.getState>;
// 'AppDispatch' is the type of the dispatch function
export type AppDispatch = typeof store.dispatch;
