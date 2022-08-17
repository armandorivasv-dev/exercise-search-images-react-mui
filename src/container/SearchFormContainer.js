import React from 'react';
import { Container } from '@mui/material';
import { SearchForm } from '../components/SearchForm';

export const SearchFormContainer = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <SearchForm/>  
    </Container>
  )
}
