import { getFollowersApi } from './getFollowers';
import { getFollowingsApi } from './getFollowings';
import { getRepositoriesApi } from './getRepositories';
import { getUserApi } from './getUserByName';
import { getUsersApi } from './getUsers';

export const serviceReducers = {
  [getUsersApi.reducerPath]: getUsersApi.reducer,
  [getUserApi.reducerPath]: getUserApi.reducer,
  [getRepositoriesApi.reducerPath]: getRepositoriesApi.reducer,
  [getFollowersApi.reducerPath]: getFollowersApi.reducer,
  [getFollowingsApi.reducerPath]: getFollowingsApi.reducer,
};

export const servicesMiddleware = [
  getUsersApi.middleware,
  getUserApi.middleware,
  getRepositoriesApi.middleware,
  getFollowersApi.middleware,
  getFollowingsApi.middleware,
];
