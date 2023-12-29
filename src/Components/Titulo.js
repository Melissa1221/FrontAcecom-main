import { Typography , Box} from '@mui/material'
import React from 'react'

export const Titulo = ({titulo} ) => {
  return (

    <Box>
        <Typography variant='h3' sx={{ 
            textAlign: 'center', 
            color:'white',
            background:'linear-gradient(45deg, #0073e6, #00c6a7)',
            marginBottom:'1rem',
            marginTop:'1rem',
            
            padding: '1rem',
            width: '100%',

            
            }}>
            {titulo}
        </Typography>
    </Box>
  )
}
