import { Box, Grid } from '@mui/material';
import React from 'react';
import { USER_NAME_KEY_QUERY } from 'src/components/layout/Main/components/SearchBar/constants';
import useSyncParams from 'src/hooks/useSyncParams';
import { IDataUsers } from 'src/reducers/usersSlice';
import UserInfo from '../UserInfo';
interface IListUsersProps {
  userData: IDataUsers;
}
const ListUsers: React.FC<IListUsersProps> = ({ userData }) => {
  const { items } = userData;
  const { getQueryParams } = useSyncParams();
  const foundUserName = getQueryParams(USER_NAME_KEY_QUERY);

  return (
    <Grid container mb={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: '30px 20px',
          }}
        >
          {items.map((user) => (
            <UserInfo
              user={user}
              key={user.id}
              highlightName={foundUserName ?? ''}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ListUsers;
