import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET_USER_URL, TOKEN, TOKEN_TYPE } from 'src/Constant';
import { getInfoUsersInParallel } from 'src/Helpers';
import { IUser } from 'src/Types';
interface IGetFollowersApiParams {
  userName: string;
}
export const getFollowersApi = createApi({
  reducerPath: 'getFollowers',
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
    getFollowers: build.query<IUser[], IGetFollowersApiParams>({
      query: ({ userName }) => `${userName}/followers`,
      transformResponse: async (response: IUser[]) => {
        const newResponse = await getInfoUsersInParallel(response);
        return newResponse;
      },
    }),
  }),
});

export const { useGetFollowersQuery } = getFollowersApi;
