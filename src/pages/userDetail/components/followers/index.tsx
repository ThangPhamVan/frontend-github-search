import React from 'react';
import Loading from 'src/components/common/loading';
import { GridLayoutDefault } from 'src/components/layout';
import UserInfo from 'src/pages/searchPage/components/userInfo';
import { useGetFollowersQuery } from 'src/services/getFollowers';
import { IUser } from 'src/types';

interface IProps {
  user: IUser;
}
const Followers: React.FC<IProps> = ({ user }) => {
  const { login } = user;
  const { data: listFollowers, isLoading } = useGetFollowersQuery({
    userName: login,
  });
  if (isLoading) return <Loading />;

  return (
    <GridLayoutDefault>
      {listFollowers?.map((user) => (
        <UserInfo key={user.id} user={user} highlightName={login} />
      ))}
    </GridLayoutDefault>
  );
};

export default Followers;
