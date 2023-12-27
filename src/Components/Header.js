import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import '../index.css'


export const Header =() => {
  
    
    return (
        <AppBar className='Appbar' sx={{
          padding: '.7rem 6rem',
          background:'linear-gradient(45deg, #0073e6, #00c6a7)',
          position:'fixed',
          boxShadow:'0 .5rem 1rem rgba(0,0,0,1)',
          display: 'inlline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color:'white',
        
            }}>
          <Typography variant="h5" sx={{ color: 'inherit' }}>
              Proyecto Acecom
            </Typography>
          <Toolbar sx={{
            display: 'flex',
            fontSize: '1.3rem',
            
            margin: '1rem',
          }}>
              <Link href="#GraficaPH" underline="none" color='inherit' sx={{marginLeft:'1.5rem'}}>ph</Link>
              <Link href="#GraficaTemp" underline="none" color='inherit' sx={{marginLeft:'1.5rem'}}>Temperatura</Link>
              <Link href="#GraficaTurb" underline="none" color='inherit' sx={{marginLeft:'1.5rem'}}>Turbidez</Link>
              <Link href="#GraficaSolidos" underline="none" color='inherit'sx={{marginLeft:'1.5rem'}}>Residuos</Link>
              
            
          </Toolbar>
        </AppBar>
      );
}
