import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import theme from '../../Theme.js';

const Slide2 = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography sx={{...sxTitle, fontSize: 32}}>Earn free food without any extra steps</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{...sxDescription, fontSize: 22}}>Choose drop-off spots so you never have to  never have to go out of your way to get free food.</Typography>
        <Typography sx={{...sxDescription, fontSize: 22}}>--</Typography>
        <Typography sx={{...sxDescription, fontSize: 22}}>Safely meet other students at predesignated spots</Typography>
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

export default Slide2;