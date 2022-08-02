import { Box } from '@mui/material';
import React from 'react';
import IChildren from 'src/types/React';
import BaseLayout from '../base';
import BottomNav from '../main/components/bottomNavigation';

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
