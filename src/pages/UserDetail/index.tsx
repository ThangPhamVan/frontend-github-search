import { Box } from '@mui/material';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import Loading from 'src/components/common/loading';
import { ROUTING_CONFIG } from 'src/routers/constants';
import { useGetUserQuery } from 'src/services/getUserByName';
import TabsComponent from './components/tabs';
import { UserBriefInformation } from './components/userBrief';

interface IPramsPage {
  userName: string;
}
const UserDetail = () => {
  const { userName } = useParams() as IPramsPage;
  const history = useHistory();

  if (!userName) {
    history.push(ROUTING_CONFIG.HOME);
  }

  const { data: userInfo, isLoading } = useGetUserQuery({ userName });

  if (isLoading) return <Loading />;

  if (!userInfo) {
    return null;
  }
  return (
    <Box flex={1} alignItems="center" display="flex" flexDirection="column">
      <UserBriefInformation user={userInfo} />
      <TabsComponent userInfo={userInfo} />
    </Box>
  );
};

export default UserDetail;
