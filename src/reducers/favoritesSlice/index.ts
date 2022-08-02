import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  listFavorites: string[];
}

const initialState: FavoritesState = {
  listFavorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favoritesReducer',
  initialState,
  reducers: {
    addUserFavorite: (state, { payload }: PayloadAction<string>) => {
      state.listFavorites.push(payload);
    },
    removeUserFavorite: (state, { payload }: PayloadAction<string>) => {
      state.listFavorites = state.listFavorites.filter(
        (user) => user !== payload
      );
    },
  },
});

export const { addUserFavorite, removeUserFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
