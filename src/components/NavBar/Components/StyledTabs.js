import React from 'react';
import { Tabs } from '@material-ui/core';
import { styled } from '@mui/material/styles';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '8px',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    backgroundColor: '#0082FF',
    width: '55%',
    justifyContent: 'center',
    borderRadius: 3,
  }
});

export default StyledTabs;
