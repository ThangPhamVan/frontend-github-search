import { Box, Grid } from '@mui/material';
import React from 'react';
import { GridLayoutDefault } from 'src/components/layout';
import { USER_NAME_KEY_QUERY } from 'src/components/layout/main/components/searchBar/constants';
import useSyncParams from 'src/hooks/useSyncParams';
import { IDataUsers } from 'src/reducers/UsersSlice';
import UserInfo from '../userInfo';
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
