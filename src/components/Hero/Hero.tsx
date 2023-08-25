import React from 'react'
import {
  CardMedia,
  Typography,
  Button, 
  Box,
} from '@mui/material'
import { 
  grey
} from '@mui/material/colors'
import theme from '@/styles/theme/lightThemeOptions'

const Hero = () => {
  return (
    <div className=' items-end   h-[90vh] ' style={{backgroundImage: 'url("https://images.pexels.com/photos/3746281/pexels-photo-3746281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}>
        {/* <CardMedia 
        component='img'
        image='https://images.pexels.com/photos/3746281/pexels-photo-3746281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        className='object-cover  -z-50 relative'
        sx={{}}
        /> */}
      <div className=' text-center py-6' >
          <Typography variant='h1' component='div' sx={{color: theme.palette.primary.main, paddingInline: theme.spacing(3), marginBlockEnd: theme.spacing(3)}} className='w-screen'>
            Smile Again With Credit Zen
          </Typography>     
          <Typography variant='h5' component='div' sx={{color: theme.palette.secondary.main, paddingInline: theme.spacing(3), marginBlockEnd: theme.spacing(3)}} className='w-screen'>
            Unlocking Financial Peace. Credit Zen Streamlines Repair, Boosts Scores, and Elevate Lives
          </Typography>   
          <Box sx={{paddingInline: theme.spacing(3), marginBlockEnd: theme.spacing(4)}}>
            <Button variant='contained' >
              Sign up online
            </Button>
          </Box>
          <Box sx={{paddingInline: theme.spacing(3)}} className=''>
            <Typography variant='body1' sx={{}}>
              Get some peace with Credit Zen, and get those negative marks removed.
            </Typography>
          </Box>
      </div>
    </div>
  )
}

export default Hero