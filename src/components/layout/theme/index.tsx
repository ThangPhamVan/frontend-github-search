import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/hooks';
import { getDesignTokens } from 'src/config';
import EThemeMode from 'src/types/themeMode';

const ThemeContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useAppSelector((state) => state.themeMode);
  const mode = isDarkMode ? EThemeMode.DARK : EThemeMode.LIGHT;
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
