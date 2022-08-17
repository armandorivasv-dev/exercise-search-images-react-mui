import React from 'react';
import Box from '@mui/material/Box';
import { NavBar } from '../components/NavBar';
import { SearchFormContainer } from './SearchFormContainer';
import { ImageListContainer } from './ImageListContainer';
import { HeaderContainer } from './HeaderContainer';
import { FooterContainer } from './FooterContainer';

export const LayoutContainer = () => {
  return (
  <Box component="main">
        <Box component="navbar" ><NavBar /></Box>
        <Box component="header" ><HeaderContainer /></Box> 
        <Box component="search-form" ><SearchFormContainer /></Box>
        <Box component="image-list" ><ImageListContainer  /></Box> 
        <Box component="footer" ><FooterContainer  /></Box> 
  </Box>
  )
}
