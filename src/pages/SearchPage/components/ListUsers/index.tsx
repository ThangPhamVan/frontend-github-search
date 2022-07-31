import { Box, Grid } from '@mui/material';
import React from 'react';
import { GridLayoutDefault } from 'src/Components/Layout';
import { USER_NAME_KEY_QUERY } from 'src/Components/Layout/Main/components/SearchBar/constants';
import useSyncParams from 'src/Hooks/useSyncParams';
import { IDataUsers } from 'src/Reducers/UsersSlice';
import UserInfo from '../UserInfo';
interface IListUsersProps {
  userData: IDataUsers;
}
const ListUsers: React.FC<IListUsersProps> = ({ userData }) => {
  const { items } = userData;
  const { getQueryParams } = useSyncParams();
  const foundUserName = getQueryParams(USER_NAME_KEY_QUERY);

  return (
    <GridLayoutDefault>
      {items.map((user) => (
        <UserInfo
          user={user}
          key={user.id}
          highlightName={foundUserName ?? ''}
        />
      ))}
    </GridLayoutDefault>
  );
};

export default ListUsers;
