import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

function NotFound({ userName }: { userName: string }) {
  return (
    <Box textAlign="center" mt="30%" lineHeight="30px">
      <Box>
        <SearchIcon />
      </Box>
      No search result found for <br />
      <Box sx={{ fontWeight: 'bold' }}>{userName}</Box>
    </Box>
  );
}

export default NotFound;
