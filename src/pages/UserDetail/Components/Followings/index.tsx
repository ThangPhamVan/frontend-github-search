import React from 'react';
import Loading from 'src/Components/Common/Loading';
import { GridLayoutDefault } from 'src/Components/Layout';
import UserInfo from 'src/Pages/SearchPage/Components/UserInfo';
import { useGetFollowingsQuery } from 'src/Services/getFollowings';
import { IUser } from 'src/Types';

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
