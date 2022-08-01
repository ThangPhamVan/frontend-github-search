import { Box, Pagination, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useAppSelector } from 'src/hooks';
import Loading from 'src/components/common/loading';
import { numberWithCommas } from 'src/helpers';
import useSyncParams from 'src/hooks/useSyncParams';
import { KEY_PAGE_PARAMS } from './components/constants';

import Description from './components/description';
import ListUsers from './components/listUsers';
import NotFound from './components/notFoundUser';
import DEFAULT_PAGINATION from 'src/config/pagination';
import { USER_NAME_KEY_QUERY } from 'src/components/layout/main/components/searchBar/constants';

const SearchPage: React.FC = () => {
  const {
    data: usersData,
    isLoading,
    isNotFoundUser,
  } = useAppSelector((state) => state.usersReducer);
  const { handleSyncParams, getQueryParams } = useSyncParams();

  const pageParam = getQueryParams(KEY_PAGE_PARAMS);
  const userNameParams = getQueryParams(USER_NAME_KEY_QUERY);

  const memoizedPage = useMemo(() => {
    const currentPage = pageParam ?? DEFAULT_PAGINATION.PAGE;
    return Number(currentPage);
  }, [pageParam]);

  const { total_count, items } = usersData;

  const totalPage = Math.ceil(total_count / DEFAULT_PAGINATION.PER_PAGE);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    handleSyncParams([{ name: KEY_PAGE_PARAMS, value: page.toString() }]);
  };

  const isEmptyUser = useMemo(() => !(items && items.length > 0), [items]);

  if (isLoading) return <Loading />;

  if (!userNameParams)
    return (
      <Box marginY={15}>
        <Description />
      </Box>
    );

  if (isNotFoundUser) return <NotFound userName={userNameParams} />;

  return (
    <Box>
      {!isEmptyUser && (
        <>
          <Typography marginY={2}>
            {numberWithCommas(total_count)} Github users found
          </Typography>
          <ListUsers userData={usersData} />
        </>
      )}
      {totalPage > 0 && (
        <Box justifyContent="center" display="flex">
          <Pagination
            className="pagination-customize"
            count={totalPage}
            size="medium"
            page={memoizedPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={handleChangePage}
            sx={{ marginBottom: '30px' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchPage;
