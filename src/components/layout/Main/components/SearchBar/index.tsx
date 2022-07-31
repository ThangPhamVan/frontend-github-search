import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useCallback, useEffect } from 'react';

import { debounce } from '@mui/material';
import { DEFAULT_PAGINATION } from 'src/Config';
import { useAppDispatch } from 'src/Hooks';
import useSyncParams from 'src/Hooks/useSyncParams';
import { KEY_PAGE_PARAMS } from 'src/Pages/SearchPage/Components/contanst';
import {
  getUserResetStatus,
  getUsersFailure,
  getUsersRequest,
  getUserSuccessful,
} from 'src/Reducers/UsersSlice';
import { useLazyGetUsersQuery } from 'src/Services/getUsers';
import { DEBOUNCE_TIME, USER_NAME_KEY_QUERY } from './constants';

const SearchBar: React.FC = () => {
  const [trigger] = useLazyGetUsersQuery();
  const { getQueryParams, handleSyncParams } = useSyncParams();
  const dispatch = useAppDispatch();
  const userNameParams = getQueryParams(USER_NAME_KEY_QUERY);
  const pageParams = getQueryParams(KEY_PAGE_PARAMS);

  useEffect(() => {
    if (userNameParams && pageParams) {
      searchDelayed({ userName: userNameParams, page: Number(pageParams) });
    }
  }, [userNameParams, pageParams]);

  const searchUsers = async ({
    userName,
    page,
  }: {
    userName: string;
    page: number;
  }) => {
    dispatch(getUsersRequest());
    try {
      const { data: totalUser } = await trigger({ userName, page });
      if (!totalUser) return;
      dispatch(getUserSuccessful(totalUser));
    } catch (error) {
      dispatch(getUsersFailure());
      throw error;
    }
  };
  const searchDelayed = useCallback(debounce(searchUsers, DEBOUNCE_TIME), []);

  const handleSearchUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: userName } = event.target;
    /**
     * need to reset status when searching again
     */
    dispatch(getUserResetStatus());

    handleSyncParams([
      { name: USER_NAME_KEY_QUERY, value: userName },
      { name: KEY_PAGE_PARAMS, value: DEFAULT_PAGINATION.PAGE.toString() },
    ]);
  };

  return (
    <Box>
      <TextField
        fullWidth
        defaultValue={userNameParams}
        className="search-container"
        id="outlined-basic"
        label="Enter GitHub username, i.e. gaearon"
        variant="outlined"
        onChange={handleSearchUsers}
      />
    </Box>
  );
};

export default SearchBar;
