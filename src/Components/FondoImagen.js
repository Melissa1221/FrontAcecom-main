import React from 'react';
import { Box, Typography} from '@mui/material';
import fondo from '../images/fondo_celeste.jpg';


export const FondoImagen = () => {
  
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(${fondo})`,
    }}>

    <div className='bg'>
      <Typography  className='water-quality' variant='h1' sx={{ textAlign: 'center', color: 'white' }}>
        Water Quality
      </Typography>
      
      <Typography className='texto' variant='subtitle1' sx={{ textAlign: 'center',  color: 'white' }}>
        Se muestran datos de calidad de agua, presentando diversos indicadores como el nivel de pH, temperatura, turbidez, y residuos sólidos. 
      </Typography>
    </div>

    </Box>
  );
};
