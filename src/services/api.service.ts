import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../types/product.type';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL_ENDPOINT_MOCK_SHOP,
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<any, any>({
      query: (product: any) => ({
        url: '/api',
        params: {
          query: ``,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = api;
