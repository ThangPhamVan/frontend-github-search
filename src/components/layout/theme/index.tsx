import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from 'src/app/hooks';
import { EThemeMode } from 'src/types';
import { getDesignTokens } from 'src/config/themeColor';

const ThemeContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useAppSelector((state) => state.themeMode);
  const mode = isDarkMode ? EThemeMode.DARK : EThemeMode.LIGHT;
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
