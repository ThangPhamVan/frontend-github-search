import React, { useMemo } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { Avatar, Grid, Typography } from '@mui/material';
import Highlighter from 'react-highlight-words';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks';
import {
  addUserFavorite,
  removeUserFavorite,
} from 'src/reducers/favoritesSlice';
import { Item } from './styled';
import { IUser } from 'src/types';

interface IUserInfoProps {
  user: IUser;
  highlightName: string;
}
const UserInfo: React.FC<IUserInfoProps> = ({ user, highlightName }) => {
  const { avatar_url, login, followers, following, name } = user;
  const dispatch = useDispatch();
  const { listFavorites } = useAppSelector((state) => state.favoritesReducer);
  const handleAddFavorites = () => {
    dispatch(addUserFavorite(login));
  };
  const handleRemoveFavorites = () => {
    dispatch(removeUserFavorite(login));
  };
  const isFavoriteUser = useMemo(
    () => listFavorites.includes(login),
    [listFavorites]
  );
  const iconStyles = { fill: '#F44336', cursor: 'pointer' };
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
              <Link to={`/users/${login}`}>
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
              </Link>
              {followers !== 0 && (
                <Typography variant="body2">{followers} followers</Typography>
              )}
              {following !== 0 && (
                <Typography variant="body2">{following} following</Typography>
              )}
            </Grid>
          </Grid>
          <Grid item display="flex">
            {isFavoriteUser ? (
              <FavoriteIcon sx={iconStyles} onClick={handleRemoveFavorites} />
            ) : (
              <FavoriteBorderSharpIcon
                style={iconStyles}
                onClick={handleAddFavorites}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Item>
  );
};

export default UserInfo;
