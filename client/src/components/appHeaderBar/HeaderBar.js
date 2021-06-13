import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './HeaderBar.css';

export const HeaderBar = () => {
  return (
    <div>
      {/* className={useStyles.root}> */}
      <AppBar position='static' className='top-app-bar'>
        <Toolbar>
          <IconButton
            edge='start'
            //className={useStyles.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant='h6' className={useStyles.title}>
            News
          </Typography> */}
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
