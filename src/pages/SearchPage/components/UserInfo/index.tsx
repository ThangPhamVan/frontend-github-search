import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import Highlighter from 'react-highlight-words';
import { IUser } from 'src/types/users';
import { Item } from './styled';

interface IUserInfoProps {
  user: IUser;
  highlightName: string;
}
const UserInfo: React.FC<IUserInfoProps> = ({ user, highlightName }) => {
  const { avatar_url, login, followers, following, name } = user;
  return (
    <Item>
      <Grid
        container
        spacing={2}
        sx={{ p: 1 }}
        display="flex"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            sx={{ width: '64px', height: '64px' }}
            variant="rounded"
            alt={login}
            src={avatar_url}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container>
            <Grid item xs>
              <Typography
                variant="body2"
                component="p"
                sx={{ wordBreak: 'break-all' }}
              >
                <Highlighter
                  searchWords={[highlightName]}
                  textToHighlight={login || name}
                  highlightTag={({ children }) => (
                    <strong style={{ fontSize: '14px' }} key={children}>
                      {children}
                    </strong>
                  )}
                />
              </Typography>
              {followers !== 0 && (
                <Typography variant="body2">{followers} followers</Typography>
              )}
              {following !== 0 && (
                <Typography variant="body2">{following} following</Typography>
              )}
            </Grid>
          </Grid>
          <Grid item display="flex">
            <FavoriteIcon sx={{ fill: '#F44336' }} />
          </Grid>
        </Grid>
      </Grid>
    </Item>
  );
};

export default UserInfo;
