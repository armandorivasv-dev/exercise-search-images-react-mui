import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Image = ({ id, alt, photographer, src, width, height }) => {

  return (
    <Grid item key={id} xs={12} sm={6} lg={3}>
      <Card sx={{ maxWidth: 350 }}>       
          <CardMedia
            component="img"
            height="300"
            image={src.original}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              Titulo: {alt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fotografo: {photographer}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dimensiones: {width} x {height}
            </Typography>
          </CardContent>
        </Card>
    </Grid>
  )
}
