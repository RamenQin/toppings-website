import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { makeStyles } from '@material-ui/styles';

import NavBar from "components/NavBar/NavBar.js";
import BottomBar from "components/BottomBar/BottomBar.js";

import Slide1 from './Components/Slide1.js';
import Slide2 from './Components/Slide2.js';
import Slide3 from './Components/Slide3.js';

import FoodImage from 'images/FoodImage.png';
import AppScreenshot from 'images/AppScreenshot.png';
import GooglePlayLogo from 'images/GooglePlayLogo.png';
import AppStoreLogo from 'images/AppStoreLogo.png';
import CapitalPartnersImage from 'images/CapitalPartnersImage.png';
import InnovationLabsImage from 'images/InnovationLabsImage.png';
import ProdImage from 'images/ProdImage.png';
import InverseNextIcon from 'images/InverseNextIcon.png';
import MirroredBlueArrow from 'images/MirroredBlueArrow.png';
import CommunityGraphic from 'images/CommunityGraphic.png';
import JefesCircleImage from 'images/JefesCircleImage.png';
import HongKongCircleImage from 'images/HongKongCircleImage.png';
import PlayaBowlsCircleImage from 'images/PlayaBowlsCircleImage.png';
import LeftScreenshot from 'images/LeftScreenshot.png';
import RightScreenshot from 'images/RightScreenshot.png';
import Screenshot from 'images/Screenshot.png';

import theme from '../Theme.js';

