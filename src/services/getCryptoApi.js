import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "c89ebf3faemshc4bdeeb9e28dc23p1eb486jsn3afabe9e2c91",
};

const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const getCryptoApi = createApi({
  reducerPath: "getCryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = getCryptoApi;
