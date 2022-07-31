import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EThemeMode } from 'src/Types';
import { useAppSelector } from 'src/Hooks';
import { getDesignTokens } from 'src/Config';

const ThemeContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useAppSelector((state) => state.themeMode);
  const mode = isDarkMode ? EThemeMode.DARK : EThemeMode.LIGHT;
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
