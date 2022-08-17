import { Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const HeaderContainer = () => {
  return (
    <Container  sx={{ mt: 5 }}>
      <Box>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          gutterBottom
        >
          Buscador de Imagenes
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Excelentes imágenes gracias al API Pexeles.com
        </Typography>
        <Typography variant="h7" align="center" color="text.secondary" paragraph>
          Son totalmente gratis, sin derechos de autor, para usar debes mencionar su origen (pexeles.com) y el fotografo.
        </Typography>
        <Typography variant="h7" align="center" color="text.secondary" paragraph>
          Busca el termino que desees, para guardar presiona click derecho sobre la imagen, guardar como y puedes descargar en el tamaño original.
        </Typography>
      </Box>
    </Container>
  )
}
