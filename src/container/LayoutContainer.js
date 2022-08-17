import React from 'react';
import Box from '@mui/material/Box';
import { NavBar } from '../components/NavBar';
import { ImageListContainer } from './ImageListContainer';
import { HeaderContainer } from './HeaderContainer';
import { FooterContainer } from './FooterContainer';

export const LayoutContainer = () => {
  return (
    <Box section="main">
          <Box section="navbar"><NavBar /></Box>
          <Box section="header" ><HeaderContainer /></Box> 
          <Box section="image-list" ><ImageListContainer  /></Box> 
          <Box section="footer" ><FooterContainer  /></Box> 
    </Box>
  )
}
