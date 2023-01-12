import favoritesSlice from './favoritesSlice';
import themeSlice from './themeSlice';
import usersSlice from './usersSlice';

export const rootReducer = {
  themeMode: themeSlice,
  usersReducer: usersSlice,
  favoritesReducer: favoritesSlice,
};
