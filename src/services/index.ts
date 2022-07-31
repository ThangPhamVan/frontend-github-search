import { getUsersApi } from './getUsers';

export const serviceReducers = {
  [getUsersApi.reducerPath]: getUsersApi.reducer,
};

export const servicesMiddleware = [getUsersApi.middleware];
