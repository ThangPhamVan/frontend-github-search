import { Box } from '@mui/material';
import React from 'react';
import IChildren from 'src/Types/React';
import BaseLayout from '../Base';
import BottomNav from '../Main/components/BottomNavigation';

const FavoriteLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <BaseLayout>
      <Box flex={1} paddingX={2.5}>
        {children}
      </Box>
      <BottomNav />
    </BaseLayout>
  );
};

export default FavoriteLayout;
