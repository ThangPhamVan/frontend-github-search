import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/Reducers';
import { serviceReducers, servicesMiddleware } from 'src/Services';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { BLACK_LIST } from 'src/Config';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: BLACK_LIST,
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
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(servicesMiddleware);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
