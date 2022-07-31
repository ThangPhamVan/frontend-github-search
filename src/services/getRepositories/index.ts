import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET_USER_URL, TOKEN, TOKEN_TYPE } from 'src/Constant';
import { IRepository } from 'src/Types/Repository';
interface IGetRepositoriesApiParams {
  userName: string;
}
export const getRepositoriesApi = createApi({
  reducerPath: 'getRepositories',
  baseQuery: fetchBaseQuery({
    baseUrl: GET_USER_URL,
    prepareHeaders: (headers) => {
      // If we have a token set in state, let's assume that we should be passing it.
      if (TOKEN) {
        headers.set('authorization', `${TOKEN_TYPE} ${TOKEN}`);
      }

      return headers;
    },
  }),

  endpoints: (build) => ({
    getRepositories: build.query<IRepository[], IGetRepositoriesApiParams>({
      query: ({ userName }) => `${userName}/repos`,
    }),
  }),
});

export const { useGetRepositoriesQuery } = getRepositoriesApi;
