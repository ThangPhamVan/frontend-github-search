import { Box, Pagination, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useAppSelector } from 'src/app/hooks';
import Loading from 'src/components/common/Loading';
import { USER_NAME_KEY_QUERY } from 'src/components/layout/Main/components/SearchBar/constants';
import { DEFAULT_PAGINATION } from 'src/config';
import { numberWithCommas } from 'src/helpers';
import useSyncParams from 'src/hooks/useSyncParams';
import { KEY_PAGE_PARAMS } from './components/contanst';

import Description from './components/Description';
import ListUsers from './components/ListUsers';

const SearchPage: React.FC = () => {
  const { data: userData, isLoading } = useAppSelector(
    (state) => state.usersReducer
  );
  const { handleSyncParams, getQueryParams } = useSyncParams();

  const pageParam = getQueryParams(KEY_PAGE_PARAMS);
  const userNameParams = getQueryParams(USER_NAME_KEY_QUERY);

  const memoizedPage = useMemo(() => {
    const currentPage = pageParam ?? DEFAULT_PAGINATION.PAGE;
    return Number(currentPage);
  }, [pageParam]);

  const { total_count, items } = userData;
  const isEmptyUsers = !(items && items.length);
  const totalPage = Math.ceil(total_count / DEFAULT_PAGINATION.PER_PAGE);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    handleSyncParams([{ name: KEY_PAGE_PARAMS, value: page.toString() }]);
  };

  if (isLoading) return <Loading />;

  if (!userNameParams)
    return (
      <Box marginY={15}>
        <Description />
      </Box>
    );
  return (
    <Box>
      {isEmptyUsers ? (
        <Description />
      ) : (
        <>
          <Typography marginY={2}>
            {numberWithCommas(total_count)} Github users found
          </Typography>
          <ListUsers userData={userData} />
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
