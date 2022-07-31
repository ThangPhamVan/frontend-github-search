import { Box, FormControlLabel, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import React, { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAppDispatch from 'src/Hooks/useAppDispatch';
import useAppSelector from 'src/Hooks/useAppSelector';
import { toggleMode } from 'src/Reducers/ThemeSlice';
import { ROUTES } from 'src/Routers/config';
import { EThemeMode } from 'src/Types';
import { MAPPING_TITLE } from '../../contants';
const SwitchCustom = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === EThemeMode.DARK ? '#39393D' : '#E9E9EA',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === EThemeMode.LIGHT
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === EThemeMode.LIGHT ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === EThemeMode.LIGHT ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const NavBar: React.FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.themeMode);
  const dispatch = useAppDispatch();
  const handleSwitch = () => {
    dispatch(toggleMode());
  };
  const { pathname } = useLocation();
  const titlePage = useMemo(() => {
    const result = ROUTES.find((config) => matchPath(pathname, config));
    if (!result) return;
    const { link, content } = MAPPING_TITLE[result.path];
    return link ? <Link to={link}>{content}</Link> : content;
  }, [pathname]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="40px 0 25px 0"
    >
      <Typography variant="h5" sx={{ fontWeight: 'bolder' }}>
        {titlePage}
      </Typography>
      <Tooltip title="Toggle dark mode" arrow>
        <FormControlLabel
          sx={{ m: 0 }}
          control={<SwitchCustom />}
          checked={isDarkMode}
          onChange={handleSwitch}
          label=""
        />
      </Tooltip>
    </Box>
  );
};

export default NavBar;
