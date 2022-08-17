import React, { useContext } from 'react';
import { ImageList } from '../components/ImageList';
import { Container } from '@mui/system';
import { ImageContext } from '../context/ImageContext';

export const ImageListContainer = () => {

  const { result, search } = useContext(ImageContext);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <ImageList result={result} search={search} />
    </Container>

  )
}
