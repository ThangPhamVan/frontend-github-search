import { Box, Typography } from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';

const NotFoundFavorites = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      flexDirection="column"
    >
      <PeopleIcon style={{ fill: 'icons.primary', fontSize: '30px' }} />
      <Typography>Once you like people, you&rsquo;ll see them here.</Typography>
    </Box>
  );
};

export default NotFoundFavorites;
