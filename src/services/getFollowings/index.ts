import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET_USER_URL, TOKEN, TOKEN_TYPE } from 'src/Constant';
import { getInfoUsersInParallel } from 'src/Helpers';
import { IUser } from 'src/Types';
interface IGetFollowingsApiParams {
  userName: string;
}
export const getFollowingsApi = createApi({
  reducerPath: 'getFollowings',
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
    getFollowings: build.query<IUser[], IGetFollowingsApiParams>({
      query: ({ userName }) => `${userName}/following`,
      transformResponse: async (response: IUser[]) => {
        const newResponse = await getInfoUsersInParallel(response);
        return newResponse;
      },
    }),
  }),
});

export const { useGetFollowingsQuery } = getFollowingsApi;
