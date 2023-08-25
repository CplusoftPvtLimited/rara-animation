import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// Create custom styles for the header
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          RARA
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
