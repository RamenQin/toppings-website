import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import theme from '../../Theme.js';

const Slide1 = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography sx={sxTitle}>“I’m going to ..., you want something?” but with Free Food + Free Delivery</Typography>
      </Grid>
      <Grid item>
        <Typography sx={sxDescription}>Order ahead and earn free food when friends join your order</Typography>
        <Typography sx={sxDescription}>--</Typography>
        <Typography sx={sxDescription}>Free, convinient delivery from your favorite restaurants from people who are out and about</Typography>
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

export default Slide1;