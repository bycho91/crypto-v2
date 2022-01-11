import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { REACT_APP_CRYPTO_API_KEY } = process.env;

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": REACT_APP_CRYPTO_API_KEY,
};

const createRequest = (url) => ({ url: url, headers: cryptoNewsHeaders });

export const getNewsApi = createApi({
  reducerPath: "getNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = getNewsApi;
