import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import IChildren from 'src/types/react';

const GridLayoutDefault: React.FC<IChildren> = ({ children }) => {
  return (
    <Grid container mb={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: '20px 20px',
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridLayoutDefault;
