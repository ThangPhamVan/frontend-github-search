import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';
import { DEFAULT_PAGINATION } from 'src/Config';
import { SEARCH_USER_URL, TOKEN, TOKEN_TYPE } from 'src/Constant';
import { getInfoUsersInParallel } from 'src/Helpers';
import { IDataUsers } from 'src/Reducers/UsersSlice';
interface IGetUsersParams {
  userName: string;
  page?: number;
  per_page?: number;
}
export const getUsersApi = createApi({
  reducerPath: 'getUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: SEARCH_USER_URL,
    prepareHeaders: (headers) => {
      // If we have a token set in state, let's assume that we should be passing it.
      if (TOKEN) {
        headers.set('authorization', `${TOKEN_TYPE} ${TOKEN}`);
      }

      return headers;
    },
  }),

  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IDataUsers, IGetUsersParams>({
      query: ({
        userName,
        page = DEFAULT_PAGINATION.PAGE,
        per_page = DEFAULT_PAGINATION.PER_PAGE,
      }) => {
        const parsed = queryString.stringify(
          {
            q: `${userName}+in:username`,
            type: 'Users',
            page,
            per_page,
          },
          {
            encode: false,
          }
        );
        return `users?${parsed}`;
      },
      providesTags: ['Users'],
      transformResponse: async (response: IDataUsers) => {
        const newResponse = await getInfoUsersInParallel(response.items);
        return {
          ...response,
          items: newResponse,
        };
      },
    }),
  }),
});

export const { useLazyGetUsersQuery } = getUsersApi;
