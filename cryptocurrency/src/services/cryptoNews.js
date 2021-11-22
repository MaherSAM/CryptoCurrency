import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '1596a811bamsh4fe09aafd2a62f2p154bebjsn58ba04c5278e'
  };
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = ( url ) => ( { url, headers: cryptoNewApiHeaders } )

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptosNews: builder.query({
          query: ( { newsCategory, count } ) =>
              createRequest( `/news/search?q=${ newsCategory }&safeSearch=Off&textFormat=Raw&freshness=Day&count=${ count }` ),
      }),
     
    }),
  });

  export const { useGetCryptosNewsQuery, } = cryptoNewsApi;
