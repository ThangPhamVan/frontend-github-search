import { Box } from '@mui/material';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import Loading from 'src/Components/Common/Loading';
import { ROUTING_CONFIG } from 'src/Routers/constants';
import { useGetUserQuery } from 'src/Services/getUserByName';
import TabsComponent from './Components/Tabs';
import { UserBriefInformation } from './Components/UserBrief';

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
