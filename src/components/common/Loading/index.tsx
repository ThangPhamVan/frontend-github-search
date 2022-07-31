import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 10 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
