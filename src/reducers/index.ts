import favoritesSlice from './FavoritesSlice';
import themeSlice from './ThemeSlice';
import usersSlice from './UsersSlice';

export const rootReducer = {
  themeMode: themeSlice,
  usersReducer: usersSlice,
  favoritesReducer: favoritesSlice,
};
