import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const requestApi = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (build) => ({
    example: build.query<any, void>({
      query: () => 'todos',
    }),
  }),
});

export const { useExampleQuery } = requestApi;
