import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ImageContext } from '../context/ImageContext';

export const SearchForm = () => {

  const { handleChange, noOfImages, handleSubmit } = useContext(ImageContext);

  return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch', color: 'white' },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
        align="center"
      >
        <TextField onChange={handleChange}   label="Busca imágenes..." id="outlined-basic"  variant="outlined" color='white' focused/>
        <TextField onChange={noOfImages} label="Cantidad..." id="outlined-basic"  variant="outlined" color='white'focused/>
        <Button type="submit" variant="outlined" color='white' sx={{p:1.5}}>BUSCAR</Button>
      </Box>
  )
}
