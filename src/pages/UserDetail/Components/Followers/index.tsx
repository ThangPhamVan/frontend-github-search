import React from 'react';
import Loading from 'src/Components/Common/Loading';
import { GridLayoutDefault } from 'src/Components/Layout';
import UserInfo from 'src/Pages/SearchPage/Components/UserInfo';
import { useGetFollowersQuery } from 'src/Services/getFollowers';
import { IUser } from 'src/Types';

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
