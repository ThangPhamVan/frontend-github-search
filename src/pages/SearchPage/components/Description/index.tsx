import React from 'react';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Description() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40%',
      }}
    >
      <Box className="icon-item" sx={{ color: 'icons.primary' }}>
        <GitHubIcon style={{ fill: 'icons.primary', fontSize: '8em' }} />
      </Box>
      <Box className="logo-item" sx={{ color: 'icons.primary' }}>
        <Typography variant="h3" gutterBottom component="p" fontWeight="bolder">
          GitHub
        </Typography>
      </Box>
      <Typography
        component="p"
        textAlign="center"
        fontSize="14px"
        width="60%"
        lineHeight="20px"
        sx={{
          color: 'text.github',
        }}
      >
        Enter GitHub username and search users matching the input like Google
        Search, click avatars to view more details, including repositories,
        followers and following.
      </Typography>
    </Box>
  );
}

export default Description;
