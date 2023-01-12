import React from 'react';
import Loading from 'src/components/common/loading';
import { GridLayoutDefault } from 'src/components/layout';
import UserInfo from 'src/pages/searchPage/components/userInfo';
import { useGetFollowingsQuery } from 'src/services/getFollowings';
import { IUser } from 'src/types';

interface IProps {
  user: IUser;
}
const Followings: React.FC<IProps> = ({ user }) => {
  const { login } = user;
  const { data: listFollowings, isLoading } = useGetFollowingsQuery({
    userName: login,
  });

  if (isLoading) return <Loading />;

  return (
    <GridLayoutDefault>
      {listFollowings?.map((user) => (
        <UserInfo key={user.id} user={user} highlightName={login} />
      ))}
    </GridLayoutDefault>
  );
};

export default Followings;
