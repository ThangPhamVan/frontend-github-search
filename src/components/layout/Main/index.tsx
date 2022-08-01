import { Box } from '@mui/system';
import React from 'react';
import BaseLayout from '../base';
import BottomNav from './components/bottomNavigation';
import SearchBar from './components/searchBar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BaseLayout>
      <Box paddingX={2.5}>
        <SearchBar />
      </Box>
      <Box paddingX={2.5} flex={1}>
        {children}
      </Box>
      <BottomNav />
    </BaseLayout>
  );
};

export default MainLayout;
