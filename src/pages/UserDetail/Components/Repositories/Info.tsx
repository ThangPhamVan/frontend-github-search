import { Box, Typography } from '@mui/material';
import React from 'react';
import { nFormatter } from 'src/Helpers';
import { Item } from 'src/Pages/SearchPage/Components/UserInfo/styled';
import { IRepository } from 'src/Types/Repository';

interface IUserInfoProps {
  repository: IRepository;
}
const RepositoryInfo: React.FC<IUserInfoProps> = ({ repository }) => {
  const { forks_count, stargazers_count, name } = repository;
  return (
    <Item sx={{ padding: '10px 20px' }}>
      <Typography variant="subtitle1" gutterBottom fontWeight="bolder">
        {name}
      </Typography>
      {stargazers_count > 0 && (
        <Typography>{nFormatter(stargazers_count)} stars</Typography>
      )}
      {forks_count > 0 && (
        <Typography>{nFormatter(forks_count)} forks</Typography>
      )}
    </Item>
  );
};

export default RepositoryInfo;
