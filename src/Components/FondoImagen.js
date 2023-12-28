import React from 'react';
import { Box, Typography} from '@mui/material';
import fondo from '../images/fondo_celeste.jpg';
import { useTranslation } from "react-i18next";

export const FondoImagen = () => {
  const [t, i18n] = useTranslation("global");
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
        {t("banner.subtitle")} 
      </Typography>
    </div>

    </Box>
  );
};
