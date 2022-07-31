import { IUser } from 'src/Types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GET_USER_URL, TOKEN, TOKEN_TYPE } from 'src/Constant';
import { IDataUsers } from 'src/Reducers/UsersSlice';
interface IGetUserParams {
  userName: string;
}
export const getUserApi = createApi({
  reducerPath: 'getUser',
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

  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUser: build.query<IUser, IGetUserParams>({
      query: ({ userName }) => userName,
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = getUserApi;
