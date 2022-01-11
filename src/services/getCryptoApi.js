import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { REACT_APP_CRYPTO_API_KEY } = process.env;

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": REACT_APP_CRYPTO_API_KEY,
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
