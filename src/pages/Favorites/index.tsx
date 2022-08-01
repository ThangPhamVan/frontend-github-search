import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Loading from 'src/components/common/loading';
import { GridLayoutDefault } from 'src/components/layout';
import { useAppSelector } from 'src/hooks';
import { useLazyGetUserQuery } from 'src/services/getUserByName';
import { IUser } from 'src/types';
import UserInfo from '../searchPage/components/userInfo';
import NotFoundFavorites from './components/notFoundFavorites';

const FavoritesPage = () => {
  const { listFavorites } = useAppSelector((state) => state.favoritesReducer);
  const [trigger] = useLazyGetUserQuery();
  const [isFetching, setIsFetching] = useState(false);
  const [resultFavorites, setResultFavorites] = useState<IUser[] | []>([]);
  const getListFavorites = async () => {
    setIsFetching(true);
    try {
      const promises = listFavorites.map((userName) => trigger({ userName }));
      const response = await Promise.all(promises);

      const transformResponse = response.map(
        (result) => result.data
      ) as IUser[];

      setResultFavorites(transformResponse);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`🚀 ~ file: ~ line 16 ~ getListFavorites ~ error`, {
        error,
      });
    } finally {
      setIsFetching(false);
    }
  };

  const isEmptyFavorites = !(listFavorites && listFavorites.length);
  useEffect(() => {
    getListFavorites();
  }, [listFavorites]);

  if (isFetching) return <Loading />;

  return (
    <Box flex={1} height="100%">
      {isEmptyFavorites ? (
        <NotFoundFavorites />
      ) : (
        <GridLayoutDefault>
          {resultFavorites.map((user) => (
            <UserInfo user={user} key={1} highlightName="name" />
          ))}
        </GridLayoutDefault>
      )}
    </Box>
  );
};

export default FavoritesPage;
