import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/Types';

export interface IDataUsers {
  total_count: number;
  items: IUser[] | [];
}
interface IUsersState {
  data: IDataUsers;
  isLoading: boolean;
  isError: boolean;
  isNotFoundUser: boolean;
}

const initialState: IUsersState = {
  data: {
    total_count: 0,
    items: [],
  },
  isLoading: false,
  isError: false,
  isNotFoundUser: false,
};

export const usersSlice = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    getUserResetStatus: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isNotFoundUser = false;
      state.data = {
        total_count: 0,
        items: [],
      };
    },
    getUsersRequest: (state) => {
      state.isLoading = true;
    },
    getUserSuccessful: (state, { payload }: PayloadAction<IDataUsers>) => {
      state.data = payload;
      state.isLoading = false;
      state.isNotFoundUser = !(payload && payload.items.length);
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getUserSuccessful,
  getUsersFailure,
  getUsersRequest,
  getUserResetStatus,
} = usersSlice.actions;

export default usersSlice.reducer;
