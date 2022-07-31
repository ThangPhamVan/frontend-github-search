import { Paper } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  lineHeight: '60px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0px 3px 3px rgba(224, 217, 217, 0.3)',
  },
}));
