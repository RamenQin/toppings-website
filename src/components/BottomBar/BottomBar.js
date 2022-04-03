import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

import ToppingsIcon from 'images/ToppingsIcon.png';
import FacebookIcon from 'images/FacebookIcon.png';
import InstagramIcon from 'images/InstagramIcon.png';
import LinkedInIcon from 'images/LinkedInIcon.png';

import theme from '../Theme.js';

const BottomBar = () => {
  const classes = useStyles();

  const handleClick = (index) => {
    console.log("boop")
  }

  return (
    <Grid container direction="column" backgroundColor="#050B25" alignItems="center" padding={3}>
      <Grid container justifyContent="center" alignItems="center" spacing='1.5%' paddingBottom={2}>
        <Grid item>
          <img src={ToppingsIcon} className={classes.toppingsIcon}/>
        </Grid>
        <Grid item>
          <Typography sx={sxToppingsName}>Toppings</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" spacing='2%'>
        <Grid item >
          <Button onClick={handleClick(0)} sx={{textTransform: 'none', ':focus': {outline: "none"}}}>
            <Typography sx={sxLink}>Home</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleClick(1)} sx={{textTransform: 'none', ':focus': {outline: "none"}}}>
            <Typography sx={sxLink}>About Us</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleClick(3)} sx={{textTransform: 'none', ':focus': {outline: "none"}}}>
            <a href='https://toppings-dev.github.io/toppings-vendor/' target="_blank">
              <Typography sx={sxLink}>Vendor Portal</Typography>
            </a>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleClick} sx={{textTransform: 'none', ':focus': {outline: "none"}}}>
            <Typography sx={sxLink}>FAQ</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} alignItems="flex-start" spacing={3} padding={3}>
        <Grid item>
          <a href="https://www.facebook.com/ToppingsApp/" target="_blank">
            <img src={FacebookIcon} className={classes.icon}/>
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/toppingsapp/?hl=en" target="_blank">
            <img src={InstagramIcon} className={classes.icon}/>
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/company/toppingsapp" target="_blank">
            <img src={LinkedInIcon} className={classes.icon}/>
          </a>
        </Grid>
      </Grid>

      <Grid container alignItems='center' direction="column" paddingLeft='1%' paddingRight='1%'>
        <Grid item>
          <Typography sx={sxContact}>Contact us at info@toppingsapp.com</Typography>
        </Grid>
        <Grid item alignSelf='flex-end'>
          <Typography sx={sxCopyright}>(C) 2022 Toppings</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const sxToppingsName = {
  fontFamily: 'Raleway-ExtraBold',
  fontSize: 22,
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
}
const sxLink = {
  fontFamily: 'Raleway-Regular',
  fontSize: 18,
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
  },
}
const sxContact = {
  fontFamily: 'Raleway-Regular',
  fontSize: 14,
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 10,
  },
}
const sxCopyright = {
  fontFamily: 'Raleway-Regular',
  fontSize: 11,
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: 8,
  },
}
const useStyles = makeStyles(() => ({
  icon: {
    width: 25,
    height: 25,
    [theme.breakpoints.down('sm')]: {
      width: 14,
      height: 14,
    },
  },
  toppingsIcon: {
    width: 48,
    height: 48,
    [theme.breakpoints.down('sm')]: {
      width: 36,
      height: 36,
    },
  },
  navBarButton: {
    height: '10vh',
    fontSize: 30,
    fontFamily: 'OpenSans-Regular',
  },
}));

export default BottomBar;