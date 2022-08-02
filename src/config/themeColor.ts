import EThemeMode from 'src/types/themeMode';

const getDesignTokens = (mode: EThemeMode) => ({
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
    ...(mode === EThemeMode.LIGHT
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
      ...(mode === EThemeMode.LIGHT
        ? {
            primary: 'rgba(0, 0, 0, 0.5)',
          }
        : {
            primary: '#fff',
          }),
    },
    text: {
      ...(mode === EThemeMode.LIGHT
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

export default getDesignTokens;