import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const classes = useStyles();

  const location = useLocation();

  const [explanationIndex, setExplanationIndex] = useState(1);
  const increaseExplanationIndex = () => {
    if (explanationIndex < 3) setExplanationIndex(explanationIndex+1);
  }
  const decreaseExplanationIndex = () => {
    if (explanationIndex > 1) setExplanationIndex(explanationIndex-1);
  }

  return (
    <Grid container paddingTop={3} direction="column" spacing={3} xs={12} sx={{ marginLeft: 0 }}>
      <NavBar />
      <Toolbar />
      <Grid container>
        <Grid container direction="column"  alignItems="center" justifyContent="space-between" className={classes.foodBackground} >
          <Grid container direction="column" alignItems="center" rowSpacing={6} paddingTop={16} sx={{[theme.breakpoints.down('sm')]: {paddingTop: 12}}} >
            <Grid item >
              <Typography variant='h2' sx={sxTitle}>Free Food with Friends</Typography>
            </Grid>
            <Grid item sx={{[theme.breakpoints.up('md')]: {width: '45%' }, [theme.breakpoints.down('md')]: {width: '80%'}}}>
              <Typography variant='h5' align='center' sx={sxDescription}>Earn free food by picking up orders for your social network. See who’s out at restaurants to get free delivery!</Typography>
            </Grid>
            <Grid container direction="row" spacing='5%' alignItems="center" justifyContent="center" paddingTop={5}>
              <Grid item>
                <a href={"https://toppingsapp.page.link/download"} target="_blank">
                  <img src={GooglePlayLogo} className={classes.googlePlay} />
                </a>
              </Grid>
              <Grid item>
                <a href={"https://toppingsapp.page.link/download"} target="_blank">
                  <img src={AppStoreLogo} className={classes.appStore} />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" padding={4}>
          <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} lg={6} xs={7}>
            <Grid>
              <Typography variant='h4' sx={sxAchievements}>Student-founded at Harvard College</Typography>
              <Typography variant='h4' sx={sxAchievements}>20+ Local Restaurants</Typography>
              <Typography variant='h4' sx={sxAchievements}>$1000+ of free food earned</Typography>
            </Grid>
            <Grid paddingTop='24px'>
              <Typography variant='h4' sx={sxAchievements}>Winner of the HUCP Innovation Fund</Typography>
              <Typography variant='h4' sx={sxAchievements}>Awarded Harvard i-Labs SPARK Grant</Typography>
              <Typography variant='h4' sx={sxAchievements}>MIT/Harvard PROD Cohort</Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" lg={6} xs={5} alignItems="center">
            <Grid item sx={sxCapitalPartners}>
              <img src={CapitalPartnersImage} />
            </Grid>
            <Grid item sx={sxInnovationLab}>
              <img src={InnovationLabsImage}/>
            </Grid>
            <Grid item sx={sxProd}>
              <img src={ProdImage} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item paddingLeft='6%'>
          <Typography sx={{ ...sxTitle, color: '#0083FF' }}>How It Works</Typography>
        </Grid>
        <Grid container backgroundColor='#E7F3FF'>
          <Grid container paddingTop='5%' justifyContent='center' lg={2} xs={2}>
            <Typography sx={sxNumber}>{explanationIndex}</Typography>
          </Grid>
          <Grid container direction="column" paddingTop='6%' lg={3.5} xs={5}>
            {explanationIndex==1 && <Slide1 />}
            {explanationIndex==2 && <Slide2 />}
            {explanationIndex==3 && <Slide3 />}
            <Grid container direction="row" alignItems="center" padding={3.5} spacing='3%'>
              {explanationIndex!=1 && 
                <Grid item>
                  <IconButton onClick={decreaseExplanationIndex} sx={{':focus': {outline: "none"}}}>
                    <img src={MirroredBlueArrow} className={classes.blueArrow}/>
                  </IconButton>
                </Grid>
              }
              <Grid item sx={{width: 'auto'}}>
                <Typography sx={sxBold}>{explanationIndex}/3</Typography>
              </Grid>
              {explanationIndex!=3 && 
                <Grid item>
                  <IconButton onClick={increaseExplanationIndex} sx={{':focus': {outline: "none"}}}>
                    <img src={InverseNextIcon} className={classes.blueArrow}/>
                  </IconButton>
                </Grid>
              }
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center" lg={6.5} xs={5} padding={1}>
            <img src={AppScreenshot} className={classes.appScreenshot} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" padding={'10%'}>
          <img src={CommunityGraphic} style={{ width: '100%', height: '100%' }}/>
        </Grid>
        <Grid container direction="column" alignItems="center" spacing='3%' padding={4}>
          <Grid item>
            <Typography align='center' sx={{ ...sxTitle, color: '#0083FF' }}>Our Local Restaurant Partners</Typography>
          </Grid>
          <Grid item>
            <Typography sx={sxDescription} align='center'>We're committed to supporting local restaurants and small businesses!</Typography>
          </Grid>
          <Grid container justifyContent='center' alignItems='center' spacing='6%' paddingTop={10}>
            <Grid item>
              <img src={JefesCircleImage} className={classes.bigCircle} />
            </Grid>
            <Grid item marginLeft={-1}>
              <img src={HongKongCircleImage} className={classes.smallCircle} />
            </Grid>
            <Grid item>
              <img src={PlayaBowlsCircleImage} className={classes.smallCircle} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container backgroundColor='#E7F3FF' padding='3%' paddingLeft='5%' marginTop='12%'>
          <Grid item xs={4.5} >
            <Typography sx={sxSubTitle}>Free food has never been so easy!</Typography>
          </Grid>
          <Grid container direction='column' xs={7} alignItems='center' marginTop='-12%' xs={7.5}>
            <Grid container direction="row" alignItems="center" justifyContent="center">
              <Grid item sx={sxRightMargin}>
                <img src={LeftScreenshot} className={classes.screenBorder}/>
              </Grid>
              <Grid item sx={{ zIndex: 1 }}>
                <img src={Screenshot} className={classes.biggerScreenBorder}/>
              </Grid>
              <Grid item sx={sxLeftMargin}>
                <img src={RightScreenshot} className={classes.screenBorder}/>
              </Grid>
            </Grid>
            <Grid item padding={2}>
              <Typography sx={sxSubTitle}>Download Now!</Typography>
            </Grid>
            <Grid container direction="row" spacing='8%' alignItems="center" justifyContent="center" >
              <Grid item>
                <a href={"https://toppingsapp.page.link/download"} target="_blank">
                  <img src={GooglePlayLogo} className={classes.googlePlay}/>
                </a>
              </Grid>
              <Grid item>
                <a href={"https://toppingsapp.page.link/download"} target="_blank">
                  <img src={AppStoreLogo} className={classes.appStore} />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BottomBar/>
        </Grid>
      </Grid>
    </Grid>
  );
};

