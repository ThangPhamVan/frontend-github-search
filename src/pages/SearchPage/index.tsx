import { Button, CssBaseline } from '@mui/material';
import React from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { toggleMode } from 'src/reducers/themeSlice';

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <CssBaseline />
      <Button variant="outlined" onClick={() => dispatch(toggleMode())}>
        Change Mode
      </Button>
    </>
  );
};

export default SearchPage;
