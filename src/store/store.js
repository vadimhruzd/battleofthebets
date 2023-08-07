import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/AuthApi";

const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
