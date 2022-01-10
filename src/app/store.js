import { configureStore } from "@reduxjs/toolkit";
import { getNewsApi } from "../services/getNewsApi";
import { getCryptoApi } from "../services/getCryptoApi";

export const store = configureStore({
  reducer: {
    [getNewsApi.reducerPath]: getNewsApi.reducer,
    [getCryptoApi.reducerPath]: getCryptoApi.reducer,
  },
});
