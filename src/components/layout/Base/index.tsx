import { Box, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import EThemeMode from 'src/types/themeMode';
import NavBar from './components/navBar';
import { Root } from './styled';

interface IBaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
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
          </Box>
          {children}
        </CssBaseline>
      </Grid>
    </Root>
  );
};

export default BaseLayout;
