import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/types/users';

export interface IDataUsers {
  total_count: number;
  items: IUser[] | [];
}
interface IUsersState {
  data: IDataUsers;
  isLoading: boolean;
  isError: boolean;
}

const initialState: IUsersState = {
  data: {
    total_count: 0,
    items: [],
  },
  isLoading: false,
  isError: false,
};

export const usersSlice = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getUserSuccessful: (state, { payload }: PayloadAction<IDataUsers>) => {
      state.data = payload;
      state.isLoading = false;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
      state.isLoading = true;
    },
  },
});

export const { getUserSuccessful, getUsersFailure, getUsersRequest } =
  usersSlice.actions;

export default usersSlice.reducer;
