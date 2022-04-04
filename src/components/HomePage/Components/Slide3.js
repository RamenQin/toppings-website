import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import theme from '../../Theme.js';

const Slide3 = () => {
  return (
    <Grid container>
      <Grid item> 
        <Typography sx={{...sxTitle, fontSize: 32}}>More Friends = More Rewards!</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{...sxDescription, fontSize: 22}}>More friends on your order = more free food for you</Typography>
        <Typography sx={{...sxDescription, fontSize: 22}}>--</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{...sxDescription, fontSize: 22}}>More friends on the platform = more changes for free delivery</Typography>
      </Grid>
    </Grid>
  )
}

const sxTitle = {
  fontFamily: 'Raleway-Bold',
  color: '#0083FF',
  fontSize: 32,
  [theme.breakpoints.down('lg')]: {
    fontSize: 28,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
};
const sxDescription = {
  fontFamily: 'Raleway-Light',
  fontSize: 22,
  [theme.breakpoints.down('lg')]: {
    fontSize: 18,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 10,
  },
};

export default Slide3;