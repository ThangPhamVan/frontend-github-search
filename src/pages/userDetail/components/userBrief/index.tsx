import React from 'react';
import { IUser } from 'src/Types';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
export const UserBriefInformation: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={5}
      mb={3}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90%"
      >
        <Box>
          <Avatar
            src={user.avatar_url}
            sx={{ width: '160px', height: '160px' }}
          />
        </Box>
        {user.login && (
          <Box>
            <Typography mt={1} variant="h4" gutterBottom component="h4">
              {user.login}
            </Typography>
          </Box>
        )}

        {user.bio && (
          <Box>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              textAlign="center"
            >
              {user.bio}
            </Typography>
          </Box>
        )}

        {user.company && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <ApartmentIcon style={{ marginRight: '6px' }} />
            <Typography
              variant="h6"
              gutterBottom
              component="p"
              m={0}
              className="company"
            >
              {user.company}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
