import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNav: React.FC = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      sx={{ boxShadow: '0px 0 10px rgb(224 217 217 / 80%)' }}
    >
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
