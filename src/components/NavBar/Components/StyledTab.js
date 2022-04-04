import React from 'react';
import { Tab } from '@material-ui/core';
import { styled } from '@mui/material/styles';


const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontFamily: 'Raleway-Regular',
    fontSize: 22,
    color: '#000000',
    padding: '10px 30px',
    textTransform: 'capitalize',
    marginBottom: -15,
    '&.Mui-selected': {
      color: '#0082FF',
      fontFamily: 'Raleway-Bold'
    },
  })
)

export default StyledTab