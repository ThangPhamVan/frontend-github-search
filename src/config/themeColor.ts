import { EThemeMode } from 'src/types';

export const getDesignTokens = (mode: EThemeMode) => ({
  palette: {
    mode,
    info: {
      light: 'rgba(0, 0, 0, 0.5)',
      main: 'rgba(0, 0, 0, 0.5)',
      dark: '#ffff',
    },
    typography: {
      fontFamily: 'Jost',
    },
    ...(mode === 'light'
      ? {
          background: {
            default: '#fff',
          },
        }
      : {
          background: {
            default: '#000',
          },
        }),
    icons: {
      ...(mode === 'light'
        ? {
            primary: 'rgba(0, 0, 0, 0.5)',
          }
        : {
            primary: '#fff',
          }),
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: '#000',
            github: 'rgba(0, 0, 0, 0.5)',
          }
        : {
            primary: '#fff',
            github: '#fff',
          }),
    },
  },
});
