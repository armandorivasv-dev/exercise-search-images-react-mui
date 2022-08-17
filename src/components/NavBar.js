import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import  logo  from '../assets/logo-oscuro-armandoweb-agency.png'
import { Link } from '@mui/material';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Link href="https://armandoweb.agency/" >
            <Box component="img" sx={{ width: 120, display: { xs: 'flex', md: 'flex' } }} src={logo} />
          </Link>         
        </Toolbar>        
      </AppBar>
    </Box>
  );
}
