import { requestApi } from './example';

export const serviceReducers = {
  [requestApi.reducerPath]: requestApi.reducer,
};

export const servicesMiddleware = [requestApi.middleware];
