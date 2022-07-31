import { Box } from '@mui/material';
import React from 'react';
import Loading from 'src/Components/Common/Loading';
import { GridLayoutDefault } from 'src/Components/Layout';
import { useGetRepositoriesQuery } from 'src/Services/getRepositories';
import { IUser } from 'src/Types';
import RepositoryInfo from './Info';

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
