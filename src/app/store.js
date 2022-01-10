import { configureStore } from "@reduxjs/toolkit";
import { getNewsApi } from "../services/getNewsApi";

export const store = configureStore({
  reducer: {
    [getNewsApi.reducerPath]: getNewsApi.reducer,
  },
});
