import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/reducers';
import { serviceReducers, servicesMiddleware } from 'src/services';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};
const mergedReducer = combineReducers(
  Object.assign(rootReducer, serviceReducers)
);

const persistedReducer = persistReducer<ReturnType<typeof mergedReducer>>(
  persistConfig,
  mergedReducer
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(servicesMiddleware);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
