import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/AuthApi";
import { deleteApi } from "./api/DeleteUserApi";
import messageReducer from "./slices/message";

const reducer = combineReducers({
  message: messageReducer,
  [authApi.reducerPath]: authApi.reducer,
  [deleteApi.reducerPath]: deleteApi.reducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(deleteApi.middleware),
});

export default store;