const sxTitle = {
  fontFamily: 'Raleway-Bold',
  fontSize: 48,
  [theme.breakpoints.down('lg')]: {
    fontSize: 42,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 34,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 22,
  },
};
const sxSubTitle = {
  fontFamily: 'Raleway-Bold',
  fontSize: 44,
  color: '#0083FF',
  [theme.breakpoints.down('lg')]: {
    fontSize: 38,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 26,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
}
const sxDescription = {
  fontFamily: 'Raleway-Light',
  fontSize: 28,
  [theme.breakpoints.down('lg')]: {
    fontSize: 24,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
};
const sxAchievements = {
  fontFamily: 'Raleway-Light',
  fontSize: 28,
  [theme.breakpoints.down('lg')]: {
    fontSize: 22,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 15,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 11,
  },
}
const sxNumber = {
  fontFamily: 'Raleway-ExtraBold',
  fontSize: 100,
  color: '#0082FF',
  [theme.breakpoints.down('lg')]: {
    fontSize: 75,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 50,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 30,
  },
};
const sxBold = {
  fontFamily: 'Raleway-ExtraBold',
  fontSize: 32,
  [theme.breakpoints.down('lg')]: {
    fontSize: 28,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
}
const sxRightMargin = {
  marginRight: -5,
  [theme.breakpoints.down('lg')]: {marginRight: -4},
  [theme.breakpoints.down('md')]: {marginRight: -4},
  [theme.breakpoints.down('sm')]: {marginRight: -3},
}
const sxLeftMargin = {
  marginLeft: -5,
  [theme.breakpoints.down('lg')]: {marginLeft: -4},
  [theme.breakpoints.down('md')]: {marginLeft: -4},
  [theme.breakpoints.down('sm')]: {marginLeft: -3},
}
const sxCapitalPartners = {
  width: 500,
  height: 150,
  marginLeft: -3,
  [theme.breakpoints.down('lg')]: {
    width: 400, 
    height: 120,
    marginLeft: -1,
  },
  [theme.breakpoints.down('md')]: {
    width: 280, 
    height: 100,
    marginLeft: -2.5
  },
  [theme.breakpoints.down('sm')]: {
    width: 180, 
    height: 55, 
    marginLeft: -2
  }, 
}
const sxInnovationLab = {
  width: 450,
  height: 140,
  [theme.breakpoints.down('lg')]: {
    width: 340, 
    height: 115, 
  }, 
  [theme.breakpoints.down('md')]: {
    width: 250, 
    height: 80, 
  }, 
  [theme.breakpoints.down('sm')]: {
    width: 165,
    height: 50
  },
}
const sxProd = {
  width: 350,
  height: 150,
  marginLeft: -10,
  marginTop: 2,
  [theme.breakpoints.down('lg')]: {
    width: 250, 
    height: 95,
    marginTop: 1,
  },
  [theme.breakpoints.down('md')]: {
    width: 190, 
    height: 65,
    marginTop: 1,
  },
  [theme.breakpoints.down('sm')]: {
    width: 130, 
    height: 60,
    marginLeft: -3.5,
    marginTop: 1,
  }
}

const useStyles = makeStyles(() => ({
  foodBackground: {
    backgroundImage: `url(${FoodImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    paddingBottom: '10%',
  },
  screenBorder: {
    borderColor: '#000000',
    [theme.breakpoints.only('xl')]: { width: '15rem', borderWidth: 10, borderRadius: 25},
    [theme.breakpoints.only('lg')]: { width: '13rem', borderWidth: 8, borderRadius: 21 },
    [theme.breakpoints.only('md')]: { width: '11rem', borderWidth: 7, borderRadius: 18 },
    [theme.breakpoints.only('sm')]: { width: '8rem', borderWidth: 5, borderRadius: 15 },
    [theme.breakpoints.only('xs')]: { width: '4.75rem', borderWidth: 4, borderRadius: 12 },
  },
  biggerScreenBorder: {
    borderColor: '#000000',
    [theme.breakpoints.only('xl')]: { width: '17rem', borderWidth: 10, borderRadius: 25 },
    [theme.breakpoints.only('lg')]: { width: '15rem', borderWidth: 8,  borderRadius: 21 },
    [theme.breakpoints.only('md')]: { width: '13rem', borderWidth: 7,  borderRadius: 18 },
    [theme.breakpoints.only('sm')]: { width: '9rem', borderWidth: 5,  borderRadius: 15 },
    [theme.breakpoints.only('xs')]: { width: '5.25rem', borderWidth: 4, borderRadius: 12 },

  },
  googlePlay: {
    width: 150,
    height: 80,
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 30,
    }
  },
  appStore: {
    width: 150,
    height: 45,
    [theme.breakpoints.down('sm')]: {
      width: 60,
      height: 20,
    }
  },
  bigCircle: {
    width: 270,
    height: 270,
    [theme.breakpoints.down('lg')]: {
      width: 200,
      height: 200,
    },
    [theme.breakpoints.down('md')]: {
      width: 150,
      height: 150,
    },
    [theme.breakpoints.down('sm')]: {
      width: 100,
      height: 100,
    },
  },
  smallCircle: {
    width: 250,
    height: 250,
    [theme.breakpoints.down('lg')]: {
      width: 185,
      height: 185,
    },
    [theme.breakpoints.down('md')]: {
      width: 135,
      height: 135,
    },
    [theme.breakpoints.down('sm')]: {
      width: 85,
      height: 85,
    },
  },
  blueArrow: {
    width: 48,
    height: 48,
    [theme.breakpoints.down('sm')]: {
      width: 28,
      height: 28,
    }
  },
  appScreenshot: {
    borderRadius: '8.5%',
    width: 300,
    height: 600,
    [theme.breakpoints.down('lg')]: {
      width: 200,
      height: 400,
    },
    [theme.breakpoints.down('md')]: {
      width: 185,
      height: 390,
    },
    [theme.breakpoints.down('sm')]: {
      width: 135,
      height: 260,
    },
  },
}));

export default HomePage;