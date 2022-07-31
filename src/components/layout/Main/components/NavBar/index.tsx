import { Box, FormControlLabel, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { toggleMode } from 'src/reducers/themeSlice';
import { EThemeMode } from 'src/types';
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
        theme.palette.mode === 'light'
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
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="40px 0 25px 0"
    >
      <Typography variant="h5" sx={{ fontWeight: 'bolder' }}>
        Search
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
