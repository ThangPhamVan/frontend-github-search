import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useCallback, useEffect } from 'react';

import { debounce } from '@mui/material';
import { useAppDispatch } from 'src/app/hooks';
import useSyncParams from 'src/hooks/useSyncParams';
import { KEY_PAGE_PARAMS } from 'src/pages/SearchPage/components/contanst';
import {
  getUsersFailure,
  getUsersRequest,
  getUserSuccessful,
} from 'src/reducers/usersSlice';
import { useLazyGetUsersQuery } from 'src/services/getUsers';
import { IUser } from 'src/types/users';
import { DEBOUNCE_TIME, USER_NAME_KEY_QUERY } from './constants';
import { DEFAULT_PAGINATION } from 'src/config';

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
      const { items, total_count } = totalUser;

      /**
       * Note: Search API doesn't have total followers and following for each user, so I need to call another API to get the information.
       */
      const usersData = await Promise.all(
        items.map(
          async ({ url }) =>
            (await (
              await fetch(url, {
                method: 'GET',
                headers: {
                  Authorization: `${process.env.REACT_APP_TOKEN_KEY} ${process.env.REACT_APP_TOKEN}`,
                },
              })
            ).json()) as IUser
        )
      );

      dispatch(
        getUserSuccessful({
          total_count,
          items: usersData,
        })
      );
    } catch (error) {
      dispatch(getUsersFailure());
      throw error;
    }
  };
  const searchDelayed = useCallback(debounce(searchUsers, DEBOUNCE_TIME), []);

  const handleSearchUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: userName } = event.target;

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
