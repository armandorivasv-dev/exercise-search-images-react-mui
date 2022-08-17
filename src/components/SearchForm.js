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
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
        align="center"
      >
        <TextField onChange={handleChange} id="standard-basic" label="Busca imágenes..." variant="standard" />
        <TextField onChange={noOfImages} id="standard-basic" label="Cantidad..." variant="standard" />
        <Button type="submit" variant="outlined">BUSCAR</Button>
      </Box>


  )
}
