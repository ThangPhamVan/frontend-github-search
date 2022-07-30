import { createSlice } from '@reduxjs/toolkit';

interface ThemeModeState {
  isDarkMode: boolean;
}

const initialState: ThemeModeState = {
  isDarkMode: false,
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
