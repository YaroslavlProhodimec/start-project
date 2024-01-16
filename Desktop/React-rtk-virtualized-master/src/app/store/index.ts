import { postsApi } from "@entities/post";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
  devTools: true,
});
