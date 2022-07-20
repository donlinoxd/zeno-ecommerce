import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
