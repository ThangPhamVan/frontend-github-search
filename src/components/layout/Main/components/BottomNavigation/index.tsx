import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useHistory } from 'react-router';
import { ROUTING_CONFIG } from 'src/Routers/constants';

const BottomNav: React.FC = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const handleChangeNavigation = (
    _event: React.ChangeEvent<unknown>,
    tab: number
  ) => {
    setValue(tab);
    const currentPage = tab === 0 ? ROUTING_CONFIG.HOME : ROUTING_CONFIG.LIKED;
    history.push(currentPage);
  };
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChangeNavigation}
      sx={{ boxShadow: '0px 0 10px rgb(224 217 217 / 80%)' }}
    >
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
