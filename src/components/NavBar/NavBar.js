import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles'

import ToppingsLogo from 'images/ToppingsLogoBlue.png';

import StyledTabs from './Components/StyledTabs.js';
import StyledTab from './Components/StyledTab.js';

import theme from '../Theme.js';

import { Link, useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

const NavBar = (props) => {
  const classes = useStyles();

  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState(false);
  const handleSelectTab = (event, tab) => {
    console.log("boop", tab)
    setSelectedTab(tab);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectItem = (tab) => {
    setSelectedTab(tab);
    handleClose();
    //doesn't work for now
  };

  useEffect(() => {
    const paths = ['/', '/aboutus', '/vendorportal', '/faqs'];
    const currentPathValue = paths.indexOf(location.pathname);
    if (selectedTab !== currentPathValue) {
      if (currentPathValue !== -1) {
        setSelectedTab(currentPathValue);
      } else {
        setSelectedTab(false);
      }
    }
  }, [location, selectedTab]);

  return (
    <AppBar elevation={0} sx={{ boxShadow: 1 }}>
      <div style={{ width: '100%' }}>
        <Toolbar style={{ backgroundColor: '#FFFFFF' }}>
          <Grid container justifyContent='flex-start' xl={1.5} lg={1.75} md={2.5} sm={3.25} xs={4}>
            <Button disableRipple component={Link} to={'/'} sx={{justifyContent: 'flex-start'}}>
              <img src={ToppingsLogo}/>
            </Button>
          </Grid>
          <Grid container justifyContent="flex-end" sx={sxSmallScreen}>
            <IconButton onClick={handleClick} sx={{':focus': {outline: "none"}}}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleSelectItem(0)}>
                <Typography sx={sxMenuText}>The App</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleSelectItem(1)}>
                <Typography sx={sxMenuText}>About Us</Typography>
              </MenuItem>
              <MenuItem onClick={() => {window.location.replace('https://toppings-dev.github.io/toppings-vendor/')}}>
                <Typography sx={sxMenuText}>Vendor Portal</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleSelectItem(0)}>
                <Typography sx={sxMenuText}>FAQ</Typography>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid container justifyContent='flex-end' sx={sxBigScreen}>
            <StyledTabs 
              value={selectedTab} 
              onChange={handleSelectTab}
              >
              <StyledTab 
                value={0}
                label="The App"
                disableRipple
                className={classes.navBarButton}
                component={Link}
                to={'/'}
              />
              <StyledTab 
                value={1}
                label="About Us"
                disableRipple
                className={classes.navBarButton}
                component={Link}
                to={'/aboutus'}
              />
              <StyledTab 
                value={2}
                label="Vendor Portal"
                disableRipple
                className={classes.navBarButton}
                onClick={() => {window.location.replace('https://toppings-dev.github.io/toppings-vendor/')}}
                sx={{ ':focus': {outline: "none"} }}
              />
              <StyledTab 
                value={3}
                label="FAQ"
                disableRipple
                className={classes.navBarButton}
                component={Link}
                to={'/faq'}
              />
            </StyledTabs>
          </Grid>
        </Toolbar>
      </div>
    </AppBar>
  );
};

const sxBigScreen = {
  [ theme.breakpoints.down('lg') ]: {
    display: 'none',
  }
};
const sxSmallScreen = {
  [ theme.breakpoints.up('lg') ]: {
    display: 'none',
  }
};
const sxMenuText = {
  fontFamily: 'Raleway-Regular',
  fontSize: 14,
};


const useStyles = makeStyles(() => ({
  navBarButton: {
    height: '10vh',
    fontSize: 30,
    fontFamily: 'OpenSans-Regular',
  },
}));

export default NavBar;