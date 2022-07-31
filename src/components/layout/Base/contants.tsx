import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';

import { ROUTING_CONFIG } from 'src/Routers/constants';
import { Box } from '@mui/material';

export const MAPPING_TITLE = {
  [ROUTING_CONFIG.HOME]: {
    content: 'Search',
    link: null,
  },
  [ROUTING_CONFIG.USER_DETAIL]: {
    content: (
      <Box display="flex" alignItems="center">
        <HomeIcon style={{ fontSize: '30px' }} />
      </Box>
    ),
    link: ROUTING_CONFIG.HOME,
  },
  [ROUTING_CONFIG.LOGIN]: {
    content: 'Login',
    link: null,
  },
  [ROUTING_CONFIG.LIKED]: {
    content: 'Favorite',
    link: null,
  },
};
