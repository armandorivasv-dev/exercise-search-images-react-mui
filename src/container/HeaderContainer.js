import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import header from '../assets/photographer-Jessica-Lewis-Creative.jpg';
import Paper from '@mui/material/Paper';
import { SearchForm } from '../components/SearchForm';

export const HeaderContainer = () => {
  return (
    <Box>
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        pb: 4,
        pt: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${header})`,
      }}
    >
      <Box mb={5}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
        >
          Buscador de Imagenes
        </Typography>
        <Typography variant="h6" align="center" color='black' paragraph>
          Excelentes imágenes gracias al API Pexeles.com
        </Typography>
        <Typography variant="h7" align="center" paragraph>
          Son totalmente gratis, sin derechos de autor, para usar debes mencionar su origen (pexeles.com) y el fotografo.
        </Typography>
        <Typography variant="h7" align="center" paragraph>
          Busca el termino que desees, para guardar presiona click derecho sobre la imagen, guardar como y puedes descargar en el tamaño original.
        </Typography>
      </Box>
      <SearchForm />
    </Paper>
    </Box>
  )
}
