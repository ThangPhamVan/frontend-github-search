import React from 'react';
import Loading from 'src/components/common/loading';
import { GridLayoutDefault } from 'src/components/layout';
import { useGetRepositoriesQuery } from 'src/services/getRepositories';
import { IUser } from 'src/types';
import RepositoryInfo from './info';

interface IProps {
  user: IUser;
}
const Repositories: React.FC<IProps> = ({ user }) => {
  const { login } = user;
  const { data: listRepository, isLoading } = useGetRepositoriesQuery({
    userName: login,
  });
  if (isLoading) return <Loading />;
  return (
    <GridLayoutDefault>
      {listRepository?.map((repo) => (
        <RepositoryInfo key={repo.id} repository={repo} />
      ))}
    </GridLayoutDefault>
  );
};

export default Repositories;
