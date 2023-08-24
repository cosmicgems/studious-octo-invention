import React from 'react'
import {
  Typography,
  Box
} from '@mui/material'
import lightThemOptions from '@/styles/theme/lightThemeOptions'

const ConsultationBanner = () => {
  return (
    <Box className='w-screen' sx={{bgcolor:lightThemOptions.palette.secondary.main}}>
      <div className=' w-screen text-center justify-center align-center'>
        <Typography variant='body2' component='div' sx={{textAlign:'center', padding: lightThemOptions.spacing(2)}}  className='w-screen' >
          Get some peace, and get your free credit report consultation today! <span className='' style={{fontWeight: 'bold'}}>START NOW</span>
        </Typography>
      </div>
    </Box>
  ) 
}

export default ConsultationBanner