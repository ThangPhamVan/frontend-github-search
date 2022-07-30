import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/app/hooks';
import { EThemeMode } from 'src/types';

const ThemeContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useAppSelector((state) => state.themeMode);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? EThemeMode.DARK : EThemeMode.LIGHT,
    },
  });
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
