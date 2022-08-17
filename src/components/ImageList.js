import React from 'react';
import { Image } from './Image';
import Grid from '@mui/material/Grid';

export const ImageList = ( { result, search } ) => {

  return (
    <Grid container spacing={2}> 
      {result.map((e)=>(
        <Image key={e.id} {...e}/>
      ))}
      </Grid> 
  )
}
