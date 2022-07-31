import { CssBaseline, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { EThemeMode } from 'src/types';
import BottomNav from './components/BottomNavigation';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { Root } from './styled';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Root container justifyContent="center">
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        lg={8}
        xl={3.5}
        minHeight="100vh"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        bgcolor={(theme) =>
          theme.palette.mode === EThemeMode.DARK ? 'black' : 'white'
        }
      >
        <CssBaseline>
          <Box paddingX={2.5}>
            <NavBar />
            <SearchBar />
          </Box>
          <Box paddingX={2.5} flex={1}>
            {children}
          </Box>
          <BottomNav />
        </CssBaseline>
      </Grid>
    </Root>
  );
};

export default MainLayout;
