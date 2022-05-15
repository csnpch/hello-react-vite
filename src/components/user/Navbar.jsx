import React from 'react';

//- Store
import { useDispatch, useSelector } from 'react-redux';
import { onToggle as overlay_toggle } from './../../store/overlay';
import { onToggle as sidebar_toggle } from './../../store/sidebar';

//- Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {

  const dispath = useDispatch();

  const onSidebar = () => {
    dispath(overlay_toggle());
    dispath(sidebar_toggle());
  }

  return (
    <>
      <div className='z-20'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className='bg-indigo-800'>
            <Toolbar>
              <IconButton
                onClick={onSidebar}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Let's warp
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}


export default Navbar;