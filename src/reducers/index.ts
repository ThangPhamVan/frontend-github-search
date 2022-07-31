import themeSlice from './themeSlice';
import usersSlice from './usersSlice';

export const rootReducer = {
  themeMode: themeSlice,
  usersReducer: usersSlice,
};
